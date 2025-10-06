import { NextResponse } from "next/server";
import { proxyJson, getBackendUrl } from "@/lib/backend";

// GET /api/companies/offline
// Proxies to Backend GET /api/ourStore/offline-stores
export async function GET() {
  try {
    const { payload } = await proxyJson(`/api/ourStore/offline-stores`);
    return NextResponse.json(payload);
  } catch (err: any) {
    return NextResponse.json({ error: err?.message ?? "Unknown error" }, { status: 500 });
  }
}

// POST /api/companies/offline
// Proxies to Backend POST /api/admin/brands/create-offline
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const base = getBackendUrl();

    const res = await fetch(`${base}/api/admin/brands/create-offline`, {
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
