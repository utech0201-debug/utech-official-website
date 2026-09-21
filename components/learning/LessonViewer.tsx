"use client";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function LessonViewer({courseSlug,moduleIndex,totalModules,lesson}:{courseSlug:string;moduleIndex:number;totalModules:number;lesson:{title:string;objective:string;explanation:string;challenge:string}}){
 const [done,setDone]=useState(false); const [loading,setLoading]=useState(false); const [message,setMessage]=useState("");
 async function complete(){
  setLoading(true); setMessage(""); const supabase=createClient();
  const {data:{user}}=await supabase.auth.getUser();
  if(!user){setMessage("Sign in to save your progress.");setLoading(false);return;}
  const {error}=await supabase.from("lesson_progress").upsert({user_id:user.id,course_slug:courseSlug,module_index:moduleIndex,completed:true},{onConflict:"user_id,course_slug,module_index"});
  if(!error){
   const {count}=await supabase.from("lesson_progress").select("id",{count:"exact",head:true}).eq("user_id",user.id).eq("course_slug",courseSlug).eq("completed",true);
   await supabase.from("course_progress").upsert({user_id:user.id,course_slug:courseSlug,completed_modules:count??1,total_modules:totalModules,last_module:moduleIndex,updated_at:new Date().toISOString()},{onConflict:"user_id,course_slug"});
   setDone(true);setMessage("Progress saved to your UTECH dashboard.");
  } else setMessage(error.message); setLoading(false);
 }
 return <div className="lessonViewer"><section className="lessonBody"><div className="lessonBlock"><span>OBJECTIVE</span><h2>{lesson.objective}</h2></div><div className="lessonBlock"><span>CONCEPT</span><p>{lesson.explanation}</p></div><div className="challengeBox"><span>HANDS-ON CHALLENGE</span><h2>{lesson.challenge}</h2></div></section><div className="lessonComplete"><button className={done?"complete done":"complete"} onClick={complete} disabled={loading||done}>{loading?<Loader2 className="spin" size={18}/>:<CheckCircle2 size={18}/>} {done?"Completed":"Mark lesson complete"}</button>{message&&<p>{message}</p>}</div></div>;
}