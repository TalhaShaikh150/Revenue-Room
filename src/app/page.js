import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/ui/Hero";
import { VideoSection } from "@/components/ui/VideoSection";
import { AboutSection } from "@/components/ui/AboutSection";
import { OfferingSection } from "@/components/ui/OfferingSection";
import { ServicesGrid } from "@/components/ui/ServicesGrid";
import { PricingSection } from "@/components/ui/PricingSection";
import { ResultsAccordion } from "@/components/ui/ResultsAccordion";
import { CTABanner } from "@/components/ui/CTABanner";
import { StatsDashboard } from "@/components/ui/StatsDashboard";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-brand-bg min-h-screen">
      {/* Navbar sits at the top */}
      <Navbar />

      {/* Hero Section takes up 100vh naturally */}
      <Hero />

      {/* Dynamic Parallax Video Section */}
      <VideoSection />

      {/* 
        NORMAL SCROLLING CONTENT
        Everything below here lives completely BELOW the fold.
      */}
      <div className="relative z-10 bg-brand-bg flex flex-col">
        {/* Dashboard added here with top padding so it has room to breathe */}
        <div className="pt-8 md:pt-12 pb-16 md:pb-24 px-4">
          <StatsDashboard />
        </div>

        {/* The rest of the site flows normally underneath */}
        <div className="flex flex-col gap-8 md:gap-16">
          <AboutSection />
          <OfferingSection />
          <ServicesGrid />
          <ResultsAccordion />
          <PricingSection />
          <CTABanner />
          <Footer />
        </div>
      </div>
    </main>
  );
}
