type InputProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "password" | "number";
  size?: "sm" | "md" | "lg";
  error?: string;
  disabled?: boolean;
};

export function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  size = "md",
  error,
  disabled = false,
}: InputProps) {
  const base =
    "bg-gray-900 border border-blue-300 rounded-full text-gray-100 placeholder:text-gray-500 transition-all duration-200 [@media(hover:hover)]:hover:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500";

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <div className="flex flex-col gap-2">
      {label && <p className="text-gray-100 font-semibold">{label}</p>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`${base} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      />
      {error && <p className="text-rose-400 font-bold text-sm">{error}</p>}
    </div>
  );
}