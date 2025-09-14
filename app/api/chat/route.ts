import { NextResponse } from "next/server";
export const runtime = 'edge';
export async function POST(req: Request) {
  const { messages = [] } = await req.json().catch(()=>({}));
  const last = messages[messages.length - 1]?.content || "";
  let reply = "Here’s a general explanation. The IRS Offer in Compromise (OIC) lets qualified taxpayers settle for less than the full amount owed when they can’t pay in full. Eligibility considers income, expenses, and asset equity.";
  if (/installment/i.test(last)) reply = "An Installment Agreement allows you to pay your tax debt over time in monthly payments. Interest and penalties may continue to accrue.";
  if (/CNC|collectible/i.test(last)) reply = "Currently Not Collectible (CNC) means the IRS temporarily stops collection because paying would create a financial hardship. They may review your situation periodically.";
  return NextResponse.json({ reply });
}
