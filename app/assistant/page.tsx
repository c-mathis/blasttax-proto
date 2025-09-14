"use client";
import { useState } from "react";

export default function AssistantPage() {
  const [messages, setMessages] = useState<{role:"user"|"assistant", content:string}[]>([
    { role:"assistant", content:"Hi! I can explain IRS notices and general concepts. I can’t give personalized legal or financial advice."}
  ]);
  const [input, setInput] = useState("What is an Offer in Compromise?");

  const send = async () => {
    const next = [...messages, { role:"user", content: input }];
    setMessages(next);
    setInput("");
    const res = await fetch("/api/chat", { method:"POST", body: JSON.stringify({ messages: next }) });
    const data = await res.json();
    setMessages([...next, { role:"assistant", content: data.reply }]);
  };

  return (
    <div className="max-w-2xl mx-auto card">
      <h1 className="text-2xl font-semibold mb-2">AI Tax Assistant</h1>
      <div className="space-y-2 max-h-[50vh] overflow-auto border border-[var(--line)] rounded-xl p-3 bg-[var(--surface)]">
        {messages.map((m,i)=>(
          <div key={i} className={m.role==="assistant" ? "text-[var(--ink)]" : "text-[var(--brand)]"}>
            <span className="badge mr-2">{m.role}</span>{m.content}
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <input className="input" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Ask a general tax question..." />
        <button className="btn brand" onClick={send}>Send</button>
      </div>
      <p className="text-xs text-[var(--muted)] mt-2">Guardrails: educational only. Not legal/financial advice.</p>
    </div>
  );
}
