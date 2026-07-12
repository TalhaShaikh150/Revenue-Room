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
    "Revenue Room Digital is Australia's performance marketing agency specialising in SEO, Google Ads, paid social, web development, and video production — built to grow your revenue.",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="min-h-screen relative overflow-x-hidden flex flex-col font-sans bg-brand-bg text-white">
        <MotionProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}
