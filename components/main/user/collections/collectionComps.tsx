"use client";

import { useState } from "react";
import CreateCollectionForm from "./createCollectionForm";
import Image from "next/image";
import { useCollectionsContext } from "@/context/collectionContext";
import { allImages } from "@/public/images/images";
import Button from "@/components/ui/button";
import MintNFTForm from "./mintNFTForm";
import Field from "@/components/ui/field";

const tabDatas = [
  { id: "details", title: "Collection details" },
  { id: "create-nft", title: "Media & Metadata" },
];

export const RenderCollectionsDetails = () => {
  const [activeTab, setActiveTab] = useState("details");

  let activeContents;

  switch (activeTab) {
    case "create-nft":
      activeContents = <CreatNFT />;
      break;

    default:
      activeContents = <CreateCollectionForm details />;
      break;
  }

  return (
    <article className="mt-8 !space-y-5">
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

export const CreatNFT = () => {
  const { NFData, mint, setMint } = useCollectionsContext();
  return (
    <section>
      {!mint ? (
        <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li
            className={`${NFData?.length > 0 ? "col-span-1" : "col-span-3"} flex min-h-[300px] flex-col items-center justify-center gap-3 rounded-2xl bg-gray-600 p-3`}
          >
            <h4>Add more NFTs</h4>
            <Button className="pry-btn" onClick={() => setMint(true)}>
              Mint NFT
            </Button>
          </li>

          {NFData?.map(({ nftImage, name }, idx) => (
            <li
              key={idx}
              className="overflow-hidden rounded-2xl"
              data-aos="zoom-in"
            >
              <figure className="relative h-[200px] overflow-hidden">
                <Image
                  src={nftImage || allImages.noImage}
                  alt={name}
                  fill
                  sizes="100%"
                  className="object-cover object-top"
                />
              </figure>
              <article className="space-y-5 bg-gray-600 p-5 !text-white">
                <div className="flex items-center justify-between gap-3">
                  <h5 className="text-lg font-bold"> {name} </h5>
                  <small className="text-[#828296]">#102{4 + (idx + 1)}</small>
                </div>

                <ul className="flex justify-between">
                  <li>
                    <Field
                      title="Price"
                      value="24.12 HBAR"
                      className="flex-col items-start !gap-1"
                      valuClassName="!text-base font-semibold"
                    />{" "}
                  </li>
                  <li>
                    <Field
                      title="Last Sale"
                      value={`-HBAR`}
                      className="flex-col items-start !gap-1"
                      valuClassName="!text-base font-semibold"
                    />
                  </li>
                </ul>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <MintNFTForm />
      )}
    </section>
  );
};

export const CollectionImage = () => {
  const { collectionFormData } = useCollectionsContext();
  return (
    <section className="w-full lg:w-4/12">
      <figure
        data-aos="zoom-in"
        className="h-[400px] overflow-hidden !rounded-2xl"
      >
        <Image
          src={collectionFormData?.collectionImage || allImages.noImage}
          alt={collectionFormData?.name}
          className="!size-full object-cover"
          width={100}
          height={100}
        />
      </figure>

      <div className="mt-4 flex flex-wrap justify-between gap-3">
        <h4>{collectionFormData?.name}</h4>
        <p className="rounded-full border !border-[#2AD100] !px-4 !py-2 !text-white">
          Deployed
        </p>
      </div>
    </section>
  );
};
