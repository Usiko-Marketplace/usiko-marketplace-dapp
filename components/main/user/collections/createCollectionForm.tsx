"use client";

import React from "react";
import Button from "@/components/ui/button";
import FormInput from "@/components/ui/formInput";
import { CloudUploadIcon } from "@/public/svgs";
import { useModalContext } from "@/context/modalContext";
import { CollectionSuccessModal } from "./collectionSuccessModal";
import Image from "next/image";

type Props = {
  onCancel?: () => void;
  onPublish?: (data: FormData) => void;
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

export default function CreateCollectionForm({ onCancel }: Props) {
  const { openModal } = useModalContext();
  const [imageFile, setImageFile] = React.useState<File | null>(null);
  const [imagePreview, setImagePreview] = React.useState<string | null>(null);
  const [category, setCategory] = React.useState<string>("");

  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
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
    reader.onload = () => setImagePreview(String(reader.result));
    reader.readAsDataURL(file);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(imageFile);
    openModal("create-success");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Collection image */}
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
                className="h-40 w-40 rounded-md object-cover"
              />
            ) : (
              <>
                <CloudUploadIcon />
                <p className="text-gray-30 text-sm">
                  <span className="text-primary"> Click to upload</span> or drag
                  and drop
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

        <article className="space-y-2">
          <FormInput
            id="name"
            name="name"
            label="Name"
            placeholder="Add Collection Name"
            required
          />
          <small className="text-gray-40">
            You won’t be able to update your collection name later
          </small>
        </article>

        <FormInput
          id="symbol"
          name="symbol"
          label="Token symbol"
          required
          placeholder="Add Collection Name"
        />

        <FormInput
          id="description"
          name="description"
          label="Description"
          type="textarea"
          placeholder="Short description of your collection"
        />

        <FormInput
          id="category"
          name="category"
          label="Category"
          type="select"
          placeholder="Select category"
          value={category}
          selectOptions={categories}
          onChange={(v) => setCategory(v)}
          className="w-full"
        />

        <FormInput
          id="website"
          name="website"
          label="Website URL (optional)"
          type="url"
          placeholder="Paste your URL"
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
            required
          />
          <span className="text-gray-30 pointer-events-none absolute top-[65%] right-3 -translate-y-1/2">
            %
          </span>
        </div>

        <div className="space-y-2">
          <label htmlFor="creatorRecipient">Creator fee recipient</label>
          <div className="form-controls mt-2 !flex items-center gap-2">
            <input
              id="creatorRecipient"
              name="creatorRecipient"
              placeholder="Paste your recipient address"
              className="flex-1 !bg-transparent text-white focus:!border-0 focus:!outline-0"
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
        <div className="mt-8 flex items-center justify-between gap-3">
          <Button
            type="button"
            className="outline-btn w-full"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button type="submit" className="pry-btn w-full">
            Publish Collection
          </Button>
        </div>
      </form>

      <CollectionSuccessModal />
    </>
  );
}
