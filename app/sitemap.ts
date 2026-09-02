import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: Array<[string, number]> = [
    ["/", 1],
    ["/services", 0.9],
    ["/about", 0.8],
    ["/portfolio", 0.8],
    ["/contact", 0.9],
    ["/privacy-policy", 0.3],
    ["/terms-of-service", 0.3],
  ];
  return routes.map(([path, priority]) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
