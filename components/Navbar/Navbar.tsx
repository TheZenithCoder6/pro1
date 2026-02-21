"use client"

import { useState} from "react"
import Link from "next/link"

export default function Navbar(){
    const  [open, setOpen] = useState(false)
    return(
        <nav className=" fixed top-0 left-0 w-full md:h-24 bg-white shadow-sm z-50 ">
            <div className="max-w-7xl mx-auto px-6 md:mt-4">
            <div className="flex items-center justify-between h-16" >
                <Link href="/">
                 <img
                    src="/favotrip-logo.svg"
                    alt="favotrip-logo"
                    className="w-36 h-auto"
                   />
                </Link>
                {/* DESKTOP MENU */}
               <ul className="hidden md:flex items-center gap-8 text-gray-700 text-sm font-medium">
                 <li className="hover:text-black cursor-pointer">Reiscategories</li>
                 <li className="hover:text-black cursor-pointer">Travel destination</li>
                 <li className="hover:text-black cursor-pointer">Topics</li>
                 <li className="hover:text-black cursor-pointer">Vouchers</li>
                 <li className="hover:text-black cursor-pointer">Overig</li>
               </ul>
               {/* DESKTOP SEARCH BAR*/}
            <div onClick={()=> setOpen(!open)}
                className="hidden md:block text-gray-700 text-sm hover:text-black cursor-pointer">
                 Search offer
            </div>
               {/* MOBILE */}
            <button 
               onClick={()=> setOpen(!open)}
               className="md:hidden text-gray-700"> 🟰
             </button>
         </div>
         </div>
          {/* MOBILE LEFT SLITE */}
             <div className={`fixed bg-white inset-0 top-0 left-0 h-full shadow-md z-[60] transform transition-transform duration-600 ease-in-out
                                        ${ open ? "translate-x-0": "-translate-x-full"} 
                                         w-full sm:w-1/3 md:hidden`}>
                  <div className="p-4 flex flex-col gap-4 text-gray-700 text-md">
                    <button onClick={() => setOpen(false)} className="text-gray-700 self-end">✖</button>
                      <Link href="/">
                        <img
                         src="/favotrip-logo.svg"
                         alt="favotrip-logo"
                         className="w-36 h-auto -mt-8"
                                    />
                      </Link>
                     <ul className="flex flex-col gap-8 text-xl text-black mt-8">
                         <input
                          type="text"
                          placeholder="Search" 
                          className="flex-1 shadowpx-4 mx-3 px-3 py-2 pb-3 outline-none border-xl bg-gray-200 rounded-md border-gray-400"/>
                         <div className="pl-12 space-y-12">
                             <li>Reiscategories</li>
                             <li>Travel destination</li>
                             <li>Topics</li>
                             <li>Vouchers</li>
                             <li>Overig</li>
                         </div>
                     </ul>
                 </div>
             </div>   

             {/* desktop slide */}
                              
                                 <div className={`hidden md:block fixed inset-0 w-full md:h-1/2 bg-white p-4 shadow-md z-50 transition-transform duration-700 ease-in-out
                                        ${ open ? "translate-y-0": "-translate-y-full"}`}>
                                       <div className="max-w-7xl mx-auto flex justify-between gap-6 mt-3">
                                        <img 
                                         src="https://www.favotrip.nl/assets/images/search-vector.png"
                                         alt="search-vector"
                                          className="w-6 h-6"/>
                                           <input
                                            type="text"
                                             placeholder="Where do want to travel?"
                                              className="flex-1 px-4 py-2 pb-3 outline-none border-b border-gray-400"/>
                                           <button className=" bg-blue-600 text-white px-4 py-2 rounded">Find offers</button>
                                           <button onClick={() => setOpen(false)} className="text-gray-600 ml-4">✖</button>    
                                       </div>
                                       <div className="flex flex-col w-1/3 px-24 mt-8">
                                                  <h3 className="mb-2 text-sm text-gray-500">Popular travel destinations</h3>
                                                  <ul className="text-md md:text-xl space-y-2">
                                                  <li>Belgium</li>
                                                  <li>Germany</li>
                                                  <li>England</li>
                                                  <li>France</li>
                                                  <li>Netherlands</li>
                                                  </ul>
                                                  </div>
                                 </div>
        </nav>
    )
}

