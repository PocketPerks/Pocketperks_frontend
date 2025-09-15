'use client'

export default function Cards() {
  const Categories = [
    { id:1, Image:"/SBICARD.png", Reward:`Flat ₹1400 Reward`, amount: 1400, Link:"Rewards Rates & Terms" },
    { id:2, Image:"/HSBCLIVEPLUS.png", Reward:"Flat ₹2200 Reward", amount:2200, Link:"Rewards Rates & Terms" },
    { id:3, Image:"/HSBC.png", Reward:"Flat ₹2500 Reward", amount:2500, Link:"Rewards Rates & Terms" },
    { id:4, Image:"/yesBank.png", Reward:"Flat ₹1100 Reward", amount:1100, Link:"Rewards Rates & Terms" },
    { id:5, Image:"/IndusPlatinum.png", Reward:"Flat ₹1200 Reward", amount:1200, Link:"Rewards Rates & Terms" },
    { id:6, Image:"/FederalScapia.png", Reward:"Flat ₹550 Reward", amount:550, Link:"Rewards Rates & Terms" },
    { id:7, Image:"/AxisFlipkart.png", Reward:"Flat ₹1500 Reward", amount:1500, Link:"Rewards Rates & Terms" },
    { id:8, Image:"/KiwiLTF.png", Reward:"Flat ₹1100 Reward", amount:1100, Link:"Rewards Rates & Terms" },
    { id:9, Image:"/SBICARD.png", Reward:"Flat ₹1400 Reward", Link:"Rewards Rates & Terms" },
    { id:10, Image:"/SBICARD.png", Reward:"Flat ₹1400 Reward", Link:"Rewards Rates & Terms" },
    { id:11, Image:"/SBICARD.png", Reward:"Flat ₹1400 Reward", Link:"Rewards Rates & Terms" },
    { id:12, Image:"/SBICARD.png", Reward:"Flat ₹1400 Reward", Link:"Rewards Rates & Terms" },
    { id:13, Image:"/SBICARD.png", Reward:"Flat ₹1400 Reward", Link:"Rewards Rates & Terms" },
    { id:14, Image:"/SBICARD.png", Reward:"Flat ₹1400 Reward", Link:"Rewards Rates & Terms" },
    { id:15, Image:"/SBICARD.png", Reward:"Flat ₹1400 Reward", Link:"Rewards Rates & Terms" },
  ]

  // High Priority Card = max amount
  const highPriority = Categories.reduce((prev, current) => {
    return prev.amount > current.amount ? prev : current
  }, Categories[0])

  const otherCategories = Categories.filter(cat => cat.id !== highPriority.id)

  return (
    <div
  className="w-full min-h-md bg-cover bg-center flex flex-col gap-6 p-10 pt-15"
  style={{ backgroundImage: "url('/voucher2.png')" }}
>
  <div className="overflow-y-scroll overflow-hidden scroll-smooth h-[30rem] gap-5 flex flex-col">
  {/* High Priority Card */}
  <div className="flex justify-center">
    <div className="bg-gradient-to-r w-full max-w-[20rem] from-yellow-400 to-orange-400 p-10 rounded-xl shadow-lg flex flex-col items-center gap-4">
      <img src={highPriority.Image} alt={highPriority.Reward} className="w-32 h-20 object-contain"/>
      <div className="text-center md:text-left">
        <h2 className="text-xl font-bold">{highPriority.Reward}</h2>
        <p className="text-sm text-gray-800 underline mt-1 cursor-pointer">{highPriority.Link}</p>
      </div>
    </div>
  </div>

  {/* Other Cards Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
    {otherCategories.map(item => (
      <div
        key={item.id}
        className="bg-white/10 backdrop-blur-sm p-4 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer flex flex-col items-center text-center"
      >
        <img src={item.Image} alt={item.Reward} className="w-24 h-16 object-contain mb-2"/>
        <h3 className="text-sm font-semibold">{item.Reward}</h3>
        <p className="text-xs text-blue-600 underline mt-1">{item.Link}</p>
      </div>
    ))}
  </div>
</div>
</div>

  )
}
