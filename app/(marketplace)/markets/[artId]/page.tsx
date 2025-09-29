import RenderNFTS from "@/components/main/markets/nfts/renderNFTS";
import {
  AboutArts,
  DailyChange,
  SocialShare,
  Star,
} from "@/components/main/markets/table/tableComps";
import Field from "@/components/ui/field";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { DateIcon, StackIcon } from "@/public/svgs";
import { ArtCollection } from "@/types/martkes";
import { artsData } from "@/utils/constant";
import { formatNumbers } from "@/utils/helper";
import Image, { StaticImageData } from "next/image";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ artName: string }>;
}) {
  const { artName } = await searchParams;

  return {
    title: artName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" "),
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ artId: string }>;
}) {
  const { artId } = await params;
  const matched = artsData?.find((item) => item?.id === artId) as ArtCollection;

  return (
    <main className="overflow-x-hidden bg-black pt-[var(--main-header-height)]">
      <section className="art artHero relative flex min-h-[500px] flex-col justify-end">
        <figure className="absolute inset-0 left-0 z-0 h-[500px]">
          <Image
            src={matched?.artwork}
            alt={matched?.artworkName}
            className="!size-full object-cover"
          />
        </figure>
        <section className="relative z-10 container flex flex-wrap justify-between gap-4">
          <article className="flex w-full items-start justify-between lg:w-5/12">
            <div className="flex flex-col !gap-4">
              <UserAvatar
                url={matched?.authorAvarta as StaticImageData}
                displayName={matched?.artworkName}
                subtext={
                  <small className="text-gray-30">{matched?.authorName}</small>
                }
                showTitle
              />
              <ul className="text-gray-30 flex flex-wrap items-center gap-2 divide-x divide-gray-100">
                <AboutArts data={matched} />
                <li className="flex items-center gap-1 pr-4">
                  <Star id={matched?.id} /> <span> Add to watchlist</span>
                </li>
                <li className="flex items-center gap-1 pr-4">
                  <StackIcon /> <span> 3 items</span>{" "}
                </li>
                <li className="flex items-center gap-1 pr-4">
                  <DateIcon /> <span>Apr 2025</span>
                </li>
              </ul>
            </div>
            <SocialShare />
          </article>
          <ul className="grid w-full grid-cols-2 justify-end md:grid-cols-5 lg:w-5/12">
            <li>
              <Field
                title="Floor Price"
                value={`${matched?.floor} HBAR`}
                className="flex-col items-start !gap-1"
                valuClassName="!text-base font-semibold"
              />
            </li>
            <li>
              <Field
                title="1D volume change"
                value={
                  <DailyChange
                    volume={matched?.oneDayvolumeChange}
                    className="!text-base font-semibold"
                  />
                }
                className="flex-col items-start !gap-1"
              />
            </li>
            <li>
              <Field
                title="Top offer"
                value={`${matched?.topOffer} HBAR`}
                className="flex-col items-start !gap-1"
                valuClassName="!text-base font-semibold"
              />
            </li>
            <li>
              <Field
                title="Total volume"
                value={`${matched?.totalVolume} HBAR`}
                className="flex-col items-start !gap-1"
                valuClassName="!text-base font-semibold"
              />
            </li>
            <li>
              <Field
                title="Owners"
                value={`${formatNumbers(matched?.owners)}  `}
                className="flex-col items-start !gap-1"
                valuClassName="!text-base font-semibold"
              />
            </li>
          </ul>
        </section>
      </section>

      <RenderNFTS artId={artId} />
    </main>
  );
}
