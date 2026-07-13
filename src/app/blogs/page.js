import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogClient } from "@/components/blog/BlogClient";

export const metadata = {
  title: "Digital Marketing Blog | Revenue Room Digital",
  description:
    "No-fluff digital marketing insights from the Revenue Room Digital team. Learn how to grow your business with SEO, Google Ads, paid social, web design, and video content — written by the people doing it every day.",
  keywords: [
    "digital marketing blog Australia",
    "SEO tips Australia",
    "Google Ads tips",
    "paid social advertising guide",
    "marketing strategy for Australian businesses",
    "Revenue Room Digital blog",
    "how to grow business online Australia",
  ],
  alternates: {
    canonical: "https://revenueroomdigital.com.au/blogs",
  },
  openGraph: {
    title: "Digital Marketing Blog | Revenue Room Digital",
    description:
      "No-fluff digital marketing insights from the team that grows Australian brands every day. SEO, paid social, web design, video, and more.",
    url: "https://revenueroomdigital.com.au/blogs",
    siteName: "Revenue Room Digital",
    locale: "en_AU",
    type: "website",
    images: [{ url: "https://revenueroomdigital.com.au/og-image.svg", width: 1200, height: 630, alt: "Revenue Room Digital Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Blog | Revenue Room Digital",
    description: "No-fluff digital marketing insights from the team that grows Australian brands.",
    images: ["https://revenueroomdigital.com.au/og-image.svg"],
  },
};

export default function BlogsPage() {
  return (
    <main className="bg-brand-bg min-h-screen">
      <Navbar />
      <BlogClient />
      <Footer />
    </main>
  );
}
