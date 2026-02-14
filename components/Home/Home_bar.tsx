"use client"

export default function Home_bar(){
    return(
        <div className="absolute w-full flex justify-center top-130">
            <div className="w-full mx-12 max-w-7xl bg-white rounded-md border border-gray-300 shadow-xl">
               <div className="flex justify-between items-center px-10 py-6">
                 <div className="border-r border-gray-300 pr-10">
                 <p className="text-gray-700 text-sm">Arrival</p>
                 <p className="text-gray-900">No preference</p>
                 </div>
                 <div className="border-r border-gray-300 px-10">
                 <p className="text-gray-700 text-sm">Number of nights</p>
                 <p className="text-gray-900">1 nights</p>
                 </div>
                 <div className="border-r border-gray-300 px-10">
                <p className="text-gray-700 text-sm">Travel participants</p>
                 <p className="text-gray-900">2 adults</p>
                 </div>
                 <div>
                <button className="bg-blue-600 text-white px-6 cursor-pointer ml-18 rounded-md py-4">
                    Show travel
                </button>
              </div>
               </div>
            </div>
        </div>
    )}



