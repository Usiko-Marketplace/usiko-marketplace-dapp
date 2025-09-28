import RenderMarkets from "@/components/main/markets/renderMarkets";
import { artsData } from "@/utils/constant";

export default async function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black py-20">
      <section className="container !space-y-10 pt-10">
        <hgroup
          data-aos="fade-down"
          data-aos-duration="1500"
          className="!space-y-3 text-center"
        >
          <h1>Marketplace</h1>
          <h4>
            Create Buy and sell NFTs while supporting authentic African
            heritage.
          </h4>
        </hgroup>

        <RenderMarkets data={artsData} />
      </section>
    </main>
  );
}
