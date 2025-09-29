"use client";
import React from "react";
import Search from "@/components/ui/search";
import { CustomSelect } from "@/components/ui/select/customSelect";
import Link from "next/link";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { artsData } from "@/utils/constant";
import { removeSpaces } from "@/utils/helper";
import Image from "next/image";
import { allImages } from "@/public/images/images";
import Field from "@/components/ui/field";

export default function RenderNFTS({ artId }: { artId: string }) {
  const matched = artsData?.find((item) => item?.id === artId);

  return (
    <section className="container py-20">
      <article className="flex w-full items-start justify-between gap-4 lg:items-center">
        <div className="flex flex-1 items-center gap-10">
          <div className="flex items-center gap-1">
            <MdCheckBoxOutlineBlank />
            <h5 className="text-gray">{artsData?.length}</h5>
          </div>
          <Search
            placeholder="Search artist, collection.."
            className="max-w-sm"
          />
        </div>

        <CustomSelect
          name="filter"
          placeholder="Price low to high"
          value="Price low to high"
          options={["Price low to high", "Price high to low"]}
          onChange={() => {}}
          className="!h-[35px] !rounded-full !border-0 !bg-gray-200"
        />
      </article>
      <ul className="!mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {matched?.nfts?.map(({ id, name, artwork, sale }) => (
          <li key={id} className="overflow-hidden rounded-2xl">
            <Link
              href={`/markets/${removeSpaces(artId)}/nfts/${id}`}
              className="flex flex-col"
              data-aos="zoom-in"
            >
              <figure className="relative h-[300px] overflow-hidden">
                <Image src={artwork || allImages.noImage} alt={name} />
              </figure>
              <article className="space-y-5 bg-gray-600 p-5 !text-white">
                <div className="flex items-center gap-3">
                  <h5 className="text-lg font-bold"> {name} </h5>
                  <small className="text-[#828296]">#{id}</small>
                </div>

                <ul className="flex justify-between">
                  <li>
                    <Field
                      title="Price"
                      value={`${matched?.floor} HBAR`}
                      className="flex-col items-start !gap-1"
                      valuClassName="!text-base font-semibold"
                    />{" "}
                  </li>
                  <li>
                    <Field
                      title="Last Sale"
                      value={`${sale} HBAR`}
                      className="flex-col items-start !gap-1"
                      valuClassName="!text-base font-semibold"
                    />
                  </li>
                </ul>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
