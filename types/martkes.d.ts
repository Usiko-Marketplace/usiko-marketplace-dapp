import { StaticImageData } from "next/image";

// NFT Details Type
export type NFTDetails = {
  contractAddress: string;
  tokenID: string;
  tokenStandard: string;
  chain: string;
};

type AudioSource = string | { src: string };

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
  aboutAudio: AudioSource;
};

// Art Collection Type
export type ArtCollection = {
  id: string;
  initials: string;
  authorName: string;
  authorAvarta: StaticImageData | null;
  supply: number;
  availableItems: number;
  about: string;
  floor: number;
  oneDayvolumeChange: string;
  topOffer: number;
  totalVolume: number;
  owners: number;
  artwork: StaticImageData;
  artworkName: string;
  priceHistory: number[];
  nfts: NFT[];
  aboutAudio: AudioSource;
};
