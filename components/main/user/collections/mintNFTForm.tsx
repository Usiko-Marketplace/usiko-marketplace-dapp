"use client";

import React, {
  ChangeEvent,
  DragEvent,
  FormEvent,
  useRef,
  useState,
} from "react";
import Button from "@/components/ui/button";
import FormInput from "@/components/ui/formInput";
import { CloudUploadIcon } from "@/public/svgs";
import { CollectionSuccessModal } from "./collectionSuccessModal";
import Image from "next/image";
import { useCollectionsContext } from "@/context/collectionContext";

type Props = {
  onCancel?: () => void;
  onPublish?: (data: FormData) => void;
  details?: boolean;
};

export default function MintNFTForm({ details }: Props) {
  const {
    NFTFormData,
    setNFTFormData,
    handleNFTChange,
    handleSubmitNFT,
    isLoading,
  } = useCollectionsContext();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(
    NFTFormData?.nftImage,
  );

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(String(reader.result));
      setNFTFormData((prev) => ({
        ...prev,
        ["nftImage"]: String(reader.result),
      }));
    };
    reader.readAsDataURL(file);
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(imageFile);
    // openModal("create-success");
    handleSubmitNFT();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Collection image */}
        {!details && (
          <article
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onDrop={onDrop}
            className="rounded-lg border border-dashed border-gray-300 p-4"
          >
            <div
              className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md py-8"
              onClick={() => fileInputRef.current?.click()}
              role="button"
              aria-label="Upload collection image"
            >
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  alt="Collection preview"
                  className="rounded-md object-cover"
                  width={100}
                  height={100}
                />
              ) : (
                <>
                  <CloudUploadIcon />
                  <p className="text-gray-30 text-sm">
                    <span className="text-primary"> Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-gray-40 text-xs">
                    1000 × 1000, GIF, JPG, PNG, SVG, max 25MB
                  </p>
                </>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={onFileChange}
              name="image"
            />
          </article>
        )}

        <article className="space-y-2">
          <FormInput
            id="name"
            name="name"
            label="Name"
            placeholder="NFT Name"
            value={NFTFormData?.name}
            onChange={handleNFTChange}
            required
          />
        </article>

        <FormInput
          id="supply"
          name="supply"
          label="Supply"
          placeholder="Add supply"
          value={NFTFormData?.supply}
          onChange={handleNFTChange}
          required
        />

        <FormInput
          id="description"
          name="description"
          label="Description"
          type="textarea"
          placeholder="Short description of your NFT"
          value={NFTFormData?.description}
          onChange={handleNFTChange}
        />

        <FormInput
          id="url"
          name="url"
          label="URL"
          type="url"
          placeholder="Paste your URL"
          value={NFTFormData?.url}
          onChange={handleNFTChange}
          required
        />

        {/* Traits*/}

        <div className="!space-y-4">
          <div className="!space-y-2">
            <h4>Traits</h4>
            <small className="text-[#C1C1C8E3]">
              Traits define your NFT&apos;s attributes. They serve as filters on
              your collection page and are listed on your Item page.
            </small>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <FormInput
              id="type"
              name="type"
              label="Type"
              type="text"
              placeholder="e.g size"
              value={NFTFormData?.type}
              onChange={handleNFTChange}
              required
            />
            <FormInput
              id="size"
              name="size"
              label="Name"
              type="text"
              placeholder="e.g large"
              value={NFTFormData?.size}
              onChange={handleNFTChange}
              required
            />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-end gap-3">
          <Button
            type="submit"
            className="pry-btn min-w-54"
            loading={isLoading}
          >
            Mint NFT
          </Button>
        </div>
      </form>

      <CollectionSuccessModal />
    </>
  );
}
