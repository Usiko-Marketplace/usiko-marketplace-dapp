"use client";
import PageTabs from "@/components/ui/PageTabs";
import Search from "@/components/ui/search";
import { StarsIcon, TopIcon } from "@/public/svgs";
import { SearchParams } from "@/types/globals";
import Link from "next/link";
import React from "react";

const tabDatas = [
  {
    id: "all",
    title: "🔥 All",
    icon: null,
  },
  {
    id: "popular",
    title: "🔥 Popular",
    icon: null,
  },
  {
    id: "top",
    title: "Top",
    icon: <TopIcon />,
  },
  {
    id: "watchlist",
    title: "Watchlist",
    icon: <StarsIcon />,
  },
];

export default function MarketFilter({
  params,
  path,
}: {
  path?: string;
  params: SearchParams;
}) {
  return (
    <section className="flex w-full justify-between gap-5 overflow-x-auto whitespace-nowrap">
      <PageTabs
        tabDatas={tabDatas}
        path={path || "/"}
        activeClass="activeTab"
        notActiveClass="notActiveTab"
        searchParams={params}
        defaultTab={path === "/" ? "popular" : "all"}
      />

      {path === "/" ? (
        <Link
          href="/markets"
          className="text-gray flex !w-20 items-center justify-center rounded-full bg-gray-200 px-4 py-2"
        >
          View all
        </Link>
      ) : (
        <Search
          placeholder="Search artist, collection.."
          className="max-w-sm"
        />
      )}
    </section>
  );
}
