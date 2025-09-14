import Link from "next/link";

async function getMetrics() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/admin/metrics`, { cache: "no-store" });
  return res.json();
}

export default async function Dashboard() {
  const metrics = await getMetrics();

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card"><div className="label">Total Debt Entered</div><div className="kpi">${metrics.totalDebt.toLocaleString()}</div></div>
        <div className="card"><div className="label">Active Cases</div><div className="kpi">{metrics.activeCases}</div></div>
        <div className="card"><div className="label">Eligibility: OIC / IA / CNC</div><div className="kpi">{metrics.eligibilityBreakdown}</div></div>
      </div>
      <div className="card">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Quick Actions</h2>
          <div className="flex gap-2">
            <Link className="btn brand" href="/analyzer">Start New Analysis</Link>
            <Link className="btn" href="/cases">View My Cases</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
