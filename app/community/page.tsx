import Link from "next/link";

type HighlightProps = {
  title: string;
  description: string;
};

const Highlight = ({ title, description }: HighlightProps) => (
  <div className="rounded-2xl border border-black/10 p-6">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-black/70">{description}</p>
  </div>
);

export default function CommunityPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
            Community
          </p>
          <h1 className="mt-4 text-3xl font-semibold">Learn from each other</h1>
          <p className="mt-3 text-lg text-black/70">
            Community posting will open soon. For now, browse a snapshot of the
            conversations we want to build together.
          </p>
        </div>
        <Link
          href="/community"
          className="rounded-full border border-black/20 px-6 py-3 text-sm font-semibold text-black/70 hover:border-black hover:text-black"
        >
          Sign in to post
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Highlight
          title="Application timelines"
          description="Students share how they balanced school, exams, and deadlines."
        />
        <Highlight
          title="Scholarship wins"
          description="Transparent breakdowns of essays, interview prep, and funding results."
        />
        <Highlight
          title="Visa + arrival"
          description="Advice on interviews, travel preparation, and first-week logistics."
        />
      </div>

      <section className="mt-16 rounded-3xl border border-black/10 p-10">
        <h2 className="text-xl font-semibold">Ready to share your story?</h2>
        <p className="mt-3 text-black/70">
          Sign in to get notified when community posting opens. We will keep the
          space safe, inclusive, and globally representative.
        </p>
        <Link
          href="/community"
          className="mt-6 inline-flex text-sm font-semibold text-black/70 hover:text-black"
        >
          Sign in to post →
        </Link>
      </section>
    </div>
  );
}
