"use client";

export function VisitsGrid() {
  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-3">Stores & Sites Visited</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((_, idx) => (
          <div key={idx} className="flex flex-col justify-between border border-gray-300 shadow-sm rounded-xl p-4 hover:shadow-md transition">
            <div>
              <p className="font-medium">Store / Product {idx + 1}</p>
              <p className="text-xs text-gray-500">Company Name</p>
              <p className="text-xs text-indigo-500 underline cursor-pointer">Store link</p>
            </div>
            <div className="mt-2 text-center">
              <p className="font-mono bg-gray-100 px-3 py-1 rounded-md">Code</p>
              <p className="text-[10px] text-gray-500 mt-1">Valid till July 27</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}