import Link from "next/link";

export default function Home() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <section className="card">
        <h1 className="text-3xl font-semibold mb-2">Resolve tax debt with confidence.</h1>
        <p className="text-[var(--muted)] mb-4">Analyze options, generate IRS forms, and track your case. Start in demo mode—no signup required.</p>
        <div className="flex gap-3">
          <Link className="btn brand" href="/dashboard">Open Demo</Link>
          <Link className="btn" href="/login">Log in</Link>
        </div>
      </section>
      <section className="card">
        <h2 className="text-xl font-semibold mb-2">What’s in this MVP</h2>
        <ul className="list-disc ml-6 space-y-1 text-sm">
          <li>Onboarding + profile wizard (demo)</li>
          <li>Dashboard KPIs + quick actions</li>
          <li>Tax Relief Analyzer (paywalled in Free)</li>
          <li>AI Tax Assistant (educational only)</li>
          <li>Cases: list + details</li>
          <li>Doc generation (simulated)</li>
          <li>Pro connection (request form)</li>
          <li>Admin metrics (mock data)</li>
        </ul>
      </section>
    </div>
  );
}
