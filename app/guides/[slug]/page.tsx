// app/guides/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { guides } from "@/app/lib/guides";
import { extractToc, readingTimeMinutes, renderMarkdown } from "@/app/lib/markdown";

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return iso;
  }
}

function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}

function relatedGuides(slug: string) {
  const current = getGuide(slug);
  if (!current) return [];

  const scored = guides
    .filter((g) => g.slug !== slug)
    .map((g) => {
      let score = 0;
      if (g.category === current.category) score += 2;
      const sharedTags = g.tags.filter((t) => current.tags.includes(t)).length;
      score += sharedTags;
      return { g, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, 3).map((x) => x.g);
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGuide(params.slug);
  if (!g) return { title: "Guide not found" };
  return {
    title: `${g.title} • OpenApply`,
    description: g.description,
  };
}

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();

  const toc = extractToc(guide.content);
  const minutes = guide.minutes ?? readingTimeMinutes(guide.content);
  const related = relatedGuides(guide.slug);

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-10">
      {/* top breadcrumb */}
      <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-zinc-500">
        <Link href="/guides" className="hover:text-zinc-900">
          Guides
        </Link>
        <span>•</span>
        <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-zinc-700">
          {guide.category}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
        {/* content */}
        <article className="min-w-0">
          <header className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              {guide.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-700">
              {guide.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-zinc-600">
              <span className="rounded-full bg-zinc-100 px-3 py-1">
                ~{minutes} min read
              </span>
              <span className="rounded-full bg-zinc-100 px-3 py-1">
                Updated {formatDate(guide.updatedISO)}
              </span>
              {guide.tags.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-zinc-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </header>

          <section className="mt-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <div
              className="prose prose-zinc max-w-none"
              // We control the markdown source (your own guide strings).
              dangerouslySetInnerHTML={{ __html: renderMarkdown(guide.content) }}
            />
          </section>

          {/* Cozy CTA */}
          <section className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
            <h2 className="text-lg font-semibold text-zinc-900">Want this as a checklist?</h2>
            <p className="mt-2 text-zinc-700">
              Next we can turn this guide into a step-by-step checklist you can save as you go.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                Back to guides
              </Link>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              >
                Save this guide (coming soon)
              </a>
            </div>
          </section>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-10">
              <h3 className="text-lg font-semibold text-zinc-900">Related guides</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {related.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/guides/${g.slug}`}
                    className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                      {g.category}
                    </div>
                    <div className="mt-2 text-lg font-semibold text-zinc-900 group-hover:underline">
                      {g.title}
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-700">
                      {g.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-10 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-zinc-900">On this page</div>
            {toc.length === 0 ? (
              <p className="mt-3 text-sm text-zinc-600">No sections yet.</p>
            ) : (
              <nav className="mt-4 space-y-2 text-sm">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={[
                      "block hover:text-zinc-900",
                      item.level === 3 ? "pl-4 text-zinc-600" : "text-zinc-700",
                    ].join(" ")}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            )}
            <div className="mt-6 border-t border-zinc-200 pt-5">
              <div className="text-xs text-zinc-500">Quick actions</div>
              <div className="mt-3 flex flex-col gap-2">
                <Link
                  href="/guides"
                  className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-900 hover:bg-zinc-50"
                >
                  Browse all guides
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}