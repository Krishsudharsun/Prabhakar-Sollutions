// PLACEHOLDER CONTENT, replace with real, permissioned case studies before launch.
export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "case-study-one",
    client: "[Client Name]",
    industry: "[Industry]",
    challenge: "[Describe the specific operational problem this client had before working with you.]",
    solution: "[Describe what you built or changed to solve it.]",
    results: [
      { metric: "[XX]%", label: "[Result label]" },
      { metric: "[XX]", label: "[Result label]" },
      { metric: "[XX]", label: "[Result label]" },
    ],
  },
  {
    slug: "case-study-two",
    client: "[Client Name]",
    industry: "[Industry]",
    challenge: "[Describe the specific operational problem this client had before working with you.]",
    solution: "[Describe what you built or changed to solve it.]",
    results: [
      { metric: "[XX]%", label: "[Result label]" },
      { metric: "[XX]", label: "[Result label]" },
      { metric: "[XX]", label: "[Result label]" },
    ],
  },
  {
    slug: "case-study-three",
    client: "[Client Name]",
    industry: "[Industry]",
    challenge: "[Describe the specific operational problem this client had before working with you.]",
    solution: "[Describe what you built or changed to solve it.]",
    results: [
      { metric: "[XX]%", label: "[Result label]" },
      { metric: "[XX]", label: "[Result label]" },
      { metric: "[XX]", label: "[Result label]" },
    ],
  },
];
