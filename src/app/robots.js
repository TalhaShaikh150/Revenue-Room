/**
 * Next.js robots.txt generation
 * Tells search engines what to crawl and where the sitemap is
 */
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/api/"],
    },
    sitemap: "https://revenueroomdigital.com.au/sitemap.xml",
  };
}
