import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import { lessonContent } from "@/data/lesson-content";
import LessonViewer from "@/components/learning/LessonViewer";

export function generateStaticParams() {
  return courses.flatMap(course =>
    course.modules.map((_, index) => ({ slug: course.slug, module: String(index + 1) }))
  );
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string; module: string }>;
}) {
  const { slug, module } = await params;
  const course = courses.find(item => item.slug === slug);
  const index = Number(module) - 1;
  const lesson = lessonContent[slug]?.[index];

  if (!course || !lesson || !Number.isInteger(index) || index < 0) notFound();

  const hasNext = index + 1 < course.modules.length;
  const next = hasNext
    ? `/learning/${slug}/${index + 2}`
    : `/learning/${slug}`;

  return (
    <main className="subpage">
      <Link className="back" href={`/learning/${slug}`}>
        <ArrowLeft size={15} /> Back to {course.title}
      </Link>

      <div className="lessonHero">
        <span className="eyebrow">
          <BookOpen size={15} /> {course.code} / MODULE {String(index + 1).padStart(2, "0")}
        </span>
        <h1>{lesson.title}</h1>
        <p>Work through the concept, complete the challenge, then save your progress.</p>
      </div>

      <LessonViewer
        courseSlug={slug}
        moduleIndex={index}
        totalModules={course.modules.length}
        lesson={lesson}
      />

      <Link className="nextLesson" href={next}>
        {hasNext ? "Next module" : "Back to course"} <ArrowRight size={16} />
      </Link>
    </main>
  );
}
