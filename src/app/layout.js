import { Plus_Jakarta_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Revenue Room - Marketing Agency",
  description: "Fueling the Next Generation of Brands",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="min-h-screen relative overflow-x-hidden flex flex-col font-sans bg-brand-bg text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
