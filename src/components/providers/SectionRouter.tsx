"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pathToSectionId } from "@/lib/routes";
import { scrollToSectionId } from "@/lib/scroll";

/**
 * On /contact (etc.) load or nav → scroll once to that section.
 * Never updates the URL while scrolling (prevents request loops).
 */
export function SectionRouter() {
  const pathname = usePathname();

  useEffect(() => {
    const id = pathToSectionId(pathname);

    const timer = window.setTimeout(() => {
      if (id === "home") {
        if (pathname === "/" && window.scrollY > 80) {
          scrollToSectionId("home");
        }
        return;
      }
      scrollToSectionId(id);
    }, 60);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
