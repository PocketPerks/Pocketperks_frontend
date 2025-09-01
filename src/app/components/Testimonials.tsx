'use client';

const Testimonials = () => {
  const testimonials = [
    { name: 'Divya Painuilly', content: "Whenever I shop for skincare or makeup on Nykaa, I use CashKaro. It's an easy way to get some of my money back. Doesn't make me feel guilty for splurging a little!", avatar: '👩‍🦰' },
    { name: 'Priya Saxena', content: "I shop on Amazon all the time, but ever since I started using CashKaro, I've been getting extra cashback on my orders. It's like I get paid for buying what I already needed. Best decision ever!", avatar: '👩‍💼' },
    { name: 'Rohit Talsania', content: "I was skeptical at first, but CashKaro actually gives cashback on Amazon orders. I've saved so much over the past few months just by clicking through the app!", avatar: '👨‍💻' },
    { name: 'Amit Dey', content: "Bought a laptop from Croma using CashKaro and got a solid cashback amount. Didn't think it would actually work, but it did! Highly recommend for big purchases.", avatar: '👨‍🎓' },
    { name: 'Ankita Rajwanshi', content: "I love buying clothes from Myntra, and with CashKaro, I save even more. The cashback adds up fast, and I can use it for my next purchase. More shopping, less guilt!", avatar: '👩‍🎨' }
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-indigo-950 via-purple-900 to-pink-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
            🌟 Meet Our Superstars
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See what our users have to say about their CashKaro experience
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="relative group">
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <p className="text-gray-200 mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <button className="text-orange-400 hover:text-orange-500 text-sm font-medium">
                        See more
                      </button>
                    </div>
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
