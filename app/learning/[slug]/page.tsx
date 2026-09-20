import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle2 } from "lucide-react";
import { courses } from "@/data/courses";

export function generateStaticParams() { return courses.map(course => ({ slug: course.slug })); }

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const course = courses.find(item => item.slug === slug);
 if (!course) return null;
 return <main className="subpage"><Link className="back" href="/learning"><ArrowLeft size={15}/> Back to Learning Hub</Link><div className="courseHero"><span className="eyebrow"><BookOpen size={15}/> {course.code} / {course.level}</span><h1>{course.title}</h1><p>{course.description}</p><div className="courseStats"><span>{course.modules.length} modules</span><span>Self-paced</span><span>Project-based</span></div></div><section className="modulePanel"><div className="sectionLabel">COURSE MODULES</div><div className="moduleList">{course.modules.map((module,index)=><div className="moduleItem" key={module}><span>{String(index+1).padStart(2,"0")}</span><div><h2>{module}</h2><p>Practical lesson and hands-on activity.</p></div><CheckCircle2 size={18}/></div>)}</div></section></main>;
}
