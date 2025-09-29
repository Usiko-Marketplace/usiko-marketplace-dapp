"use client";
import Button from "@/components/ui/button";
import PageTabs from "@/components/ui/PageTabs";
import Search from "@/components/ui/search";
import { StarsIcon } from "@/public/svgs";
import { SearchParams } from "@/types/globals";
import React from "react";

const tabDatas = [
  {
    id: "all",
    title: "🔥 All",
    icon: null,
  },

  {
    id: "images",
    title: "Images",
    icon: <StarsIcon />,
  },
  {
    id: "video",
    title: "Video",
    icon: <StarsIcon />,
  },
  {
    id: "audio",
    title: "Audio",
    icon: <StarsIcon />,
  },
];

export default function CollectionsFilter({
  params,
}: {
  params: SearchParams;
}) {
  return (
    <section className="flex w-full justify-between gap-5 overflow-x-auto whitespace-nowrap">
      <PageTabs
        tabDatas={tabDatas}
        path="/collections"
        activeClass="activeTab"
        notActiveClass="notActiveTab"
        searchParams={params}
        defaultTab="all"
      />

      <Search placeholder="Search artist, collection.." />
      <Button link href="/collections/create" className="pry-btn">
        Create new
      </Button>
    </section>
  );
}
