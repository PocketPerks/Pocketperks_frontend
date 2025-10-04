"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true); // first load ke liye true

  useEffect(() => {
    setLoading(true); // route change start
    const timer = setTimeout(() => setLoading(false), 500); // fake load time, page ready hote hi hide
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
        </div>
      )}
      <div className={`${loading ? "opacity-50" : "opacity-100"} transition-opacity`}>
        {children}
      </div>
    </>
  );
}
