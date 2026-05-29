import { MetadataRoute } from "next";

const base = "https://lincheng.art";

const staticPages = [
  "",
  "/ai-lab",
  "/cats",
  "/song-aesthetic",
  "/handbook",
  "/about",
  "/ceramics",
  "/gallery",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    }));
}
