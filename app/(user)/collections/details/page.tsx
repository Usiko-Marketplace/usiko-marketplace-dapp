import {
  CollectionImage,
  RenderCollectionsDetails,
} from "@/components/main/user/collections/collectionComps";

export default async function page() {
  return (
    <main className="overflow-x-hidden bg-black pt-[var(--main-header-height)]">
      <section className="container flex min-h-screen flex-wrap gap-4 pt-20">
        <CollectionImage />
        <aside
          data-aos="fade-right"
          className="flex-1 border-l border-[#323238] !px-5"
        >
          <RenderCollectionsDetails />
        </aside>
      </section>
    </main>
  );
}
