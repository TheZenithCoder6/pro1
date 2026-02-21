"use client"
import {useState} from "react";

export default function Newsletter(){
    const [open, setOpen] = useState(false)
    return(
        <div>
        <div onClick={()=> setOpen(true)}
        className="fixed bg-blue-500 text-white z-[70] cursor-pointer px-4 py-2 top-1/2 rounded-l-lg [writing-mode:vertical-rl] right-0 shadow-lg">
            Newsletter
        </div>
        {open && (
            <div onClick={()=> setOpen(false)}
            className="fixed  inset-0 flex items-center justify-right bg-transparent z-50 p-4 m-8">
                <div onClick={(e)=> e.stopPropagation()}
                    className="bg-white relative w-full sm:w-[400px] sm:h-[70vh] max-w-xs   md:max-h-[90vh] overflow-y-auto ml-auto shadow-xl">

                      <button onClick={()=> setOpen(false)}
                             className="absolute top-2 right-2 text-gray-600 hover:text-black ">
                                 X
                      </button>
                      <img src="https://www.favotrip.nl/assets/images/news-letter-img.png" alt="" className="w-full h-48 sm:h-64 objec-cover rounded-lg"/>
                      <h2 className="text-2xl sm:text-xl font-semibold mb-3 px-6 ">Looking for inspiration</h2>
                      <p className="text-bold text-black mb-4 ml-8">Sign up for Favotrip's daily newsletter <br /> and receive personal offers from us!</p>
                       <div className="px-4">
                           <input
                      type="email"
                      placeholder="Your email"
                      className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline focus:ring-2 focus:blue-500"
                      />
                       </div>
                    <button className="w-full  py-2 px-2 rounded text-white cursor-pointer bg-blue-600" >
                        Activate
                    </button>
                    <p className="cursor-pointer text-1xl mx-6">View Privacy Policies</p>
             </div>
            </div>
        )}
        </div>
    )
}