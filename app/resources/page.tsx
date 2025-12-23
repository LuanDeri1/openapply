import Link from "next/link";

type CategoryCardProps = {
  title: string;
  description: string;
};

const CategoryCard = ({ title, description }: CategoryCardProps) => (
  <div className="rounded-2xl border border-black/10 p-6">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-black/70">{description}</p>
  </div>
);

export default function ResourcesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
          Resources
        </p>
        <h1 className="mt-4 text-3xl font-semibold">Curated tools and templates</h1>
        <p className="mt-3 text-lg text-black/70">
          Search a growing library of databases, checklists, and tools built for
          international applicants. Everything is free to access.
        </p>
      </div>

      <div className="mt-10 rounded-3xl border border-black/10 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex-1">
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
              Search library
            </label>
            <div className="mt-3 rounded-2xl border border-black/10 px-4 py-3 text-sm text-black/60">
              Search will live here (keyword, scholarship, or document)
            </div>
          </div>
          <Link
            href="/guides"
            className="text-sm font-semibold text-black/70 hover:text-black"
          >
            Need a guide? →
          </Link>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <CategoryCard
          title="Scholarship databases"
          description="Global, regional, and university-specific funding sources."
        />
        <CategoryCard
          title="Application templates"
          description="Essay outlines, resume formats, and reference request scripts."
        />
        <CategoryCard
          title="Financial planning"
          description="Budgeting tools, cost calculators, and aid estimators."
        />
        <CategoryCard
          title="Visa + logistics"
          description="Checklists for visa interviews, housing, and travel planning."
        />
        <CategoryCard
          title="Testing prep"
          description="Guides and schedules for TOEFL, IELTS, SAT, and Duolingo."
        />
        <CategoryCard
          title="Country notes"
          description="Local guidance for transcripts, grading conversions, and requirements."
        />
      </div>
    </div>
  );
}
