"use client";
import React from "react";
import BrandLogo from "../ui/brandLogo";
import { productRoutes, socialsRoutes } from "../routes";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black py-10">
      <section className="container flex flex-col items-start justify-between gap-y-5 lg:flex-row lg:items-center">
        <div className="flex justify-between">
          <BrandLogo className="" />
        </div>

        <ul className="flex flex-wrap gap-5">
          {productRoutes.map(({ name, path }) => (
            <li key={name}>
              <Link href={path} className="text-base font-medium !text-white">
                {" "}
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-5">
          {socialsRoutes.map(({ name, path }) => (
            <li key={name}>
              <Link href={path} className="text-base font-medium !text-white">
                {" "}
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="container mt-10">
        <small className="text-gray-10 !text-xs">
          © {new Date()?.getFullYear()} - Usiko. All rights reserved.
        </small>
      </section>
    </footer>
  );
};

export default Footer;
