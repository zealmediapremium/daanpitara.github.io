import React, { forwardRef, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";

interface InputFieldProps {
  placeholder?: string;
  text?: string;
  icon?: React.ReactNode;
  type?: string;
  error?: string; // 👈 added error prop
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ placeholder, text, icon, type = "text", error }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    return (
      <div className="flex flex-col w-full">
        {/* Label */}
        {text && (
          <label className="text-sm text-txt-black mb-1 font-bold pb-2">
            {text}
          </label>
        )}

        {/* Input Field */}
        <div
          className={`flex items-center border-b ${
            error ? "border-red-500" : "border-gray-300"
          } focus-within:border-black transition-colors`}
        >
          {icon && <span className="text-gray-400 mr-2">{icon}</span>}

          <input
            ref={ref}
            type={inputType}
            placeholder={placeholder}
            className={`flex-1 py-1 text-gray-800 placeholder-gray-400 bg-transparent outline-none ${
              error ? "text-red-600" : ""
            }`}
          />

          {/* Password toggle */}
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="ml-2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? <EyeSlashIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          )}
        </div>

        {/* Error Message (space reserved even if no error) */}
        <p className="text-sm text-red-500 mt-1 font-medium min-h-[1.25rem]">
          {error || "\u00A0"}
        </p>
      </div>
    );
  }
);

InputField.displayName = "InputField";
export default InputField;
