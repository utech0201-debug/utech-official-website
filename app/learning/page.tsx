import Link from "next/link";
import { BookOpen, ArrowRight, PlayCircle } from "lucide-react";
import { courses } from "@/data/courses";
import { BackLink } from "@/components/layout/BackLink";

export default function Learning() {
 return <main className="subpage"><BackLink /><div className="subhero"><span className="eyebrow"><BookOpen size={15}/> UTECH LEARNING HUB</span><h1>Learn by <em>building.</em></h1><p>Structured technology lessons, practical experiments and projects designed to move from theory to real-world skills.</p></div><section className="courseGrid">{courses.map(course=><Link className="courseCard" href={`/learning/${course.slug}`} key={course.slug}><div className="courseTop"><span>{course.code}</span><b>{course.level}</b></div><h2>{course.title}</h2><p>{course.description}</p><div className="courseMeta"><span>{course.duration}</span><ArrowRight size={16}/></div></Link>)}</section><div className="pageCta"><PlayCircle size={24}/><div><h2>The classroom is becoming a lab.</h2><p>Every course is designed to move from understanding to doing.</p></div></div></main>;
}
