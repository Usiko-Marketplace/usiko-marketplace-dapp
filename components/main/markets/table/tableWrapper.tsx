"use client";
import TableComponent from "@/components/ui/tableComponent/tableComponent";
import React from "react";
import { ArtCollection } from "@/types/martkes";
import { marketColData } from "@/utils/constant";

export const TableWrapper = ({ data }: { data: ArtCollection[] }) => {
  return (
    <TableComponent
      title="All Markets"
      columns={marketColData}
      data={data}
      containerClassName="bg-gray-600 rounded-2xl"
    />
  );
};
