"use client";
import { SparkLineChart } from "@/components/chart/sparklineChart";
import Button from "@/components/ui/button";
import Field from "@/components/ui/field";
import ModalWrapper from "@/components/ui/modals/ModalWrapper";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { useMarketContext } from "@/context/marketContext";
import { useModalContext } from "@/context/modalContext";
import {
  AudioWaveIcon,
  InfoIcon,
  PauseIcon,
  PlayIcon,
  ShareIcon,
  SpeakerIcon,
  SpeakerOffIcon,
  StarsIcon,
  WebIcon,
  XIcon,
} from "@/public/svgs";
import { ArtCollection, AudioSource, NFT } from "@/types/martkes";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useAccount } from "wagmi";

export const MarketPrice = ({
  price,
  className,
}: {
  className?: string;
  price: number;
}) => {
  return (
    <span className={`flex items-center gap-1 ${className}`}>
      {price}
      HBAR
    </span>
  );
};

export const DailyChange = ({
  volume,
  className,
}: {
  className?: string;
  volume: string;
}) => {
  return (
    <span
      className={`${volume?.includes("+") ? "text-success" : "text-error"} ${className}`}
    >
      {volume}
    </span>
  );
};

export const Star = ({ id, size }: { id: string; size?: number }) => {
  const { isFavorite, toggleFavorite } = useMarketContext();

  return isFavorite(id) ? (
    <button onClick={() => toggleFavorite(id)}>
      <FaStar className="text-warning-300" size={size ?? 20} />
    </button>
  ) : (
    <button onClick={() => toggleFavorite(id)}>
      <StarsIcon className="text-gray" />
    </button>
  );
};

export const SocialShare = () => {
  return (
    <ul className="flex items-center gap-3">
      <li>
        <WebIcon />
      </li>
      <li>
        <XIcon />
      </li>
      <li>
        <ShareIcon />
      </li>
    </ul>
  );
};

export const AboutArts = ({ data }: { data: ArtCollection }) => {
  const { isOpen, openModal } = useModalContext();
  return (
    <li>
      <button
        className="flex items-center gap-1 pr-4"
        onClick={() => openModal("about-art")}
      >
        <InfoIcon /> <span> About</span>
      </button>
      {isOpen["about-art"] && (
        <ModalWrapper id="about-art" wrapperClass="bg-black !rounded-3xl">
          <article className="!-mt-10 space-y-5">
            <UserAvatar
              url={data?.authorAvarta as StaticImageData}
              displayName={data?.artworkName}
              subtext={
                <ul className="flex items-center gap-3">
                  <li>
                    <WebIcon />
                  </li>
                  <li>
                    <XIcon />
                  </li>
                </ul>
              }
              showTitle
            />

            <p className="leading-normal whitespace-break-spaces">
              {data?.about}
            </p>

            {/* <div className="mt-3 flex items-center justify-between gap-4">
              <PlayIcon />
              <AudioWaveIcon />
              <SpeakerIcon />
            </div> */}
            <AboutAudio audio={data?.aboutAudio} startPlaying />
          </article>
        </ModalWrapper>
      )}
    </li>
  );
};

const tabDatas = [
  { id: "details", title: "Details" },
  { id: "history", title: "Price History" },
  { id: "about", title: "About" },
];

export const RenderNFTDetails = ({ data }: { data: NFT }) => {
  const [activeTab, setActiveTab] = useState("details");

  let activeContents;

  switch (activeTab) {
    case "history":
      activeContents = (
        <SparkLineChart series={[{ data: data?.priceHistory }]} height={300} />
      );
      break;
    case "about":
      activeContents = (
        <div className="!mt-5">
          <p className="leading-normal whitespace-break-spaces">
            {data?.about}
          </p>
          <AboutAudio audio={data?.aboutAudio} startPlaying />
        </div>
      );
      break;
    default:
      activeContents = (
        <ul className="!mt-7 !space-y-4 !rounded-2xl bg-[#2E2E32] !p-5">
          <li>
            <Field
              title="Contract address"
              value={data?.details?.contractAddress}
              valuClassName="text-end !text-primary"
              className="w-full justify-between"
            />
          </li>
          <li>
            <Field
              title="Token ID"
              value={data?.details?.tokenID}
              valuClassName="text-end "
              className="w-full justify-between"
            />
          </li>
          <li>
            <Field
              title="Token Standard"
              value={data?.details?.tokenStandard}
              valuClassName="text-end "
              className="w-full justify-between"
            />
          </li>
          <li>
            <Field
              title="Chain"
              value={data?.details?.chain}
              valuClassName="text-end "
              className="w-full justify-between"
            />
          </li>
        </ul>
      );
      break;
  }

  return (
    <article className="mt-8">
      <ul>
        {tabDatas?.map(({ id, title }) => (
          <button
            key={id}
            className={`${activeTab === id ? "activeTab" : "notActiveTab"} hover:!bg-primary gap-2 px-6 py-2 transition-all duration-300`}
            onClick={() => setActiveTab(id)}
          >
            {title}
          </button>
        ))}
      </ul>

      {activeContents}
    </article>
  );
};

export const AboutAudio = ({
  audio,
  startPlaying = false,
}: {
  startPlaying: boolean;
  audio: AudioSource;
}) => {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(startPlaying);
  const [isMuted, setIsMuted] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);

  const src = React.useMemo(() => {
    if (!audio) {
      return "/audio/Daxome%20Codex-The%20Heritage%20of%20Dahomey.wav";
    }
    if (typeof audio === "string") return audio;
    if (audio?.src) return audio.src;
    return "/audio/Daxome%20Codex-The%20Heritage%20of%20Dahomey.wav";
  }, [audio]);

  const togglePlay = React.useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      el.play();
    } else {
      el.pause();
    }
  }, []);

  const toggleMute = React.useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setIsMuted(el.muted);
  }, []);

  React.useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onTime = () => setCurrentTime(el.currentTime || 0);
    const onLoaded = () => setDuration(el.duration || 0);
    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("loadedmetadata", onLoaded);
    el.addEventListener("ended", onEnded);

    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("loadedmetadata", onLoaded);
      el.removeEventListener("ended", onEnded);
    };
  }, []);

  // Auto-play on mount or when src changes, if requested
  React.useEffect(() => {
    const el = audioRef.current;
    if (!el || !startPlaying) return;

    const attemptPlay = () => {
      el.play().catch(() => {
        // Autoplay might be blocked; try muted autoplay
        el.muted = true;
        setIsMuted(true);
        el.play().catch(() => {});
      });
    };

    if (el.readyState >= 2) {
      attemptPlay();
    } else {
      const onReady = () => attemptPlay();
      el.addEventListener("loadedmetadata", onReady, { once: true } as any);
      el.addEventListener("canplay", onReady, { once: true } as any);
      return () => {
        el.removeEventListener("loadedmetadata", onReady as any);
        el.removeEventListener("canplay", onReady as any);
      };
    }
  }, [startPlaying, src]);

  const progressPct = React.useMemo(() => {
    if (!duration || !currentTime) return 0;
    const pct = (currentTime / duration) * 100;
    return Math.max(0, Math.min(100, pct));
  }, [currentTime, duration]);

  return (
    <div className="mt-10 flex items-center justify-between gap-4">
      <button
        onClick={togglePlay}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>

      <div className="relative h-[50px] flex-1">
        {/* Background wave */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <AudioWaveIcon aria-hidden />
        </div>

        {/* Progress wave — full width, masked by progress */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            WebkitMaskImage: `linear-gradient(to right, #000 ${progressPct}%, rgba(0,0,0,0) ${progressPct}%)`,
            maskImage: `linear-gradient(to right, #000 ${progressPct}%, rgba(0,0,0,0) ${progressPct}%)`,
            transition:
              "mask-image 150ms linear, -webkit-mask-image 150ms linear",
          }}
        >
          <AudioWaveIcon aria-hidden />
        </div>
      </div>

      <button
        onClick={toggleMute}
        aria-pressed={isMuted}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <SpeakerOffIcon /> : <SpeakerIcon />}
      </button>

      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  );
};

export const MintNFTAction = () => {
  const { isConnected } = useAccount();

  return (
    <>{isConnected && <Button className="pry-btn grow">Mint NFT</Button>}</>
  );
};
