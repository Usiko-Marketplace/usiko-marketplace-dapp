import React from "react";
import Button from "../ui/button";
import Image from "next/image";
import { allImages } from "@/public/images/images";

export const ConnectWallet = ({
  connected = true,
}: {
  connected?: boolean;
}) => {
  return (
    <div className="flex items-center gap-2">
      {connected ? (
        <article className="card flex items-center gap-2 p-3">
          <div className="flex items-center gap-2">
            <figure className="size-4">
              <Image src={allImages.metaMask} alt="" />
            </figure>
            <span>0x4.....8476</span>
          </div>
        </article>
      ) : (
        <Button className="pry-btn" type="button">
          Connect wallet
        </Button>
      )}
    </div>
  );
};
