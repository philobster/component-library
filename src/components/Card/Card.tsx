import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  variant?: "default" | "outlined" | "elevated";
  padding?: "sm" | "md" | "lg";
  className?: string;
};

export function Card({
    children,
    variant = "default",
    padding = "md",
    className
}: CardProps) {
    const base = "bg-gray-950 rounded-md text-gray-100 max-w-md";

    const variants = {
    default: "border border-gray-800",
    outlined: "border-2 border-blue-500",
    elevated: "border border-gray-800 shadow-lg shadow-black/50",
    };

    const paddings = {
        sm: "p-2",
        md: "p-4",
        lg: "p-6"
    };

    return (
        <div className={`${base} ${variants[variant]} ${paddings[padding]} ${className ?? ""}`}>
            {children}
        </div>
    );
}