import type { MetadataRoute } from "next";
import { absoluteUrl } from "../src/lib/site";
import { guides } from "../src/lib/guides";

export const dynamic = "force-static";

const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  ...guides.map((g) => ({ path: `/${g.slug}`, priority: 0.9, changeFrequency: "monthly" as const })),
  { path: "/docs", priority: 0.8, changeFrequency: "monthly" },
  { path: "/support", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/changelog", priority: 0.6, changeFrequency: "weekly" },
  { path: "/contribute", priority: 0.5, changeFrequency: "monthly" },
  { path: "/license", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
