import { siteConfig } from "@/lib/site-config";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Business Systems" | "Automation" | "AI" | "Scaling Operations" | "Leadership";
  author: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  content: { heading: string; body: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "signs-your-business-needs-systemization",
    title: "7 Signs Your Business Has Outgrown Its Systems",
    excerpt:
      "If every decision still routes through you, growth isn't the problem, your systems are. Here's how to tell the difference.",
    category: "Business Systems",
    author: siteConfig.founder.name,
    publishedAt: "2026-05-12",
    updatedAt: "2026-06-20",
    readingTime: "7 min read",
    content: [
      {
        heading: "The founder bottleneck is a systems problem, not a time problem",
        body: "Most founders respond to growing pains by working more hours. That treats the symptom. The actual cause is usually that decision rights, documentation, and workflows never scaled past the point where five people could coordinate informally in a shared room.",
      },
      {
        heading: "1. You're the only approval step that matters",
        body: "If every exception, refund, or edge case needs your sign-off, the business has no decision system, it has a decision queue with you as the single server.",
      },
      {
        heading: "2. New hires take too long to become productive",
        body: "Long onboarding is rarely a training problem. It's usually a documentation gap: the knowledge exists, but only in people's heads.",
      },
      {
        heading: "3. The same question gets asked every week",
        body: "Recurring questions are a signal that a process needs to be documented once, well, instead of answered repeatedly.",
      },
    ],
  },
  {
    slug: "ai-automation-vs-hiring",
    title: "AI Automation vs. Hiring: How to Decide What to Build First",
    excerpt:
      "Not every repetitive task should be automated, and not every automation candidate should be. A simple framework for deciding.",
    category: "AI",
    author: siteConfig.founder.name,
    publishedAt: "2026-04-02",
    updatedAt: "2026-04-02",
    readingTime: "6 min read",
    content: [
      {
        heading: "Volume and judgment are the two variables that matter",
        body: "High-volume, low-judgment tasks are automation candidates. Low-volume, high-judgment tasks usually aren't worth automating yet. Everything else needs a closer look.",
      },
      {
        heading: "When hiring is the better answer",
        body: "If a task requires relationship context, creative judgment, or negotiation, a person will outperform an automated system for the foreseeable future.",
      },
      {
        heading: "When automation wins outright",
        body: "Lead triage, status updates, data entry between tools, and first-draft responses are almost always better handled by a well-built automation than by adding headcount.",
      },
    ],
  },
  {
    slug: "documenting-sops-that-actually-get-used",
    title: "How to Write SOPs Your Team Will Actually Follow",
    excerpt:
      "Most SOP documents die in a folder. Here's the difference between documentation that gets used and documentation that gets ignored.",
    category: "Leadership",
    author: siteConfig.founder.name,
    publishedAt: "2026-03-18",
    updatedAt: "2026-05-01",
    readingTime: "5 min read",
    content: [
      {
        heading: "Write the process people actually follow, not the ideal one",
        body: "SOPs written from memory tend to document the intended process. SOPs written from direct observation document the real one, including the workarounds that matter.",
      },
      {
        heading: "Validate by testing, not by review",
        body: "Have someone unfamiliar with the task follow the SOP literally. Every place they get stuck is a gap in the document, not a gap in their understanding.",
      },
      {
        heading: "Keep it living, not static",
        body: "Build a lightweight review cadence into ownership of each SOP so it gets updated in minutes instead of rewritten from scratch every year.",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
