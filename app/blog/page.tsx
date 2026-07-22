import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data/blog-posts";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog: Business Systems, Automation & AI",
  description: "SEO-optimized articles on business systems, automation, AI, scaling operations, and leadership for founders.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <section className="pb-24 pt-36">
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }]} />
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">Blog</p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-ink sm:text-5xl dark:text-white">
            Notes on systems, automation, and scaling
          </h1>
        </ScrollReveal>

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-navy-900/[0.06] bg-white p-6 transition-colors hover:border-royal-600/30 dark:border-white/[0.06] dark:bg-white/[0.03]"
              >
                <Badge variant="outline">{post.category}</Badge>
                <h2 className="mt-4 font-heading text-lg font-semibold leading-snug text-ink dark:text-white">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-gray">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-navy-900/[0.06] pt-4 text-xs text-ink-gray dark:border-white/[0.06]">
                  <span>{formatDate(post.publishedAt)} · {post.readingTime}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
