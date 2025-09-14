import { NextResponse } from "next/server";

export async function POST() {
  // Simulate PDF generation success
  return NextResponse.json({ ok: true, urls: ["/sample/433-A.pdf", "/sample/9465.pdf"] });
}
