import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Video Editing & Production Services | Revenue Room Digital",
  description:
    "Professional video editing and production for brands, ads, and social media. Revenue Room Digital creates scroll-stopping video content that drives engagement and conversions for Australian businesses.",
  keywords: [
    "video editing agency Australia",
    "video production agency",
    "social media video editing",
    "ad video production",
    "UGC video editing",
    "reel editing Australia",
    "short form video production",
    "Revenue Room Digital",
  ],
  alternates: {
    canonical:
      "https://revenueroomdigital.com.au/services/video-editing-production",
  },
  openGraph: {
    title: "Video Editing & Production Services | Revenue Room Digital",
    description:
      "Professional video editing and production for brands, ads, and social media.",
    url: "https://revenueroomdigital.com.au/services/video-editing-production",
    siteName: "Revenue Room Digital",
    locale: "en_AU",
    type: "website",
  },
};

export default function VideoEditingPage() {
  return (
    <main className="bg-brand-bg min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Video Editing &amp; Production
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl">
          From short-form reels to full ad productions, our video team creates
          polished, scroll-stopping content that captures attention and drives
          action across every platform.
        </p>
      </div>
      <Footer />
    </main>
  );
}
