import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return <header className="nav"><Link className="brand" href="/"><span>U</span>TECH</Link><nav><Link href="/learning">Learning</Link><Link href="/labs">Labs</Link><Link href="/store">Store</Link><a href="/#mission">Mission</a></nav><Link className="navCta" href="/learning">Enter UTECH <ArrowRight size={16}/></Link></header>;
}
