import Link from "next/link";
import { ArrowRight, BrainCircuit, Code2, Cpu, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const domains = [
  { icon: Code2, title: "Software & Engineering", text: "Build products, platforms, developer tools and digital systems that solve real problems.", href: "/projects" },
  { icon: BrainCircuit, title: "Artificial Intelligence", text: "Explore intelligent systems, automation, assistants and practical AI-powered experiences.", href: "/labs/ai-lab" },
  { icon: ShieldCheck, title: "Cybersecurity", text: "Study defensive security, secure development, threat modeling and responsible testing.", href: "/labs/security-lab" },
  { icon: Cpu, title: "Technology & Hardware", text: "Experiment with devices, computing, networks, hardware and the systems connecting them.", href: "/store" },
];

export default function TechnologyPage() {
  return (
    <main>
      <Navbar />
      <section className="subpage pageHero">
        <div className="sectionLabel">UTECH / TECHNOLOGY</div>
        <span className="eyebrow"><Sparkles size={15} /> THE TECHNOLOGY DIVISION</span>
        <h1>Build the technology.<br /><span>Understand what powers it.</span></h1>
        <p>Technology is at the center of UTECH. From software and AI to cybersecurity and hardware, this is where ideas become systems and experiments become capabilities.</p>
        <div className="actions">
          <Link className="primary" href="/projects">Explore what we're building <ArrowRight size={18} /></Link>
          <Link className="secondary" href="/labs">Enter the Labs</Link>
        </div>
      </section>

      <section className="pillars">
        <div className="sectionLabel">01 / CORE DOMAINS</div>
        <div className="cards">
          {domains.map(({ icon: Icon, title, text, href }) => (
            <Link className="card" href={href} key={title}>
              <div className="icon"><Icon size={23} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <b>Explore →</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="mission">
        <div className="sectionLabel">02 / THE UTECH APPROACH</div>
        <div>
          <h2>Learn the system.<br /><span>Then build your own.</span></h2>
          <p>UTECH connects structured learning with real projects and hands-on experimentation. The goal is not simply to consume technology, but to understand it deeply enough to create, secure and improve it.</p>
        </div>
      </section>

      <section className="start">
        <div className="sectionLabel">03 / BUILD WITH UTECH</div>
        <h2>From curiosity to capability.</h2>
        <p>Explore a project, enter a lab, learn a technical foundation or follow the work happening across the ecosystem.</p>
        <div className="actions">
          <Link className="primary" href="/learning">Explore Learning <ArrowRight size={18} /></Link>
          <Link className="secondary" href="/projects">View Projects</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
