import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import JsonLd from "@/components/seo/JsonLd";
import { ORGANIZATION_ID, SITE_EMAIL, SITE_URL, WEBSITE_ID, absoluteUrl } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "optional",
  fallback: ["Consolas", "Monaco", "monospace"],
});

const GOOGLE_ANALYTICS_ID = "G-E8RRBRE3X8";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Devzoo | Website Development, Digital Marketing & Design Agency",
    template: "%s | Devzoo",
  },
  description:
    "Devzoo is a modern digital agency delivering clean websites, digital marketing, graphic design, and video editing for startups and small businesses. No shortcuts. No jargon. Just results.",
  keywords: [
    "digital agency",
    "website development agency",
    "digital marketing agency",
    "graphic design agency",
    "video editing services",
    "web design Pakistan",
    "digital agency for startups",
    "small business digital agency",
    "SEO agency",
    "social media marketing",
    "brand identity design",
    "Devzoo",
  ],
  authors: [
    { name: "Ehtasham ul Haq", url: SITE_URL },
    { name: "Muhammad Umar Malik", url: SITE_URL },
    { name: "Awais Hassan", url: SITE_URL },
  ],
  creator: "Devzoo",
  publisher: "Devzoo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Devzoo",
    title: "Devzoo | Website Development, Digital Marketing & Design Agency",
    description:
      "Clean websites, smart marketing, and sharp design for startups and small businesses. No shortcuts. No jargon. Just results.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devzoo — Digital Agency for Startups & Small Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devzoo | Website Development, Digital Marketing & Design Agency",
    description:
      "Clean websites, smart marketing, and sharp design for startups and small businesses. No shortcuts. No jargon.",
    images: ["/og-image.png"],
    creator: "@thedevzoo",
    site: "@thedevzoo",
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "1276x1277", type: "image/png" },
      { url: "/favicon.png", sizes: "25x25", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: [{ url: "/apple-icon.png", sizes: "1276x1277", type: "image/png" }],
  },
  verification: {
    google: "AktPOBCodwH8KtQR3UhXGbcoBNGcRc3J5PIxRizKMT0",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}');
          `}
        </Script>
      </head>
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col bg-surface-light font-body text-surface-dark"
      >
        <JsonLd data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": ORGANIZATION_ID,
            "name": "Devzoo",
            "url": SITE_URL,
            "logo": absoluteUrl("/logo12.png"),
            "description": "Devzoo is a modern digital agency delivering clean websites, digital marketing, graphic design, and video editing for startups, creators, and small businesses.",
            "email": SITE_EMAIL,
            "founders": [
              { "@type": "Person", "name": "Ehtasham ul Haq", "jobTitle": "Founder & CEO" },
              { "@type": "Person", "name": "Muhammad Umar Malik", "jobTitle": "Co-Founder & CTO" },
              { "@type": "Person", "name": "Awais Hassan", "jobTitle": "Co-Founder" },
            ],
            "areaServed": ["US", "GB", "AE", "PK"],
            "serviceType": [
              "Website Development",
              "Digital Marketing",
              "Graphic Design",
              "Video Editing",
            ],
            "sameAs": [
              "https://www.linkedin.com/company/thedevzoo",
              "https://www.instagram.com/thedevzoo",
              "https://www.facebook.com/profile.php?id=61567527057865",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": WEBSITE_ID,
            "url": SITE_URL,
            "name": "Devzoo",
            "description": "Digital agency for startups and small businesses — websites, marketing, design, and video.",
            "publisher": { "@id": ORGANIZATION_ID },
            "potentialAction": {
              "@type": "SearchAction",
              "target": absoluteUrl("/portfolio?q={search_term_string}"),
              "query-input": "required name=search_term_string",
            },
          },
        ]} />
        <CustomCursor />
        <WhatsAppFloat />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
