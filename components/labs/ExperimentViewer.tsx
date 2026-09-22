"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type Props = {
  labSlug: string;
  experimentIndex: number;
  totalExperiments: number;
  experiment: {
    title: string;
    objective: string;
    brief: string;
    task: string;
    safety: string;
  };
};

export default function ExperimentViewer({
  labSlug,
  experimentIndex,
  totalExperiments,
  experiment,
}: Props) {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadProgress() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data } = await supabase
        .from("experiment_progress")
        .select("completed")
        .eq("user_id", user.id)
        .eq("lab_slug", labSlug)
        .eq("experiment_index", experimentIndex)
        .maybeSingle();

      setDone(Boolean(data?.completed));
    }

    loadProgress();
  }, [labSlug, experimentIndex]);

  async function toggleComplete() {
    setLoading(true);
    setMessage("");

    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setMessage("Sign in to save your lab progress.");
      setLoading(false);
      return;
    }

    const nextDone = !done;
    const { error } = await supabase.from("experiment_progress").upsert(
      {
        user_id: user.id,
        lab_slug: labSlug,
        experiment_index: experimentIndex,
        completed: nextDone,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,lab_slug,experiment_index" },
    );

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setDone(nextDone);

    const { count } = await supabase
      .from("experiment_progress")
      .select("id", { count: "exact", head: true })
      .eq("user_id", user.id)
      .eq("lab_slug", labSlug)
      .eq("completed", true);

    setMessage(
      nextDone
        ? `Experiment complete. ${count ?? 1}/${totalExperiments} saved to your UTECH dashboard.`
        : "Experiment marked incomplete.",
    );
    setLoading(false);
  }

  return (
    <div className="experimentViewer">
      <section className="lessonBody">
        <div className="lessonBlock">
          <span className="sectionLabel">THE BRIEF</span>
          <p>{experiment.brief}</p>
        </div>

        <div className="challengeBox">
          <span className="sectionLabel">YOUR TASK</span>
          <h2>Experiment time.</h2>
          <p>{experiment.task}</p>
        </div>

        <div className="safetyNote">
          <CheckCircle2 size={19} />
          <div>
            <b>Safe experimentation</b>
            <p>{experiment.safety}</p>
          </div>
        </div>
      </section>

      <div className="lessonComplete">
        <button
          className={done ? "complete done" : "complete"}
          onClick={toggleComplete}
          disabled={loading}
        >
          {loading ? <Loader2 className="spin" size={18} /> : <CheckCircle2 size={18} />}
          {done ? "Completed" : "Mark experiment complete"}
        </button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
