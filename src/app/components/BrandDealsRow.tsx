import BrandDealCard from './BrandDealCard';

const BrandDealsRow = () => {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BrandDealCard
            href="#"
            brandName="amazon.in"
            logo={<span className="text-xl">🛍️</span>}
            offerText="Up to 80% Off"
            subText="Across Categories"
            cashbackText="Up to 5% Rewards"
            bgClass="from-sky-400 to-sky-500"
          />
          <BrandDealCard
            href="#"
            brandName="Flipkart"
            logo={<span className="text-xl">📦</span>}
            offerText="50-90% Off"
            subText="Across Categories"
            cashbackText="Up to 7% Cashback"
            bgClass="from-blue-700 to-blue-800"
          />
          <BrandDealCard
            href="#"
            brandName="AJIO"
            logo={<span className="text-xl">👗</span>}
            offerText="50-90% Off"
            subText="+ Flat 10% AJIO Supercash"
            cashbackText="Up to 8% Cashback"
            bgClass="from-orange-500 to-orange-600"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandDealsRow;