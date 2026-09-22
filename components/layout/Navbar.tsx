import Link from "next/link";
import { ArrowRight, LayoutDashboard } from "lucide-react";

export default function Navbar() {
  return (
    <header className="nav">
      <Link className="brand" href="/">
        <span>U</span>TECH
      </Link>

      <nav>
        <Link href="/learning">Learning</Link>
        <Link href="/labs">Labs</Link>
        <Link href="/store">Store</Link>
        <a href="/#mission">Mission</a>
        <Link href="/dashboard">Dashboard</Link>
      </nav>

      <Link className="navCta" href="/dashboard">
        <LayoutDashboard size={15} /> Builder Dashboard <ArrowRight size={16} />
      </Link>
    </header>
  );
}
