/**
 * Next.js Sitemap - Auto-generated for Google Search Console submission
 * Domain: revenueroomdigital.com.au
 *
 * To submit: after deployment, go to Google Search Console and add:
 * https://revenueroomdigital.com.au/sitemap.xml
 */

import { blogPosts } from "@/data/blog-posts";

export default function sitemap() {
  const baseUrl = "https://revenueroomdigital.com.au";

  const routes = [
    // Homepage — highest priority, refreshed weekly
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ─── Services ───────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/services/seo-google-ai-search-advertising`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/paid-social-media-advertising`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/web-development-landing-pages`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/organic-social-media-management`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/video-editing-production`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ─── Main Pages ─────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/consulting`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // ─── Dynamic Blog Posts ─────────────────────────────────────────────────
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.75,
  }));

  return [...routes, ...blogRoutes];
}
