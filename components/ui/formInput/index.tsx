import React, { JSX, ReactNode, useState } from "react";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import ErrorMessage from "../errorMessage";

export interface IFormInputProps
  extends React.InputHTMLAttributes<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  > {
  label?: string | ReactNode;
  id: string;
  name?: string;
  error?: string | boolean | Date | undefined;
  value?: string | number | readonly string[] | undefined;
  defaultCheck?: boolean;
  type?: React.HTMLInputTypeAttribute | "textarea" | "select";
  labelClassName?: string;
  className?: string;
  onChange?: (e: any) => void;
  icon?: JSX.Element | string;
  selectOptions?: any[];
  valuePropertyName?: string;
  keyPropertyName?: string;
  itemPropertyName?: string;
  defaultCountry?: string;
}

const FormInput = ({
  className,
  labelClassName,
  label,
  type,
  id,
  name,
  onChange,
  icon,
  placeholder,
  value,
  error,
  selectOptions,
  keyPropertyName,
  itemPropertyName,
  valuePropertyName,
  defaultCheck,
  ...rest
}: IFormInputProps) => {
  const [showPassword, setShowPassword] = useState<{ [key: string]: boolean }>(
    {},
  );

  const handleShowPassword = (id: string) => {
    setShowPassword((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className={`${error ? "" : ""} ${className}`}>
      {type !== "checkbox" && label && (
        <label
          htmlFor={id}
          className={`${labelClassName} text-dark mb-1.5 flex items-center gap-2`}
        >
          <span>{label}</span>
        </label>
      )}

      {icon && <span>{icon}</span>}
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={6}
          onChange={onChange}
          className={error ? "errors form-controls" : "form-controls"}
          placeholder={placeholder}
          value={value}
          {...rest}
        ></textarea>
      ) : type === "select" ? (
        <select
          id={id}
          name={name}
          onChange={onChange}
          className={error ? "errors form-controls" : "form-controls"}
          value={value}
          {...rest}
        >
          <option> {placeholder || value} </option>
          {selectOptions?.map((item, idx) => (
            <option
              key={item[item && keyPropertyName] || item || idx}
              value={item[item && valuePropertyName] || item}
            >
              {" "}
              {item[item && itemPropertyName] || item}{" "}
            </option>
          ))}
        </select>
      ) : type === "checkbox" ? (
        <div className="flex w-full items-center gap-2">
          <input
            id={id}
            name={name}
            type={type}
            onChange={onChange}
            className={error ? "errors !m-0" : "!m-0"}
            placeholder={placeholder}
            checked={defaultCheck}
            {...rest}
          />
          <label className="text-Grey7 !m-0">{label} </label>
        </div>
      ) : type === "password" ? (
        <div className="relative">
          <input
            id={id}
            name={name}
            type={showPassword[id] ? "text" : "password"}
            onChange={onChange}
            className={error ? "errors form-controls" : "form-controls"}
            placeholder={placeholder}
            value={value}
            {...rest}
          />{" "}
          <span
            className="absolute top-[35%] right-6 cursor-pointer"
            onClick={() => handleShowPassword(id)}
          >
            {showPassword[id] ? (
              <BsFillEyeFill className="text-gray-30" />
            ) : (
              <BsFillEyeSlashFill className="text-gray-30" />
            )}
          </span>
        </div>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          onChange={onChange}
          className={error ? "errors form-controls" : "form-controls"}
          placeholder={placeholder}
          value={value}
          {...rest}
        />
      )}

      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default FormInput;
