import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Case Studies | Revenue Room Digital",
  description:
    "See real results from real businesses. Explore Revenue Room Digital's case studies to discover how we've helped Australian brands scale their revenue through SEO, paid social, and performance marketing.",
  keywords: [
    "digital marketing case studies Australia",
    "Revenue Room Digital results",
    "paid ads case study",
    "SEO case study Australia",
    "marketing agency results",
    "ecommerce marketing case study",
    "client success stories",
    "Revenue Room Digital",
  ],
  alternates: {
    canonical: "https://revenueroomdigital.com.au/case-studies",
  },
  openGraph: {
    title: "Case Studies | Revenue Room Digital",
    description:
      "Real results from real businesses — explore how Revenue Room Digital drives measurable growth.",
    url: "https://revenueroomdigital.com.au/case-studies",
    siteName: "Revenue Room Digital",
    locale: "en_AU",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-brand-bg min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Case Studies
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl">
          Real campaigns. Real numbers. See exactly how we&apos;ve helped
          Australian brands scale their revenue, reduce wasted ad spend, and
          achieve sustainable growth.
        </p>
      </div>
      <Footer />
    </main>
  );
}
