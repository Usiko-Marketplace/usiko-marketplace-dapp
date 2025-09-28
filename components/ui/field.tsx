import { ReactNode } from "react";

const Field = ({
  title,
  value,
  valuClassName,
  className,
}: {
  title: string | ReactNode;
  value: string | ReactNode;
  className?: string;
  valuClassName?: string;
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <h5 className="text-gray-40 w-4/12 !text-xs whitespace-nowrap">
        {title}
      </h5>
      <div className="flex-1">
        {typeof value === "string" ? (
          <h5
            className={`text-sm whitespace-break-spaces text-white ${valuClassName}`}
          >
            {value}
          </h5>
        ) : (
          value
        )}
      </div>
    </div>
  );
};

export default Field;
