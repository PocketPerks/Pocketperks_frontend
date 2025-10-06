export function getBackendUrl() {
  // Prefer server-side env var; fall back to NEXT_PUBLIC_ for flexibility; default to localhost:4000
  const url = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";
  return url.replace(/\/$/, "");
}

export async function proxyJson(path: string, init?: RequestInit) {
  const base = getBackendUrl();
  const res = await fetch(`${base}${path}`, {
    // Avoid caching for dynamic admin data
    cache: "no-store",
    // Ensure content-type for JSON posts
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    ...init,
  });

  const contentType = res.headers.get("content-type") || "";
  const payload = contentType.includes("application/json") ? await res.json() : await res.text();

  if (!res.ok) {
    throw new Error(typeof payload === "string" ? payload : payload?.error || `Request failed ${res.status}`);
  }

  return { status: res.status, payload } as const;
}