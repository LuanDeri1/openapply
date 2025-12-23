"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type GuideCategory =
  | "Admissions"
  | "Scholarships"
  | "Essays"
  | "Interviews"
  | "Visa"
  | "Finance";

type Guide = {
  slug: string;
  title: string;
  description: string;
  category: GuideCategory;
  tags: string[];
  minutes: number;
  updated: string; // YYYY-MM-DD
  featured?: boolean;
};

const GUIDES: Guide[] = [
  {
    slug: "scholarship-strategy-that-works",
    title: "Scholarship strategy that actually works",
    description:
      "How to find scholarships, prioritize by ROI, and build a repeatable application system.",
    category: "Scholarships",
    tags: ["funding", "search", "system"],
    minutes: 10,
    updated: "2025-12-23",
    featured: true,
  },
  {
    slug: "admissions-roadmap-a-to-z",
    title: "Admissions roadmap (A–Z)",
    description:
      "A step-by-step plan from research → shortlist → essays → recommendations → submission.",
    category: "Admissions",
    tags: ["timeline", "checklist", "planning"],
    minutes: 12,
    updated: "2025-12-23",
    featured: true,
  },
  {
    slug: "common-app-essay-playbook",
    title: "Common App essay playbook",
    description:
      "Brainstorming, structure, and revision workflow — with examples of strong narrative arcs.",
    category: "Essays",
    tags: ["writing", "story", "revision"],
    minutes: 15,
    updated: "2025-12-22",
  },
  {
    slug: "interview-prep-scripts",
    title: "Interview prep (with scripts)",
    description:
      "How to answer “Tell me about yourself”, “Why this school”, and tough follow-ups calmly.",
    category: "Interviews",
    tags: ["practice", "scripts", "confidence"],
    minutes: 8,
    updated: "2025-12-21",
  },
  {
    slug: "visa-arrival-checklist",
    title: "Visa + arrival checklist",
    description:
      "Docs to prepare, common pitfalls, and first-week setup (SIM, bank, ID, campus basics).",
    category: "Visa",
    tags: ["F-1", "arrival", "documents"],
    minutes: 9,
    updated: "2025-12-20",
  },
  {
    slug: "budgeting-us-international",
    title: "Budgeting in the U.S. as an international student",
    description:
      "Realistic monthly budgets, rent strategies, and how to avoid money stress during school.",
    category: "Finance",
    tags: ["budget", "rent", "planning"],
    minutes: 11,
    updated: "2025-12-19",
  },
];

const CATEGORY_ORDER: (GuideCategory | "All")[] = [
  "All",
  "Admissions",
  "Scholarships",
  "Essays",
  "Interviews",
  "Visa",
  "Finance",
];

function formatUpdated(dateStr: string) {
  // Safe-ish formatting without importing date libs
  // dateStr is "YYYY-MM-DD"
  return dateStr;
}

function includesCI(haystack: string, needle: string) {
  return haystack.toLowerCase().includes(needle.toLowerCase());
}

function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group block rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md"
    >
      <div className="mb-2 text-xs font-medium tracking-wide text-black/50">
        {guide.category}
      </div>

      <div className="text-lg font-semibold text-black group-hover:underline">
        {guide.title}
      </div>

      <p className="mt-2 text-sm leading-6 text-black/60">{guide.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {guide.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs text-black/70"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 text-xs text-black/50">
        ~{guide.minutes} min • Updated {formatUpdated(guide.updated)}
      </div>
    </Link>
  );
}

export default function GuidesPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<GuideCategory | "All">(
    "All"
  );

  const filtered = useMemo(() => {
    const q = query.trim();
    return GUIDES.filter((g) => {
      const matchesCategory =
        activeCategory === "All" ? true : g.category === activeCategory;

      const matchesQuery =
        q.length === 0
          ? true
          : includesCI(g.title, q) ||
            includesCI(g.description, q) ||
            includesCI(g.category, q) ||
            g.tags.some((t) => includesCI(t, q));

      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const featured = useMemo(
    () => filtered.filter((g) => g.featured),
    [filtered]
  );

  // ✅ Fix: don’t duplicate featured in “All guides”
  const nonFeatured = useMemo(
    () => filtered.filter((g) => !g.featured),
    [filtered]
  );

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="mb-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs font-medium text-black/60">
          GUIDES <span className="text-black/30">categories + search</span>
        </div>
      </div>

      <h1 className="text-4xl font-semibold tracking-tight text-black">
        Guides for admissions, scholarships, and life in the U.S.
      </h1>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-black/60">
        Search by keyword, filter by category, and build your plan step-by-step.
      </p>

      {/* Search + categories */}
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
        <div className="w-full md:flex-1">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides (e.g., essays, visa, checklist, funding)..."
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none ring-0 placeholder:text-black/40 focus:border-black/20"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORY_ORDER.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat as any)}
                className={[
                  "rounded-full border px-4 py-2 text-sm transition",
                  isActive
                    ? "border-black/20 bg-black text-white"
                    : "border-black/10 bg-white text-black/70 hover:bg-black/[0.03]",
                ].join(" ")}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-3 text-xs text-black/50">
        Showing {filtered.length} guide{filtered.length === 1 ? "" : "s"}.
      </div>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="mt-10">
          <div className="mb-4 text-sm font-semibold text-black">Featured</div>
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>
      )}

      {/* All guides */}
      <section className="mt-10">
        <div className="mb-4 text-sm font-semibold text-black">All guides</div>

        {nonFeatured.length === 0 ? (
          <div className="rounded-2xl border border-black/10 bg-white p-8 text-sm text-black/60">
            No guides match your search. Try a different keyword or category.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {nonFeatured.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}