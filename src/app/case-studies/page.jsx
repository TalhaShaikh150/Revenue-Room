import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CaseStudiesHero } from "@/components/case-studies/CaseStudiesHero";
import { DetailedCaseStudiesGrid } from "@/components/case-studies/DetailedCaseStudiesGrid";
import { CaseStudiesMethodology } from "@/components/case-studies/CaseStudiesMethodology";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata = {
  title: "Case Studies | Revenue Room",
  description: "See how we've helped ambitious brands dominate their markets and scale their revenue.",
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
