import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, BrainCircuit, Code2, Cpu, FlaskConical, GraduationCap, Layers3, Rocket, ShieldCheck, Sparkles, Store } from "lucide-react";

const focus = [
  { icon: Code2, title: "Software & Engineering", text: "Design, build and ship useful software, developer tools and digital experiences." },
  { icon: BrainCircuit, title: "Artificial Intelligence", text: "Explore intelligent systems, automation and practical AI-powered products." },
  { icon: ShieldCheck, title: "Cybersecurity", text: "Develop defensive security skills, secure systems and responsible testing practices." },
  { icon: Rocket, title: "Innovation & R&D", text: "Turn experiments, prototypes and ambitious ideas into things worth building." },
];
const ecosystem = [
  { number: "01", tag: "EXPERIMENT", title: "UTECH Labs", text: "The technical workspace for software, AI, cybersecurity and future R&D.", href: "/labs", action: "Enter Labs", icon: FlaskConical },
  { number: "02", tag: "LEARN", title: "Learning Hub", text: "Structured learning, practical lessons and hands-on technical growth.", href: "/learning", action: "Explore Learning", icon: GraduationCap },
  { number: "03", tag: "BUILD", title: "Projects", text: "Real products, experiments, open-source work and systems being built by UTECH.", href: "/projects", action: "View Projects", icon: Rocket },
  { number: "04", tag: "SHIP", title: "Store", text: "A future home for UTECH tools, templates, hardware and digital products.", href: "/store", action: "Explore Store", icon: Store },
];

export default function Home() {
  return <main>
    <Navbar />
    <section className="hero"><div className="orb orb1"/><div className="orb orb2"/><div className="heroGrid"/><div className="heroVisual" aria-hidden="true"><Image src="/visuals/utech-core-hero.svg" alt="" fill priority sizes="(max-width: 800px) 100vw, 760px" /></div>
      <div className="heroInner"><div className="eyebrow"><Sparkles size={15}/> THE OFFICIAL UTECH HEADQUARTERS</div>
        <h1>Technology.<br/><em>Built without limits.</em></h1>
        <p>UTECH is a technology ecosystem for people who learn, build, experiment and create. Software, AI, cybersecurity, research, products and community—connected under one vision.</p>
        <div className="actions"><Link className="primary" href="#ecosystem">Explore the ecosystem <ArrowRight size={18}/></Link><Link className="secondary" href="/about">Discover UTECH</Link></div>
        <div className="status"><span/> UTECH systems online <b>•</b> Building the ecosystem <b>•</b> More coming</div>
      </div>
    </section>
    <section id="mission" className="mission"><div className="sectionLabel">01 / THE VISION</div><div className="missionContent"><div className="missionCopy"><h2>One ecosystem.<br/><span>Many ways to build.</span></h2><p>UTECH exists to make technology practical, creative and accessible. It brings learning, engineering, AI, cybersecurity, experimentation and products into one evolving ecosystem—so an idea can move from curiosity to prototype to real-world system.</p></div><div className="missionVisual"><Image src="/visuals/utech-vision-path.svg" alt="" fill sizes="(max-width: 800px) 100vw, 620px" aria-hidden="true"/></div></div></section>
    <section className="pillars"><div className="sectionLabel">02 / WHAT UTECH BUILDS</div><div className="buildIntro"><div><h2>Four directions.<br/><span>One build engine.</span></h2><p>Different disciplines, one shared practice: learn deeply, experiment responsibly and turn ideas into working systems.</p></div><div className="buildVisual"><Image src="/visuals/utech-build-engine.svg" alt="" fill sizes="(max-width: 800px) 100vw, 900px" aria-hidden="true"/></div></div><div className="cards">{focus.map(({icon:Icon,title,text})=><article className="card" key={title}><div className="icon"><Icon size={23}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section id="ecosystem" className="ecosystem">
      <div className="sectionLabel">03 / THE UTECH ECOSYSTEM</div>
      <div className="ecoSystemPanel">
        <Image className="ecoNetworkVisual" src="/visuals/utech-ecosystem-network.svg" alt="" fill sizes="(max-width: 800px) 100vw, 1100px" aria-hidden="true" />
        <div className="ecoSystemCopy">
          <div className="ecoSignal"><span /> ECOSYSTEM ONLINE</div>
          <div className="ecoIntroCopy"><Cpu size={34}/><div><h2>Everything connects here.</h2><p>UTECH is the headquarters. Each division has a purpose, but they share the same foundation.</p></div></div>
        </div>
        <div className="ecoFlowLabel">ONE FOUNDATION · FOUR DIVISIONS</div>
      </div>
      <div className="ecoGrid">
        {ecosystem.map(({icon: Icon, ...item})=><Link className="ecoCard" href={item.href} key={item.title}>
          <div className="ecoCardTop"><span>{item.number}</span><small>{item.tag}</small></div>
          <div className="ecoCardIcon"><Icon size={21}/></div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="ecoCardAction"><b>{item.action}</b><ArrowRight size={16}/></div>
        </Link>)}
      </div>
    </section>
    <section className="coreSection">
      <div className="coreHeader">
        <div>
          <div className="sectionLabel">04 / UTECH CORE</div>
          <div className="coreSignal"><span /> CORE SYSTEM ONLINE</div>
        </div>
        <div>
          <h2>The command center<br/><span>of the ecosystem.</span></h2>
          <p>One foundation connects every UTECH division. Explore the systems, capabilities and spaces growing around the core.</p>
        </div>
      </div>
      <div className="coreMap">
        <Image className="coreMapVisual" src="/visuals/utech-core-map.svg" alt="" fill sizes="(max-width: 800px) 100vw, 1280px" aria-hidden="true" />
        <div className="coreCenter"><div className="corePulse"><Layers3 size={25}/></div><b>UTECH</b><small>CORE SYSTEM</small><span>CONNECTED</span></div>
        <Link href="/technology" className="coreNode coreNodeA"><Code2 size={19}/><strong>Technology</strong><span>Engineering · Hardware</span></Link>
        <Link href="/labs/ai-lab" className="coreNode coreNodeB"><BrainCircuit size={19}/><strong>AI</strong><span>Intelligence · Automation</span></Link>
        <Link href="/labs/security-lab" className="coreNode coreNodeC"><ShieldCheck size={19}/><strong>Security</strong><span>Defense · Research</span></Link>
        <Link href="/learning" className="coreNode coreNodeD"><GraduationCap size={19}/><strong>Learning</strong><span>Skills · Knowledge</span></Link>
        <Link href="/projects" className="coreNode coreNodeE"><Rocket size={19}/><strong>Projects</strong><span>Build · Ship · Iterate</span></Link>
        <Link href="/store" className="coreNode coreNodeF"><Store size={19}/><strong>Products</strong><span>Tools · Hardware</span></Link>
      </div>
    </section>
    <section className="platformSection">
      <div className="platformCopy">
        <div className="sectionLabel">05 / THE PLATFORM</div>
        <div className="platformSignal"><span /> BUILD ON THE SAME FOUNDATION</div>
        <h2>Learn something.<br/><span>Build something.</span><br/>Ship something.</h2>
        <p>UTECH is being designed as a connected platform, not a collection of isolated pages. Your identity, projects, skills, experiments and future contributions can grow with the ecosystem.</p>
        <Link className="primary" href="/profile">Explore Builder Identity <ArrowRight size={18}/></Link>
      </div>
      <div className="platformVisual">
        <Image className="platformNetworkVisual" src="/visuals/utech-platform-network.svg" alt="" fill sizes="(max-width: 800px) 100vw, 600px" aria-hidden="true" />
        <div className="platformFrameLabel">PLATFORM ARCHITECTURE · CONNECTED BY UTECH CORE</div>
        <div className="platformNode main"><Layers3 size={22}/><b>UTECH</b><small>CORE</small></div>
        <div className="platformNode nodeA"><Code2 size={18}/> Software</div>
        <div className="platformNode nodeB"><BrainCircuit size={18}/> AI</div>
        <div className="platformNode nodeC"><ShieldCheck size={18}/> Security</div>
        <div className="platformNode nodeD"><GraduationCap size={18}/> Learning</div>
        <div className="platformNode nodeE"><Store size={18}/> Products</div>
      </div>
    </section>
    <section className="start"><div className="startVisual"><Image src="/visuals/utech-start-here.svg" alt="" fill sizes="(max-width: 800px) 100vw, 1200px" aria-hidden="true"/></div><div className="startContent"><div className="sectionLabel">06 / START HERE</div><h2>There is always something to build.</h2><p>Explore the ecosystem, follow a project, enter a lab, learn a skill or start building your own.</p><div className="actions"><Link className="primary" href="/projects">Explore projects <ArrowRight size={18}/></Link><Link className="secondary" href="/labs">Enter UTECH Labs</Link></div></div></section>
    <Footer/>
  </main>;
}