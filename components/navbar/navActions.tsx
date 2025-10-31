import React from "react";
import Button from "../ui/button";
import Image from "next/image";
import { allImages } from "@/public/images/images";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { shortenAddress } from "@/utils/helper";
import useExchangeRate from "@/hooks/useExchangeRate";

export const ConnectWallet = () => {
  const { isConnected, address } = useAccount();
  const { openConnectModal } = useConnectModal();
  return (
    <div className="flex items-center gap-4">
      {isConnected && address ? (
        <article className="card flex items-center gap-2 p-3">
          <div className="flex items-center gap-2">
            <figure className="size-4">
              <Image src={allImages.metaMask} alt="" />
            </figure>
            <span>{shortenAddress(address)}</span>
          </div>
        </article>
      ) : (
        <Button onClick={openConnectModal} className="pry-btn" type="button">
          Connect wallet
        </Button>
      )}
    </div>
  );
};

export const Rate = () => {
  const rate = useExchangeRate();
  return (
    <div className="card !rounded-full px-3 py-1">
      <small>$1 - ₦{rate.toLocaleString()}</small>
    </div>
  );
};
