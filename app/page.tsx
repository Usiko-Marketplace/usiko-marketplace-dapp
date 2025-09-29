import { RenderExplore } from "@/components/main/explore/renderExplore";
import { LearningSlider } from "@/components/main/learningSlider";
import RenderMarkets from "@/components/main/markets/renderMarkets";
import Button from "@/components/ui/button";
import { SearchParams } from "@/types/globals";
import { artsData, learningHubData } from "@/utils/constant";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const p = await searchParams;
  return (
    <main className="overflow-x-hidden bg-black pt-[var(--main-header-height)]">
      <section className="flex min-h-screen flex-col items-center justify-center gap-10 bg-[url('/images/heroBg.png')] bg-cover bg-center bg-no-repeat">
        <article
          data-aos="fade-down"
          data-aos-duration="1500"
          className="mx-auto flex w-11/12 max-w-3xl flex-col items-center justify-center gap-2 text-center"
        >
          <h1>Preserve African Heritage Empower Creators</h1>
          <h5 className="mx-auto w-full max-w-xl text-xl text-white/70">
            Discover, collect, and support authentic African art and cultural
            artifacts as NFTs.
          </h5>
        </article>
        <article
          data-aos="fade-up"
          data-aos-duration="1500"
          className="mx-auto flex w-11/12 max-w-xs items-center justify-center gap-2 text-center"
        >
          <Button link href="/collections" className="alt-btn grow">
            Explore
          </Button>
          <Button className="pry-btn grow">Mint NFT</Button>
        </article>
      </section>

      <section className="container !space-y-10 py-20">
        <hgroup
          data-aos="fade-down"
          data-aos-duration="1500"
          className="!space-y-3 text-center"
        >
          <h3>Explore our Exclusive Collections</h3>
          <h5>Top curated collections of Africa’s culture</h5>
        </hgroup>
        <RenderExplore collections={artsData} />
      </section>

      <section className="container py-20">
        <hgroup
          data-aos="fade-down"
          data-aos-duration="1500"
          className="mb-10 !space-y-3 text-center"
        >
          <h3>Marketplace</h3>
          <h5>
            Create Buy and sell NFTs while supporting authentic African
            heritage.
          </h5>
        </hgroup>

        <RenderMarkets data={artsData} params={p} path="/" />
      </section>
      <section className="container !space-y-10 py-20">
        <hgroup
          data-aos="fade-down"
          data-aos-duration="1500"
          className="!space-y-3 text-center"
        >
          <h3>Learning Hub</h3>
          <h5>Learn about NFTs, Web3 and more</h5>
        </hgroup>

        <LearningSlider data={learningHubData} />
      </section>
    </main>
  );
}
