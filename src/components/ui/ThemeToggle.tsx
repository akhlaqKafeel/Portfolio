"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme !== "light";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border-subtle bg-elevated/80 text-champagne shadow-[0_8px_20px_-12px_var(--shadow-color)] backdrop-blur-xl",
        "transition-[transform,border-color,background-color,box-shadow] duration-200 ease-out",
        "hover:scale-[1.04] hover:border-accent/40 hover:bg-accent/10",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "active:scale-95",
        className
      )}
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--glow), transparent 65%)",
        }}
        aria-hidden
      />
      {mounted ? (
        <span
          key={isDark ? "sun" : "moon"}
          className="theme-toggle-icon relative z-[1] flex items-center justify-center text-accent"
        >
          {isDark ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
        </span>
      ) : (
        <span className="relative z-[1] h-4 w-4" aria-hidden />
      )}
    </button>
  );
}
