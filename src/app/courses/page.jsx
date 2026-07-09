import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CourseVideoSection } from "@/components/courses/CourseVideoSection";
import { CourseLogosSection } from "@/components/courses/CourseLogosSection";

export const metadata = {
  title: "Free Training | Revenue Room",
  description: "Get our exclusive free training and bonuses to scale your revenue.",
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
