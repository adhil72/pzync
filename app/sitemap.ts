import type { MetadataRoute } from "next";
import { CONTENT_UPDATED, absoluteUrl } from "../src/lib/site";
import { guides } from "../src/lib/guides";

export const dynamic = "force-static";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
  images?: string[];
};

const pages: Entry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly", images: ["/opengraph-image", "/screenshot.png"] },
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
  // A fixed content date is more trustworthy to crawlers than "now" on every build.
  const lastModified = new Date(CONTENT_UPDATED);
  return pages.map(({ path, priority, changeFrequency, images }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
    ...(images ? { images: images.map(absoluteUrl) } : {}),
  }));
}
