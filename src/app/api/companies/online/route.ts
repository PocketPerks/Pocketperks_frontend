import { NextResponse } from "next/server";
import { proxyJson, getBackendUrl } from "@/lib/backend";

// GET /api/companies/online
// Proxies to Backend GET /api/brands
export async function GET() {
  try {
    const { payload } = await proxyJson(`/api/brands`);
    return NextResponse.json(payload);
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? "Unknown error" }, { status: 500 });
  }
}

// POST /api/companies/online
// Proxies to Backend POST /api/admin/brands/create-online
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const base = getBackendUrl();

    const res = await fetch(`${base}/api/admin/brands/create-online`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? "Unknown error" }, { status: 400 });
  }
}
