import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/lib/data/blog-posts";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/json-ld";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="pb-24 pt-36">
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
        author={post.author}
        url={`/blog/${post.slug}`}
      />
      <BreadcrumbSchema
        items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }, { name: post.title, url: `/blog/${post.slug}` }]}
      />

      <div className="container max-w-2xl">
        <ScrollReveal>
          <Badge variant="outline">{post.category}</Badge>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-gray">
            <span>By {post.author}</span>
            <span>Published {formatDate(post.publishedAt)}</span>
            <span>Updated {formatDate(post.updatedAt)}</span>
            <span>{post.readingTime}</span>
          </div>
        </ScrollReveal>

        <div className="prose prose-sm mt-10 max-w-none sm:prose-base">
          {post.content.map((block) => (
            <ScrollReveal key={block.heading} className="mb-8">
              <h2 className="font-heading text-xl font-semibold text-ink dark:text-white">{block.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-gray sm:text-base">{block.body}</p>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-navy-900 p-8 text-center">
          <h2 className="font-heading text-lg font-bold text-white">
            Want this fixed in your business, not just explained?
          </h2>
          <div className="mt-5 flex justify-center">
            <Button asChild>
              <Link href="/apply">Book a discovery call <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
