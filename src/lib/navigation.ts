"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { pathToSectionId } from "@/lib/routes";
import { scrollToSectionId } from "@/lib/scroll";

/** Navigate to /about, /contact, etc. and scroll — one request max, no loop. */
export function useSectionNav() {
  const router = useRouter();

  return useCallback(
    (path: string) => {
      const id = pathToSectionId(path);
      const href = path.startsWith("/") ? path.split("#")[0] : `/${path}`;
      const target = href === "/home" ? "/" : href;

      router.push(target, { scroll: false });

      // Scroll after route commit; layout persists so content stays mounted
      window.setTimeout(() => {
        scrollToSectionId(id);
      }, 40);
    },
    [router]
  );
}
