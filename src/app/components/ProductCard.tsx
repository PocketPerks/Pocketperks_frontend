'use client'
import { number } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from 'next/link'

interface ProductCardProps {
  id: string | number; 
  title: string;
  cashback: string;
  cashbackType: 'Cashback' | 'Rewards';
  logo?: string;
  isSale?: boolean;
  saleText?: string;
  path?:String
}

const ProductCard = ({ 
  id,
  title,  
  cashback, 
  cashbackType, 
  logo,
  isSale = false, 
  saleText,
  path = "/categoriespage"
}: ProductCardProps) => {
  const router = useRouter();

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
        
        {logo ? (
          <img 
            src={logo} 
            alt={title} 
            className="w-20 h-20 object-contain"
          />
        ) : (
          <img 
            src="/default-logo.png" // fallback image
            alt="default" 
            className="w-20 h-20 object-contain"
          />
        )}
        
        {/* Sale Badge */}
        {isSale && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
            {saleText}
          </div>
        )}

        {/* Discount Badge */}
        {saleText && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
            {saleText}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">{cashbackType}</p>
            <p className="text-lg font-bold text-orange-600">{cashback}</p>
          </div>
          <Link href={`${path}/${id}`}>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors">
            Shop Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
