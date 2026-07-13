import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { blogPosts, getBlogPost, getCategoryColor } from "@/data/blog-posts";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Revenue Room Digital`,
    description: post.excerpt,
    alternates: {
      canonical: `https://revenueroomdigital.com.au/blogs/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://revenueroomdigital.com.au/blogs/${post.slug}`,
      siteName: "Revenue Room Digital",
      images: [{ url: post.coverImage }],
      locale: "en_AU",
      type: "article",
    },
  };
}

// Renders markdown-like content into clean HTML elements
function ArticleBody({ content }) {
  const lines = content.trim().split("\n");
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 tracking-tight">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-white mt-10 mb-4">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      // Collect consecutive list items
      const items = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2 my-6 pl-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime shrink-0 mt-2" />
              <span dangerouslySetInnerHTML={{ __html: renderInline(item) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (/^\d+\. /.test(line)) {
      // Numbered list
      const items = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="space-y-2 my-6 pl-4 list-none">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-300">
              <span className="text-brand-lime font-bold shrink-0 tabular-nums">{idx + 1}.</span>
              <span dangerouslySetInnerHTML={{ __html: renderInline(item) }} />
            </li>
          ))}
        </ol>
      );
      continue;
    } else if (line.startsWith("```")) {
      // Code block
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre key={`code-${i}`} className="bg-white/5 border border-white/10 rounded-xl p-6 my-6 overflow-x-auto text-sm text-brand-lime font-mono">
          <code>{codeLines.join("\n")}</code>
        </pre>
      );
    } else if (line.startsWith("|")) {
      // Table
      const tableLines = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const headers = tableLines[0].split("|").filter(Boolean).map((h) => h.trim());
      const rows = tableLines.slice(2).map((row) =>
        row.split("|").filter(Boolean).map((cell) => cell.trim())
      );
      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-8">
          <table className="w-full text-sm border border-white/10 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-brand-lime/10">
                {headers.map((h, idx) => (
                  <th key={idx} className="px-5 py-3 text-left font-bold text-brand-lime tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rIdx) => (
                <tr key={rIdx} className="border-t border-white/5 hover:bg-white/[0.02]">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-5 py-3 text-gray-300">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else if (line.trim() === "") {
      // Empty line - skip
    } else {
      elements.push(
        <p key={i} className="text-gray-300 leading-relaxed mb-5 text-lg"
          dangerouslySetInnerHTML={{ __html: renderInline(line) }}
        />
      );
    }
    i++;
  }

  return <>{elements}</>;
}

// Renders inline markdown: **bold**, *italic*, `code`, [link](href)
function renderInline(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="text-white/80 italic">$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-white/10 text-brand-lime px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-brand-lime underline underline-offset-4 hover:text-white transition-colors">$1</a>'
    );
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const otherPosts = related.length < 2
    ? [...related, ...blogPosts.filter((p) => p.slug !== post.slug && !related.includes(p)).slice(0, 2 - related.length)]
    : related;

  return (
    <main className="bg-brand-bg min-h-screen">
      <Navbar />

      {/* Hero */}
      <div className="pt-32 pb-0 px-4 max-w-4xl mx-auto">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-lime transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {/* Category & Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border tracking-wider uppercase ${getCategoryColor(post.categoryColor)}`}>
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <Calendar className="w-3.5 h-3.5" /> {post.date}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-8">
          {post.title}
        </h1>

        {/* Author */}
        <div className="flex items-center gap-4 pb-10 border-b border-white/10">
          <div className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center text-black font-black text-sm shrink-0">
            {post.author.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <p className="text-white font-bold text-sm">{post.author}</p>
            <p className="text-gray-500 text-xs">{post.authorRole} · Revenue Room Digital</p>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      <div className="max-w-5xl mx-auto px-4 mt-10">
        <div className="rounded-2xl overflow-hidden h-64 md:h-[480px]">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-4 py-16">
        <ArticleBody content={post.content} />
      </article>

      {/* CTA Banner */}
      <div className="max-w-4xl mx-auto px-4 mb-24">
        <div className="rounded-2xl bg-brand-lime/5 border border-brand-lime/20 p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-brand-lime/10 blur-[80px] rounded-full pointer-events-none" />
          <p className="text-brand-lime text-xs font-bold uppercase tracking-widest mb-4 relative z-10">Ready to act on this?</p>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 relative z-10">
            Let&apos;s Put This Into Practice for Your Business
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">
            Our team implements exactly these strategies for ambitious Australian brands every day. Book a free strategy session and let&apos;s talk about your growth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-lime text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all duration-300 relative z-10"
          >
            Book a Free Strategy Session
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <div className="max-w-5xl mx-auto px-4 pb-24">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-bold text-white">Keep Reading</h3>
            <Link href="/blogs" className="text-brand-lime text-sm font-bold hover:underline flex items-center gap-1">
              All Posts <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherPosts.map((related) => (
              <Link key={related.slug} href={`/blogs/${related.slug}`} className="group block">
                <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-brand-lime/30 transition-all duration-300 hover:-translate-y-1 bg-white/[0.02]">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={related.coverImage}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border tracking-wider uppercase mb-3 ${getCategoryColor(related.categoryColor)}`}>
                      {related.category}
                    </span>
                    <h4 className="text-white font-bold text-lg leading-snug group-hover:text-brand-lime transition-colors mb-2">
                      {related.title}
                    </h4>
                    <p className="text-gray-500 text-xs flex items-center gap-1.5">
                      <Clock className="w-3 h-3" /> {related.readTime}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
