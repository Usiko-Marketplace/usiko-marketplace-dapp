import { SearchParams } from "@/types/global";

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<SearchParams>;
}) {
  const { id } = await params;
  const pm = await searchParams;

  console.log("first", pm, id);

  return (
    <main className="mt-[var(--main-header-height)] flex flex-col lg:flex-row">
      coming...
    </main>
  );
}
