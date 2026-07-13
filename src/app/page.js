import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { VideoSection } from "@/components/home/VideoSection";
import dynamic from "next/dynamic";

const StatsDashboard = dynamic(() => import("@/components/home/StatsDashboard").then(mod => mod.StatsDashboard));
const AboutSection = dynamic(() => import("@/components/home/AboutSection").then(mod => mod.AboutSection));
const OfferingSection = dynamic(() => import("@/components/home/OfferingSection").then(mod => mod.OfferingSection));
const CaseStudiesSection = dynamic(() => import("@/components/home/CaseStudiesSection").then(mod => mod.CaseStudiesSection));
const WhyMattersSection = dynamic(() => import("@/components/home/WhyMattersSection").then(mod => mod.WhyMattersSection));
const WastedSpendSection = dynamic(() => import("@/components/home/WastedSpendSection").then(mod => mod.WastedSpendSection));
const ServicesGrid = dynamic(() => import("@/components/home/ServicesGrid").then(mod => mod.ServicesGrid));
const FAQSection = dynamic(() => import("@/components/home/FAQSection").then(mod => mod.FAQSection));
const CTABanner = dynamic(() => import("@/components/home/CTABanner").then(mod => mod.CTABanner));
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Revenue Room Digital | Growth Marketing & Web Development Agency",
  description: "Australia's 24/7 digital marketing agency. We scale businesses with elite SEO, Google Ads, Meta Ads, and high-converting Web Development.",
  alternates: {
    canonical: "https://revenueroomdigital.com.au",
  },
  openGraph: {
    title: "Revenue Room Digital | Growth Marketing Agency",
    description: "Australia's 24/7 digital marketing agency. We scale businesses with elite SEO, Google Ads, Meta Ads, and high-converting Web Development.",
    url: "https://revenueroomdigital.com.au",
  },
};

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
        <div className="flex flex-col">
          <AboutSection />
          <OfferingSection />
          <CaseStudiesSection />
          <WhyMattersSection />
          <WastedSpendSection />
          <ServicesGrid />
          <FAQSection />
        </div>
        
        {/* CTABanner outside the gap container so it has no margin */}
        <CTABanner />
        
        <Footer />
      </div>
    </main>
  );
}
