import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "Portfolio | Web Development, Design & Marketing Case Studies | Devzoo",
  },
  description:
    "Browse Devzoo's portfolio of web development, digital marketing, graphic design, and video editing projects. Real work for real businesses — with results.",
  alternates: { canonical: "https://thedevzoo.com/portfolio" },
  keywords: [
    "Devzoo portfolio", "web development case studies", "digital agency work",
    "design portfolio", "marketing results", "client projects",
  ],
  openGraph: {
    title: "Portfolio | Devzoo Case Studies",
    description:
      "Real projects for real businesses. Every case study shows the problem, the approach, and the result.",
    url: "https://thedevzoo.com/portfolio",
  },
  twitter: {
    title: "Portfolio | Devzoo Case Studies",
    description: "Real projects for real businesses. Every case study shows the problem, the approach, and the result.",
  },
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Devzoo Portfolio",
          url: "https://thedevzoo.com/portfolio",
          description:
            "Portfolio of web development, digital marketing, graphic design, and video editing projects delivered by Devzoo for startups and small businesses.",
          publisher: { "@id": "https://thedevzoo.com/#organization" },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://thedevzoo.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Portfolio",
                item: "https://thedevzoo.com/portfolio",
              },
            ],
          },
        }}
      />
      {children}
    </>
  );
}
