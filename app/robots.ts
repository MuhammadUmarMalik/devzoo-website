import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/_not-found"],
      },
    ],
    sitemap: "https://thedevzoo.com/sitemap.xml",
    host: "https://thedevzoo.com",
  };
}
