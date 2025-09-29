import React, { ReactNode } from "react";
import MarketFilter from "./filter/marketFilter";
import { SearchParams } from "@/types/globals";

export default function MarketWrapper({
  params,
  path,
  children,
}: {
  path: string;
  params: SearchParams;
  children: ReactNode;
}) {
  return (
    <>
      <MarketFilter params={params} path={path} />
      {children}
    </>
  );
}
