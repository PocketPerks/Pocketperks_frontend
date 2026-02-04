const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-50 to-yellow-50">
      {/* Banner Carousel */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              India's Best Cashback & Coupons Site
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Shop online and earn cashback on every purchase. Get the best deals and save money!
            </p>
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Start Shopping Now
            </button>
          </div>
        </div>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-3 h-3 bg-white rounded-full opacity-100"></div>
          <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
          <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
        </div>
        
        {/* Navigation Arrows */}
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-orange-600">10M+</div>
              <div className="text-sm text-gray-600">Happy Users</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-orange-600">₹500Cr+</div>
              <div className="text-sm text-gray-600">Cashback Paid</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-orange-600">1000+</div>
              <div className="text-sm text-gray-600">Partner Stores</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-orange-600">4.5★</div>
              <div className="text-sm text-gray-600">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 