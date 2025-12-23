"use client";

import { useMemo, useState } from "react";

type Guide = {
  id: string;
  title: string;
  summary: string;
  category: "Admissions" | "Scholarships" | "Visa" | "Essays" | "Interviews" | "Finance";
  tags: string[];
  minutes: number;
  updated: string; // YYYY-MM-DD
  featured?: boolean;
};

const GUIDES: Guide[] = [
  {
    id: "admissions-roadmap",
    title: "Admissions roadmap (A–Z)",
    summary:
      "A step-by-step plan from research → shortlist → essays → recommendations → submission.",
    category: "Admissions",
    tags: ["timeline", "checklist", "planning"],
    minutes: 12,
    updated: "2025-12-23",
    featured: true,
  },
  {
    id: "scholarship-strategy",
    title: "Scholarship strategy that actually works",
    summary:
      "How to find scholarships, prioritize by ROI, and build a repeatable application system.",
    category: "Scholarships",
    tags: ["funding", "search", "system"],
    minutes: 10,
    updated: "2025-12-23",
    featured: true,
  },
  {
    id: "common-app-essays",
    title: "Common App essay playbook",
    summary:
      "Brainstorming, structure, and revision workflow — with examples of strong narrative arcs.",
    category: "Essays",
    tags: ["writing", "story", "revision"],
    minutes: 15,
    updated: "2025-12-22",
  },
  {
    id: "interview-prep",
    title: "Interview prep (with scripts)",
    summary:
      "How to answer “Tell me about yourself”, “Why this school”, and tough follow-ups calmly.",
    category: "Interviews",
    tags: ["practice", "scripts", "confidence"],
    minutes: 9,
    updated: "2025-12-21",
  },
  {
    id: "visa-arrival",
    title: "Visa + arrival checklist",
    summary:
      "Docs to prepare, common pitfalls, and first-week setup (SIM, bank, ID, campus basics).",
    category: "Visa",
    tags: ["F-1", "arrival", "documents"],
    minutes: 8,
    updated: "2025-12-20",
  },
  {
    id: "budgeting-in-us",
    title: "Budgeting in the U.S. as an international student",
    summary:
      "Realistic monthly budgets, rent strategies, and how to avoid money stress during school.",
    category: "Finance",
    tags: ["budget", "rent", "planning"],
    minutes: 11,
    updated: "2025-12-19",
  },
];

function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

export default function GuidesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set(GUIDES.map((g) => g.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GUIDES.filter((g) => {
      const matchesCategory = category === "All" ? true : g.category === category;
      const haystack = `${g.title} ${g.summary} ${g.tags.join(" ")}`.toLowerCase();
      const matchesQuery = q.length === 0 ? true : haystack.includes(q);
      return matchesCategory && matchesQuery;
    }).sort((a, b) => (a.updated < b.updated ? 1 : -1));
  }, [query, category]);

  const featured = filtered.filter((g) => g.featured);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 md:px-6">
      <header className="mb-8">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
          <span className="font-medium">GUIDES</span>
          <span className="text-neutral-500">categories + search</span>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Guides for admissions, scholarships, and life in the U.S.
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
          Search by keyword, filter by category, and build your plan step-by-step.
        </p>

        {/* Search + filters */}
        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
          <div className="w-full md:flex-1">
            <label className="sr-only" htmlFor="search">
              Search guides
            </label>
            <input
              id="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search guides (e.g., essays, visa, checklist, funding)…"
              className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={classNames(
                  "rounded-full border px-3 py-2 text-xs",
                  c === category && "font-semibold"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 text-xs text-neutral-500">
          Showing <span className="font-medium text-neutral-800">{filtered.length}</span> guide
          {filtered.length === 1 ? "" : "s"}
          {category !== "All" ? (
            <>
              {" "}
              in <span className="font-medium text-neutral-800">{category}</span>
            </>
          ) : null}
          {query.trim() ? (
            <>
              {" "}
              matching <span className="font-medium text-neutral-800">“{query.trim()}”</span>
            </>
          ) : null}
          .
        </div>
      </header>

      {/* Featured */}
      {featured.length > 0 ? (
        <section className="mb-10">
          <h2 className="mb-3 text-sm font-semibold">Featured</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {featured.map((g) => (
              <article key={g.id} className="rounded-2xl border p-5">
                <div className="mb-2 text-xs text-neutral-500">{g.category}</div>
                <h3 className="text-lg font-semibold">{g.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{g.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.tags.map((t) => (
                    <span key={t} className="rounded-full border px-2 py-1 text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-xs text-neutral-500">
                  ~{g.minutes} min • Updated {g.updated}
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {/* All results */}
      <section>
        <h2 className="mb-3 text-sm font-semibold">All guides</h2>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border p-6 text-sm text-neutral-600">
            No results. Try a different keyword or switch categories.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((g) => (
              <article key={g.id} className="rounded-2xl border p-5">
                <div className="mb-2 text-xs text-neutral-500">{g.category}</div>
                <h3 className="text-base font-semibold">{g.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{g.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {g.tags.map((t) => (
                    <span key={t} className="rounded-full border px-2 py-1 text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-xs text-neutral-500">
                  ~{g.minutes} min • Updated {g.updated}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}