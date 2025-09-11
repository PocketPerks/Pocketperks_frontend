"use client";

import Link from "next/link";
import Image from "next/image";

export default function Offers() {
  const cardBase =
    "flex flex-col items-center justify-between rounded-2xl border border-gray-300 bg-white p-6 shadow-sm hover:shadow-md transition hover:scale-[1.02]";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {/* Offer 1 */}
      <Link href="/offers/discount" className={cardBase}>
        <div className="w-full flex justify-center items-center flex-1">
          <Image
            src="/slider/fallback.jpg" 
            alt="Offer 1"
            width={400}
            height={200}
            className="object-contain w-full h-40"
          />
        </div>
        <p className="text-base font-medium text-black mt-3">Upto 20% Off</p>
        <button className="w-full rounded-lg bg-black text-white py-2 font-medium hover:bg-gray-800 transition mt-2">
          Flat 10% Cashback
        </button>
      </Link>

      {/* Offer 2 */}
      <Link href="/offers/special-deal" className={cardBase}>
        <div className="w-full flex justify-center items-center flex-1">
          <Image
            src="/slider/fallback.jpg"
            alt="Offer 2"
            width={400}
            height={200}
            className="object-contain w-full h-40"
          />
        </div>
        <p className="text-base font-medium text-black mt-3">Upto 15% Off</p>
        <button className="w-full rounded-lg bg-black text-white py-2 font-medium hover:bg-gray-800 transition mt-2">
          Upto 5% Cashback
        </button>
      </Link>

      {/* Offer 3 */}
      <Link href="/offers/another-offer" className={cardBase}>
        <div className="w-full flex justify-center items-center flex-1">
          <Image
            src="/slider/fallback.jpg"
            alt="Offer 3"
            width={400}
            height={200}
            className="object-contain w-full h-40"
          />
        </div>
        <p className="text-base font-medium text-black mt-3">Upto 25% Off</p>
        <button className="w-full rounded-lg bg-black text-white py-2 font-medium hover:bg-gray-800 transition mt-2">
          Upto 8% Cashback
        </button>
      </Link>

      {/* Offer 3 */}
      <Link href="/offers/another-offer" className={cardBase}>
        <div className="w-full flex justify-center items-center flex-1">
          <Image
            src="/slider/fallback.jpg"
            alt="Offer 3"
            width={400}
            height={200}
            className="object-contain w-full h-40"
          />
        </div>
        <p className="text-base font-medium text-black mt-3">Upto 25% Off</p>
        <button className="w-full rounded-lg bg-black text-white py-2 font-medium hover:bg-gray-800 transition mt-2">
          Upto 8% Cashback
        </button>
      </Link>
    </div>
  );
}
