import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
      <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Digital Marketing Consulting
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl">
          We partner with brands and in-house teams to provide strategic
          marketing consulting — from deep-dive audits and channel strategy to
          ongoing advisory that helps you grow faster and spend smarter.
        </p>
      </div>
      <Footer />
    </main>
  );
}
