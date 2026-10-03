import type { Metadata } from "next";
import { SITE_NAME, absoluteUrl } from "./site";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
}

/** Per-page metadata: unique title and description, a canonical URL, and matching social tags. */
export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = `${title} | ${SITE_NAME}`;
  // A page-level openGraph/twitter object replaces the root one, so the share image is repeated here.
  const image = {
    url: absoluteUrl("/opengraph-image"),
    width: 1200,
    height: 630,
    alt: "Pzync: connect Android to Ubuntu and Windows",
  };
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", siteName: SITE_NAME, title: fullTitle, description, url, images: [image] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image.url] },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
