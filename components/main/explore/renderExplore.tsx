import { UserAvatar } from "@/components/ui/UserAvatar";
import { allImages } from "@/public/images/images";
import { ArtCollection } from "@/types/martkes";
import { formatNumbers } from "@/utils/helper";
import Image from "next/image";
import React from "react";
import Field from "@/components/ui/field";
import { DailyChange, Star } from "../markets/table/tableComps";
import Link from "next/link";

export const RenderExplore = ({
  collections,
}: {
  collections: ArtCollection[];
}) => {
  return (
    <ul className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      {collections?.map((item) => <ExploreCard key={item?.id} data={item} />)}
    </ul>
  );
};

export const ExploreCard = ({
  data: {
    artwork,
    artworkName,
    id,
    floor,
    oneDayvolumeChange,
    authorAvarta,
    owners,
  },
}: {
  data: ArtCollection;
}) => {
  return (
    <Link
      href={`/markets/${id}?artName=${artworkName}`}
      data-aos="zoom-in"
      className="relative h-[500px] overflow-hidden rounded-2xl p-3"
    >
      <figure className="absolute inset-0 top-0 z-0 h-[500px]">
        <Image
          src={artwork ?? allImages.noImage}
          alt={artworkName}
          className="!size-full object-cover"
        />
      </figure>

      <article className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center justify-between rounded-[48px] bg-gray-400/80 px-2 py-2 md:px-5">
          <UserAvatar
            url={authorAvarta ?? ""}
            displayName={artworkName}
            subtext={`${formatNumbers(owners)} owners`}
            showTitle
          />

          <Star id={id} />
        </div>
        <div className="flex items-center justify-between rounded-[48px] bg-gray-400/80 px-5 py-2">
          <Field
            title="Floor Price"
            value={`${floor} HBAR`}
            className="flex-col items-start !gap-1"
            valuClassName="!text-base font-semibold"
          />
          <Field
            title="1D volume change"
            value={
              <DailyChange
                volume={oneDayvolumeChange}
                className="!text-base font-semibold"
              />
            }
            className="flex-col items-start !gap-1"
          />
        </div>
      </article>
    </Link>
  );
};
