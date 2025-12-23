// app/guides/[slug]/page.tsx

import Link from "next/link";
import { guides, formatUpdated } from "@/app/lib/guides";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export default function GuideDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const guide = guides.find((g) => g.slug === params.slug);
  if (!guide) return notFound();

  return (
    <main className="mx-auto w-full max-w-3xl px-6 pb-16 pt-10">
      <Link href="/guides" className="text-sm text-black/60 hover:text-black">
        ← Back to guides
      </Link>

      <div className="mt-6 rounded-2xl border border-black/15 bg-white p-8">
        <div className="flex flex-wrap items-center gap-3 text-xs text-black/60">
          <span className="rounded-full border border-black/15 px-3 py-1">
            {guide.category}
          </span>
          <span>~{guide.minutes} min</span>
          <span>Updated {formatUpdated(guide.updatedISO)}</span>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-black">
          {guide.title}
        </h1>
        <p className="mt-2 text-sm text-black/60">{guide.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {guide.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-black/15 px-3 py-1 text-xs text-black/70"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="prose prose-slate mt-8 max-w-none">
          {/* simple rendering for now */}
          {guide.content.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </main>
  );
}