import Link from "next/link";

export default function NotFound() {
  return <main className="notFound"><span className="sectionLabel">404 / SIGNAL LOST</span><h1>That page isn&apos;t in the UTECH system.</h1><p>The route you requested does not exist yet. Head back to the main platform and keep exploring.</p><Link className="primary" href="/">Return to UTECH →</Link></main>;
}
