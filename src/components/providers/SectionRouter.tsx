"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  isSectionPath,
  pathToSectionId,
  sectionIdToPath,
  sectionRoutes,
} from "@/lib/routes";
import { getActiveSectionId, scrollToSectionId } from "@/lib/scroll";

/** Keeps clean paths (/about, /contact) in sync with page sections. */
export function SectionRouter() {
  const pathname = usePathname();
  const router = useRouter();
  const lockRef = useRef(false);
  const pathRef = useRef(pathname);

  pathRef.current = pathname;

  // Legacy hash URLs → /about, /contact, …
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    if (!sectionRoutes.some((s) => s.id === hash)) return;
    router.replace(sectionIdToPath(hash));
  }, [router]);

  // Path → scroll to section
  useEffect(() => {
    if (!isSectionPath(pathname)) return;

    const id = pathToSectionId(pathname);
    lockRef.current = true;

    const timer = window.setTimeout(() => {
      scrollToSectionId(id);
      window.setTimeout(() => {
        lockRef.current = false;
      }, 1000);
    }, 80);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  // Scroll → update path (no #hash)
  useEffect(() => {
    let ticking = false;

    const sync = () => {
      ticking = false;
      if (lockRef.current) return;

      const id = getActiveSectionId();
      const next = sectionIdToPath(id);
      if (next !== pathRef.current) {
        router.replace(next, { scroll: false });
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(sync);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [router]);

  return null;
}
