export default function MyReferal() {
  return (
    <div className="w-full p-6 sm:p-10 md:p-16 max-w-5xl mx-auto">
      <div className="bg-white/50 shadow-lg rounded-2xl p-6 sm:p-10">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="w-full text-center sm:text-left font-medium border border-gray-300 rounded-t-lg p-2 bg-gray-50">
              Total Referral Earn
            </div>
            <div className="w-full border border-gray-300 rounded-b-lg p-2 flex justify-center sm:justify-start">
              <p className="text-blue-500 font-semibold text-lg">₹0</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="w-full text-center sm:text-left font-medium border border-gray-300 rounded-t-lg p-2 bg-gray-50">
              Total Referral Earn
            </div>
            <div className="w-full border border-gray-300 rounded-b-lg p-2 flex justify-center sm:justify-start">
              <p className="text-blue-500 font-semibold text-lg">₹0</p>
            </div>
          </div>

          


        </div>
        <div className="w-full flex justify-center p-10 ">


          <img className="object-contain h-[20rem] rounded-2xl" src="/ReferalMy.png"/>
          
</div>
      </div>
    </div>
  )
}
