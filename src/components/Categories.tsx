const Categories = () => {
  const categories = [
    { name: 'Credit Cards', icon: '💳' },
    { name: 'Biggest Sales', icon: '🔥' },
    { name: 'Rakhi Specials', icon: '🎁' },
    { name: 'New on CashKaro', icon: '🆕' },
    { name: 'Fashion', icon: '👗' },
    { name: 'Pharmacy', icon: '💊' },
    { name: 'Mobiles', icon: '📱' },
    { name: 'Food & Grocery', icon: '🛒' },
    { name: 'Beauty & Grooming', icon: '💄' },
    { name: 'Flights & Hotels', icon: '✈️' },
    { name: 'Health & Wellness', icon: '🏥' },
    { name: 'Education', icon: '📚' },
    { name: 'Departmental', icon: '🏪' },
    { name: 'Electronics', icon: '🔌' },
    { name: 'Home & Kitchen', icon: '🏠' },
    { name: 'Loans', icon: '💰' }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of categories and find the best deals
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-4 text-center hover:bg-orange-50 hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-sm font-medium text-gray-800 group-hover:text-orange-600 transition-colors">
                {category.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-orange-600 hover:text-orange-700 font-semibold transition-colors">
            See all Categories →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories; 