export const siteConfig = {
  name: "Prabhakar Solutions",
  tagline: "Business systems for founders who've outgrown chaos",
  description:
    "Prabhakar Solutions helps founders and CEOs replace tribal knowledge and manual busywork with documented SOPs, automated workflows, and AI systems — so the business runs without them in every room.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.prabhakarsolutions.example",
  ogImage: "/og-image.png",
  email: "hello@yourcompany.com",
  phone: "[Your Phone Number]",
  businessHours: "[Mon–Fri, 9:00 AM – 6:00 PM ET]",
  founder: {
    name: "Your Name",
    role: "Founder & Principal Consultant",
  },
  social: {
    linkedin: "https://linkedin.com/company/your-company",
    youtube: "https://youtube.com/@your-channel",
    spotify: "https://open.spotify.com/show/your-show-id",
    twitter: "https://x.com/your-handle",
  },
  address: {
    locality: "[Your City]",
    region: "[State]",
    country: "US",
  },
};

export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "Podcast", href: "/podcast" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "Business Operations Optimization", href: "/services/business-operations-optimization" },
    { label: "AI Automation", href: "/services/ai-automation" },
    { label: "SOP Documentation", href: "/services/sop-documentation" },
    { label: "Workflow Automation", href: "/services/workflow-automation" },
    { label: "Business Systemization", href: "/services/business-systemization" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/#case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Podcast", href: "/podcast" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};
