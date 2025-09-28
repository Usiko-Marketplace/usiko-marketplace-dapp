"use client";

import React, { useEffect, useState } from "react";
import BrandLogo from "../ui/brandLogo";
import styles from "./navBar.module.scss";
import ResponsiveNavBar from "./responsiveNavBar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      // className={`grid h-24 w-full place-items-center`}
      className={`fixed top-0 left-0 z-50 grid min-h-[var(--main-header-height)] w-full place-items-center ${
        isScrolled ? "bg-black/80 backdrop-blur-xs" : "bg-black"
      }`}
    >
      <section
        className={`${styles.navContainer} container flex items-center justify-between gap-5`}
      >
        <BrandLogo />

        <ResponsiveNavBar styles={styles} />
      </section>
    </header>
  );
};

export default Navbar;
