export const runtime = 'edge';

async function getCase(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/cases?id=${id}`, { cache: "no-store" });
  return res.json();
}

export default async function CaseDetail({ params }: { params: { id: string } }) {
  const data = await getCase(params.id);
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-semibold">Case {params.id}</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <section className="card col-span-2">
          <h2 className="text-xl font-semibold mb-2">Summary</h2>
          <div className="text-sm text-[var(--muted)]">Debt: ${data.debt} · Type: {data.type} · Years: {data.years.join(", ")}</div>
          <div className="mt-2">Financial Snapshot (mock)</div>
          <ul className="list-disc ml-6 text-sm">
            <li>Disposable income (est.): ${data.disposableIncome}</li>
            <li>Assets: {data.assets?.length || 0} items</li>
          </ul>
        </section>
        <section className="card">
          <h2 className="text-xl font-semibold mb-2">Next Steps</h2>
          <ol className="list-decimal ml-6 text-sm space-y-1">
            <li>Complete Form 433-A</li>
            <li>If eligible, prepare Form 656</li>
            <li>Mail package; check status in 30 days</li>
          </ol>
          <form className="mt-3" action="/api/documents/generate" method="post">
            <input type="hidden" name="caseId" value={params.id} />
            <button className="btn brand w-full" type="submit">Generate Docs (Simulated)</button>
          </form>
        </section>
      </div>
    </div>
  );
}
