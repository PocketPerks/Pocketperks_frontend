export const formatId6 = (id: number) => String(id).padStart(6, "0");
export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;
export const normalizePhone = (s: string) => (s || "").replace(/\s+/g, "");

export const statusTone = (status: string) => {
  const s = (status || "").toLowerCase();
  if (s === "active") return { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" };
  if (s === "inactive") return { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" };
  return { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" };
};

export const statusChipClass = (status: string) => {
  const tone = statusTone(status);
  return `inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs border ${tone.bg} ${tone.text} ${tone.border}`;
};
