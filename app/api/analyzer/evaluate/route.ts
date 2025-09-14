import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(()=>({}));
  const { debt = 0, income = 0, expenses = 0 } = body;
  const disposable = Math.max(0, Math.round(income/12 - expenses));
  // Extremely simplified mock logic for eligibility
  const eligibleOIC = disposable < 100 && debt > 10000;
  const eligibleCNC = disposable === 0;
  const plan = eligibleOIC ? "Offer in Compromise" : eligibleCNC ? "Currently Not Collectible" : "Installment Agreement";
  return NextResponse.json({ disposableIncome: disposable, recommendedProgram: plan, notes: "Mock evaluation. For demo only." });
}
