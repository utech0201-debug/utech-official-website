import Link from "next/link";
import { ArrowLeft, ArrowRight, Beaker, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { labs } from "@/data/labs";
import { labContent } from "@/data/lab-content";

export function generateStaticParams() {
  return labs.flatMap(lab =>
    lab.experiments.map((_, index) => ({ slug: lab.slug, experiment: String(index + 1) }))
  );
}

export default async function ExperimentPage({
  params,
}: {
  params: Promise<{ slug: string; experiment: string }>;
}) {
  const { slug, experiment } = await params;
  const lab = labs.find(item => item.slug === slug);
  const index = Number(experiment) - 1;
  const content = labContent[slug]?.[index];

  if (!lab || !content || !Number.isInteger(index) || index < 0) notFound();

  const hasNext = index + 1 < lab.experiments.length;
  const next = hasNext ? `/labs/${slug}/${index + 2}` : `/labs/${slug}`;

  return (
    <main className="subpage">
      <Link className="back" href={`/labs/${slug}`}>
        <ArrowLeft size={15} /> Back to {lab.title}
      </Link>

      <div className="lessonHero">
        <span className="eyebrow"><Beaker size={15} /> {lab.code} / EXPERIMENT {String(index + 1).padStart(2, "0")}</span>
        <h1>{content.title}</h1>
        <p>{content.objective}</p>
      </div>

      <section className="experimentViewer">
        <article className="lessonBlock">
          <span className="sectionLabel">THE BRIEF</span>
          <p>{content.brief}</p>
        </article>
        <article className="challengeBox">
          <span className="sectionLabel">YOUR TASK</span>
          <h2>Experiment time.</h2>
          <p>{content.task}</p>
        </article>
        <article className="safetyNote">
          <ShieldCheck size={19} />
          <div>
            <b>Safe experimentation</b>
            <p>{content.safety}</p>
          </div>
        </article>
      </section>

      <Link className="nextLesson" href={next}>
        {hasNext ? "Next experiment" : "Back to lab"} <ArrowRight size={16} />
      </Link>
    </main>
  );
}
