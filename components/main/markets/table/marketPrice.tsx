import React from "react";

export const MarketPrice = ({
  price,
  className,
}: {
  className?: string;
  price: number;
}) => {
  return (
    <span className={`flex items-center gap-1 ${className}`}>
      {price}
      HBAR
    </span>
  );
};
