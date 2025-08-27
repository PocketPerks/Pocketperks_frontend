"use client";

export default function Drag() {
  const steps = [
    {
      icon: "📱",
      title: "Visit CashKaro app first",
      desc: "before you shop online",
    },
    {
      icon: "🛍️",
      title: "Select the brand you want to shop on",
      desc: "and you will be re-directed to their site/app",
    },
    {
      icon: "💳",
      title: "Shop & pay as usual on the site",
      desc: "you are shopping normally, no difference",
    },
    {
      icon: "💰",
      title: "Get Cashback on your order",
      desc: "in your CashKaro account",
    },
    {
      icon: "🏦",
      title: "Transfer your Cashback",
      desc: "to your Bank, UPI or take as Amazon pay balance / Flipkart gift cards",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-xl shadow-md bg-white">
      <h2 className="text-xl font-bold mb-6">How CashKaro Works?</h2>

      <div className="space-y-6">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="text-3xl">{step.icon}</div>
            <div>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <a
          href="#"
          className="text-blue-600 font-medium hover:underline flex items-center gap-1"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
}
