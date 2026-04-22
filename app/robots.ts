import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedevzoo.com";
  const hostOnly = (() => {
    try {
      return new URL(baseUrl).host;
    } catch {
      return "thedevzoo.com";
    }
  })();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/_next/", "/api/"],
      },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "DeepSeekBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "CCBot", disallow: "/" },
    ],
    sitemap: `${baseUrl.replace(/\/$/, "")}/sitemap.xml`,
    host: hostOnly,
  };
}
