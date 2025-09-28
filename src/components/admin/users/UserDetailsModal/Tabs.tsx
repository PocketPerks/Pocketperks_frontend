"use client";

export type TabKey = "overview" | "transactions" | "visits";

export function Tabs({ value, onChange }: { value: TabKey; onChange: (t: TabKey) => void }) {
  return (
    <div className="mt-4 border-b">
      <div className="flex gap-2">
        {(["overview", "transactions", "visits"] as TabKey[]).map((t) => (
          <button key={t} onClick={() => onChange(t)} className={`px-3 py-2 text-sm font-medium border-b-2 -mb-px ${value === t ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>{t[0].toUpperCase() + t.slice(1)}</button>
        ))}
      </div>
    </div>
  );
}
