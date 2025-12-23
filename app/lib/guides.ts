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
  content: string; // markdown-ish text
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
    content: `
## Build a shortlist
- Start with big databases + your school’s list
- Filter by eligibility + deadlines

## Build a weekly pipeline
- Mon: find 5
- Tue: outline 2
- Wed: draft 1
- Thu: polish 1
- Fri: submit + track

## Track everything
- Name, deadline, requirements, status, notes
`.trim(),
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
    content: `
## Phase 1 — Research
- Pick countries + program types
- Build a 10–20 school shortlist

## Phase 2 — Requirements
- Tests, transcripts, translations
- Recommendations + deadlines

## Phase 3 — Essays
- Draft → feedback → final
`.trim(),
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
    content: `
## Brainstorm
- 10 moments that changed how you think
- 5 failures + what you learned

## Structure
- Hook → tension → insight → reflection
`.trim(),
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
    content: `
## "Tell me about yourself" (30–60s)
- Past → Present → Future

## "Why this school?"
- Program fit + personal fit + contribution
`.trim(),
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
    content: `
## Before travel
- Visa docs
- Housing confirmation
- Immunizations

## Week 1
- SIM
- Bank
- Student ID
`.trim(),
  },
  {
    slug: "budgeting-in-the-us",
    title: "Budgeting in the U.S. as an international student",
    description:
      "Realistic monthly budgets, rent strategies, and how to avoid money stress during school.",
    category: "Finance",
    tags: ["budget", "rent", "planning"],
    minutes: 9,
    updatedISO: "2025-12-22",
    content: `
## Make a baseline budget
- Rent + utilities
- Food
- Transport
- Phone + subscriptions

## Reduce the big 2
- Rent: roommates / location tradeoffs
- Food: meal prep / campus plans
`.trim(),
  },
];