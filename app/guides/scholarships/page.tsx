import Link from "next/link";

type StrategyCardProps = {
  title: string;
  description: string;
};

const StrategyCard = ({ title, description }: StrategyCardProps) => (
  <div className="rounded-2xl border border-black/10 p-6">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-black/70">{description}</p>
  </div>
);

export default function ScholarshipsGuidePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
            Scholarships guide
          </p>
          <h1 className="mt-4 text-3xl font-semibold">
            Build a funding plan that supports your goals
          </h1>
          <p className="mt-3 text-lg text-black/70">
            Scholarships can cover more than tuition. Learn to search strategically,
            tailor essays, and track deadlines without missing opportunities.
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
        <StrategyCard
          title="Find the right sources"
          description="Start with university aid, then expand to global and regional scholarships."
        />
        <StrategyCard
          title="Craft standout essays"
          description="Connect your story to impact, leadership, and future contribution."
        />
        <StrategyCard
          title="Track deadlines"
          description="Use a single calendar to manage submissions and references."
        />
      </div>

      <section className="mt-16 rounded-3xl border border-black/10 p-10">
        <h2 className="text-xl font-semibold">Next: CSS Profile</h2>
        <p className="mt-3 text-black/70">
          Many scholarships require the CSS Profile. Prepare the documents early.
        </p>
        <Link
          href="/guides/css-profile"
          className="mt-6 inline-flex text-sm font-semibold text-black/70 hover:text-black"
        >
          Go to CSS Profile guide →
        </Link>
      </section>
    </div>
  );
}
