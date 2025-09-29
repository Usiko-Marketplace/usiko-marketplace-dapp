import React from "react";
import MarketWrapper from "./marketWrapper";
import { TableWrapper } from "./table/tableWrapper";
import { ArtCollection } from "@/types/martkes";
import { SearchParams } from "@/types/globals";

export default function RenderMarkets({
  path,
  data,
  params,
}: {
  path: string;
  data: ArtCollection[];
  params: SearchParams;
}) {
  return (
    <MarketWrapper params={params} path={path}>
      <TableWrapper data={data} />
    </MarketWrapper>
  );
}
