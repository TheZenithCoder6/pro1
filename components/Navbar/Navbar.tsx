"use client"

import { useState , useEffect } from "react"

export default function Navbar(){
    const  [open, setOpen] = useState(false)
    
    useEffect(() =>{
      if (open){
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "auto"
      }
      return () =>{
        document.body.style.overflow = "auto"
      }
    },[open])

    return(
        <nav className=" fixed top-0 left-0 w-full bg-white shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16" >
              <img
               src="/favotrip-logo.svg"
               alt="favotrip-logo"
               className="w-36 h-auto"
               />
               <ul className="hidden md:flex items-center gap-8 text-gray-700 text-sm font-medium">
                 <li className="hover:text-black cursor-pointer">Reiscategories</li>
                 <li className="hover:text-black cursor-pointer">Travel destination</li>
                 <li className="hover:text-black cursor-pointer">Topics</li>
                 <li className="hover:text-black cursor-pointer">Vouchers</li>
                 <li className="hover:text-black cursor-pointer">Overig</li>
               </ul>
            <div onClick={()=> setOpen(!open)}
                className="hidden md:block text-gray-700 text-sm hover:text-black cursor-pointer">
                 Search offer
            </div>

            <button 
               onClick={()=> setOpen(!open)}
               className="md:hidden text-gray-700"> 🟰
             </button>
         </div>
         </div>
          {open &&(
            <div className="border-t bg-white md:hidden">
                <ul className="hidden md:flex items-center gap-8 text-gray-700 text-sm font-medium">
                 <li>Reiscategories</li>
                 <li>Travel destination</li>
                 <li>Topics</li>
                 <li>Vouchers</li>
                 <li>Overig</li>
                 <li className="pt-2 border-t">Search offer</li>
               </ul>
            </div>
          )}
                              {open && (
                                 <div className="absolute w-full h-90 bg-white p-4 shadow-md z-80 top-0 transition-transform duration-12200 ease-in-out transform" 
                                     style={{transform: open ? "translateY(0)" : "translateY(-100%)",  }}>
                                       <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                                           <input
                                            type="text"
                                             placeholder="Where do want to travel?"
                                              className="flex-1 border-rounded px-4 py-2 outline-none border-b border-gray-400"/>
                                           <button className="bg-blue-600 text-white px-4 py-2 rounded">Find offers</button>
                                           <button onClick={() => setOpen(false)} className="text-gray-600 ml-4">✖</button>
                                       </div>
                                 </div>
                                  )}
        </nav>
    )
}

