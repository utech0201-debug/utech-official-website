import Link from "next/link";
import { ArrowRight, Award, BookOpen, Code2, FlaskConical, FolderKanban, ShieldCheck, Sparkles, UserCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { courses } from "@/data/courses";
import { labs } from "@/data/labs";
import ProfileEditor from "@/components/profile/ProfileEditor";

export const metadata = {
  title: "Builder Profile",
  description: "Your UTECH builder identity, progress and achievements.",
};

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims;

  if (!claims) {
    return (
      <main className="authPage">
        <div className="authCard">
          <span className="eyebrow"><UserCircle size={15} /> UTECH BUILDER IDENTITY</span>
          <h1>Sign in to build your profile.</h1>
          <p>Your UTECH identity connects what you learn, what you build, what you explore and what you contribute across the ecosystem.</p>
          <Link className="primary" href="/login">Open UTECH login <ArrowRight size={15} /></Link>
        </div>
      </main>
    );
  }

  const userId = claims.sub as string;
  const email = (claims.email as string | undefined) ?? "Builder";
  const [{ data: profile }, { data: courseProgress }, { data: experimentProgress }] = await Promise.all([
    supabase.from("profiles").select("full_name,username,avatar_url").eq("id", userId).maybeSingle(),
    supabase.from("course_progress").select("course_slug,completed_modules,total_modules").eq("user_id", userId),
    supabase.from("experiment_progress").select("lab_slug,experiment_index").eq("user_id", userId).eq("completed", true),
  ]);

  const displayName = profile?.full_name || profile?.username || email.split("@")[0] || "Builder";
  const initials = displayName.slice(0, 2).toUpperCase();
  const courseMap = new Map((courseProgress ?? []).map((item) => [item.course_slug, item]));
  const completedLessons = (courseProgress ?? []).reduce((sum, item) => sum + (item.completed_modules ?? 0), 0);
  const completedCourses = courses.filter((course) => {
    const item = courseMap.get(course.slug);
    return item && (item.completed_modules ?? 0) >= course.modules.length;
  }).length;
  const completedLabs = labs.filter((lab) => {
    const done = (experimentProgress ?? []).filter((item) => item.lab_slug === lab.slug).length;
    return done >= lab.experiments.length;
  }).length;

  const achievements = [
    { icon: BookOpen, title: "First Lesson", earned: completedLessons >= 1, detail: "Complete your first learning module." },
    { icon: FlaskConical, title: "First Lab", earned: (experimentProgress ?? []).length >= 1, detail: "Complete your first lab experiment." },
    { icon: Award, title: "Course Complete", earned: completedCourses >= 1, detail: "Finish every module in a course." },
    { icon: ShieldCheck, title: "Lab Complete", earned: completedLabs >= 1, detail: "Complete every experiment in a lab." },
  ];

  return (
    <main className="subpage">
      <Link className="back" href="/dashboard">← Back to dashboard</Link>
      <section className="profileHero">
        <div className="profileIdentity">
          <div
            className="profileAvatar"
            role={profile?.avatar_url ? "img" : undefined}
            aria-label={profile?.avatar_url ? displayName + " avatar" : undefined}
            style={profile?.avatar_url ? { backgroundImage: "url(" + profile.avatar_url + ")" } : undefined}
          >{profile?.avatar_url ? null : initials}</div>
          <div>
            <span className="eyebrow"><UserCircle size={15} /> UTECH BUILDER PROFILE</span>
            <h1>{displayName}</h1>
            <p>{profile?.username ? "@" + profile.username : email}</p>
          </div>
        </div>
        <div className="profileStatus"><span /> BUILDER IDENTITY ACTIVE</div>
      </section>

      <section className="profileStats">
        <div><Code2 size={18} /><b>BUILDER</b><span>UTECH identity</span></div>
        <div><BookOpen size={18} /><b>{completedLessons}</b><span>Learning activity</span></div>
        <div><FlaskConical size={18} /><b>{(experimentProgress ?? []).length}</b><span>Lab experiments</span></div>
        <div><Award size={18} /><b>{achievements.filter((item) => item.earned).length}</b><span>Achievements</span></div>
      </section>

      <section className="profileLayout">
        <div className="profileMain">
          <div className="sectionLabel">BUILDER SNAPSHOT</div>
          <div className="builderSnapshot">
            <article><Code2 size={20} /><div><span>IDENTITY</span><h2>Builder</h2><p>Your UTECH identity is designed to grow beyond courses into the work you create.</p></div></article>
            <article><FolderKanban size={20} /><div><span>PROJECTS</span><h2>Build history</h2><p>Projects, case studies and shipped work will become part of your UTECH identity.</p><Link href="/projects">Explore projects →</Link></div></article>
            <article><Sparkles size={20} /><div><span>CONTRIBUTIONS</span><h2>More than progress</h2><p>Skills, experiments, contributions and achievements will eventually form your wider builder reputation.</p></div></article>
          </div>

          <div className="sectionLabel">ACHIEVEMENTS</div>
          <div className="achievementGrid">
            {achievements.map(({ icon: Icon, title, earned, detail }) => (
              <article className={earned ? "achievementCard earned" : "achievementCard"} key={title}>
                <Icon size={20} />
                <div><h2>{title}</h2><p>{earned ? "Unlocked in your builder profile." : detail}</p></div>
                <b>{earned ? "UNLOCKED" : "LOCKED"}</b>
              </article>
            ))}
          </div>

          <div className="sectionLabel profileProgressLabel">LEARNING & LAB ACTIVITY</div>
          <div className="profileProgressGrid">
            {courses.map((course) => {
              const item = courseMap.get(course.slug);
              const done = item?.completed_modules ?? 0;
              const percent = Math.min(100, Math.round((done / course.modules.length) * 100));
              return (
                <Link href={"/learning/" + course.slug} className="profileProgressCard" key={course.slug}>
                  <span>COURSE</span><h3>{course.title}</h3>
                  <p>{done}/{course.modules.length} modules</p>
                  <div className="progressTrack"><i style={{ width: percent + "%" }} /></div>
                </Link>
              );
            })}
          </div>
        </div>

        <aside className="profileAside">
          <div className="sectionLabel">EDIT IDENTITY</div>
          <ProfileEditor
            userId={userId}
            initialFullName={profile?.full_name ?? ""}
            initialUsername={profile?.username ?? ""}
            initialAvatarUrl={profile?.avatar_url ?? ""}
          />
          <div className="profileFuture">
            <span>UTECH IDENTITY</span>
            <h3>Build beyond the dashboard.</h3>
            <p>Your profile is the foundation for a wider identity system spanning projects, technical skills, experiments, achievements and contributions.</p>
            <Link href="/projects">View the ecosystem <ArrowRight size={15} /></Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
