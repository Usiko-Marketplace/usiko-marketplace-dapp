"use client";
import TableComponent from "@/components/ui/tableComponent/tableComponent";
import React from "react";
import { SupplyTypes } from "@/types/martkes";
import { supplyColData } from "@/utils/constant";

export const TableWrapper = ({ data }: { data: SupplyTypes[] }) => {
  return (
    <TableComponent title="All Markets" columns={supplyColData} data={data} />
  );
};
