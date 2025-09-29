import { allImages } from "@/public/images/images";
import Image from "next/image";
import React, { ReactNode } from "react";

const EmptyState = ({
  title,
  subTitle,
  className,
}: {
  title: string;
  className?: string;
  subTitle: string;
  icon?: ReactNode;
}) => {
  return (
    <section
      className={` ${className} flex min-h-[60vh] flex-col items-center justify-center gap-5`}
    >
      <div className="flex w-3/12 flex-col items-center justify-center">
        <Image src={allImages.notfound} alt="" />
      </div>

      <div className="w-full text-center">
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
    </section>
  );
};

export default EmptyState;
