export const siteConfig = {
  name: "Prabhakar Growth Systems",
  longName: "Prabhakar Growth Systems",
  shortName: "P.G. Systems",
  tagline: "Business systems for founders who've outgrown chaos",
  description:
    "Prabhakar Growth Systems helps founders and CEOs replace tribal knowledge and manual busywork with documented SOPs, automated workflows, and AI systems, so the business runs without them in every room.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.prabhakarsolutions.example",
  ogImage: "/og-image.png",
  email: "prabhakarvenkat15@gmail.com",
  phone: "+91 97905 46103",
  businessHours: "[Mon–Sat, 9:00 AM – 5:30 PM IST]",
  founder: {
    name: "Prabhakar V",
    role: "Founder & Principal Consultant",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/prabhakar-v/",
    youtube: "https://www.youtube.com/@PrabhakarGrowth",
    spotify: "https://open.spotify.com/episode/4UBjJsuj0PfWNV46iZBXoM",
    twitter: "https://x.com/PrabhakarSamra1",
    instagram: "https://www.instagram.com/prabhakar_venkat6",
    substack: "https://www.substack.com/@prabhakarvenkat",
  },
  address: {
    locality: "Chennai",
    region: "Tamil Nadu",
    country: "India",
  },
};

export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Podcast", href: "/podcast" },
];

export const footerNav = {
  services: [
    { label: "Business Operations Optimization", href: "/services/business-operations-optimization" },
    { label: "AI Automation", href: "/services/ai-automation" },
    { label: "SOP Documentation", href: "/services/sop-documentation" },
    { label: "Workflow Automation", href: "/services/workflow-automation" },
    { label: "Business Process Systemization", href: "/services/business-systemization" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
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
