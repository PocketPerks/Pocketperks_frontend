import { NextResponse } from "next/server";

const backend = process.env.BACKEND_API_BASE || "http://localhost:3001";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // Try multiple likely backend paths to be resilient to mounting differences
    const postCandidates = [
      "/create",
      "/api/banners",
      "/api/banner/create",
      "/banner/create",
    ];

    let res: Response | null = null;
    for (const path of postCandidates) {
      // clone the form for each attempt
      const retry = new FormData();
      for (const [k, v] of form.entries()) retry.append(k, v as any);
      const attempt = await fetch(`${backend}${path}`, { method: "POST", body: retry });
      if (attempt.status !== 404) {
        res = attempt;
        break;
      }
      if (!res) res = attempt; // keep last result if all 404
    }

    if (!res) throw new Error("No response from backend");

    const text = await res.text();
    let data: any;
    try {
      data = JSON.parse(text);
    } catch {
      data = { message: text };
    }
    return NextResponse.json(data, { status: res.status });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Proxy error while saving banner" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const getCandidates = [
      "/getBanners",
      "/api/banners",
      "/api/banner/getBanners",
      "/banner/getBanners",
    ];

    let res: Response | null = null;
    for (const path of getCandidates) {
      const attempt = await fetch(`${backend}${path}`, { method: "GET" });
      if (attempt.status !== 404) {
        res = attempt;
        break;
      }
      if (!res) res = attempt;
    }

    if (!res) throw new Error("No response from backend");

    const text = await res.text();
    let data: any;
    try {
      data = JSON.parse(text);
    } catch {
      data = { message: text };
    }
    return NextResponse.json(data, { status: res.status });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Proxy error while fetching banners" },
      { status: 500 }
    );
  }
}
