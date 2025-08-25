import ProductCard from './ProductCard';

const ProductGrid = () => {
  const popularBrands = [
    {
      title: 'Flipkart',
      subtitle: 'CB Affoy',
      cashback: 'Upto 7%',
      cashbackType: 'Cashback' as const,
      isSale: true,
      saleText: 'Sale Live Now'
    },
    {
      title: 'Amazon India',
      subtitle: '',
      cashback: 'Upto 5.50%',
      cashbackType: 'Rewards' as const,
      isSale: true,
      saleText: 'Sale Live Now'
    },
    {
      title: 'AJIO',
      subtitle: '',
      cashback: 'Upto 8%',
      cashbackType: 'Cashback' as const,
      isSale: true,
      saleText: 'Sale Live Now'
    },
    {
      title: 'Myntra',
      subtitle: '',
      cashback: 'Upto 6%',
      cashbackType: 'Cashback' as const,
      isSale: true,
      saleText: 'Sale Live Now'
    },
    {
      title: 'Reliance Digital',
      subtitle: '',
      cashback: 'Upto 3%',
      cashbackType: 'Cashback' as const,
      discount: '50-80% Off'
    },
    {
      title: 'MamaEarth',
      subtitle: 'B1G1',
      cashback: 'Flat 12%',
      cashbackType: 'Cashback' as const,
      discount: 'BOGO'
    },
    {
      title: 'Hyugalife',
      subtitle: '',
      cashback: 'Upto 10%',
      cashbackType: 'Cashback' as const,
      discount: 'Upto 60% Off'
    },
    {
      title: 'Truemeds',
      subtitle: '',
      cashback: 'Upto ₹370',
      cashbackType: 'Cashback' as const,
      discount: '25% Off Code'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Most Popular Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Shop from your favorite brands and earn cashback on every purchase
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularBrands.map((brand, index) => (
            <ProductCard
              key={index}
              title={brand.title}
              subtitle={brand.subtitle}
              cashback={brand.cashback}
              cashbackType={brand.cashbackType}
              isSale={brand.isSale}
              saleText={brand.saleText}
              discount={brand.discount}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors">
            View All Brands
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid; 