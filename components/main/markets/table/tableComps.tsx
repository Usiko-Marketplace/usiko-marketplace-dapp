"use client";
import { SparkLineChart } from "@/components/chart/sparklineChart";
import Field from "@/components/ui/field";
import ModalWrapper from "@/components/ui/modals/ModalWrapper";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { useMarketContext } from "@/context/marketContext";
import { useModalContext } from "@/context/modalContext";
import { InfoIcon, ShareIcon, StarsIcon, WebIcon, XIcon } from "@/public/svgs";
import { ArtCollection, NFT } from "@/types/martkes";
import { StaticImageData } from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

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

            <p>{data?.about}</p>
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
          <p>{data?.about}</p>
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
