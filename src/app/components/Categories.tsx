'use client'
import Link from "next/link";

const Categories = () => {
  const categories = [
    { name: 'Credit Cards', icon: '💳' , path:'/Categories'},
    { name: 'Biggest Sales', icon: '🔥',path:'/Categories' },
    { name: 'Rakhi Specials', icon: '🎁' ,path:'/Categories'},
    { name: 'New on CashKaro', icon: '🆕',path:'/Categories' },
    { name: 'Fashion', icon: '👗',path:'/Categories' },
    { name: 'Pharmacy', icon: '💊',path:'/Categories' },
    { name: 'Mobiles', icon: '📱',path:'/Categories' },
    { name: 'Food & Grocery', icon: '🛒' ,path:'/Categories'},
    { name: 'Beauty & Grooming', icon: '💄' ,path:'/Categories'},
    { name: 'Flights & Hotels', icon: '✈️',path:'/Categories' },
    { name: 'Health & Wellness', icon: '🏥',path:'/Categories' },
    { name: 'Education', icon: '📚',path:'/Categories' },
    { name: 'Departmental', icon: '🏪' ,path:'/Categories'},
    { name: 'Electronics', icon: '🔌' ,path:'/Categories'},
    { name: 'Home & Kitchen', icon: '🏠' ,path:'/Categories'},
    { name: 'Loans', icon: '💰',path:'/Categories' }
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
            <Link href={category.path} key={index}>
              <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-orange-50 hover:shadow-md transition-all duration-300 cursor-pointer group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-sm font-medium text-gray-800 group-hover:text-orange-600 transition-colors">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories; 