import Link from "next/link";

type Stat = { value: string; label: string };
type Card = { title: string; description: string; href: string; tag?: string };

const stats: Stat[] = [
  { value: "50+", label: "Focused guides for admissions + financial aid" },
  { value: "24", label: "New resources curated every month" },
  { value: "120", label: "Countries represented by our community" },
];

const startCards: Card[] = [
  {
    title: "Admissions roadmap",
    description:
      "Understand timelines, academic requirements, and how to stand out.",
    href: "/guides",
    tag: "Guides",
  },
  {
    title: "Scholarship strategy",
    description:
      "Find funding sources and craft strong scholarship submissions.",
    href: "/resources",
    tag: "Resources",
  },
  {
    title: "CSS Profile help",
    description:
      "Step-by-step help for the financial aid forms many schools require.",
    href: "/guides",
    tag: "Guides",
  },
];

const latestGuides: Card[] = [
  {
    title: "Application timeline checklist",
    description: "A month-by-month plan from research to decision letters.",
    href: "/guides",
  },
  {
    title: "Common essay mistakes (and fixes)",
    description: "What admissions readers flag — and how to improve fast.",
    href: "/guides",
  },
  {
    title: "Letters of recommendation playbook",
    description: "Who to ask, when to ask, and how to make it easy for them.",
    href: "/guides",
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-2 md:items-start">
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs tracking-wide text-neutral-600">
            GLOBAL ACCESS, FREE FOREVER
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Everything international students need to apply to U.S.
            universities and scholarships.
          </h1>

          <p className="max-w-prose text-pretty text-neutral-600">
            OpenApply is a modern, collaborative platform to remove paywalls and
            confusion. Get clear admissions guidance, scholarship strategies,
            and a growing community that supports every step.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/guides"
              className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
            >
              Explore guides
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-neutral-50"
            >
              Browse resources
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="text-3xl font-semibold">{s.value}</div>
              <div className="mt-1 text-sm text-neutral-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Start with what matters most */}
      <section className="mt-14">
        <h2 className="text-xl font-semibold">Start with what matters most</h2>
        <p className="mt-2 max-w-prose text-sm text-neutral-600">
          Learn the foundations, then dive into details across admissions,
          scholarships, and required documents.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {startCards.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="text-base font-semibold">{c.title}</div>
                {c.tag ? (
                  <div className="rounded-full border px-2 py-0.5 text-xs text-neutral-600">
                    {c.tag}
                  </div>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-neutral-600">{c.description}</p>
              <div className="mt-4 text-sm font-medium">
                Explore{" "}
                <span className="transition group-hover:translate-x-0.5 inline-block">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest guides */}
      <section className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Latest guides</h2>
            <p className="mt-2 text-sm text-neutral-600">
              Fresh, practical steps you can follow this week.
            </p>
          </div>

          <Link
            href="/guides"
            className="text-sm font-medium text-neutral-900 hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {latestGuides.map((g) => (
            <Link
              key={g.title}
              href={g.href}
              className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-base font-semibold">{g.title}</div>
              <p className="mt-2 text-sm text-neutral-600">{g.description}</p>
              <div className="mt-4 text-sm font-medium">
                Read{" "}
                <span className="transition group-hover:translate-x-0.5 inline-block">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-14 rounded-2xl border bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold">Community stories are coming</h3>
            <p className="mt-1 text-sm text-neutral-600">
              For now, explore public advice and sign in to be ready to contribute
              your experience.
            </p>
          </div>

          <Link
            href="/community"
            className="inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-neutral-50"
          >
            Sign in to post
          </Link>
        </div>
      </section>
    </main>
  );
}