import type { MetadataRoute } from "next";
import { sectionRoutes } from "@/lib/routes";

const siteUrl = "https://akhlaqkafel.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return sectionRoutes.map((route) => ({
    url: route.path === "/" ? siteUrl : `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route.path === "/" ? 1 : 0.8,
  }));
}
