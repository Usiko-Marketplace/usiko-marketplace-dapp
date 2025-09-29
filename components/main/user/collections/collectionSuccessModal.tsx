import Button from "@/components/ui/button";
import ModalWrapper from "@/components/ui/modals/ModalWrapper";
import { useModalContext } from "@/context/modalContext";
import { allImages } from "@/public/images/images";
import Image from "next/image";
import React from "react";

export const CollectionSuccessModal = () => {
  const { isOpen } = useModalContext();
  return (
    <>
      {isOpen["create-success"] && (
        <ModalWrapper id="create-success" wrapperClass="bg-black !rounded-3xl">
          <article className="!-mt-7 !space-y-5">
            <figure className="relative h-42 overflow-hidden rounded-2xl">
              <Image
                src={allImages.noImage}
                alt=""
                className="!size-full object-cover"
              />
            </figure>

            <hgroup className="!space-y-3 text-center">
              <h4 className="!font-semibold">Collection created</h4>
              <h5 className="text-gray-10">
                Your Collection has been created successfully. Next start
                minting to your collection
              </h5>
            </hgroup>

            <div className="flex flex-col gap-3">
              <Button type="button" className="outline-btn w-full !text-white">
                Start Minting
              </Button>
              <Button type="submit" className="pry-btn w-full">
                View on Hashscan
              </Button>
            </div>
          </article>
        </ModalWrapper>
      )}
    </>
  );
};
