import Link from "next/link";

type GuideCardProps = {
  title: string;
  description: string;
  href: string;
};

const GuideCard = ({ title, description, href }: GuideCardProps) => (
  <Link
    href={href}
    className="rounded-2xl border border-black/10 p-6 transition hover:border-black"
  >
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-3 text-sm text-black/70">{description}</p>
    <span className="mt-6 inline-flex text-sm font-semibold text-black/70 hover:text-black">
      Open guide →
    </span>
  </Link>
);

export default function GuidesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
          Guides
        </p>
        <h1 className="mt-4 text-3xl font-semibold">Clear, structured pathways</h1>
        <p className="mt-3 text-lg text-black/70">
          OpenApply guides simplify complex application steps into clear, achievable
          milestones. Start with the core guides below, then return whenever you need a
          refresher.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <GuideCard
          title="Admissions"
          description="Timelines, documents, and application strategy for U.S. universities."
          href="/guides/admissions"
        />
        <GuideCard
          title="Scholarships"
          description="Funding opportunities, essays, and planning for financial aid."
          href="/guides/scholarships"
        />
        <GuideCard
          title="CSS Profile"
          description="Step-by-step help for completing the CSS Profile with confidence."
          href="/guides/css-profile"
        />
      </div>

      <section className="mt-16 rounded-3xl border border-black/10 p-10">
        <h2 className="text-xl font-semibold">Need something specific?</h2>
        <p className="mt-3 text-black/70">
          Visit the resource library for curated checklists, scholarship databases,
          and country-specific notes.
        </p>
        <Link
          href="/resources"
          className="mt-6 inline-flex text-sm font-semibold text-black/70 hover:text-black"
        >
          Browse resources →
        </Link>
      </section>
    </div>
  );
}
