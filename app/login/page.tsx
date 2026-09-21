"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { LogIn, ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email,setEmail]=useState(""); const [message,setMessage]=useState(""); const [loading,setLoading]=useState(false);
  async function submit(event: FormEvent) { event.preventDefault(); setLoading(true); setMessage(""); const supabase=createClient(); const {error}=await supabase.auth.signInWithOtp({email,options:{emailRedirectTo:window.location.origin+"/auth/confirm"}}); setLoading(false); setMessage(error?.message ?? "Check your email for the UTECH sign-in link."); }
  return <main className="authPage"><Link className="back" href="/"><ArrowLeft size={15}/> Back to UTECH</Link><div className="authCard"><span className="eyebrow"><LogIn size={15}/> UTECH ACCOUNT</span><h1>Enter the ecosystem.</h1><p>Sign in with your email. UTECH will send you a secure magic link.</p><form onSubmit={submit}><label htmlFor="email">Email address</label><input id="email" type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/><button className="primary" disabled={loading}>{loading?"Sending...":"Send secure link →"}</button></form>{message&&<div className="authMessage">{message}</div>}</div></main>;
}
