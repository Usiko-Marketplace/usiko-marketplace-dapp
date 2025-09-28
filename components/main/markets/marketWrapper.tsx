import React, { ReactNode } from "react";

export default function MarketWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      {/* <MarketFilter /> */}
      {children}
    </>
  );
}
