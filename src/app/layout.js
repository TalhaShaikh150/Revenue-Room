import { Plus_Jakarta_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { MotionProvider } from "@/components/ui/Motion";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Revenue Room Digital | Performance Marketing Agency Australia",
  description:
    "Revenue Room Digital is Australia's performance marketing agency specialising in SEO, Google Ads, paid social, web development, and video production, built to grow your revenue.",
  keywords: [
    "digital marketing agency Australia",
    "performance marketing agency",
    "SEO agency Australia",
    "Google Ads agency Australia",
    "paid social agency",
    "Revenue Room Digital",
  ],
  metadataBase: new URL("https://revenueroomdigital.com.au"),
  alternates: {
    canonical: "https://revenueroomdigital.com.au",
  },
  openGraph: {
    title: "Revenue Room Digital | Performance Marketing Agency Australia",
    description:
      "Fueling the next generation of Australian brands with data-driven digital marketing.",
    url: "https://revenueroomdigital.com.au",
    siteName: "Revenue Room Digital",
    locale: "en_AU",
    type: "website",
    images: [{ url: "https://revenueroomdigital.com.au/og-image.svg", width: 1200, height: 630, alt: "Revenue Room Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue Room Digital | Performance Marketing Agency Australia",
    description: "Fueling the next generation of Australian brands with data-driven digital marketing.",
    images: ["https://revenueroomdigital.com.au/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://revenueroomdigital.com.au/#organization",
      "name": "Revenue Room Digital",
      "url": "https://revenueroomdigital.com.au",
      "logo": "https://revenueroomdigital.com.au/og-image.svg",
      "telephone": "+61438365241",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+61438365241",
        "contactType": "customer service"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://revenueroomdigital.com.au/#website",
      "url": "https://revenueroomdigital.com.au",
      "name": "Revenue Room Digital",
      "publisher": {
        "@id": "https://revenueroomdigital.com.au/#organization"
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={plusJakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen relative overflow-x-hidden flex flex-col font-sans bg-brand-bg text-white">
        <MotionProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}
