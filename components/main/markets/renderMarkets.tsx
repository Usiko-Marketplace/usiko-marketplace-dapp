import React from "react";
import MarketWrapper from "./marketWrapper";
import { TableWrapper } from "./table/tableWrapper";
import { ArtCollection } from "@/types/martkes";

export default function RenderMarkets({
  data,
  // home,
}: {
  home?: boolean;
  data: ArtCollection[];
}) {
  return (
    <MarketWrapper>
      <TableWrapper data={data} />
    </MarketWrapper>
  );
}
