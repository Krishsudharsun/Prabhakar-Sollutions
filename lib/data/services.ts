export type ProcessStep = {
  title: string;
  description: string;
  bullets?: string[];
  note?: string;
};

export type EngagementFeature = { title: string; description: string };

export type Engagement = {
  summary: string;
  dependencies?: string[];
  deliverables?: string[];
  closingNotes?: string[];
};

export type ListBlock = { intro?: string; items: string[]; closing?: string };

export type DifferentiatorBlock = {
  paragraphs: string[];
  leadIn: string;
  bullets: string[];
  closing?: string;
};

export type FinalCTA = { heading: string; paragraphs: string[] };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  heroSummary: string;
  definition: string;
  stats: { value: string; label: string }[];

  subheadline: string;
  introParagraphs: string[];
  engagementFeatures: EngagementFeature[];
  whatIsExpanded: string[];
  whoNeedsIt: string[];
  benefitsHeading: string;
  benefits: { title: string; description: string }[];
  processHeading: string;
  process: ProcessStep[];
  whatCanWeAutomate?: ListBlock;
  whatMakesDifferent?: DifferentiatorBlock;
  whatsIncluded?: ListBlock;
  whatDoWeEvaluate?: ListBlock;
  engagement: Engagement;
  outcomesHeading: string;
  businessOutcomes: string[];
  comparisonTable?: { caption: string; headers: string[]; rows: string[][] };
  finalCTA?: FinalCTA;
};

export const services: Service[] = [
  {
    slug: "business-operations-optimization",
    name: "Business Operations Audit",
    shortName: "Operations Audit",
    eyebrow: "01 · Foundation",
    heroSummary:
      "We audit how work actually moves through your business, then remove the friction that's quietly capping your growth.",
    definition:
      "A Business Operations Audit is a structured evaluation of how your business currently operates. We examine your people, processes, workflows, systems, responsibilities, communication, and decision-making to identify what's slowing performance and preventing scalable growth. Rather than guessing where the problems are, we use a structured methodology to uncover the root causes behind operational inefficiencies.",
    stats: [
      { value: "[XX]%", label: "[stat, e.g. avg. time recovered from workflow redesign]" },
      { value: "4–8 wks", label: "typical engagement length" },
      { value: "[XX]+", label: "[stat, e.g. operations audits completed]" },
    ],

    subheadline: "Discover What's Slowing Your Business Before You Invest in the Wrong Solution.",
    introParagraphs: [
      "Most founders know something isn't working.",
      "Projects take longer.",
      "Teams ask the same questions.",
      "Approvals pile up.",
      "Customers experience delays.",
      "But very few know why.",
      "Our Business Operations Audit identifies the operational bottlenecks, process gaps, communication breakdowns, founder dependencies, and system inefficiencies that are limiting your business growth—before you spend money fixing the wrong problem.",
    ],
    engagementFeatures: [
      { title: "2–4 Weeks", description: "Complete operational assessment." },
      { title: "Comprehensive Audit Report", description: "Actionable recommendations prioritized by business impact." },
      { title: "Independent Assessment", description: "No implementation required." },
    ],
    whatIsExpanded: [
      "At the end of the engagement, you'll receive a comprehensive audit report with practical recommendations, prioritized opportunities, and a clear roadmap for improvement. Whether you implement those recommendations internally or with us is entirely your decision.",
    ],
    whoNeedsIt: [
      "Your business feels increasingly chaotic as it grows.",
      "Your team is busy, but productivity isn't improving.",
      "Operational issues keep recurring.",
      "Employees regularly wait for approvals or decisions.",
      "Departments aren't working together efficiently.",
      "You're planning to scale but want stronger operational foundations first.",
      "You're considering automation but don't know where it will create the greatest value.",
      "You want an independent assessment before investing in implementation.",
    ],
    benefitsHeading: "What You'll Receive",
    benefits: [
      { title: "Comprehensive Operational Assessment", description: "A detailed review of how work flows across your business." },
      { title: "Bottleneck Analysis", description: "Identification of the biggest operational constraints affecting efficiency and growth." },
      { title: "Process Gap Analysis", description: "Clear documentation of missing, duplicated, or inefficient business processes." },
      { title: "Founder Dependency Assessment", description: "A review of where your business still depends too heavily on founder involvement." },
      { title: "Systems & Technology Review", description: "Evaluation of your current tools, workflows, and opportunities for better integration." },
      { title: "Prioritized Improvement Roadmap", description: "A practical action plan ranked by business impact, implementation effort, and expected value." },
    ],
    processHeading: "Our Audit Methodology",
    process: [
      { title: "Business Discovery", description: "We begin by understanding your business model, growth objectives, operational challenges, and organizational structure." },
      { title: "Operational Assessment", description: "We review departments, workflows, communication, responsibilities, systems, documentation, and operational performance." },
      { title: "Bottleneck Identification", description: "We identify where work slows down, information gets lost, responsibilities become unclear, and founder dependency limits scalability." },
      { title: "Opportunity Analysis", description: "Every finding is evaluated based on operational impact, implementation complexity, and potential business improvement." },
      {
        title: "Audit Report & Executive Presentation",
        description: "You'll receive a professionally prepared report summarizing:",
        bullets: [
          "Current operational maturity",
          "Critical business risks",
          "Operational bottlenecks",
          "Process improvement opportunities",
          "Recommended priorities",
          "Short-term wins",
          "Long-term strategic improvements",
        ],
        note: "We also walk your leadership team through every recommendation during a presentation session.",
      },
    ],
    whatDoWeEvaluate: {
      intro: "The Business Operations Audit typically covers:",
      items: [
        "Business Processes",
        "Department Workflows",
        "Team Responsibilities",
        "Organizational Structure",
        "Communication Flow",
        "Decision-Making",
        "SOP Availability",
        "Workflow Efficiency",
        "Operational KPIs",
        "Technology Stack",
        "Manual Activities",
        "Reporting Systems",
        "Cross-Department Collaboration",
        "Founder Dependency",
        "Scalability Readiness",
      ],
      closing: "Every assessment is customized to your business.",
    },
    whatsIncluded: {
      intro: "Every Business Operations Audit includes:",
      items: [
        "Business Discovery Session",
        "Stakeholder Interviews",
        "Workflow Assessment",
        "Process Mapping",
        "Bottleneck Analysis",
        "Technology Review",
        "Founder Dependency Assessment",
        "Operational Maturity Assessment",
        "Executive Audit Report",
        "Prioritized Improvement Roadmap",
        "Leadership Presentation",
        "Q&A Session",
      ],
      closing: "No implementation is included in this engagement. The purpose is to provide clarity before any operational changes are made.",
    },
    engagement: {
      summary: "Most Business Operations Audits are completed within 2–4 weeks, depending on:",
      dependencies: ["Business size", "Number of departments", "Number of stakeholders", "Operational complexity", "Scope of assessment"],
      closingNotes: ["Every engagement has a clearly defined scope, timeline, and fixed investment before work begins."],
    },
    outcomesHeading: "Outcomes",
    businessOutcomes: [
      "A clear understanding of your operational strengths and weaknesses.",
      "Visibility into the biggest bottlenecks limiting growth.",
      "A prioritized roadmap for operational improvement.",
      "Better understanding of where automation creates value.",
      "Clear recommendations for process improvements.",
      "Greater confidence before investing in implementation.",
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
      "AI Automation is the use of large language models and AI agents to handle tasks that previously required a human's judgment, triaging inbound leads, drafting responses, summarizing calls, or routing decisions, integrated directly into your existing tools.",
    stats: [
      { value: "[XX]hrs", label: "[stat, e.g. avg. weekly hours automated per workflow]" },
      { value: "60–90 days", label: "typical payback period" },
      { value: "3–6 wks", label: "build time per workflow" },
    ],

    subheadline: "Let AI Handle the Repetitive Work—So Your Team Can Focus on What Matters.",
    introParagraphs: [
      "Most businesses waste hundreds of hours every month on repetitive communication, manual data entry, document creation, follow-ups, approvals, and routine operational tasks.",
      "We design and implement AI-powered business automations that eliminate repetitive work, improve response times, and increase productivity—without replacing the people who make your business valuable.",
    ],
    engagementFeatures: [
      { title: "3–6 Weeks", description: "From discovery to fully implemented AI workflow." },
      { title: "Built Around Your Business", description: "Custom AI solutions integrated with your existing processes." },
      { title: "Ready for Everyday Operations", description: "Designed, tested, documented, and adopted by your team." },
    ],
    whatIsExpanded: [
      "AI Automation is the strategic use of Artificial Intelligence to perform repetitive, rule-based, and knowledge-driven business tasks that would otherwise consume valuable employee time.",
      "Our goal isn't to automate people. It's to automate repetitive work so people can focus on higher-value responsibilities.",
    ],
    whoNeedsIt: [
      "Your team spends hours every day on repetitive administrative work.",
      "Customer enquiries, emails, or follow-ups consume too much time.",
      "Information is manually copied between different systems.",
      "Employees repeatedly perform the same tasks every week.",
      "Your response times are slowing as your business grows.",
      "You're interested in AI but don't know where it will actually create value.",
      "You want to improve productivity without increasing headcount.",
    ],
    benefitsHeading: "What You'll Gain",
    benefits: [
      { title: "Save Hundreds of Hours", description: "AI handles repetitive operational tasks, allowing your team to focus on customers, strategy, and business growth." },
      { title: "Faster Customer Response", description: "Leads and customers receive immediate, consistent responses instead of waiting for manual replies." },
      { title: "Increased Team Productivity", description: "Employees spend less time on repetitive administration and more time on meaningful work." },
      { title: "Better Operational Accuracy", description: "Automated workflows reduce manual errors, improve consistency, and eliminate repetitive data handling." },
      { title: "Scalable Operations", description: "As demand grows, AI helps your business handle higher workloads without proportionally increasing operational costs." },
      { title: "Smarter Decision Support", description: "AI can organize information, summarize complex discussions, identify priorities, and support faster decision-making across your business." },
    ],
    processHeading: "Our AI Automation Framework",
    process: [
      { title: "Opportunity Assessment", description: "We identify repetitive business activities where AI can create measurable value without introducing unnecessary complexity." },
      { title: "Workflow Design", description: "We design intelligent workflows that combine AI, business rules, approvals, and human oversight where required." },
      { title: "Integration", description: "Rather than replacing your existing software, we integrate AI into the tools your team already uses: including CRM systems, project management platforms, communication tools, and business applications." },
      { title: "Automation Development", description: "We build, configure, and test the complete workflow, ensuring it performs reliably under real operational conditions." },
      { title: "Team Training & Documentation", description: "Your team receives documentation, training, and implementation support so they can confidently use and maintain the automation after deployment." },
    ],
    whatCanWeAutomate: {
      intro: "Every business is different, but common AI automation opportunities include:",
      items: [
        "Lead qualification", "Customer enquiry management", "Email drafting and replies",
        "Meeting summaries and action items", "Proposal generation", "CRM updates",
        "Data entry", "Internal knowledge search", "Employee onboarding assistance",
        "Document generation", "Report creation", "Task routing",
        "Workflow approvals", "FAQ support", "Operational notifications",
      ],
      closing: "If a task is repetitive, predictable, and consumes valuable time, there's a good chance it can be automated.",
    },
    whatMakesDifferent: {
      paragraphs: [
        "Many AI providers sell software.",
        "Others build impressive demonstrations.",
        "We build AI systems that become part of your daily operations.",
        "Every automation is designed around your existing business processes—not the other way around.",
      ],
      leadIn: "That means:",
      bullets: [
        "No unnecessary software changes.",
        "No complex technical setup for your team.",
        "No automation without human oversight where it matters.",
        "No AI implementation just because it's trendy.",
      ],
      closing: "If AI doesn't improve the business, we don't recommend it.",
    },
    whatsIncluded: {
      intro: "Depending on your business, your AI Automation engagement may include:",
      items: [
        "AI Opportunity Assessment", "Workflow Design", "AI Prompt Engineering",
        "Process Automation", "CRM Integration", "Email Automation",
        "Knowledge Base Integration", "AI Assistants", "AI Document Processing",
        "AI Meeting Summaries", "AI Customer Support Workflows", "Team Training",
        "Technical Documentation",
      ],
      closing: "Everything is implemented within your operational workflow—not delivered as an isolated AI experiment.",
    },
    engagement: {
      summary: "Most AI Automation projects are completed within 3–6 weeks, depending on:",
      dependencies: ["Number of workflows", "Integration requirements", "Existing software ecosystem", "Business complexity", "Testing requirements"],
      closingNotes: ["Our focus is delivering reliable automation that your team can confidently use from day one."],
    },
    outcomesHeading: "Business Outcomes",
    businessOutcomes: [
      "Reduced repetitive manual work", "Faster customer response times", "Improved operational efficiency",
      "Better employee productivity", "Reduced administrative overhead", "Higher process consistency",
      "Lower operational costs", "Increased capacity without increasing headcount",
    ],
    comparisonTable: {
      caption: "AI Automation vs Traditional Approaches",
      headers: ["Approach", "Speed to Implement", "Business Fit", "Best For"],
      rows: [
        ["Generic AI Software", "Fast", "Limited customization", "Simple, standalone tasks"],
        ["In-House Development", "Slow", "High customization", "Businesses with dedicated engineering teams"],
        ["Freelance Automation", "Varies", "Inconsistent quality", "One-off automation projects"],
        ["Prabhakar Growth Systems – AI Automation", "3–6 weeks", "Fully customized and integrated into your existing operations", "Founder-led businesses seeking practical AI solutions that deliver measurable business value"],
      ],
    },
    finalCTA: {
      heading: "AI Should Reduce Work, Not Create More.",
      paragraphs: [
        "The best AI isn't the most advanced. It's the AI your team actually uses every day to save time, reduce manual effort, and improve business performance.",
        "Book a Free Operations Audit, and we'll identify where AI can create the biggest operational impact in your business, without unnecessary complexity or expensive experimentation.",
      ],
    },
  },
  {
    slug: "sop-documentation",
    name: "SOP Documentation",
    shortName: "SOP Documentation",
    eyebrow: "03 · Memory",
    heroSummary:
      "We turn what's only in your best people's heads into documented, repeatable processes anyone can follow.",
    definition:
      "SOP Documentation is the process of capturing how your business actually runs, step by step, into clear, standardized documents so that critical work doesn't depend on one specific person being available.",
    stats: [
      { value: "[XX]%", label: "[stat, e.g. avg. faster new-hire ramp time]" },
      { value: "2–6 wks", label: "typical project length" },
      { value: "[XX]+", label: "[stat, e.g. SOPs documented for clients]" },
    ],

    subheadline: "Turn Tribal Knowledge Into Repeatable Business Systems.",
    introParagraphs: [
      "When your best employees leave, they shouldn't take your business knowledge with them.",
      "We document how your business actually operates—capturing every critical process, decision, and workflow into practical SOPs your team can confidently follow. The result is faster onboarding, consistent execution, and a business that becomes less dependent on individual people.",
    ],
    engagementFeatures: [
      { title: "2–6 Weeks", description: "Fast, structured documentation without disrupting daily operations." },
      { title: "Complete Knowledge Capture", description: "Processes, responsibilities, checklists, templates, and decision guides." },
      { title: "Implementation Ready", description: "Designed to be used by your team—not stored in forgotten folders." },
    ],
    whatIsExpanded: [
      "Standard Operating Procedure (SOP) Documentation is the process of converting undocumented business knowledge into clear, structured, and repeatable operating procedures. The result is operational consistency, faster training, and a business that continues performing even when key people are unavailable.",
    ],
    whoNeedsIt: [
      "Your team repeatedly asks how to perform the same tasks.",
      "Every employee completes work differently.",
      "New hires require constant supervision before becoming productive.",
      "Important processes exist only in the founder's or senior employees' memory.",
      "Employee turnover creates operational disruption.",
      "You're preparing to delegate responsibilities.",
      "Your business is growing faster than knowledge can be transferred.",
      "You want consistent execution across every department.",
    ],
    benefitsHeading: "What You'll Gain",
    benefits: [
      { title: "Consistent Business Operations", description: "Every recurring activity follows a documented standard, reducing variation and improving quality across the business." },
      { title: "Faster Employee Onboarding", description: "New hires learn from proven documentation instead of relying entirely on shadowing experienced team members." },
      { title: "Reduced Operational Risk", description: "Critical knowledge remains inside the business—not inside individual employees." },
      { title: "Easier Delegation", description: "Founders and managers can confidently hand over responsibilities because expectations are clearly documented." },
      { title: "Better Accountability", description: "Well-defined procedures reduce confusion by making responsibilities, steps, and expected outcomes clear." },
      { title: "Stronger Foundation for Growth", description: "Documented operations make it easier to scale teams, expand departments, and introduce automation in the future." },
    ],
    processHeading: "Our SOP Documentation Framework",
    process: [
      { title: "Process Discovery", description: "We work with founders and team members to understand how work is actually completed—not how it's assumed to happen." },
      { title: "Process Mapping", description: "Every workflow is broken down into clear activities, responsibilities, decision points, inputs, outputs, and dependencies." },
      {
        title: "SOP Development",
        description: "We create professional Standard Operating Procedures using a structured format that includes:",
        bullets: ["Purpose", "Scope", "Responsibilities", "Step-by-step instructions", "Decision guidelines", "Checklists", "Templates", "Supporting resources"],
      },
      { title: "Validation & Testing", description: "Before finalizing documentation, we review and test each SOP with your team to ensure it reflects real operational practice and is easy to follow." },
      { title: "Centralized Knowledge Library", description: "Every SOP is organized into a searchable digital library, making it easy for your team to find, use, and maintain documentation as the business grows." },
    ],
    engagement: {
      summary: "Most SOP Documentation projects are completed within 2–6 weeks, depending on:",
      dependencies: ["Number of departments", "Number of processes", "Process complexity", "Team availability", "Existing documentation"],
      closingNotes: ["Projects can focus on a single department or expand into a company-wide knowledge system."],
    },
    outcomesHeading: "Business Outcomes",
    businessOutcomes: [
      "Reduced onboarding time", "Fewer repetitive operational questions", "Consistent service delivery",
      "Better delegation across teams", "Lower dependency on experienced employees", "Improved operational quality",
      "Easier knowledge transfer", "Stronger readiness for growth",
    ],
    comparisonTable: {
      caption: "SOP Documentation vs Traditional Documentation",
      headers: ["Approach", "Documentation Quality", "Business Adoption", "Best For"],
      rows: [
        ["Notes in Google Docs or Notion", "Inconsistent", "Low", "Very small teams"],
        ["Employee-Created SOPs", "Varies by individual", "Moderate", "Teams with strong internal documentation practices"],
        ["Generic Templates", "Not tailored to the business", "Low", "Basic compliance requirements"],
        ["Prabhakar Growth Systems – SOP Documentation", "Built from real business operations, validated with your team, organized into a structured knowledge system", "High", "Founder-led businesses that want documentation people actually use"],
      ],
    },
    finalCTA: {
      heading: "Great Businesses Don't Depend on Memory.",
      paragraphs: [
        "They depend on systems that anyone can follow.",
        "If your business relies on verbal instructions, repeated explanations, or experienced employees remembering every detail, it's time to document what matters.",
        "Book a Free Operations Audit, and we'll identify the critical processes that should be documented first to improve consistency, delegation, and long-term scalability.",
      ],
    },
  },
  {
    slug: "workflow-automation",
    name: "Workflow Automation",
    shortName: "Workflow Automation",
    eyebrow: "04 · Execution",
    heroSummary:
      "We connect the tools you already use so work moves itself, instead of your team moving it manually between apps.",
    definition:
      "Workflow Automation is the practice of connecting your existing software tools, CRM, project management, invoicing, email, so that data and tasks move between them automatically, removing manual copy-paste and status updates.",
    stats: [
      { value: "[XX]hrs", label: "[stat, e.g. avg. weekly hours saved per workflow]" },
      { value: "2–4 wks", label: "typical build time" },
      { value: "[XX]%", label: "[stat, e.g. target automation reliability]" },
    ],

    subheadline: "Make Your Business Work Automatically—Not Manually.",
    introParagraphs: [
      "As businesses grow, work often slows down because employees spend hours copying information, updating multiple systems, sending repetitive notifications, and manually moving tasks from one stage to the next.",
      "We design and implement workflow automation that connects your existing business tools, eliminating repetitive manual work and allowing your operations to run faster, more accurately, and with far less human intervention.",
    ],
    engagementFeatures: [
      { title: "2–4 Weeks", description: "From workflow assessment to fully operational automation." },
      { title: "Built Around Your Existing Tools", description: "No unnecessary software migrations or complicated technology changes." },
      { title: "Reliable & Scalable", description: "Designed, tested, documented, and ready for everyday business operations." },
    ],
    whatIsExpanded: [
      "Workflow Automation is the process of connecting your existing business systems so information, tasks, approvals, and notifications move automatically between people and software. The result is faster execution, fewer operational errors, and more time for your team to focus on work that actually creates value.",
    ],
    whoNeedsIt: [
      "Employees manually copy data between different applications.",
      "Your team spends hours updating spreadsheets or project management tools.",
      "Tasks regularly get delayed because someone forgot the next step.",
      "Customer information exists in multiple disconnected systems.",
      "Manual approvals slow down daily operations.",
      "You want greater operational efficiency without hiring additional administrative staff.",
      "Your business is growing faster than your internal processes.",
    ],
    benefitsHeading: "What You'll Gain",
    benefits: [
      { title: "Eliminate Repetitive Manual Work", description: "Routine operational tasks happen automatically instead of consuming valuable employee time." },
      { title: "Faster Business Operations", description: "Information moves instantly between systems, reducing delays and improving execution speed." },
      { title: "Fewer Operational Errors", description: "Automation removes repetitive manual data entry, reducing mistakes and improving consistency." },
      { title: "Better Team Productivity", description: "Employees spend less time managing systems and more time serving customers, solving problems, and driving business growth." },
      { title: "Improved Visibility", description: "Managers gain real-time insight into operational progress without constantly requesting updates from the team." },
      { title: "Scalable Operations", description: "Your business can process increasing workloads without proportionally increasing administrative effort." },
    ],
    processHeading: "Our Workflow Automation Framework",
    process: [
      { title: "Workflow Assessment", description: "We analyze how work currently flows across your business and identify repetitive activities, manual handoffs, and operational bottlenecks." },
      { title: "Automation Design", description: "We redesign workflows to remove unnecessary manual effort while maintaining accuracy, accountability, and operational control." },
      { title: "Integration & Development", description: "We connect your existing software ecosystem using appropriate automation platforms and APIs, ensuring reliable communication between every system." },
      { title: "Testing & Validation", description: "Every workflow is thoroughly tested under real business conditions to ensure reliability before deployment." },
      { title: "Team Training & Handover", description: "Your team receives documentation, operational guidance, and training so they can confidently manage and maintain automated workflows moving forward." },
    ],
    whatCanWeAutomate: {
      intro: "Workflow Automation can streamline almost every department in your business. Common automation opportunities include:",
      items: [
        "Lead capture and CRM updates", "Sales pipeline management", "Proposal approvals",
        "Customer onboarding", "Project creation", "Task assignments",
        "Internal notifications", "Invoice generation", "Document management",
        "Email workflows", "Follow-up reminders", "Employee onboarding",
        "Reporting and dashboards", "Status updates", "Team approvals",
      ],
      closing: "If a business activity follows a predictable sequence, it can usually be automated.",
    },
    whatMakesDifferent: {
      paragraphs: [
        "Many businesses build automations that work for a few weeks before breaking.",
        "Others automate inefficient processes, creating faster versions of the same problems.",
        "We take a different approach.",
        "Before building automation, we first improve the underlying process.",
        "Only then do we automate it.",
      ],
      leadIn: "Every workflow is:",
      bullets: [
        "Designed around your actual business operations.",
        "Built using reliable integration methods.",
        "Thoroughly tested before deployment.",
        "Documented for long-term maintenance.",
        "Scalable as your business grows.",
      ],
      closing: "Automation should simplify operations—not create another system your team has to manage.",
    },
    whatsIncluded: {
      intro: "Depending on your business requirements, your Workflow Automation engagement may include:",
      items: [
        "Workflow Assessment", "Process Mapping", "Automation Design",
        "CRM Integration", "Project Management Integration", "Email Automation",
        "Internal Notifications", "Approval Workflows", "API Integrations",
        "Dashboard Automation", "Reporting Automation", "Business Rule Configuration",
        "Documentation", "Team Training",
      ],
      closing: "Everything is designed to fit within your existing operational environment.",
    },
    engagement: {
      summary: "Most Workflow Automation projects are completed within 2–4 weeks, depending on:",
      dependencies: ["Number of workflows", "Software integrations required", "Business complexity", "Existing systems", "Testing requirements"],
      closingNotes: ["Each automation is implemented with long-term reliability and maintainability in mind."],
    },
    outcomesHeading: "Business Outcomes",
    businessOutcomes: [
      "Reduced manual administrative work", "Faster operational execution", "Improved process consistency",
      "Better collaboration between teams", "Reduced operational errors", "Increased employee productivity",
      "Better visibility into business operations", "Greater scalability without increasing administrative overhead",
    ],
    comparisonTable: {
      caption: "Workflow Automation vs Traditional Approaches",
      headers: ["Approach", "Reliability", "Scalability", "Best For"],
      rows: [
        ["Manual Processes", "Depends entirely on people", "Low", "Very small businesses with minimal operational complexity"],
        ["DIY Automation Tools", "Varies by implementation", "Moderate", "Simple personal automations and one-step workflows"],
        ["Individual Freelance Automation", "Depends on the freelancer", "Moderate", "Isolated automation projects"],
        ["Prabhakar Growth Systems – Workflow Automation", "Enterprise-grade design, tested implementation, and complete documentation", "High", "Founder-led businesses seeking reliable, scalable operational workflows integrated into their business systems"],
      ],
    },
    finalCTA: {
      heading: "Your Team Shouldn't Spend Time Moving Information Between Systems.",
      paragraphs: [
        "Every minute spent copying data, updating software, or chasing status updates is time not spent growing the business.",
        "Workflow Automation allows your operations to move faster, more accurately, and with far less manual effort.",
        "Book a Free Operations Audit, and we'll identify the highest-impact workflows you can automate to improve productivity, reduce operational friction, and build a more scalable business.",
      ],
    },
  },
  {
    slug: "business-systemization",
    name: "Business Process Systemization",
    shortName: "Process Systemization",
    eyebrow: "05 · Compounding",
    heroSummary:
      "We combine operations, automation, and documentation into one system so the business can run without you in every decision.",
    definition:
      "Business Process Systemization is the process of combining documented processes, automated workflows, and clear decision rights into one integrated operating system for the business, so growth doesn't require the founder to be involved in every decision.",
    stats: [
      { value: "8–16 wks", label: "typical full engagement" },
      { value: "3-in-1", label: "ops + automation + SOPs combined" },
      { value: "[XX]+", label: "[stat, e.g. businesses systemized end-to-end]" },
    ],

    subheadline: "Build a Business That Runs on Systems—Not on You.",
    introParagraphs: [
      "When every decision, approval, and problem depends on the founder, growth eventually slows. It replaces operational chaos with documented processes, clear ownership, AI-powered automation, and scalable workflows. So your business continues moving, even when you're not involved in every decision.",
    ],
    engagementFeatures: [
      { title: "6–12 Weeks", description: "Complete implementation tailored to your business." },
      { title: "One Complete Operating System", description: "Processes, SOPs, automation, accountability, and workflows working together." },
      { title: "End-to-End Implementation", description: "Designed, built, documented, implemented, and handed over to your team." },
    ],
    whatIsExpanded: [
      "Business Process Systemization is the process of documenting, standardizing, and optimizing how work gets done. It turns knowledge into repeatable systems and clear SOPs that anyone on the team can follow. The result is a business that runs consistently with less dependence on the founder.",
    ],
    whoNeedsIt: [
      "Every important decision still comes back to you.",
      "Your team repeatedly asks the same operational questions.",
      "New employees require weeks of constant guidance before becoming productive.",
      "Work is delayed because responsibilities are unclear.",
      "Important knowledge exists only inside a few people's heads.",
      "Your business is growing faster than your systems.",
      "You want to step away from day-to-day operations without everything slowing down.",
      "You're preparing to scale, expand, or eventually sell the business.",
    ],
    benefitsHeading: "What You'll Gain",
    benefits: [
      { title: "A Business That Doesn't Depend on You", description: "Your team understands what to do, how to do it, and who owns each responsibility—without waiting for founder approval." },
      { title: "Standardized Operations", description: "Every recurring business activity follows a documented, repeatable process that improves consistency, quality, and speed." },
      { title: "Faster Team Performance", description: "New employees become productive faster because processes, training, and expectations are already documented." },
      { title: "Intelligent Automation", description: "Manual tasks, repetitive communication, approvals, and data movement are automated wherever appropriate, allowing your team to focus on higher-value work." },
      { title: "Better Decisions", description: "Clear ownership and decision frameworks eliminate confusion, reduce delays, and improve accountability across the business." },
      { title: "A Business Ready to Scale", description: "Growth becomes predictable because your operations no longer rely on individual memory or founder availability." },
    ],
    processHeading: "Our Business Process Systemization Framework",
    process: [
      { title: "Operational Assessment", description: "We analyze how work currently flows across your business, identify bottlenecks, uncover founder dependency, and map opportunities for improvement." },
      { title: "System Design", description: "We redesign your operations by defining processes, responsibilities, decision paths, accountability, and measurable workflows." },
      { title: "Documentation", description: "We build complete SOPs, process documentation, operational playbooks, checklists, templates, and knowledge systems your team can actually use." },
      { title: "Automation & Integration", description: "Where appropriate, we automate repetitive work, connect your existing tools, and eliminate unnecessary manual effort using modern workflow automation and AI." },
      { title: "Implementation & Team Enablement", description: "We work alongside your team to implement every system, train key stakeholders, test workflows, and ensure everything operates successfully before handover." },
      { title: "Continuous Improvement Framework", description: "Your business receives clear documentation and improvement processes so your systems continue evolving long after the engagement ends." },
    ],
    engagement: {
      summary: "Most Business Process Systemization engagements are completed within 8–16 weeks, depending on business size, operational complexity, number of departments, and implementation scope.",
      deliverables: [
        "Business Process Assessment", "Process Mapping", "SOP Development", "Workflow Design",
        "AI & Automation Opportunities", "Team Training", "Documentation Library",
        "Operational Playbooks", "Handover & Implementation Support",
      ],
      closingNotes: [
        "Everything we build becomes your intellectual property.",
        "There are no software lock-ins, recurring consulting requirements, or dependency on our team after implementation.",
      ],
    },
    outcomesHeading: "Expected Business Outcomes",
    businessOutcomes: [
      "Reduced founder involvement in day-to-day operations", "Faster employee onboarding", "Increased operational consistency",
      "Fewer repetitive manual tasks", "Improved team accountability", "Better visibility into business performance",
      "More time for founders to focus on growth, strategy, and leadership",
    ],
    comparisonTable: {
      caption: "Business Process Systemization vs Traditional Approaches",
      headers: ["Approach", "Focus", "Long-Term Value", "Best For"],
      rows: [
        ["Process Documentation Only", "Documents work", "Medium", "Businesses needing basic SOPs"],
        ["Workflow Automation Only", "Automates isolated tasks", "Medium", "Businesses with mature processes already in place"],
        ["Fractional COO", "Leadership and oversight", "Depends on individual", "Companies seeking executive operational management"],
        ["Prabhakar Growth Systems – Business Process Systemization", "Processes, SOPs, automation, accountability, implementation, and team adoption", "High", "Founder-led businesses ready to scale through systems"],
      ],
    },
    finalCTA: {
      heading: "Build a Business That Can Grow Without Constant Founder Involvement.",
      paragraphs: [
        "Every growing business reaches a point where hard work is no longer enough.",
        "The next stage of growth comes from building systems that make success repeatable.",
        "Book a Free Operations Audit, and we'll identify the operational bottlenecks limiting your business and show you how a structured Business Process Systemization approach can remove them.",
      ],
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
