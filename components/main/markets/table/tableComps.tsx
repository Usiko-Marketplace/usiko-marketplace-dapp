"use client";
import { useMarketContext } from "@/context/marketContext";
import { ShareIcon, StarsIcon, WebIcon, XIcon } from "@/public/svgs";
import React from "react";
import { FaStar } from "react-icons/fa6";

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

export const Star = ({ id, size }: { id: string; size?: number }) => {
  const { isFavorite, toggleFavorite } = useMarketContext();

  return isFavorite(id) ? (
    <button onClick={() => toggleFavorite(id)}>
      <FaStar className="text-warning-300" size={size ?? 20} />
    </button>
  ) : (
    <button onClick={() => toggleFavorite(id)}>
      <StarsIcon className="text-gray" />
    </button>
  );
};

export const SocialShare = () => {
  return (
    <ul className="flex items-center gap-3">
      <li>
        <WebIcon />
      </li>
      <li>
        <XIcon />
      </li>
      <li>
        <ShareIcon />
      </li>
    </ul>
  );
};
