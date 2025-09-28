export const formatINR = (n: number) => `₹${(n ?? 0).toLocaleString('en-IN')}`;
export const formatDate = (d?: string) => {
  if (!d) return '-';
  // Accepts yyyy-mm-dd; falls back to passthrough
  const parsed = new Date(d);
  if (isNaN(parsed.getTime())) return d;
  return parsed.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
};
