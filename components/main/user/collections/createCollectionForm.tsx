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

const categories = [
  "Art",
  "Photography",
  "Music",
  "Video",
  "Collectibles",
  "Utility",
  "Sports",
  "Virtual Worlds",
];

export default function CreateCollectionForm({ onCancel, details }: Props) {
  const {
    collectionFormData,
    setCollectionFormData,
    handleCollectionChange,
    handleSubmitCollections,
    isLoading,
  } = useCollectionsContext();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(
    collectionFormData?.collectionImage,
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
      setCollectionFormData((prev) => ({
        ...prev,
        ["collectionImage"]: String(reader.result),
      }));
    };
    reader.readAsDataURL(file);
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const onPasteCreator = async () => {
    try {
      const text = await navigator.clipboard.readText();
      const input = document.getElementById(
        "creatorRecipient",
      ) as HTMLInputElement | null;
      if (input) input.value = text.trim();
    } catch {}
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(imageFile);
    // openModal("create-success");
    handleSubmitCollections();
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
            placeholder="Add Collection Name"
            value={collectionFormData?.name}
            onChange={handleCollectionChange}
            required
          />
          <small className="text-gray-40">
            You won’t be able to update your collection name later
          </small>
        </article>

        <FormInput
          id="tokenSymbol"
          name="tokenSymbol"
          label="Token symbol"
          placeholder="Add Collection Name"
          value={collectionFormData?.tokenSymbol}
          onChange={handleCollectionChange}
          required
        />

        <FormInput
          id="description"
          name="description"
          label="Description"
          type="textarea"
          placeholder="Short description of your collection"
          value={collectionFormData?.description}
          onChange={handleCollectionChange}
        />

        <FormInput
          id="category"
          name="category"
          label="Category"
          type="select"
          placeholder="Select category"
          selectOptions={categories}
          value={collectionFormData?.category}
          onChange={handleCollectionChange}
          className="w-full"
        />

        <FormInput
          id="websiteURL"
          name="websiteURL"
          label="Website URL (optional)"
          type="url"
          placeholder="Paste your URL"
          value={collectionFormData?.websiteURL}
          onChange={handleCollectionChange}
        />

        {/* Creator fee and recipient */}

        <div className="relative">
          <FormInput
            id="creatorFee"
            name="creatorFee"
            label="Creator fee"
            type="tel"
            min="0"
            max="100"
            step="0.1"
            placeholder="0"
            className="relative"
            value={collectionFormData?.creatorFee}
            onChange={handleCollectionChange}
            required
          />
          <span className="text-gray-30 pointer-events-none absolute top-[65%] right-3 -translate-y-1/2">
            %
          </span>
        </div>

        <div className="space-y-2">
          <label htmlFor="recipientWalletAddress">
            Recipient wallet address
          </label>
          <div className="form-controls mt-2 !flex items-center gap-2">
            <input
              id="recipientWalletAddress"
              name="recipientWalletAddress"
              placeholder="Paste your recipient address"
              className="flex-1 !bg-transparent text-white focus:!border-0 focus:!outline-0"
              value={collectionFormData?.recipientWalletAddress}
              onChange={handleCollectionChange}
              required
            />
            <button
              type="button"
              className="text-primary"
              onClick={onPasteCreator}
            >
              Paste
            </button>
          </div>
        </div>

        {/* Actions */}
        {details ? (
          <div className="mt-8 flex items-center justify-end gap-3">
            <Button type="submit" className="pry-btn" loading={isLoading}>
              Publish changes
            </Button>
          </div>
        ) : (
          <div className="mt-8 flex items-center justify-between gap-3">
            <Button
              type="button"
              className="outline-btn w-full"
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="pry-btn w-full"
              loading={isLoading}
            >
              Publish Collection
            </Button>
          </div>
        )}
      </form>

      <CollectionSuccessModal />
    </>
  );
}
