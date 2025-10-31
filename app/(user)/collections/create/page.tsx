import CreateCollectionForm from "@/components/main/user/collections/createCollectionForm";
import React from "react";

export default function page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black pt-[var(--main-header-height)]">
      <section className="mx-auto w-11/12 max-w-2xl !space-y-10 pt-10">
        <hgroup
          data-aos="fade-down"
          data-aos-duration="1500"
          className="!space-y-3 text-center"
        >
          <h3>Create your Collection</h3>
        </hgroup>

        <CreateCollectionForm />
      </section>
    </main>
  );
}
