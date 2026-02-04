const Testimonials = () => {
  const testimonials = [
    {
      name: 'Divya Painuilly',
      content: 'Whenever I shop for skincare or makeup on Nykaa, I use CashKaro. It\'s an easy way to get some of my money back. Doesn\'t make me feel guilty for splurging a little!',
      avatar: '👩‍🦰'
    },
    {
      name: 'Priya Saxena',
      content: 'I shop on Amazon all the time, but ever since I started using CashKaro, I\'ve been getting extra cashback on my orders. It\'s like I get paid for buying what I already needed. Best decision ever!',
      avatar: '👩‍💼'
    },
    {
      name: 'Rohit Talsania',
      content: 'I was skeptical at first, but CashKaro actually gives cashback on Amazon orders. I\'ve saved so much over the past few months just by clicking through the app!',
      avatar: '👨‍💻'
    },
    {
      name: 'Amit Dey',
      content: 'Bought a laptop from Croma using CashKaro and got a solid cashback amount. Didn\'t think it would actually work, but it did! Highly recommend for big purchases.',
      avatar: '👨‍🎓'
    },
    {
      name: 'Ankita Rajwanshi',
      content: 'I love buying clothes from Myntra, and with CashKaro, I save even more. The cashback adds up fast, and I can use it for my next purchase. More shopping, less guilt!',
      avatar: '👩‍🎨'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Superstars
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our users have to say about their CashKaro experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                      See more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 