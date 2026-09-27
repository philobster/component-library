import { useId } from "react";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  error?: string;
  disabled?: boolean;
};

export function Select({
  label,
  value,
  onChange,
  options,
  placeholder,
  size = "md",
  error,
  disabled = false,
}: SelectProps) {
  const id = useId();

  const base =
    "rounded-md border border-blue-500 bg-gray-900 text-gray-100 " + 
    "transition-all duration-200 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500";

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2",
    lg: "px-4 py-3 text-lg",
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-gray-100 font-semibold">
          {label}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`${base} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-rose-400 text-sm">{error}</p>}
    </div>
  );
}