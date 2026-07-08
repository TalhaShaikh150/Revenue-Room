import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "About Us | Revenue Room Digital",
  description:
    "Meet the team behind Revenue Room Digital — a performance-driven digital marketing agency helping Australian businesses grow through smart strategy, creative content, and data-backed campaigns.",
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
      "Meet the performance-driven team behind Revenue Room Digital — built to grow Australian businesses.",
    url: "https://revenueroomdigital.com.au/about",
    siteName: "Revenue Room Digital",
    locale: "en_AU",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-brand-bg min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Who We Are
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl">
          Revenue Room Digital is a performance marketing agency built for
          ambitious Australian brands. We combine data-driven strategy with
          world-class creative to deliver results that actually move the needle.
        </p>
      </div>
      <Footer />
    </main>
  );
}
