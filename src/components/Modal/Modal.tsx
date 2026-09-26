"use client";

import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
};

export function Modal({
    isOpen,
    onClose,
    title,
    children,
    size = "md"
}: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isOpen) return;
        const previousFocus = document.activeElement as HTMLElement;
        closeButtonRef.current?.focus();
        return () => previousFocus?.focus();
    }, [isOpen]);

    // Trap focus
    useEffect(() => {
        if (!isOpen) return;

        const handleTab = (e: KeyboardEvent) => {
            if (e.key !== "Tab") return;
            
            const focusable = modalRef.current?.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            if (!focusable || focusable.length === 0) return;

            const first = focusable[0] as HTMLElement;
            const last = focusable[focusable.length - 1] as HTMLElement;

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", handleTab);
        return () => document.removeEventListener("keydown", handleTab);
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    useEffect(() => {
        if (!isOpen) return;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const sizes = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-2xl",
    };

    return createPortal(
        <div 
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={onClose}>
            <div
                className={`bg-gray-950 border border-gray-800 rounded-md text-gray-100 w-full ${sizes[size]} p-6 shadow-lg`}
                onClick={(e) => e.stopPropagation()}
                ref={modalRef}>
                <div className="relative">
                    <button
                        onClick={onClose}
                        className="absolute top-0 right-0 text-gray-400 hover:text-gray-100 text-2xl leading-none"
                        aria-label="Close modal"
                        ref={closeButtonRef}>
                        ×
                    </button>
                    {title && <h2 className="font-bold text-lg mb-4 pr-8">{title}</h2>}
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
}