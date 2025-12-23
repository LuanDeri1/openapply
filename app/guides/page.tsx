"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { guides, type Guide, type GuideCategory, formatUpdated } from "@/app/lib/guides";

const ALL = "All" as const;
type Filter = typeof ALL | GuideCategory;

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function GuideCard({ g }: { g: Guide }) {
  return (
    <Link
      href={`/guides/${g.slug}`}
      className="block rounded-2xl border border-black/15 bg-white p-6 transition hover:border-black/30"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-black/60">
          {g.category}
        </span>
        <span className="text-xs text-black/50">
          ~{g.minutes} min · Updated {formatUpdated(g.updatedISO)}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-black">{g.title}</h3>
      <p className="mt-2 text-sm text-black/60">{g.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {g.tags.slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded-full border border-black/15 px-3 py-1 text-xs text-black/70"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default function GuidesPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>(ALL);

  const categories = useMemo<Filter[]>(() => {
    const set = new Set<GuideCategory>();
    for (const g of guides) set.add(g.category);
    return [ALL, ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return guides.filter((g) => {
      const matchesCategory = filter === ALL ? true : g.category === filter;

      const haystack = (
        g.title +
        " " +
        g.description +
        " " +
        g.category +
        " " +
        g.tags.join(" ")
      ).toLowerCase();

      const matchesQuery = q.length === 0 ? true : haystack.includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [query, filter]);

  const featured = filtered.slice(0, 2);
  const rest = filtered.slice(2);

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-16 pt-10">
      <div className="mb-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-1 text-xs font-semibold text-black/70">
          GUIDES <span className="font-normal text-black/40">categories + search</span>
        </span>
      </div>

      <h1 className="text-4xl font-semibold tracking-tight text-black">
        Guides for admissions, scholarships, and life in the U.S.
      </h1>
      <p className="mt-3 text-sm text-black/60">
        Search by keyword, filter by category, and build your plan step-by-step.
      </p>

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search guides (e.g., essays, visa, checklist, funding)..."
          className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black/30"
        />

        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={cx(
                "rounded-full border px-4 py-2 text-sm transition",
                c === filter
                  ? "border-black bg-black text-white"
                  : "border-black/15 bg-white text-black/70 hover:border-black/30"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3 text-xs text-black/50">Showing {filtered.length} guides.</div>

      <section className="mt-8">
        <h2 className="mb-3 text-sm font-semibold text-black/70">Featured</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((g) => (
            <GuideCard key={g.slug} g={g} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-3 text-sm font-semibold text-black/70">All guides</h2>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-black/15 bg-white p-6 text-sm text-black/60">
            No guides match your search. Try a different keyword or category.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {rest.length ? (
              rest.map((g) => <GuideCard key={g.slug} g={g} />)
            ) : (
              // if filtered <= 2, show them here too so the page isn't empty
              filtered.map((g) => <GuideCard key={g.slug} g={g} />)
            )}
          </div>
        )}
      </section>
    </main>
  );
}