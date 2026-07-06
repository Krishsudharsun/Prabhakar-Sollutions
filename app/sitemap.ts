import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { blogPosts } from "@/lib/data/blog-posts";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/about",
    "/booking",
    "/apply",
    "/contact",
    "/blog",
    "/podcast",
    "/resources",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${siteConfig.url}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
