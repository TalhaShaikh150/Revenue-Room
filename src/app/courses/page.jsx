import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CourseVideoSection } from "@/components/courses/CourseVideoSection";
import { CourseLogosSection } from "@/components/courses/CourseLogosSection";

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
    <main className="flex min-h-screen flex-col bg-brand-bg text-white">
      <Navbar />
      
      {/* We add some padding top so the navbar doesn't overlap the content too awkwardly */}
      <div className="pt-[100px] md:pt-[120px]">
        <CourseVideoSection />
        <CourseLogosSection />
      </div>

      <Footer />
    </main>
  );
}
