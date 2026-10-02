import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";
import { labs } from "@/data/labs";
import { BackLink } from "@/components/layout/BackLink";

export default function Labs() { return <main className="subpage"><BackLink /><div className="subhero labHero"><div className="labHeroCopy"><span className="eyebrow"><FlaskConical size={15}/> UTECH LABS</span><h1>Ideas become <em>experiments.</em></h1><p>A space for prototypes, technical experiments and projects that may become something bigger.</p></div><div className="labHeroVisual"><Image src="/visuals/utech-labs-system.svg" alt="" fill sizes="(max-width: 800px) 100vw, 650px" aria-hidden="true"/></div></div><section className="labGrid">{labs.map(lab=><Link className="labCard" href={`/labs/${lab.slug}`} key={lab.slug}><span>{lab.code}</span><h2>{lab.title}</h2><p>{lab.description}</p><div>Explore lab <ArrowRight size={16}/></div></Link>)}</section></main>; }
