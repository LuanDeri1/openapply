import Link from "next/link";

type ChecklistItemProps = {
  title: string;
  description: string;
};

const ChecklistItem = ({ title, description }: ChecklistItemProps) => (
  <div className="rounded-2xl border border-black/10 p-6">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-black/70">{description}</p>
  </div>
);

export default function AdmissionsGuidePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
            Admissions guide
          </p>
          <h1 className="mt-4 text-3xl font-semibold">
            Build a confident admissions plan
          </h1>
          <p className="mt-3 text-lg text-black/70">
            From building your school list to submitting final documents, this guide
            keeps you focused on the steps that matter most.
          </p>
        </div>
        <Link
          href="/guides"
          className="text-sm font-semibold text-black/70 hover:text-black"
        >
          Back to guides →
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <ChecklistItem
          title="Plan your timeline"
          description="Map key testing dates, application deadlines, and recommendation requests."
        />
        <ChecklistItem
          title="Strengthen your profile"
          description="Highlight academic achievements, leadership, and authentic impact."
        />
        <ChecklistItem
          title="Prepare documents"
          description="Organize transcripts, essays, and application forms early."
        />
      </div>

      <section className="mt-16 rounded-3xl border border-black/10 p-10">
        <h2 className="text-xl font-semibold">Next: Scholarships</h2>
        <p className="mt-3 text-black/70">
          Funding matters as much as admissions. Learn how to approach scholarships
          strategically.
        </p>
        <Link
          href="/guides/scholarships"
          className="mt-6 inline-flex text-sm font-semibold text-black/70 hover:text-black"
        >
          Explore scholarship guide →
        </Link>
      </section>
    </div>
  );
}
