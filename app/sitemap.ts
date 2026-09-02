import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/config";
import { fighters } from "@/lib/fighters";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...fighters.map((f) => ({
      url: `${siteUrl}/fighters/${f.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
