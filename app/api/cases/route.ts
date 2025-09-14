import { NextResponse } from "next/server";

const MOCK_CASES = [
  { id: "BT-1001", type: "Individual", years: [2022, 2023], debt: 20000, status: "Info Gathering", disposableIncome: 200, assets: [] },
  { id: "BT-1002", type: "Business", years: [2021], debt: 54000, status: "In Progress", disposableIncome: 1200, assets: ["Truck"] },
  { id: "BT-1003", type: "Individual", years: [2019, 2020], debt: 18000, status: "Resolved", disposableIncome: 0, assets: [] }
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (id) {
    const found = MOCK_CASES.find(c => c.id === id);
    return NextResponse.json(found || MOCK_CASES[0]);
  }
  return NextResponse.json(MOCK_CASES);
}
