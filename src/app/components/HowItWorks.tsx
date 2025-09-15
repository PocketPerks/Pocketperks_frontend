'use client'
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

const HowItWorks = () => {
  const steps = [
    {
      icon: "📱",
      title: "Visit CashKaro app first",
      subtitle: "before you shop online",
      description:
        "Download our app and create your account to start earning cashback",
    },
    {
      icon: "🏪",
      title: "Select the brand you want to shop on",
      subtitle: "and you will be re-directed to their site/app",
      description: "Choose from thousands of partner stores and brands",
    },
    {
      icon: "🛒",
      title: "Shop & pay as usual on the site",
      subtitle: "you are shopping normally, no difference",
      description:
        "Shop exactly like you normally would, no changes to your routine",
    },
    {
      icon: "💰",
      title: "Get Cashback on your order",
      subtitle: "in your CashKaro account",
      description: "Earn cashback automatically on every eligible purchase",
    },
    {
      icon: "🏦",
      title: "Transfer your Cashback",
      subtitle:
        "to your Bank, UPI or take as Amazon / Flipkart Gift Cards",
      description:
        "Withdraw your earnings to bank account or get gift cards",
    },
  ];

  const router = useRouter();
  const handlerander = () => {
    router.push("/profile/ReferalEarn");
  };

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } }
  };

  const item: Variants = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{once:true}}
      variants={container}
      className="py-20 relative bg-white overflow-hidden"
    >
      {/* Background Neon Blobs */}
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-black bg-clip-text text-transparent drop-shadow-lg">
            How CashKaro Works
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Follow these simple steps to start earning cashback on your online purchases
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, rotateY: 6, rotateX: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="text-center  relative cursor-pointer"
            >
              {/* Step Number */}
              

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 shadow-md hover:shadow-cyan-500/40 transition-shadow duration-300 h-full">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">{step.title}</h3>
                <p className="text-sm text-blue-400 font-medium mb-3">{step.subtitle}</p>
                <p className="text-sm text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Refer Friends */}
        <motion.div
          variants={item}
          className="mt-20 text-center"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <div className="bg-black/10 rounded-2xl p-10 shadow-lg max-w-2xl mx-auto cursor-pointer">
            <div className="text-5xl mb-4">🎁</div>
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">
              Refer Friends & Earn Forever
            </h3>
            <p className="text-black mb-6">
              Invite your friends to CashKaro and earn rewards for every successful referral
            </p>
            <button
              onClick={handlerander}
              className="px-8 py-3 rounded-full font-semibold bg-black/10 transition-all shadow-lg shadow-black-500/30"
            >
              Invite CashKaro
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
