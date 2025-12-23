// app/lib/guides.ts

export type GuideCategory =
  | "Admissions"
  | "Scholarships"
  | "Essays"
  | "Interviews"
  | "Visa"
  | "Finance";

export type Guide = {
  slug: string;
  title: string;
  description: string;
  category: GuideCategory;
  tags: string[];
  minutes: number; // reading time
  updatedISO: string; // YYYY-MM-DD
  content: string; // markdown-ish text for now
};

export const guides: Guide[] = [
  {
    slug: "scholarship-strategy",
    title: "Scholarship strategy that actually works",
    description:
      "How to find scholarships, prioritize by ROI, and build a repeatable application system.",
    category: "Scholarships",
    tags: ["funding", "search", "system"],
    minutes: 10,
    updatedISO: "2025-12-23",
    content: `# Scholarship strategy that actually works

## 1) Build a shortlist
- Start with big databases + your school's list
- Filter for eligibility + deadlines

## 2) Build a weekly pipeline
- Mon: find 5
- Tue: outline 2
- Wed: draft 1
- Thu: polish 1
- Fri: submit + track

## 3) Track everything
- name, deadline, requirements, status, notes
`,
  },
  {
    slug: "admissions-roadmap",
    title: "Admissions roadmap (A–Z)",
    description:
      "A step-by-step plan from research → shortlist → essays → recommendations → submission.",
    category: "Admissions",
    tags: ["timeline", "checklist", "planning"],
    minutes: 12,
    updatedISO: "2025-12-23",
    content: `# Admissions roadmap (A–Z)

## Phase 1 — Research
- Pick countries/program types
- Create 10–20 school shortlist

## Phase 2 — Requirements
- tests, transcripts, translations
- recommendations + deadlines

## Phase 3 — Essays
- draft → feedback → final
`,
  },
  {
    slug: "common-app-essay-playbook",
    title: "Common App essay playbook",
    description:
      "Brainstorming, structure, and revision workflow — with examples of strong narrative arcs.",
    category: "Essays",
    tags: ["writing", "story", "revision"],
    minutes: 15,
    updatedISO: "2025-12-22",
    content: `# Common App essay playbook

## Brainstorm
- 10 moments that changed how you think
- 5 moments you failed + what you learned

## Structure
- hook → tension → insight → reflection
`,
  },
  {
    slug: "interview-prep",
    title: "Interview prep (with scripts)",
    description:
      'How to answer "Tell me about yourself", "Why this school", and tough follow-ups calmly.',
    category: "Interviews",
    tags: ["practice", "scripts", "confidence"],
    minutes: 12,
    updatedISO: "2025-12-23",
    content: `# Interview prep

## Tell me about yourself (30–60s)
Past → Present → Future

## Why this school?
Program fit + personal fit + contribution
`,
  },
  {
    slug: "visa-arrival-checklist",
    title: "Visa + arrival checklist",
    description:
      "Docs to prepare, common pitfalls, and first-week setup (SIM, bank, ID, campus basics).",
    category: "Visa",
    tags: ["F-1", "arrival", "documents"],
    minutes: 10,
    updatedISO: "2025-12-23",
    content: `# Visa + arrival checklist

## Before travel
- visa docs
- housing confirmation
- immunizations

## Week 1
- SIM
- bank
- student ID
`,
  },
  {
    slug: "budgeting-in-us",
    title: "Budgeting in the U.S. as an international student",
    description:
      "Realistic monthly budgets, rent strategies, and how to avoid money stress during school.",
    category: "Finance",
    tags: ["budget", "rent", "planning"],
    minutes: 9,
    updatedISO: "2025-12-22",
    content: `# Budgeting in the U.S.

## Baseline
- rent + utilities
- food
- transport
- phone + subscriptions

## Reduce the big 2
- Rent: roommates / location tradeoffs
- Food: meal prep / campus plans
`,
  },
];

export function formatUpdated(iso: string) {
  // keep it simple: show YYYY-MM-DD (already ISO-like)
  return iso;
}