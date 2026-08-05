import type { MetadataRoute } from "next";
import { SITE_HOST, SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/gone/", "/api/"],
      },
    ],
    host: SITE_HOST,
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
