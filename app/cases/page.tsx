async function getCases() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/cases`, { cache: "no-store" });
  return res.json();
}

import Link from "next/link";

export default async function CasesPage() {
  const cases = await getCases();
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">My Cases</h1>
      <div className="grid gap-3">
        {cases.map((c: any) => (
          <div key={c.id} className="card flex items-center justify-between">
            <div>
              <div className="font-medium">Case {c.id} — {c.type}</div>
              <div className="text-sm text-[var(--muted)]">Years: {c.years.join(", ")} · Debt: ${c.debt} · Status: {c.status}</div>
            </div>
            <Link className="btn" href={`/cases/${c.id}`}>Open</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
