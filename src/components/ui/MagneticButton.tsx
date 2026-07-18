"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  download?: boolean | string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
  "aria-label"?: string;
};

export function MagneticButton({
  children,
  className,
  as = "button",
  href,
  onClick,
  download,
  target,
  rel,
  type = "button",
  "aria-label": ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.22, y: y * 0.22 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const shared = {
    ref: ref as React.RefObject<HTMLButtonElement & HTMLAnchorElement>,
    onMouseMove: handleMouse,
    onMouseLeave: reset,
    onClick,
    animate: { x: position.x, y: position.y },
    transition: { type: "spring" as const, stiffness: 220, damping: 18, mass: 0.4 },
    className: cn(
      "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      className
    ),
    "aria-label": ariaLabel,
    children,
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (as === "a" && href) {
    return (
      <motion.a
        {...shared}
        href={href}
        download={download}
        target={target}
        rel={rel}
      />
    );
  }

  return <motion.button {...shared} type={type} />;
}
