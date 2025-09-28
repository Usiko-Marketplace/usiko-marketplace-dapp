import React from "react";

export const DailyChange = ({
  volume,
  className,
}: {
  className?: string;
  volume: string;
}) => {
  return (
    <span
      className={`${volume?.includes("+") ? "text-success" : "text-error"} ${className}`}
    >
      {volume}
    </span>
  );
};
