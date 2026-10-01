"use client";

import { useState } from "react";
import { Check, Loader2, Save } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type Props = {
  userId: string;
  initialFullName: string;
  initialUsername: string;
  initialAvatarUrl: string;
};

export default function ProfileEditor({ userId, initialFullName, initialUsername, initialAvatarUrl }: Props) {
  const [fullName, setFullName] = useState(initialFullName);
  const [username, setUsername] = useState(initialUsername);
  const [avatarUrl, setAvatarUrl] = useState(initialAvatarUrl);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  async function saveProfile() {
    setSaving(true);
    setSaved(false);
    setError("");
    const supabase = createClient();
    const { error: updateError } = await supabase.from("profiles").upsert(
      {
        id: userId,
        full_name: fullName.trim() || null,
        username: username.trim().replace(/^@+/, "") || null,
        avatar_url: avatarUrl.trim() || null,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" },
    );

    if (updateError) {
      setError(updateError.message);
      setSaving(false);
      return;
    }

    setSaved(true);
    setSaving(false);
    window.setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="profileEditor">
      <div className="profileForm">
        <label>
          Display name
          <input value={fullName} onChange={(event) => setFullName(event.target.value)} placeholder="Your name" maxLength={80} />
        </label>
        <label>
          Builder username
          <input value={username} onChange={(event) => setUsername(event.target.value)} placeholder="username" maxLength={30} />
        </label>
        <label>
          Avatar URL
          <input value={avatarUrl} onChange={(event) => setAvatarUrl(event.target.value)} placeholder="https://..." inputMode="url" />
        </label>
      </div>
      {error ? <p className="profileError">{error}</p> : null}
      <button className="profileSave" type="button" onClick={saveProfile} disabled={saving}>
        {saving ? <Loader2 size={16} className="spin" /> : saved ? <Check size={16} /> : <Save size={16} />}
        {saving ? "Saving..." : saved ? "Profile saved" : "Save profile"}
      </button>
    </div>
  );
}
