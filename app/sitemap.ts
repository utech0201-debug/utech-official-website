import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://utech.dev";
  return ["/", "/learning", "/labs", "/store"].map((path) => ({ url: base + path, lastModified: new Date() }));
}
