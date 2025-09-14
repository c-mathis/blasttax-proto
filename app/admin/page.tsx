async function getMetrics() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/admin/metrics`, { cache: "no-store" });
  return res.json();
}

export default async function AdminPage() {
  const data = await getMetrics();
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">Admin Overview</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">Subscriptions</h2>
          <div className="text-sm">Free: {data.subscriptions.free} · Pro: {data.subscriptions.pro}</div>
        </section>
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">Analyzer Funnel</h2>
          <div className="text-sm">Started: {data.analyzer.started} · Completed: {data.analyzer.completed}</div>
        </section>
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">Eligibility Breakdown</h2>
          <div className="text-sm">{data.eligibilityBreakdown}</div>
        </section>
        <section className="card">
          <h2 className="text-lg font-semibold mb-2">Integration Health</h2>
          <ul className="list-disc ml-6 text-sm">
            <li>DB: {data.integrations.db}</li>
            <li>AI: {data.integrations.ai}</li>
            <li>PDF: {data.integrations.pdf}</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
