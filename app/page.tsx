import Button from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="overflow-x-hidden pt-[var(--main-header-height)]">
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
          <Button className="alt-btn grow">Explore</Button>
          <Button className="pry-btn grow">Mint NFT</Button>
        </article>
      </section>
    </main>
  );
}
