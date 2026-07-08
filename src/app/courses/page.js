import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Digital Marketing Courses | Revenue Room Digital",
  description:
    "Learn digital marketing from industry practitioners. Revenue Room Digital offers hands-on courses in paid advertising, SEO, social media, and more — built for Australian marketers and business owners.",
  keywords: [
    "digital marketing courses Australia",
    "online marketing courses",
    "paid ads course",
    "SEO course Australia",
    "social media marketing course",
    "learn digital marketing",
    "marketing training Australia",
    "Revenue Room Digital",
  ],
  alternates: {
    canonical: "https://revenueroomdigital.com.au/courses",
  },
  openGraph: {
    title: "Digital Marketing Courses | Revenue Room Digital",
    description:
      "Learn digital marketing from industry practitioners with hands-on courses built for results.",
    url: "https://revenueroomdigital.com.au/courses",
    siteName: "Revenue Room Digital",
    locale: "en_AU",
    type: "website",
  },
};

export default function CoursesPage() {
  return (
    <main className="bg-brand-bg min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Digital Marketing Courses
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl">
          Practical, no-fluff digital marketing courses taught by practitioners
          who run real campaigns every day. Learn paid ads, SEO, social media,
          and more — and start getting results immediately.
        </p>
      </div>
      <Footer />
    </main>
  );
}
