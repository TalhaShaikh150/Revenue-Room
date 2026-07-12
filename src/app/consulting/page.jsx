import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConsultingHero } from "@/components/consulting/ConsultingHero";
import { ConsultingServices } from "@/components/consulting/ConsultingServices";
import { ConsultingProcess } from "@/components/consulting/ConsultingProcess";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata = {
  title: "Digital Marketing Consulting | Revenue Room Digital",
  description:
    "Get expert digital marketing consulting from Revenue Room Digital. We work with Australian brands and agencies to audit, strategise, and optimise their marketing for maximum growth and profitability.",
  keywords: [
    "digital marketing consulting Australia",
    "marketing consultant Australia",
    "marketing strategy consultant",
    "paid ads consultant",
    "growth marketing consultant",
    "marketing audit Australia",
    "fractional CMO Australia",
    "Revenue Room Digital",
  ],
  alternates: {
    canonical: "https://revenueroomdigital.com.au/consulting",
  },
  openGraph: {
    title: "Digital Marketing Consulting | Revenue Room Digital",
    description:
      "Expert digital marketing consulting to audit, strategise, and accelerate growth for Australian businesses.",
    url: "https://revenueroomdigital.com.au/consulting",
    siteName: "Revenue Room Digital",
    locale: "en_AU",
    type: "website",
  },
};

export default function ConsultingPage() {
  return (
    <main className="bg-brand-bg min-h-screen">
      <Navbar />
      <ConsultingHero />
      <ConsultingServices />
      <ConsultingProcess />
      <CTABanner />
      <Footer />
    </main>
  );
}
