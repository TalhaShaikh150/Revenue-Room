import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CaseStudiesHero } from "@/components/case-studies/CaseStudiesHero";
import { DetailedCaseStudiesGrid } from "@/components/case-studies/DetailedCaseStudiesGrid";
import { CaseStudiesMethodology } from "@/components/case-studies/CaseStudiesMethodology";
import { CTABanner } from "@/components/home/CTABanner";

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
    <main className="flex min-h-screen flex-col bg-brand-bg text-white overflow-hidden">
      <Navbar />
      
      <CaseStudiesHero />
      
      {/* Unique white section for case studies */}
      <div className="relative z-20">
        <CaseStudiesMethodology />
      </div>

      <DetailedCaseStudiesGrid />
      
      <div>
        <CTABanner />
      </div>

      <Footer />
    </main>
  );
}
