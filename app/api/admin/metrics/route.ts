import { NextResponse } from "next/server";
export const runtime = 'edge';
export async function GET() {
  // Mocked metrics
  return NextResponse.json({
    totalDebt: 125000,
    activeCases: 4,
    eligibilityBreakdown: "OIC 22% · IA 63% · CNC 15%",
    subscriptions: { free: 1280, pro: 214 },
    analyzer: { started: 412, completed: 233 },
    integrations: { db: "Up", ai: "Up", pdf: "Up" }
  });
}
