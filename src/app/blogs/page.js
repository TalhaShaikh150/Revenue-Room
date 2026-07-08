import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogClient } from "@/components/blog/BlogClient";

export const metadata = {
  title: "Blog | Revenue Room Digital",
  description:
    "Actionable digital marketing insights from the Revenue Room Digital team — covering SEO, paid social, web design, content strategy, and more.",
  keywords: [
    "digital marketing blog",
    "SEO tips Australia",
    "paid social advertising blog",
    "marketing strategy insights",
    "Revenue Room Digital blog",
  ],
  alternates: {
    canonical: "https://revenueroomdigital.com.au/blogs",
  },
  openGraph: {
    title: "Blog | Revenue Room Digital",
    description: "Actionable digital marketing insights from the Revenue Room Digital team.",
    url: "https://revenueroomdigital.com.au/blogs",
    siteName: "Revenue Room Digital",
    locale: "en_AU",
    type: "website",
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
