import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThreePillars } from "@/components/ui/ThreePillars";
import { AboutSection } from "@/components/ui/AboutSection";
import { OfferingSection } from "@/components/ui/OfferingSection";
import { ServicesGrid } from "@/components/ui/ServicesGrid";
import { PricingSection } from "@/components/ui/PricingSection";
import { ResultsAccordion } from "@/components/ui/ResultsAccordion";
import { CTABanner } from "@/components/ui/CTABanner";

export default function Home() {
  return (
    <main className="bg-brand-bg min-h-screen">
      {/* 
        STICKY LAYER (z-0)
        Stays fixed in the background while the rest of the page scrolls over it 
      */}
      <div className="sticky top-0 z-0 h-screen flex flex-col overflow-hidden">
        <Navbar />
        <ThreePillars />
      </div>

      {/* 
        SCROLLING LAYER (z-10)
        Everything here scrolls up and covers the sticky hero.
        We apply bg-brand-bg so it blocks out the hero behind it once it covers it.
      */}
      <div className="relative z-10 bg-brand-bg rounded-t-[40px] flex flex-col">
        {/* About is currently white, acting as a visual break */}
        <AboutSection />
        
        {/* The rest of the page content */}
        <OfferingSection />
        <ServicesGrid />
        <ResultsAccordion />
        <PricingSection />
        <CTABanner />
        <Footer />
      </div>
    </main>
  );
}