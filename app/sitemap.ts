import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

const routes = [
  "",
  "/about",
  "/team",
  "/events",
  "/sponsorship",
  "/join",
  "/guides",
  "/guides/faq",
  "/guides/first-year-guide",
  "/resources",
  "/community",
  "/ba2250",
  "/contact",
  "/constitution",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-01-16");
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
