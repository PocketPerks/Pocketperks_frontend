import React from 'react';

interface BrandDealCardProps {
  href: string;
  brandName: string;     // bank name
  cardName?: string;     // credit card name
  logo?: React.ReactNode; // emoji ya backend se image
  offerText: string;     // Cashback / discount text
  subText: string;       // joining offer
  cashbackText: string;  // benefits
  bgClass?: string;      // gradient bg
}

const BrandDealCard: React.FC<BrandDealCardProps> = ({
  href,
  brandName,
  cardName,
  logo,
  offerText,
  subText,
  cashbackText,
  bgClass = 'from-blue-600 to-blue-700',
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
      aria-label={`${brandName} ${cardName} offer`}
    >
      <div className={`relative h-64 bg-gradient-to-br ${bgClass} text-white`}>
        <div className="relative z-10 h-full flex flex-col justify-between p-6">
          
          {/* Logo + bank name */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-white/90 text-gray-900 flex items-center justify-center text-xl shadow-sm overflow-hidden">
              {logo ?? <span>🏦</span>}
            </div>
            <div className="flex flex-col">
              <span className="text-white/90 font-semibold tracking-wide">
                {brandName}
              </span>
              {cardName && (
                <span className="text-sm text-white/70">{cardName}</span>
              )}
            </div>
          </div>

          {/* Offer Details */}
          <div>
            <h3 className="text-2xl font-extrabold leading-snug">{offerText}</h3>
            {subText && <p className="text-white/90 text-sm mt-1">{subText}</p>}
          </div>

          {/* Benefits badge */}
          <div className="w-full bg-white/95 text-gray-900 px-4 py-2 rounded-md shadow text-sm font-medium">
            {cashbackText}
          </div>
        </div>

        {/* subtle glossy overlay on hover */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
      </div>
    </a>
  );
};

export default BrandDealCard;
