"use client";
import Search from "@/components/ui/search";
import React from "react";

export default function MarketFilter() {
  return (
    <section className="flex w-full justify-between gap-5 overflow-x-auto whitespace-nowrap">
      <Search placeholder="Search tickers, companies" />
    </section>
  );
}
