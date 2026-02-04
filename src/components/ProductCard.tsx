interface ProductCardProps {
  title: string;
  subtitle?: string;
  cashback: string;
  cashbackType: 'Cashback' | 'Rewards';
  imageUrl?: string;
  isSale?: boolean;
  saleText?: string;
  discount?: string;
}

const ProductCard = ({ 
  title, 
  subtitle, 
  cashback, 
  cashbackType, 
  imageUrl, 
  isSale = false, 
  saleText, 
  discount 
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
        <div className="w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-orange-600">
            {title.charAt(0)}
          </span>
        </div>
        
        {/* Sale Badge */}
        {isSale && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
            {saleText}
          </div>
        )}
        
        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
            {discount}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
        {subtitle && (
          <p className="text-sm text-gray-600 mb-3">{subtitle}</p>
        )}
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">{cashbackType}</p>
            <p className="text-lg font-bold text-orange-600">{cashback}</p>
          </div>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 