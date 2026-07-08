"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";
import { blogPosts, getCategoryColor } from "@/data/blog-posts";

const CATEGORIES = ["All", "SEO", "Paid Social", "Web Design", "Social Media", "Video"];

function CategoryBadge({ category, categoryColor }) {
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border tracking-wider uppercase ${getCategoryColor(categoryColor)}`}>
      {category}
    </span>
  );
}

function BlogCard({ post, featured = false }) {
  if (featured) {
    return (
      <Link href={`/blogs/${post.slug}`} className="group block">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-brand-lime/30 transition-all duration-300">
          {/* Image */}
          <div className="relative h-64 lg:h-auto overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-bg/40 hidden lg:block" />
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <CategoryBadge category={post.category} categoryColor={post.categoryColor} />
              <span className="text-xs font-bold text-brand-lime/60 uppercase tracking-widest">Featured</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-brand-lime transition-colors duration-300 leading-tight">
              {post.title}
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-xs text-gray-500 mb-8">
              <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
            </div>
            <span className="flex items-center gap-2 text-brand-lime font-bold text-sm group-hover:gap-4 transition-all duration-300">
              Read Article <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blogs/${post.slug}`} className="group block">
      <div className="flex flex-col h-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-brand-lime/30 transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-4">
            <CategoryBadge category={post.category} categoryColor={post.categoryColor} />
          </div>
          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-lime transition-colors duration-300 leading-snug flex-grow">
            {post.title}
          </h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1.5"><User className="w-3 h-3" /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readTime}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-brand-lime opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function BlogClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = blogPosts.find((p) => p.featured);
  const filtered = blogPosts
    .filter((p) => !p.featured)
    .filter((p) => activeCategory === "All" || p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 bg-brand-lime rounded-sm animate-pulse-slow" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
            Insights & Strategy
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
          The Revenue Room <br />
          <span className="text-transparent [-webkit-text-stroke:1px_#d8fc4d]">Blog.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          No fluff. No generic advice. Just actionable insights from the team that grows brands for a living.
        </p>
      </div>

      {/* Featured Post */}
      {featured && (
        <div className="mb-16">
          <BlogCard post={featured} featured />
        </div>
      )}

      {/* Category Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-bold border transition-all duration-200 ${
              activeCategory === cat
                ? "bg-brand-lime text-black border-brand-lime"
                : "bg-white/5 text-white/70 border-white/10 hover:border-white/30 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-gray-500">
          No posts in this category yet. Check back soon!
        </div>
      )}
    </div>
  );
}
