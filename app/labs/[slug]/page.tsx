import Link from "next/link";
import { ArrowLeft, ArrowRight, Beaker, FlaskConical } from "lucide-react";
import { notFound } from "next/navigation";
import { labs } from "@/data/labs";

export function generateStaticParams() {
  return labs.map(lab => ({ slug: lab.slug }));
}

export default async function LabPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lab = labs.find(item => item.slug === slug);
  if (!lab) notFound();

  return (
    <main className="subpage">
      <Link className="back" href="/labs">
        <ArrowLeft size={15} /> Back to UTECH Labs
      </Link>

      <div className="courseHero">
        <span className="eyebrow"><FlaskConical size={15} /> {lab.code} / EXPERIMENT SPACE</span>
        <h1>{lab.title}</h1>
        <p>{lab.description}</p>
      </div>

      <section className="modulePanel">
        <div className="sectionLabel">EXPERIMENT TRACKS</div>
        <div className="moduleList">
          {lab.experiments.map((experiment, index) => (
            <Link className="moduleItem" href={`/labs/${lab.slug}/${index + 1}`} key={experiment}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{experiment}</h2>
                <p>Controlled workspace for UTECH builders.</p>
              </div>
              <Beaker size={18} />
              <ArrowRight className="moduleArrow" size={16} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
