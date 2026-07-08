import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "SEO, Google & AI Search Advertising | Revenue Room Digital",
  description:
    "Drive more revenue with data-driven SEO, Google Ads, and AI-powered search advertising. Revenue Room Digital helps Australian businesses dominate search results and convert clicks into customers.",
  keywords: [
    "SEO agency Australia",
    "Google Ads management",
    "AI search advertising",
    "search engine optimisation",
    "Google search ads",
    "paid search Australia",
    "SEM agency",
    "Revenue Room Digital",
  ],
  alternates: {
    canonical:
      "https://revenueroomdigital.com.au/services/seo-google-ai-search-advertising",
  },
  openGraph: {
    title: "SEO, Google & AI Search Advertising | Revenue Room Digital",
    description:
      "Drive more revenue with data-driven SEO, Google Ads, and AI-powered search advertising.",
    url: "https://revenueroomdigital.com.au/services/seo-google-ai-search-advertising",
    siteName: "Revenue Room Digital",
    locale: "en_AU",
    type: "website",
  },
};

export default function SeoGoogleAiSearchPage() {
  return (
    <main className="bg-brand-bg min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          SEO, Google &amp; AI Search Advertising
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl">
          Dominate search results and turn intent into revenue with our
          full-stack search marketing services — from technical SEO and content
          strategy to Google Ads and the latest AI-powered search placements.
        </p>
      </div>
      <Footer />
    </main>
  );
}
