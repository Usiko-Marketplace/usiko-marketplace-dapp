import { SearchParams } from "@/types/globals";

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ artName: string; nftId: string }>;
  searchParams: Promise<SearchParams>;
}) {
  const { artName, nftId } = await params;
  const { artId } = await searchParams;
  console.log("here>>", params);
  console.log("here-se>>", searchParams);

  return (
    <main className="overflow-x-hidden bg-black pt-[var(--main-header-height)]">
      <section className="pt-20">
        artworkName: {nftId}
        artworkId: {artName}
      </section>
    </main>
  );
}
