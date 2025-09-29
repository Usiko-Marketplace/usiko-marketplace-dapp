import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

type FileImageProps = {
  url: string | StaticImageData;
  displayName: string;
  className?: string;
  titleClassName?: string;
  subtext?: ReactNode;
  showTitle?: boolean;
};

export const UserAvatar = ({
  url,
  displayName,
  subtext,
  titleClassName,
  className,
  showTitle,
}: FileImageProps) => {
  return (
    <article className={`flex items-center gap-2.5 ${className}`}>
      {url ? (
        <figure className="relative size-12 overflow-hidden rounded-full">
          <Image
            src={url}
            alt="image"
            fill
            sizes="100%"
            className="!h-full !w-full object-cover"
          />
        </figure>
      ) : (
        <div
          className={`text-primary grid size-12 place-items-center rounded-full bg-white`}
        >
          <span className={`text-base font-bold uppercase`}>
            {displayName?.slice(0, 2) || ""}
          </span>
        </div>
      )}

      {showTitle && (
        <div className="flex flex-1 flex-col">
          <h5 className={`${titleClassName} text-base font-semibold`}>
            {displayName}
          </h5>

          {subtext && <>{subtext}</>}
        </div>
      )}
    </article>
  );
};
