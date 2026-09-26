import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
}: ButtonProps) {
  const base =
    "rounded-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-600";

  const variants = {
    primary:
      "bg-gray-950 border border-gray-800 text-gray-100 [@media(hover:hover)]:hover:border-gray-700",
    secondary:
      "bg-gray-800 border border-gray-700 text-gray-100 [@media(hover:hover)]:hover:border-gray-600",
    danger:
      "bg-rose-900 border border-rose-800 text-rose-100 [@media(hover:hover)]:hover:border-rose-700",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
      {children}
    </button>
  );
}