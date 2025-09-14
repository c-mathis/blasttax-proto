"use client";
import { useState } from "react";

type Step = "intro"|"debts"|"assets"|"income"|"expenses"|"review"|"result";

export default function AnalyzerPage() {
  const [step, setStep] = useState<Step>("intro");
  const [form, setForm] = useState<any>({ years:[2022,2023], debt: 20000, assets: [], income: 60000, expenses: 3500 });
  const [result, setResult] = useState<any>(null);
  const [unlocked, setUnlocked] = useState(false); // simulate paywall

  const next = () => {
    const order: Step[] = ["intro","debts","assets","income","expenses","review","result"];
    const i = order.indexOf(step);
    setStep(order[i+1] || "result");
  };

  const evaluate = async () => {
    if (!unlocked) {
      alert("This is a Pro feature. (Simulated) Upgrade to continue.");
      return;
    }
    const res = await fetch("/api/analyzer/evaluate", { method:"POST", body: JSON.stringify(form) });
    const data = await res.json();
    setResult(data);
    setStep("result");
  };

  return (
    <div className="max-w-2xl mx-auto card space-y-4">
      <h1 className="text-2xl font-semibold">Tax Relief Analyzer</h1>
      {step==="intro" && (
        <div>
          <p className="text-sm text-[var(--muted)] mb-4">Answer a few questions and we’ll estimate eligibility for IRS programs (OIC, IA, CNC).</p>
          <div className="flex gap-2">
            <button className="btn brand" onClick={()=>setUnlocked(true)}>Simulate Upgrade to Pro</button>
            <button className="btn" onClick={next}>Continue (Demo)</button>
          </div>
        </div>
      )}
      {step==="debts" && (
        <div className="space-y-3">
          <div>
            <div className="label">Total Debt ($)</div>
            <input className="input" type="number" value={form.debt} onChange={(e)=>setForm({...form, debt: Number(e.target.value)})}/>
          </div>
          <button className="btn brand" onClick={next}>Next</button>
        </div>
      )}
      {step==="assets" && (
        <div className="space-y-3">
          <div className="label">Any significant assets?</div>
          <input className="input" placeholder="Home equity, vehicle, savings..." onChange={(e)=>setForm({...form, assetsNote:e.target.value})}/>
          <button className="btn brand" onClick={next}>Next</button>
        </div>
      )}
      {step==="income" && (
        <div className="space-y-3">
          <div className="label">Annual Income ($)</div>
          <input className="input" type="number" value={form.income} onChange={(e)=>setForm({...form, income: Number(e.target.value)})}/>
          <button className="btn brand" onClick={next}>Next</button>
        </div>
      )}
      {step==="expenses" && (
        <div className="space-y-3">
          <div className="label">Monthly Expenses ($)</div>
          <input className="input" type="number" value={form.expenses} onChange={(e)=>setForm({...form, expenses: Number(e.target.value)})}/>
          <div className="flex gap-2">
            <button className="btn" onClick={()=>setStep("review")}>Review</button>
          </div>
        </div>
      )}
      {step==="review" && (
        <div className="space-y-2">
          <div className="badge">Years: {form.years?.join(", ")}</div>
          <div className="badge">Debt: ${form.debt}</div>
          <div className="badge">Income: ${form.income}</div>
          <div className="badge">Expenses: ${form.expenses}/mo</div>
          <div className="flex gap-2 mt-2">
            <button className="btn brand" onClick={evaluate}>Evaluate</button>
            <button className="btn" onClick={()=>setStep("debts")}>Edit</button>
          </div>
        </div>
      )}
      {step==="result" && result && (
        <div className="space-y-2">
          <div className="label">Eligibility</div>
          <pre className="bg-[var(--surface)] p-3 rounded-xl text-sm overflow-auto">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
