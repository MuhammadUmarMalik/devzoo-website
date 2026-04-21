import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";

const BASE = "https://thedevzoo.com";
const LAST_MODIFIED = new Date("2026-04-21");

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioPages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${BASE}/portfolio/${cs.slug}`,
    lastModified: LAST_MODIFIED,
  }));

  return [
    { url: BASE,                                    lastModified: LAST_MODIFIED },
    { url: `${BASE}/about`,                         lastModified: LAST_MODIFIED },
    { url: `${BASE}/services`,                      lastModified: LAST_MODIFIED },
    { url: `${BASE}/services/web-development`,      lastModified: LAST_MODIFIED },
    { url: `${BASE}/services/digital-marketing`,    lastModified: LAST_MODIFIED },
    { url: `${BASE}/services/graphic-design`,       lastModified: LAST_MODIFIED },
    { url: `${BASE}/services/video-editing`,        lastModified: LAST_MODIFIED },
    { url: `${BASE}/portfolio`,                     lastModified: LAST_MODIFIED },
    { url: `${BASE}/pricing`,                       lastModified: LAST_MODIFIED },
    { url: `${BASE}/contact`,                       lastModified: LAST_MODIFIED },
    { url: `${BASE}/privacy-policy`,                lastModified: LAST_MODIFIED },
    { url: `${BASE}/terms`,                         lastModified: LAST_MODIFIED },
    { url: `${BASE}/disclaimer`,                    lastModified: LAST_MODIFIED },
    ...portfolioPages,
  ];
}
