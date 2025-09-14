"use client";
import { useState } from "react";

export default function ProPage() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/pro/request", { method:"POST", body: JSON.stringify({ email, note }) });
    alert("Request submitted. A professional will reach out (simulated).");
    setEmail(""); setNote("");
  };

  return (
    <div className="max-w-lg mx-auto card">
      <h1 className="text-2xl font-semibold mb-2">Request a Consultation</h1>
      <form onSubmit={submit} className="space-y-3">
        <div>
          <div className="label">Your email</div>
          <input className="input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </div>
        <div>
          <div className="label">Notes (optional)</div>
          <textarea className="input" rows={4} value={note} onChange={(e)=>setNote(e.target.value)} placeholder="Share basic context (no sensitive data)" />
        </div>
        <button className="btn brand w-full" type="submit">Submit Request</button>
      </form>
    </div>
  );
}
