import { BrandIcon } from "@/public/svgs";
import Link from "next/link";

const BrandLogo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={`${className} h-[46px] w-[106px] lg:h-[53px] lg:w-[135px]`}
    >
      <BrandIcon />
    </Link>
  );
};

export default BrandLogo;
