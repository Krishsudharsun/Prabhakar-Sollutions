export type ServiceFAQ = { question: string; answer: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  heroSummary: string;
  definition: string;
  whoNeedsIt: string[];
  benefits: { title: string; description: string }[];
  process: { title: string; description: string }[];
  cost: string;
  timeline: string;
  roi: string;
  comparisonTable: {
    headers: string[];
    rows: string[][];
  };
  stats: { value: string; label: string }[];
  faqs: ServiceFAQ[];
};

export const services: Service[] = [
  {
    slug: "business-operations-optimization",
    name: "Business Operations Optimization",
    shortName: "Ops Optimization",
    eyebrow: "01 · Foundation",
    heroSummary:
      "We audit how work actually moves through your business, then remove the friction that's quietly capping your growth.",
    definition:
      "Business Operations Optimization is a structured audit and redesign of how work flows through a company — people, tools, handoffs, and decisions — to remove bottlenecks, cut wasted effort, and increase throughput without adding headcount.",
    whoNeedsIt: [
      "Founders spending more time firefighting than building",
      "Teams of 10–100 where processes haven't kept pace with growth",
      "Operators who've outgrown spreadsheets and tribal knowledge",
      "Companies preparing for a raise, acquisition, or leadership transition",
    ],
    benefits: [
      { title: "Fewer bottlenecks", description: "We find where work queues up and waits on one person or one approval, and redesign around it." },
      { title: "Lower operating cost", description: "Redundant steps and manual reconciliation get cut, not just documented." },
      { title: "Faster decisions", description: "Clear ownership and escalation paths replace ad hoc Slack threads." },
      { title: "Scalable foundation", description: "Systems that work at 2x and 5x headcount, not just today's team size." },
    ],
    process: [
      { title: "Operations audit", description: "We map your current-state workflows across every department through interviews and system access." },
      { title: "Bottleneck diagnosis", description: "We quantify where time and money leak — approval queues, duplicate data entry, unclear ownership." },
      { title: "Redesign & prioritization", description: "You get a prioritized roadmap ranked by impact vs. effort, not a 60-page binder no one reads." },
      { title: "Implementation support", description: "We work alongside your team to roll out changes, not just hand over a document." },
    ],
    cost: "Engagements typically range from $8,000–$25,000 depending on company size and number of departments audited. We scope a fixed price before any work begins — no hourly surprises.",
    timeline: "4–8 weeks for the audit and redesign; implementation support is scoped separately based on what needs to change.",
    roi: "[Add a real, specific ROI claim here once you have client data — e.g. '% of operational time recovered within X months.' Avoid publishing a number you can't back up if asked.]",
    comparisonTable: {
      headers: ["Approach", "Speed", "Depth", "Best for"],
      rows: [
        ["Internal ops hire", "Slow to ramp", "Deep over time", "Companies past $10M ARR"],
        ["Generic consultant", "Fast report", "Shallow, generic", "Board-ready documentation only"],
        ["Prabhakar Solutions audit", "4–8 weeks", "Deep + implemented", "Founders who want it fixed, not just found"],
      ],
    },
    stats: [
      { value: "[XX]%", label: "[stat — e.g. avg. time recovered from workflow redesign]" },
      { value: "4–8 wks", label: "typical engagement length" },
      { value: "[XX]+", label: "[stat — e.g. operations audits completed]" },
    ],
    faqs: [
      { question: "Will this disrupt our day-to-day operations?", answer: "No. The audit runs alongside normal operations through interviews and read-only system access. Changes are rolled out in stages your team agrees to in advance." },
      { question: "Do you work with fully remote teams?", answer: "Yes — most of our engagements are remote-first, using async documentation review plus scheduled working sessions." },
      { question: "What if we've already tried to fix this ourselves?", answer: "That's common. Internal attempts usually fix symptoms; we look for the structural cause, which is often a decision-rights or handoff problem rather than a tooling problem." },
    ],
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    shortName: "AI Automation",
    eyebrow: "02 · Leverage",
    heroSummary:
      "We build AI-powered systems that handle the repetitive judgment calls your team currently does by hand.",
    definition:
      "AI Automation is the use of large language models and AI agents to handle tasks that previously required a human's judgment — triaging inbound leads, drafting responses, summarizing calls, or routing decisions — integrated directly into your existing tools.",
    whoNeedsIt: [
      "Teams drowning in repetitive customer or lead communication",
      "Agencies producing similar deliverables for every client",
      "Operators who want AI leverage but don't have in-house engineering",
      "Businesses with high inbound volume and a small team",
    ],
    benefits: [
      { title: "Hours back per week", description: "Repetitive drafting, triage, and summarization move from your team's task list to an automated pipeline." },
      { title: "Consistent output", description: "AI-assisted steps follow the same quality bar every time, regardless of who's on shift." },
      { title: "Faster response times", description: "Leads and customers get an initial response in minutes, not hours." },
      { title: "No new headcount", description: "Scale output without a proportional increase in team size." },
    ],
    process: [
      { title: "Use-case mapping", description: "We identify which repetitive tasks are high-volume and judgment-light enough to automate safely." },
      { title: "System design", description: "We design the AI workflow, including guardrails and human-in-the-loop checkpoints where accuracy matters." },
      { title: "Build & integrate", description: "We connect it to your existing stack — CRM, inbox, project management — rather than adding a new tool to babysit." },
      { title: "Test & handoff", description: "You get a working system plus documentation your team can maintain without us." },
    ],
    cost: "Most AI automation builds range from $5,000–$20,000 per workflow depending on integration complexity, plus any ongoing model usage costs (typically $50–$500/month).",
    timeline: "3–6 weeks per workflow, from mapping to a live, tested system.",
    roi: "[Add a real ROI claim here — e.g. hours automated per week or payback period, based on actual client results.]",
    comparisonTable: {
      headers: ["Approach", "Setup time", "Flexibility", "Best for"],
      rows: [
        ["Off-the-shelf AI tool", "Days", "Low — fixed features", "Simple, single-purpose tasks"],
        ["In-house build", "Months", "High", "Teams with dedicated engineers"],
        ["Prabhakar Solutions build", "3–6 weeks", "High, tailored", "Founders who want it custom but don't want to hire for it"],
      ],
    },
    stats: [
      { value: "[XX]hrs", label: "[stat — e.g. avg. weekly hours automated per workflow]" },
      { value: "60–90 days", label: "typical payback period" },
      { value: "3–6 wks", label: "build time per workflow" },
    ],
    faqs: [
      { question: "Will AI replace our team?", answer: "No — the goal is removing repetitive, low-judgment work so your team spends time on the parts of the job that need a human: relationships, strategy, and exceptions." },
      { question: "What happens if the AI gets something wrong?", answer: "Every workflow we build includes guardrails and, for anything customer-facing or high-stakes, a human review checkpoint before anything goes out." },
      { question: "Do we need our own AI/engineering team?", answer: "No. We build, test, and document the system, and train your team to operate and adjust it." },
    ],
  },
  {
    slug: "sop-documentation",
    name: "SOP Documentation",
    shortName: "SOP Documentation",
    eyebrow: "03 · Memory",
    heroSummary:
      "We turn what's only in your best people's heads into documented, repeatable processes anyone can follow.",
    definition:
      "SOP Documentation is the process of capturing how your business actually runs — step by step — into clear, standardized documents so that critical work doesn't depend on one specific person being available.",
    whoNeedsIt: [
      "Founders who are the single point of failure for key decisions",
      "Companies onboarding new hires faster than they can train them",
      "Teams with high turnover in operational roles",
      "Businesses preparing to delegate or hire a COO/operations lead",
    ],
    benefits: [
      { title: "Faster onboarding", description: "New hires ramp against a documented standard instead of shadowing someone for weeks." },
      { title: "Consistent quality", description: "Work meets the same bar regardless of who's doing it." },
      { title: "Reduced key-person risk", description: "Critical processes survive vacations, turnover, and delegation." },
      { title: "Delegation-ready", description: "You can hand off work with confidence instead of hovering over it." },
    ],
    process: [
      { title: "Process discovery", description: "We shadow and interview the people currently doing the work to capture the real process, not the idealized one." },
      { title: "Drafting", description: "We write clear, step-by-step SOPs with screenshots, decision trees, and edge cases included." },
      { title: "Review & validation", description: "Your team tests each SOP by following it literally, and we refine based on gaps." },
      { title: "Central library", description: "SOPs are organized into a searchable library your team actually uses, not a forgotten folder." },
    ],
    cost: "SOP documentation projects typically range from $3,000–$15,000 depending on the number of processes documented.",
    timeline: "2–6 weeks depending on scope — a single department is typically 2–3 weeks; company-wide libraries run 4–6 weeks.",
    roi: "[Add a real ROI claim here — e.g. faster onboarding time or fewer repeated questions, based on actual client results.]",
    comparisonTable: {
      headers: ["Approach", "Accuracy", "Maintenance", "Best for"],
      rows: [
        ["Ad hoc Notion/Docs", "Inconsistent", "Rarely updated", "Very early-stage teams"],
        ["Employee-written SOPs", "Variable quality", "Depends on discipline", "Teams with strong writers"],
        ["Prabhakar Solutions documentation", "Validated by testing", "Structured for upkeep", "Teams that need it to actually get used"],
      ],
    },
    stats: [
      { value: "[XX]%", label: "[stat — e.g. avg. faster new-hire ramp time]" },
      { value: "2–6 wks", label: "typical project length" },
      { value: "[XX]+", label: "[stat — e.g. SOPs documented for clients]" },
    ],
    faqs: [
      { question: "Who actually writes the SOPs?", answer: "We do — based on direct observation and interviews with your team — so your best people don't lose days to writing documentation." },
      { question: "How do you keep SOPs from going stale?", answer: "We build a lightweight review cadence into the handoff, and structure documents so small updates don't require a full rewrite." },
      { question: "Can this integrate with our existing wiki?", answer: "Yes — we deliver into Notion, Confluence, Google Docs, or whatever your team already uses daily." },
    ],
  },
  {
    slug: "workflow-automation",
    name: "Workflow Automation",
    shortName: "Workflow Automation",
    eyebrow: "04 · Execution",
    heroSummary:
      "We connect the tools you already use so work moves itself, instead of your team moving it manually between apps.",
    definition:
      "Workflow Automation is the practice of connecting your existing software tools — CRM, project management, invoicing, email — so that data and tasks move between them automatically, removing manual copy-paste and status updates.",
    whoNeedsIt: [
      "Teams manually re-entering the same data across multiple tools",
      "Operations that rely on someone remembering to update three systems",
      "Businesses scaling volume without scaling admin headcount",
      "Founders who want visibility without chasing status updates",
    ],
    benefits: [
      { title: "Eliminate manual entry", description: "Data flows between tools automatically instead of being retyped." },
      { title: "Fewer dropped handoffs", description: "Tasks trigger the next step automatically instead of waiting to be noticed." },
      { title: "Real-time visibility", description: "Dashboards update themselves instead of requiring a status meeting." },
      { title: "Lower error rate", description: "Removing manual re-entry removes the typos and missed steps that come with it." },
    ],
    process: [
      { title: "Tool & workflow audit", description: "We map your current stack and where manual handoffs happen between tools." },
      { title: "Automation design", description: "We design the connections and triggers, prioritizing the highest-friction handoffs first." },
      { title: "Build & test", description: "We build automations in tools like Zapier, Make, or native APIs, and stress-test edge cases." },
      { title: "Monitor & refine", description: "We monitor the first weeks live and refine before full handoff." },
    ],
    cost: "Workflow automation projects range from $2,500–$12,000 depending on the number of tools and workflows connected.",
    timeline: "2–4 weeks for most workflow automation projects.",
    roi: "[Add a real ROI claim here — e.g. hours of manual entry eliminated per week, based on actual client results.]",
    comparisonTable: {
      headers: ["Approach", "Reliability", "Setup effort", "Best for"],
      rows: [
        ["Manual process", "Human-dependent", "None", "Very low volume"],
        ["DIY Zapier/Make", "Variable", "Moderate, ongoing", "Simple, single-step automations"],
        ["Prabhakar Solutions build", "Tested & monitored", "Done for you", "Multi-step, business-critical workflows"],
      ],
    },
    stats: [
      { value: "[XX]hrs", label: "[stat — e.g. avg. weekly hours saved per workflow]" },
      { value: "2–4 wks", label: "typical build time" },
      { value: "[XX]%", label: "[stat — e.g. target automation reliability]" },
    ],
    faqs: [
      { question: "What tools can you connect?", answer: "Most modern SaaS tools with an API — CRMs, project management, invoicing, email, calendars, and forms — including custom internal tools where needed." },
      { question: "What happens if a connected tool changes its API?", answer: "We build monitoring into critical automations so failures are caught immediately, and document the automation so it's fixable without starting over." },
      { question: "Do we need a developer on our team?", answer: "No — we build and document everything so a non-technical operator can maintain it going forward." },
    ],
  },
  {
    slug: "business-systemization",
    name: "Business Systemization",
    shortName: "Systemization",
    eyebrow: "05 · Compounding",
    heroSummary:
      "We combine operations, automation, and documentation into one system so the business can run without you in every decision.",
    definition:
      "Business Systemization is the process of combining documented processes, automated workflows, and clear decision rights into one integrated operating system for the business — so growth doesn't require the founder to be involved in every decision.",
    whoNeedsIt: [
      "Founders who are the bottleneck for every meaningful decision",
      "Businesses planning to raise, sell, or step back from daily operations",
      "Companies scaling past the point where informal coordination works",
      "Operators who want the business to run without them for two weeks straight",
    ],
    benefits: [
      { title: "Founder-independent operations", description: "The business can run day-to-day without every decision routing through you." },
      { title: "Higher enterprise value", description: "Buyers and investors pay more for businesses that don't depend on one person." },
      { title: "Predictable scaling", description: "Adding headcount or locations doesn't require reinventing how things work." },
      { title: "Compounding leverage", description: "Ops, automation, and documentation reinforce each other instead of living in silos." },
    ],
    process: [
      { title: "Systems audit", description: "We assess operations, automation, and documentation together to find where they're disconnected." },
      { title: "Operating system design", description: "We design an integrated system: who decides what, what's automated, and what's documented." },
      { title: "Phased rollout", description: "We implement in phases so the business keeps running while it's rebuilt underneath." },
      { title: "Founder handoff", description: "We train you and your leadership team to run and evolve the system without us." },
    ],
    cost: "Full systemization engagements typically range from $15,000–$50,000+ depending on company size and how many of the underlying pieces (ops, automation, SOPs) already exist.",
    timeline: "8–16 weeks for a full systemization engagement, often run as a combination of the other four services.",
    roi: "[Add a real ROI claim here — e.g. reduced founder involvement in daily operations, or a fundraising/acquisition outcome, based on actual client results.]",
    comparisonTable: {
      headers: ["Approach", "Scope", "Integration", "Best for"],
      rows: [
        ["Piecemeal fixes", "Single department", "Low", "Small, urgent problems"],
        ["Fractional COO", "Ongoing, broad", "Depends on person", "Companies ready for a permanent hire"],
        ["Prabhakar Solutions systemization", "Whole business, time-boxed", "Fully integrated", "Founders who want the whole system rebuilt once, well"],
      ],
    },
    stats: [
      { value: "8–16 wks", label: "typical full engagement" },
      { value: "3-in-1", label: "ops + automation + SOPs combined" },
      { value: "[XX]+", label: "[stat — e.g. businesses systemized end-to-end]" },
    ],
    faqs: [
      { question: "Is this the same as hiring a COO?", answer: "No — we build the system a COO would eventually run. Many clients bring in an operations lead after systemization to own what we've built." },
      { question: "Can we start with one piece instead of everything?", answer: "Yes. Most systemization clients start with an operations audit or SOP documentation and expand once they see the impact." },
      { question: "How involved do I need to be?", answer: "More involved at the start (you're the source of truth for how decisions get made) and progressively less involved as the system takes over." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
