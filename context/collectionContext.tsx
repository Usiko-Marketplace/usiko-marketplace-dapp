"use client";
import { CollectionTypes, NFTTypes } from "@/types/collections";
import { useRouter } from "next/navigation";
import React, {
  ChangeEvent,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface CollectionsContextType {
  collectionFormData: CollectionTypes;
  setCollectionFormData: Dispatch<SetStateAction<CollectionTypes>>;
  NFTFormData: NFTTypes;
  setNFTFormData: Dispatch<SetStateAction<NFTTypes>>;
  NFData: NFTTypes[];
  handleSubmitCollections: () => void;
  handleCollectionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleNFTChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmitNFT: () => void;
  isLoading: boolean;
  mint: boolean;
  setMint: Dispatch<SetStateAction<boolean>>;
}

const CollectionsContext = createContext<CollectionsContextType | undefined>(
  undefined,
);

const intialValues = {
  collectionImage: "",
  name: "",
  tokenSymbol: "",
  description: "",
  websiteURL: "",
  creatorFee: "",
  recipientWalletAddress: "",
  category: "",
};
const intialNFTValues = {
  name: "",
  supply: "",
  description: "",
  url: "",
  type: "",
  size: "",
  nftImage: "",
};

export const CollectionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { push } = useRouter();
  const [mint, setMint] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [collectionFormData, setCollectionFormData] =
    useState<CollectionTypes>(intialValues);

  const [NFTFormData, setNFTFormData] = useState<NFTTypes>(intialNFTValues);
  const [NFData, setNFData] = useState<NFTTypes[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("collections");
    if (stored) {
      try {
        setCollectionFormData(JSON.parse(stored));
      } catch (error) {
        console.error("Failed to parse collections from localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("nft-collections");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setNFData(parsed);
        } else {
          // Legacy format - single object, convert to array
          setNFData([parsed]);
        }
      } catch (error) {
        console.error(
          "Failed to parse NFT collections from localStorage:",
          error,
        );
      }
    }
  }, []);

  const handleCollectionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setCollectionFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitCollections = () => {
    setIsLoading(true);
    localStorage.setItem("collections", JSON.stringify(collectionFormData));

    setTimeout(() => setIsLoading(false), 1000);

    push("/collections/details");
  };

  const handleNFTChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setNFTFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitNFT = () => {
    setIsLoading(true);

    // Add NFT to array
    const updatedNFData = [...NFData, { ...NFTFormData }];
    setNFData(updatedNFData);

    localStorage.setItem("nft-collections", JSON.stringify(updatedNFData));

    // Reset form
    setNFTFormData(intialNFTValues);

    setTimeout(() => {
      setIsLoading(false);
      setMint(false);
    }, 1000);
  };

  const values = {
    collectionFormData,
    setCollectionFormData,
    NFTFormData,
    setNFTFormData,
    NFData,
    handleSubmitCollections,
    handleCollectionChange,
    handleNFTChange,
    handleSubmitNFT,
    isLoading,
    mint,
    setMint,
  };
  return (
    <CollectionsContext.Provider value={values}>
      {children}
    </CollectionsContext.Provider>
  );
};

export const useCollectionsContext = () => {
  const context = useContext(CollectionsContext);
  if (!context) {
    throw new Error(
      "useCollectionsContext must be used within CollectionsProvider",
    );
  }
  return context;
};
