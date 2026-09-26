import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "info";
  size?: "sm" | "md";
};

export function Badge({
    children = "Badge",
    variant = "default",
    size = "md"
}: BadgeProps) {
    const base = "rounded-full";

    const variants = {
        default: "bg-gray-800 text-gray-100",
        success: "bg-green-900 text-green-100",
        warning: "bg-yellow-900 text-yellow-100",
        danger: "bg-rose-900 text-rose-100",
        info: "bg-blue-900 text-blue-100"
    };

    const sizes = {
        sm: "text-xs px-2 py-0.5",
        md: "text-sm px-3 py-1",
    };

    return (
        <span className={`${base} ${variants[variant]} ${sizes[size]}`}>
            {children}
        </span>
    )
}