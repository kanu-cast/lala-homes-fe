import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
interface Input {
  type: string;
  required: boolean;
  value?: string;
  className?: string;
  label?: string;
  labelClassName?: string;
  height?: number;
  width?: number;
  placeholder?: string;
  error?: string;
  showError?: boolean;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Properly typed onChange
}
const CleanInputComponent = (props: Input) => {
  const {
    type,
    required,
    value,
    className,
    label,
    labelClassName,
    height,
    width,
    placeholder,
    error,
    showError,
    onChange,
  } = props;
  return (
    <div className="block">
      <label className={labelClassName}>{label}</label>
      <input
        autoComplete="false"
        type={type}
        required={required}
        value={value}
        className={showError ? `b-1px-red + ${className}` : className}
        placeholder={placeholder}
        onChange={onChange}
        style={{
          height: height ? `${height}px` : "2.5rem",
          width: width ? `${width}px` : "100%",
          marginTop: "4px",
          marginBottom: "4px",
          padding: "6px",
        }}
      />
      <span className="block" style={{ height: "1rem" }}>
        {showError ? (
          <span className="block font-0 clr-red f-right">
            <FaExclamationCircle className="font-2 bold mx-2 inline-block" />
            {error}
          </span>
        ) : (
          ""
        )}
      </span>
    </div>
  );
};
export default CleanInputComponent;
