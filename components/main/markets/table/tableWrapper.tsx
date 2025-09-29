"use client";
import TableComponent from "@/components/ui/tableComponent/tableComponent";
import React from "react";
import { ArtCollection } from "@/types/martkes";
import { marketColData } from "@/utils/constant";
import { useRouter } from "next/navigation";

export const TableWrapper = ({ data }: { data: ArtCollection[] }) => {
  const { push } = useRouter();
  return (
    <TableComponent
      title="All Markets"
      columns={marketColData}
      data={data}
      containerClassName="bg-gray-600 rounded-2xl mt-4"
      handleRowClick={(row) =>
        push(`/markets/${row?.id}?artName=${row?.artworkName}`)
      }
    />
  );
};
