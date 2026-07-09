import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { OurPhilosophySection } from "@/components/about/OurPhilosophySection";
import { TeamSection } from "@/components/about/TeamSection";
import { CultureSection } from "@/components/about/CultureSection";

export const metadata = {
  title: "Who We Are | Revenue Room",
  description: "Australia's first 24/7 marketing agency. We never sleep so your growth doesn't have to.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-bg text-white overflow-hidden">
      <Navbar />
      
      <AboutHeroSection />
      
      <div className="relative z-20">
        <OurPhilosophySection />
      </div>

      <TeamSection />
      
      <div className="border-t border-white/5">
        <CultureSection />
      </div>

      <Footer />
    </main>
  );
}
