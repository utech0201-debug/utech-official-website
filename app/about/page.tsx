import Link from "next/link";
import { ArrowRight, BrainCircuit, Code2, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import { BackLink } from "@/components/layout/BackLink";
import Footer from "@/components/layout/Footer";

const values = [
  { icon: Code2, title: "Build", text: "We learn by making. Ideas become prototypes, systems, products and experiments." },
  { icon: BrainCircuit, title: "Explore", text: "We stay curious about emerging technology, especially AI and the systems shaping tomorrow." },
  { icon: ShieldCheck, title: "Protect", text: "Security is part of the engineering mindset, not an afterthought." },
  { icon: Globe2, title: "Connect", text: "UTECH is designed to connect builders, knowledge, projects and opportunities." },
];

export default function AboutPage() {
  return <main>
    <section className="subpage">
      <BackLink />
      <div className="subhero">
        <div className="sectionLabel">ABOUT UTECH</div>
        <h1>Not just a platform.<br /><em>An ecosystem.</em></h1>
        <p>UTECH is the flagship technology ecosystem behind a growing collection of learning systems, labs, software projects, AI experiments, cybersecurity work and products. The official website is the headquarters where all of those directions meet.</p>
      </div>
      <div className="featureGrid">
        {values.map(({icon: Icon, title, text}) => <article key={title}><Icon size={24} color="#45e6a5" /><h2>{title}</h2><p>{text}</p></article>)}
      </div>
      <div className="pageCta"><Sparkles size={25}/><div><h2>Where we are going</h2><p>UTECH is being built in stages. The ecosystem will grow from its current learning, lab, project and product foundations toward a connected platform for builders.</p><Link className="primary" href="/projects">See what we are building <ArrowRight size={18}/></Link></div></div>
    </section>
    <Footer />
  </main>;
}