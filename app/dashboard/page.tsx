import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, UserCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { courses } from "@/data/courses";

export default async function Dashboard() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;

  if (!claims) {
    return (
      <main className="authPage">
        <div className="authCard">
          <h1>Sign in required.</h1>
          <Link className="primary" href="/login">Open UTECH login →</Link>
        </div>
      </main>
    );
  }

  const { data: progress } = await supabase
    .from("course_progress")
    .select("course_slug,completed_modules,total_modules,last_module")
    .eq("user_id", claims.sub);

  const map = new Map((progress ?? []).map(item => [item.course_slug, item]));

  const active = courses
    .map(course => ({ course, item: map.get(course.slug) }))
    .filter(({ item }) => item && item.completed_modules > 0)
    .sort((a, b) => (b.item?.completed_modules ?? 0) - (a.item?.completed_modules ?? 0))[0];

  const continueHref = active?.item?.last_module
    ? `/learning/${active.course.slug}/${active.item.last_module + 1 <= active.course.modules.length ? active.item.last_module + 1 : active.item.last_module}`
    : "/learning";

  return (
    <main className="subpage">
      <div className="dashboardTop">
        <div>
          <span className="eyebrow"><UserCircle size={15} /> UTECH BUILDER DASHBOARD</span>
          <h1>Welcome back.</h1>
          <p>{claims.email}</p>
        </div>
        <Link className="back" href="/">← UTECH home</Link>
      </div>

      <section className="dashboardGrid">
        <article>
          <BookOpen size={25} />
          <h2>Learning</h2>
          <p>Track your course progress and continue where you stopped.</p>
          <Link href={continueHref}>
            {active ? `Continue ${active.course.title}` : "Open Learning Hub"} <ArrowRight size={15} />
          </Link>
        </article>
        <article>
          <FlaskConical size={25} />
          <h2>Labs</h2>
          <p>Explore technical experiments and future build spaces.</p>
          <Link href="/labs">Open Labs <ArrowRight size={15} /></Link>
        </article>
      </section>

      <section className="progressPanel">
        <div className="sectionLabel">COURSE PROGRESS</div>
        {courses.map(course => {
          const item = map.get(course.slug);
          const total = item?.total_modules || course.modules.length;
          const done = item?.completed_modules || 0;
          const percent = Math.min(100, Math.round(done / total * 100));

          return (
            <div className="progressRow" key={course.slug}>
              <div>
                <b>{course.title}</b>
                <span>{done}/{total} modules</span>
              </div>
              <div className="progressTrack"><i style={{ width: percent + "%" }} /></div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
