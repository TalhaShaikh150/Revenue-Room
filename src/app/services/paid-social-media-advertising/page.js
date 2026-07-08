import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Paid Social Media Advertising | Revenue Room Digital",
  description:
    "Maximise your ROI with expert paid social media advertising on Facebook, Instagram, TikTok, and LinkedIn. Revenue Room Digital crafts high-converting ad campaigns for Australian businesses.",
  keywords: [
    "paid social media advertising Australia",
    "Facebook Ads agency",
    "Instagram Ads",
    "TikTok Ads agency",
    "LinkedIn Ads",
    "social media advertising",
    "paid social agency Australia",
    "Revenue Room Digital",
  ],
  alternates: {
    canonical:
      "https://revenueroomdigital.com.au/services/paid-social-media-advertising",
  },
  openGraph: {
    title: "Paid Social Media Advertising | Revenue Room Digital",
    description:
      "Maximise your ROI with expert paid social media advertising on Facebook, Instagram, TikTok, and LinkedIn.",
    url: "https://revenueroomdigital.com.au/services/paid-social-media-advertising",
    siteName: "Revenue Room Digital",
    locale: "en_AU",
    type: "website",
  },
};

export default function PaidSocialPage() {
  return (
    <main className="bg-brand-bg min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Paid Social Media Advertising
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl">
          We build and manage high-ROI paid social campaigns across Facebook,
          Instagram, TikTok, and LinkedIn — combining creative strategy with
          precision targeting to grow your brand and revenue.
        </p>
      </div>
      <Footer />
    </main>
  );
}
