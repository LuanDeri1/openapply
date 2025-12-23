import Link from "next/link";

type FeatureCardProps = {
  title: string;
  description: string;
  href: string;
};

const FeatureCard = ({ title, description, href }: FeatureCardProps) => (
  <Link
    href={href}
    className="group rounded-2xl border border-black/10 p-6 transition hover:border-black"
  >
    <h3 className="text-lg font-semibold group-hover:text-black">{title}</h3>
    <p className="mt-3 text-sm text-black/70">{description}</p>
    <span className="mt-6 inline-flex text-sm font-medium text-black/70 group-hover:text-black">
      Explore →
    </span>
  </Link>
);

const FocusMetric = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-2xl border border-black/10 p-6">
    <p className="text-2xl font-semibold">{value}</p>
    <p className="mt-2 text-sm text-black/70">{label}</p>
  </div>
);

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
            Global access, free forever
          </span>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Everything international students need to apply to U.S. universities and
            scholarships.
          </h1>
          <p className="text-lg text-black/70">
            OpenApply is a modern, collaborative platform built to remove paywalls and
            confusion. Get clear admissions guidance, scholarship strategies, and a
            growing community that supports every step.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides"
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
            >
              Explore guides
            </Link>
            <Link
              href="/resources"
              className="rounded-full border border-black/20 px-6 py-3 text-sm font-semibold text-black/70 hover:border-black hover:text-black"
            >
              Browse resources
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <FocusMetric label="Focused guides for admissions + financial aid" value="50+" />
          <FocusMetric label="New resources curated every month" value="24" />
          <FocusMetric label="Countries represented by our community" value="120" />
        </div>
      </section>

      <section className="mt-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Start with what matters most</h2>
            <p className="mt-2 text-black/70">
              Learn the foundations, then dive into details across admissions,
              scholarships, and required documents.
            </p>
          </div>
          <Link
            href="/guides"
            className="text-sm font-semibold text-black/70 hover:text-black"
          >
            View all guides →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="Admissions roadmap"
            description="Understand timelines, academic requirements, and how to stand out."
            href="/guides/admissions"
          />
          <FeatureCard
            title="Scholarship strategy"
            description="Find funding sources and craft strong scholarship submissions."
            href="/guides/scholarships"
          />
          <FeatureCard
            title="CSS Profile help"
            description="Step-by-step help for the CSS Profile and financial aid forms."
            href="/guides/css-profile"
          />
        </div>
      </section>

      <section className="mt-20 rounded-3xl border border-black/10 p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Community stories are coming</h2>
            <p className="mt-2 text-black/70">
              We will open community posting soon. For now, explore public advice and
              sign in to be ready to contribute your experience.
            </p>
          </div>
          <Link
            href="/community"
            className="rounded-full border border-black/20 px-6 py-3 text-sm font-semibold text-black/70 hover:border-black hover:text-black"
          >
            Sign in to post
          </Link>
        </div>
      </section>
    </div>
  );
}
