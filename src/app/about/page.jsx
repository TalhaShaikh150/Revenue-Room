import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { OurPhilosophySection } from "@/components/about/OurPhilosophySection";
import { TeamSection } from "@/components/about/TeamSection";
import { CultureSection } from "@/components/about/CultureSection";

export const metadata = {
  title: "About Us | Revenue Room Digital",
  description:
    "Meet the team behind Revenue Room Digital, a performance-driven digital marketing agency helping Australian businesses grow through smart strategy, creative content, and data-backed campaigns.",
  keywords: [
    "about Revenue Room Digital",
    "digital marketing agency Australia",
    "who is Revenue Room Digital",
    "Australian marketing agency team",
    "performance marketing agency",
    "Revenue Room Digital story",
  ],
  alternates: {
    canonical: "https://revenueroomdigital.com.au/about",
  },
  openGraph: {
    title: "About Us | Revenue Room Digital",
    description:
      "Meet the performance-driven team behind Revenue Room Digital, built to grow Australian businesses.",
    url: "https://revenueroomdigital.com.au/about",
    siteName: "Revenue Room Digital",
    locale: "en_AU",
    type: "website",
  },
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
