import { SparkLineChart } from "@/components/chart/sparklineChart";
import {
  DailyChange,
  MarketPrice,
  Star,
} from "@/components/main/markets/table/tableComps";
import { Column } from "@/components/ui/tableComponent/tableComponent";
import { UserAvatar } from "@/components/ui/UserAvatar";
import { allImages } from "@/public/images/images";
import { ArtCollection } from "@/types/martkes";

export const artsData: ArtCollection[] = [
  {
    id: "art-collect-00001",
    initials: "DC",
    authorName: "DammyJ",
    authorAvarta: null,
    owners: 1200,
    supply: 2200,
    availableItems: 3,
    about:
      "A living archive of Dahomey’s spirit—warriors, wisdom, and weather—reimagined on-chain. Each chapter blends historical craft with modern crypto-native mechanics, inviting holders to train, divine, and awaken the elements together.",
    floor: 5.67,
    oneDayvolumeChange: "+12.7%",
    topOffer: 4.37,
    totalVolume: 524.67,
    artwork: allImages.product1,
    artworkName: "Danxomɛ Codex",
    priceHistory: [1.2, 13, 5, 26, 12],

    nfts: [
      {
        id: "1024",
        name: "Agojie: Shields of Abomey",
        floor: 24.12,
        list: 22.1,
        sale: 22.1,
        artwork: allImages.danNFT1,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about:
          "Portrait PFPs honoring the famed women soldiers through bold appliqué textures, scarification motifs, brasswork, and cowries. Swear on-chain oaths, rank up through weekly “training,” and earn insignia that stitch into your identity, both digitally and as IRL patches. Your shield isn’t just art; it’s a discipline.",
      },
      {
        id: "1025",
        name: "Fa: The Diviner’s Chain",
        floor: 30.75,
        list: 28.5,
        sale: 28.5,
        artwork: allImages.danNFT2,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about:
          "Portrait PFPs honoring the famed women soldiers through bold appliqué textures, scarification motifs, brasswork, and cowries. Swear on-chain oaths, rank up through weekly “training,” and earn insignia that stitch into your identity, both digitally and as IRL patches. Your shield isn’t just art; it’s a discipline.",
      },
      {
        id: "1026",
        name: "Vodun: The Moving Elements",
        floor: 15.99,
        list: 14.75,
        sale: 14.75,
        artwork: allImages.danNFT3,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about:
          "Portrait PFPs honoring the famed women soldiers through bold appliqué textures, scarification motifs, brasswork, and cowries. Swear on-chain oaths, rank up through weekly “training,” and earn insignia that stitch into your identity, both digitally and as IRL patches. Your shield isn’t just art; it’s a discipline.",
      },
      {
        id: "1027",
        name: "The throne of King Ghezo of Dahomey",
        floor: 15.99,
        list: 14.75,
        sale: 22.1,
        artwork: allImages.danNFT4,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about:
          "Portrait PFPs honoring the famed women soldiers through bold appliqué textures, scarification motifs, brasswork, and cowries. Swear on-chain oaths, rank up through weekly “training,” and earn insignia that stitch into your identity, both digitally and as IRL patches. Your shield isn’t just art; it’s a discipline.",
      },
    ],
  },
  {
    id: "art-collect-00002",
    initials: "TH",
    authorName: "DammyJ",
    authorAvarta: allImages.avarta1,
    owners: 900,
    supply: 1600,
    availableItems: 3,
    about:
      "A living archive of Dahomey’s spirit—warriors, wisdom, and weather—reimagined on-chain. Each chapter blends historical craft with modern crypto-native mechanics, inviting holders to train, divine, and awaken the elements together.",
    floor: 5.67,
    oneDayvolumeChange: "-2.7%",
    topOffer: 4.37,
    totalVolume: 524.67,
    artwork: allImages.product2,
    artworkName: "The Horns Codex: Shaka’s Age",
    priceHistory: [1.2, 13, 5, 26, 12],

    nfts: [
      {
        id: "1024",
        name: "Agojie: Shields of Abomey",
        floor: 24.12,
        list: 22.1,
        sale: 22.1,
        artwork: allImages.theHornsNFT1,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about:
          "Portrait PFPs honoring the famed women soldiers through bold appliqué textures, scarification motifs, brasswork, and cowries. Swear on-chain oaths, rank up through weekly “training,” and earn insignia that stitch into your identity, both digitally and as IRL patches. Your shield isn’t just art; it’s a discipline.",
      },
      {
        id: "1025",
        name: "Fa: The Diviner’s Chain",
        floor: 30.75,
        list: 28.5,
        sale: 28.5,
        artwork: allImages.theHornsNFT2,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about:
          "Portrait PFPs honoring the famed women soldiers through bold appliqué textures, scarification motifs, brasswork, and cowries. Swear on-chain oaths, rank up through weekly “training,” and earn insignia that stitch into your identity, both digitally and as IRL patches. Your shield isn’t just art; it’s a discipline.",
      },
      {
        id: "1026",
        name: "Vodun: The Moving Elements",
        floor: 15.99,
        list: 14.75,
        sale: 14.75,
        artwork: allImages.theHornsNFT3,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about:
          "Portrait PFPs honoring the famed women soldiers through bold appliqué textures, scarification motifs, brasswork, and cowries. Swear on-chain oaths, rank up through weekly “training,” and earn insignia that stitch into your identity, both digitally and as IRL patches. Your shield isn’t just art; it’s a discipline.",
      },
      {
        id: "1027",
        name: "Queen Nandi-(The Sweet one)",
        floor: 15.99,
        list: 14.75,
        sale: 28.5,
        artwork: allImages.theHornsNFT4,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about:
          "Portrait PFPs honoring the famed women soldiers through bold appliqué textures, scarification motifs, brasswork, and cowries. Swear on-chain oaths, rank up through weekly “training,” and earn insignia that stitch into your identity, both digitally and as IRL patches. Your shield isn’t just art; it’s a discipline.",
      },
    ],
  },
  {
    id: "art-collect-00003",
    initials: "IG",
    authorName: "DammyJ",
    authorAvarta: allImages.avarta2,
    owners: 500,
    supply: 1900,
    availableItems: 3,
    about:
      "A living archive of Dahomey’s spirit—warriors, wisdom, and weather—reimagined on-chain. Each chapter blends historical craft with modern crypto-native mechanics, inviting holders to train, divine, and awaken the elements together.",
    floor: 5.67,
    oneDayvolumeChange: "+35.7%",
    topOffer: 4.37,
    totalVolume: 524.67,
    artwork: allImages.product3,
    artworkName: "IGUN CODEX: Court of Benin",
    priceHistory: [1.2, 13, 5, 26, 12],

    nfts: [
      {
        id: "1024",
        name: "Agojie: Shields of Abomey",
        floor: 24.12,
        list: 22.1,
        sale: 22.1,
        artwork: allImages.igunNFT1,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about:
          "Portrait PFPs honoring the famed women soldiers through bold appliqué textures, scarification motifs, brasswork, and cowries. Swear on-chain oaths, rank up through weekly “training,” and earn insignia that stitch into your identity, both digitally and as IRL patches. Your shield isn’t just art; it’s a discipline.",
      },
      {
        id: "1025",
        name: "Fa: The Diviner’s Chain",
        floor: 30.75,
        list: 28.5,
        sale: 28.5,
        artwork: allImages.igunNFT2,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about:
          "Portrait PFPs honoring the famed women soldiers through bold appliqué textures, scarification motifs, brasswork, and cowries. Swear on-chain oaths, rank up through weekly “training,” and earn insignia that stitch into your identity, both digitally and as IRL patches. Your shield isn’t just art; it’s a discipline.",
      },
      {
        id: "1026",
        name: "Vodun: The Moving Elements",
        floor: 15.99,
        list: 14.75,
        sale: 14.75,
        artwork: allImages.igunNFT3,
        details: {
          contractAddress: "0x93R...65G",
          tokenID: "23715",
          tokenStandard: "HBAR",
          chain: "Hedera",
        },
        priceHistory: [1.2, 13, 5, 26, 12],
        about:
          "Portrait PFPs honoring the famed women soldiers through bold appliqué textures, scarification motifs, brasswork, and cowries. Swear on-chain oaths, rank up through weekly “training,” and earn insignia that stitch into your identity, both digitally and as IRL patches. Your shield isn’t just art; it’s a discipline.",
      },
    ],
  },
];

export const marketColData: Column<ArtCollection>[] = [
  {
    title: "COLLECTION",
    key: "authorName",
    render: (_, { id, initials, artworkName }) => (
      <div className="flex items-center gap-6">
        <Star id={id} />
        <UserAvatar
          url={""}
          initials={initials}
          displayName={artworkName}
          showTitle
        />
      </div>
    ),
    headerClassName: "!text-start",
    columnClassName: "!w-40",
  },
  {
    title: "FLOOR",
    key: "floor",
    render: (_, { floor }) => (
      <MarketPrice price={floor} className="justify-end" />
    ),
  },
  {
    title: "1D CHANGE",
    key: "oneDayvolumeChange",
    render: (_, { oneDayvolumeChange }) => (
      <DailyChange volume={oneDayvolumeChange} className="text-end" />
    ),
  },
  {
    title: "VOLUME",
    key: "totalVolume",
    render: (_, { totalVolume }) => (
      <MarketPrice price={totalVolume} className="justify-end" />
    ),
  },
  {
    title: "OWNERS",
    key: "owners",
    render: (_, { owners }) => <>{owners}</>,
  },
  {
    title: "SUPPLY",
    key: "supply",
    render: (_, { supply }) => <>{supply}</>,
  },
  {
    title: "LAST 7D",
    key: "priceHistory",
    render: (_, { priceHistory }) => (
      <div className="flex justify-center">
        <SparkLineChart series={[{ data: priceHistory }]} className="w-2/12" />
      </div>
    ),
  },
];

export const learningHubData = [
  {
    title: "What is a NFT?",
    imageUrl: allImages.learn1,
    path: "https://usiko.gitbook.io/docs/documentation",
  },
  {
    title: "How to buy a NFT",
    imageUrl: allImages.learn2,
    path: "https://usiko.gitbook.io/docs/documentation/learn-with-usiko/markdown",
  },
  {
    title: "How to create a collection on Usiko",
    imageUrl: allImages.learn3,
    path: "https://usiko.gitbook.io/docs/documentation/learn-with-usiko/images-and-media",
  },
  {
    title: "Understanding Usiko Ethos",
    imageUrl: allImages.learn4,
    path: "https://usiko.gitbook.io/docs/documentation/learn-with-usiko/integrations",
  },
  {
    title: "What is Hedera DLT?",
    imageUrl: allImages.learn5,
    path: "https://usiko.gitbook.io/docs/documentation/learn-with-usiko/interactive-blocks",
  },
];
