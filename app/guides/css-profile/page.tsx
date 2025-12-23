import Link from "next/link";

type StepCardProps = {
  step: string;
  description: string;
};

const StepCard = ({ step, description }: StepCardProps) => (
  <div className="rounded-2xl border border-black/10 p-6">
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
      {step}
    </p>
    <p className="mt-3 text-sm text-black/70">{description}</p>
  </div>
);

export default function CssProfileGuidePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
            CSS Profile guide
          </p>
          <h1 className="mt-4 text-3xl font-semibold">
            Complete the CSS Profile with confidence
          </h1>
          <p className="mt-3 text-lg text-black/70">
            The CSS Profile collects detailed financial information for aid decisions.
            Use this guide to stay organized and accurate.
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
        <StepCard
          step="Step 1"
          description="Gather income statements, tax documents, and household details."
        />
        <StepCard
          step="Step 2"
          description="Align currency conversions and explain any unusual financial changes."
        />
        <StepCard
          step="Step 3"
          description="Review with a counselor or guardian before submitting."
        />
      </div>

      <section className="mt-16 rounded-3xl border border-black/10 p-10">
        <h2 className="text-xl font-semibold">Need scholarship resources?</h2>
        <p className="mt-3 text-black/70">
          Access funding databases, essay templates, and planning tools in the
          resource library.
        </p>
        <Link
          href="/resources"
          className="mt-6 inline-flex text-sm font-semibold text-black/70 hover:text-black"
        >
          Visit resources →
        </Link>
      </section>
    </div>
  );
}
