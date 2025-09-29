import { RenderExplore } from "@/components/main/explore/renderExplore";
import CollectionsFilter from "@/components/main/user/collections/filter/collectionsFilter";
import { SearchParams } from "@/types/globals";
import { artsData } from "@/utils/constant";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const p = await searchParams;
  return (
    <main className="overflow-x-hidden bg-black pt-[var(--main-header-height)]">
      <section className="container !space-y-10 pt-10">
        <hgroup
          data-aos="fade-down"
          data-aos-duration="1500"
          className="!space-y-3 text-center"
        >
          <h3>My Collections</h3>
        </hgroup>

        <CollectionsFilter params={p} />
        <RenderExplore collections={artsData} />
      </section>
    </main>
  );
}
