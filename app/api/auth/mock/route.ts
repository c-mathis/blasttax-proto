import { NextResponse } from "next/server";
export const runtime = 'edge';
export async function POST(req: Request) {
  const body = await req.text();
  return NextResponse.json({ ok: true, mode: body || "demo" });
}
