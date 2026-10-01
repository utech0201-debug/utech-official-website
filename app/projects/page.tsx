import Link from "next/link";
import { ArrowUpRight, Code2, ShieldCheck, Store, GraduationCap } from "lucide-react";
import BackLink from "@/components/layout/BackLink";
import Footer from "@/components/layout/Footer";

const projects = [
  { icon: Store, title: "UTECH Marketplace", type: "PRODUCT / COMMERCE", text: "A technology marketplace concept for gaming, hardware, digital products and future UTECH offerings.", status: "Building", href: "https://utech-e-commerce.vercel.app/" },
  { icon: GraduationCap, title: "UTECH Learning Hub", type: "EDUCATION / PLATFORM", text: "A hands-on learning system for structured technical growth across software and technology foundations.", status: "Building", href: "/learning" },
  { icon: ShieldCheck, title: "UTECH Security Labs", type: "CYBERSECURITY / R&D", text: "A safe environment for security learning, threat modeling, web security and defensive experiments.", status: "Building", href: "/labs" },
  { icon: Code2, title: "UTECH Official Platform", type: "CORE / ECOSYSTEM", text: "The flagship layer connecting UTECH identity, projects, labs, learning, products and the builder community.", status: "Active", href: "/" },
];

export default function ProjectsPage() {
  return <main>
    <section className="subpage">
      <BackLink />
      <div className="subhero"><div className="sectionLabel">UTECH PROJECTS</div><h1>Ideas become<br /><em>systems.</em></h1><p>Projects are where the UTECH vision becomes tangible. Explore the products, platforms and technical systems currently forming the ecosystem.</p></div>
      <div className="projectShowcase">{projects.map(({icon: Icon,title,type,text,status,href}) => <article className="projectCard" key={title}><div className="projectIcon"><Icon size={22}/></div><div className="projectMeta"><span>{type}</span><b>{status}</b></div><h2>{title}</h2><p>{text}</p><Link href={href}>Open project <ArrowUpRight size={15}/></Link></article>)}</div>
    </section>
    <Footer />
  </main>;
}