import {
  RenderNFTDetails,
  SocialShare,
} from "@/components/main/markets/table/tableComps";
import EmptyState from "@/components/ui/emptyStates";
import Field from "@/components/ui/field";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { allImages } from "@/public/images/images";
import { NFT } from "@/types/martkes";
import { artsData } from "@/utils/constant";
import Image, { StaticImageData } from "next/image";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ nftName: string }>;
}) {
  const { nftName } = await searchParams;

  return {
    title: nftName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" "),
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ artId: string; nftId: string }>;
}) {
  const { artId, nftId } = await params;

  const collection = artsData.find((item) => item.id === artId);
  const nft = collection?.nfts.find((n) => n.id === nftId);

  if (!collection || !nft) {
    return (
      <main className="overflow-x-hidden bg-black pt-[var(--main-header-height)]">
        <EmptyState title="No Data" subTitle="NFTS not available " />
      </main>
    );
  }

  const { name, id, floor, list, sale } = nft as NFT;

  return (
    <main className="overflow-x-hidden bg-black pt-[var(--main-header-height)]">
      <section className="container grid min-h-screen grid-cols-1 gap-4 pt-20 lg:grid-cols-2">
        <figure
          data-aos="zoom-in"
          className="h-[400px] overflow-hidden !rounded-2xl lg:h-[700px]"
        >
          <Image
            src={nft?.artwork || allImages.noImage}
            alt={name}
            className="!size-full object-cover"
          />
        </figure>
        <aside
          data-aos="fade-right"
          className="border- border-l border-[#323238] !px-5"
        >
          <article className="mb-3 flex w-full items-center justify-between">
            <hgroup className="flex items-center gap-3">
              <h3 className="text-2xl lg:text-[32px]">{name}</h3>{" "}
              <h4 className="text-[#AAAAAA]">#{id}</h4>
            </hgroup>

            <SocialShare />
          </article>

          <UserAvatar
            url={collection?.authorAvarta as StaticImageData}
            displayName={collection?.artworkName}
            subtext={
              <small className="text-gray-30">
                {" "}
                by {collection?.authorName}{" "}
              </small>
            }
            showTitle
          />

          <article className="my-8 flex flex-wrap justify-between gap-5 rounded-2xl bg-[#5C5C6B42] p-5">
            <Field
              title="Total Price"
              value={`${nft?.floor} HBAR`}
              className="flex-col items-start !gap-1"
              valuClassName="text-2xl lg:text-[32px] font-semibold"
            />
          </article>

          <ul className="flex justify-between rounded-2xl border border-[#323238] !p-5">
            <li>
              <Field
                title="List Price"
                value={`${list} HBAR`}
                className="flex-col items-start !gap-1"
                valuClassName="!text-base font-semibold"
              />{" "}
            </li>
            <li>
              <Field
                title="Floor Price"
                value={`${floor} HBAR`}
                className="flex-col items-start !gap-1"
                valuClassName="!text-base font-semibold"
              />
            </li>
            <li>
              <Field
                title="Last Sale"
                value={`${sale} HBAR`}
                className="flex-col items-start !gap-1"
                valuClassName="!text-base font-semibold"
              />
            </li>
          </ul>

          <RenderNFTDetails data={nft} />
        </aside>
      </section>
    </main>
  );
}
