import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(()=>({}));
  // Normally we'd store and notify; here we just echo
  return NextResponse.json({ ok: true, received: body });
}
