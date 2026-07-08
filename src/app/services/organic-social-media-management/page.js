import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Organic Social Media Management | Revenue Room Digital",
  description:
    "Build a loyal following and grow your brand organically. Revenue Room Digital manages your social media accounts with compelling content, strategic posting, and community management for Australian businesses.",
  keywords: [
    "organic social media management Australia",
    "social media management agency",
    "content creation agency",
    "Instagram management",
    "Facebook page management",
    "social media marketing Australia",
    "community management",
    "Revenue Room Digital",
  ],
  alternates: {
    canonical:
      "https://revenueroomdigital.com.au/services/organic-social-media-management",
  },
  openGraph: {
    title: "Organic Social Media Management | Revenue Room Digital",
    description:
      "Build a loyal following and grow your brand organically with strategic social media management.",
    url: "https://revenueroomdigital.com.au/services/organic-social-media-management",
    siteName: "Revenue Room Digital",
    locale: "en_AU",
    type: "website",
  },
};

export default function OrganicSocialPage() {
  return (
    <main className="bg-brand-bg min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Organic Social Media Management
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl">
          We manage your brand&apos;s social presence end-to-end — from content
          creation and scheduling to community engagement — building authentic
          audiences that drive long-term business growth.
        </p>
      </div>
      <Footer />
    </main>
  );
}
