'use client'
import { useRouter } from "next/navigation";
const HowItWorks = () => {
  const steps = [
    {
      icon: '📱',
      title: 'Visit CashKaro app first',
      subtitle: 'before you shop online',
      description: 'Download our app and create your account to start earning cashback'
    },
    {
      icon: '🏪',
      title: 'Select the brand you want to shop on',
      subtitle: 'and you will be re-directed to their site/app',
      description: 'Choose from thousands of partner stores and brands'
    },
    {
      icon: '🛒',
      title: 'Shop & pay as usual on the site',
      subtitle: 'you are shopping normally, no difference',
      description: 'Shop exactly like you normally would, no changes to your routine'
    },
    {
      icon: '💰',
      title: 'Get Cashback on your order',
      subtitle: 'in your CashKaro account',
      description: 'Earn cashback automatically on every eligible purchase'
    },
    {
      icon: '🏦',
      title: 'Transfer your Cashback',
      subtitle: 'to your Bank, UPI or take as Amazon / Flipkart Gift Cards',
      description: 'Withdraw your earnings to bank account or get gift cards'
    }
  ];
const router = useRouter()
const handlerander = () => {
  router.push("/profile/ReferalEarn")
}

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How CashKaro Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to start earning cashback on your online purchases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              
              {/* Step Content */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-orange-600 font-medium mb-3">
                  {step.subtitle}
                </p>
                <p className="text-sm text-gray-600">
                  {step.description}
                </p>
              </div>

              {/* Arrow for desktop */}
             
            </div>
          ))}
        </div>

        {/* Refer Friends Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-md max-w-2xl mx-auto">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Refer Friends & Earn Forever
            </h3>
            <p className="text-gray-600 mb-6">
              Invite your friends to CashKaro and earn rewards for every successful referral
            </p>
            <button onClick={handlerander} className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors">
              Invite CashKaro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 