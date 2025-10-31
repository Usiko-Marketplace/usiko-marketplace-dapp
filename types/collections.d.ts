import { StaticImageData } from "next/image";

export type CollectionTypes = {
  name: string;
  tokenSymbol: string;
  collectionImage: string;
  description: string;
  websiteURL: string;
  creatorFee: string;
  recipientWalletAddress: string;
  category: string;
};

export type NFTTypes = {
  name: string;
  supply: string;
  description: string;
  url: string;
  type: string;
  size: string;
  nftImage: string;
};
