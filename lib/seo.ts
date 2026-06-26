import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

interface PageMeta {
  title: string;
  description: string;
  path: string;
}

/** Build per-page metadata with canonical URL and Open Graph / Twitter tags. */
export function createMetadata({ title, description, path }: PageMeta): Metadata {
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.fullName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${siteConfig.name}`,
      description,
    },
  };
}
