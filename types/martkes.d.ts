import { StaticImageData } from "next/image";

export type SupplyTypes = {
  id: string;
  date: string;
  asset: string;
  supplied: number;
  accrued: number;
};

// NFT Details Type
export type NFTDetails = {
  contractAddress: string;
  tokenID: string;
  tokenStandard: string;
  chain: string;
};

// Individual NFT Type
export type NFT = {
  id: string;
  name: string;
  floor: number;
  list: number;
  sale: number;
  artwork: StaticImageData | null;
  details: NFTDetails;
  priceHistory: number[];
  about: string;
};

// Art Collection Type
export type ArtCollection = {
  id: string;
  authorName: string;
  authorAvarta: StaticImageData | null;
  supply: number;
  availableItems: number;
  about: string;
  floor: number;
  oneDayvolumeChange: string;
  topOffer: number;
  topVolume: number;
  owners: number;
  artwork: StaticImageData;
  artworkName: string;
  priceHistory: number[];
  nfts: NFT[];
};
