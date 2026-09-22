import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, UserCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { courses } from "@/data/courses";
import { labs } from "@/data/labs";

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

  const [{ data: progress }, { data: labProgress }] = await Promise.all([
    supabase
      .from("course_progress")
      .select("course_slug,completed_modules,total_modules,last_module")
      .eq("user_id", claims.sub),
    supabase
      .from("experiment_progress")
      .select("lab_slug,experiment_index,completed,updated_at")
      .eq("user_id", claims.sub)
      .eq("completed", true),
  ]);

  const map = new Map((progress ?? []).map((item) => [item.course_slug, item]));
  const labMap = new Map<string, { completed: number; last: number }>();

  for (const item of labProgress ?? []) {
    const current = labMap.get(item.lab_slug) ?? { completed: 0, last: -1 };
    current.completed += 1;
    current.last = Math.max(current.last, item.experiment_index);
    labMap.set(item.lab_slug, current);
  }

  const active = courses
    .map((course) => ({ course, item: map.get(course.slug) }))
    .filter(({ item }) => item && item.completed_modules > 0)
    .sort((a, b) => (b.item?.completed_modules ?? 0) - (a.item?.completed_modules ?? 0))[0];

  const activeLab = labs
    .map((lab) => ({ lab, item: labMap.get(lab.slug) }))
    .filter(({ item }) => item && item.completed > 0)
    .sort((a, b) => (b.item?.completed ?? 0) - (a.item?.completed ?? 0))[0];

  const continueHref = active?.item?.last_module
    ? `/learning/${active.course.slug}/${active.item.last_module + 1 <= active.course.modules.length ? active.item.last_module + 1 : active.item.last_module}`
    : "/learning";

  const continueLabHref = activeLab
    ? `/labs/${activeLab.lab.slug}/${Math.min(activeLab.item!.last + 2, activeLab.lab.experiments.length)}`
    : "/labs";

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
          <p>Build knowledge through structured courses and track every module you complete.</p>
          <Link href={continueHref}>
            {active ? `Continue ${active.course.title}` : "Open Learning Hub"} <ArrowRight size={15} />
          </Link>
        </article>
        <article>
          <FlaskConical size={25} />
          <h2>Labs</h2>
          <p>Turn knowledge into practical experiments and track your progress inside the UTECH builder system.</p>
          <Link href={continueLabHref}>
            {activeLab ? `Continue ${activeLab.lab.title}` : "Open Labs"} <ArrowRight size={15} />
          </Link>
        </article>
      </section>

      <section className="progressPanel">
        <div className="sectionLabel">LEARNING PROGRESS</div>
        {courses.map((course) => {
          const item = map.get(course.slug);
          const total = item?.total_modules || course.modules.length;
          const done = item?.completed_modules || 0;
          const percent = Math.min(100, Math.round((done / total) * 100));

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

      <section className="progressPanel">
        <div className="sectionLabel">LAB PROGRESS</div>
        {labs.map((lab) => {
          const item = labMap.get(lab.slug);
          const total = lab.experiments.length;
          const done = item?.completed ?? 0;
          const percent = Math.min(100, Math.round((done / total) * 100));

          return (
            <div className="progressRow" key={lab.slug}>
              <div>
                <b>{lab.title}</b>
                <span>{done}/{total} experiments</span>
              </div>
              <div className="progressTrack"><i style={{ width: percent + "%" }} /></div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
