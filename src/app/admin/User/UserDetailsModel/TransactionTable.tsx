"use client";

export type Tx = { id: string; name: string; date: string; amount: number };

export function TransactionsTable({ rows }: { rows: Tx[] }) {
  return (
    <div className="w-full space-y-2">
      <h3 className="text-lg font-semibold mb-2">Transactions</h3>
      <div className="grid grid-cols-4 gap-4 px-4 py-2 bg-gray-50 border-b border-gray-200 font-medium text-gray-600 rounded-t-xl">
        <div>ID</div>
        <div>Product / Store</div>
        <div>Date</div>
        <div className="text-right">Amount</div>
      </div>
      {rows.map((tx, idx) => (
        <div key={idx} className="grid grid-cols-4 gap-4 px-4 py-3 border-b last:border-b-0 hover:bg-gray-50 transition"> 
          <div className="text-gray-500 font-mono">{tx.id}</div>
          <div className="font-medium">{tx.name}</div>
          <div className="text-gray-500 text-sm">{tx.date}</div>
          <div className="text-green-600 font-semibold text-right">+ ₹{tx.amount.toLocaleString("en-IN")}</div>
        </div>
      ))}
    </div>
  );
}