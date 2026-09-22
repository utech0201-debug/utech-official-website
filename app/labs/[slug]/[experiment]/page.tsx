import Link from "next/link";
import { ArrowLeft, ArrowRight, Beaker } from "lucide-react";
import { notFound } from "next/navigation";
import { labs } from "@/data/labs";
import { labContent } from "@/data/lab-content";
import ExperimentViewer from "@/components/labs/ExperimentViewer";

export function generateStaticParams() {
  return labs.flatMap((lab) =>
    lab.experiments.map((_, index) => ({
      slug: lab.slug,
      experiment: String(index + 1),
    })),
  );
}

export default async function ExperimentPage({
  params,
}: {
  params: Promise<{ slug: string; experiment: string }>;
}) {
  const { slug, experiment } = await params;
  const lab = labs.find((item) => item.slug === slug);
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
        <span className="eyebrow">
          <Beaker size={15} /> {lab.code} / EXPERIMENT {String(index + 1).padStart(2, "0")}
        </span>
        <h1>{content.title}</h1>
        <p>{content.objective}</p>
      </div>

      <ExperimentViewer
        labSlug={slug}
        experimentIndex={index}
        totalExperiments={lab.experiments.length}
        experiment={content}
      />

      <Link className="nextLesson" href={next}>
        {hasNext ? "Next experiment" : "Back to lab"} <ArrowRight size={16} />
      </Link>
    </main>
  );
}
