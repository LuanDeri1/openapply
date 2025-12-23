import Link from "next/link";

type ValueCardProps = {
  title: string;
  description: string;
};

const ValueCard = ({ title, description }: ValueCardProps) => (
  <div className="rounded-2xl border border-black/10 p-6">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-black/70">{description}</p>
  </div>
);

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
          About OpenApply
        </p>
        <h1 className="mt-4 text-3xl font-semibold">Free, democratic, global access</h1>
        <p className="mt-3 text-lg text-black/70">
          OpenApply exists to make U.S. university and scholarship applications clear
          and equitable for every student, regardless of geography or income.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <ValueCard
          title="No paywalls"
          description="Every guide, resource, and checklist stays free for students worldwide."
        />
        <ValueCard
          title="Community-led"
          description="Advice is shaped by students and counselors with real experience."
        />
        <ValueCard
          title="Global first"
          description="We prioritize international perspectives, from documentation to culture."
        />
      </div>

      <section className="mt-16 rounded-3xl border border-black/10 p-10">
        <h2 className="text-xl font-semibold">Join the mission</h2>
        <p className="mt-3 text-black/70">
          We are building an open platform that removes gatekeeping. If you want to
          support the mission, start by exploring the guides and sharing feedback.
        </p>
        <Link
          href="/guides"
          className="mt-6 inline-flex text-sm font-semibold text-black/70 hover:text-black"
        >
          Explore guides →
        </Link>
      </section>
    </div>
  );
}
