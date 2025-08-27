import React from 'react';

interface BrandDealCardProps {
  href: string;
  brandName: string;
  logo?: React.ReactNode; // can be emoji or svg
  offerText: string; // e.g., 50-90% Off
  subText: string; // e.g., Across Categories
  cashbackText: string; // e.g., Up to 7% Cashback
  bgClass?: string; // background color/gradient classes
}

const BrandDealCard: React.FC<BrandDealCardProps> = ({
  href,
  brandName,
  logo,
  offerText,
  subText,
  cashbackText,
  bgClass = 'from-blue-600 to-blue-700',
}) => {
  return (
    <a
      href={href}
      className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
      aria-label={`${brandName} offer`}
    >
      <div className={`relative h-56 md:h-60 bg-gradient-to-br ${bgClass} text-white`}>        
        {/* Left content */}
        <div className="relative z-10 h-full flex">
          <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-white/90 text-gray-900 flex items-center justify-center text-xl shadow-sm">
                {logo ?? <span>🏷️</span>}
              </div>
              <span className="text-white/90 font-semibold tracking-wide">{brandName}</span>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold leading-snug">{offerText}</h3>
              <p className="text-white/90 text-sm mt-1">{subText}</p>
            </div>

            {/* CK badge */}
            <div className="flex items-center gap-2 w-fit bg-white/95 text-gray-900 px-3 py-1.5 rounded-md shadow">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-blue-600 text-white text-xs font-bold">CK</span>
              <span className="text-xs font-semibold">{cashbackText}</span>
            </div>
          </div>

          {/* Right visual placeholder */}
          <div className="relative w-40 md:w-48 flex items-end justify-center pr-4 pb-4">
            <div className="relative w-full h-40 md:h-44">
              {/* Placeholder product block */}
              <div className="absolute bottom-0 right-0 w-28 h-28 rounded-lg bg-white/90 shadow-lg" />
              <div className="absolute -top-2 right-10 w-16 h-16 rounded-full bg-white/30" />
              <div className="absolute top-6 right-0 w-10 h-10 rounded-md bg-white/20" />
            </div>
          </div>
        </div>

        {/* subtle glossy overlay on hover */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
      </div>
    </a>
  );
};

export default BrandDealCard;