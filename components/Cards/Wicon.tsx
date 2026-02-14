"use client"

import React from "react"
import { FaWhatsapp } from "react-icons/fa"
const  Wicon: React.FC = () => {

    return(
            <div className="fixed z-50 group">
              <a 
                href="https://wa.me/9878767876"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full
                           shadow-lg hover:scale-110 transition-transform duration-200
                           fixed bottom-8 md:bottom-12 right-6 md:right-8 bg-green-500">
              < FaWhatsapp size={26} className="md:text-white text-white"/>
              
              <span className="absolute right-12 md:right-20 top-1 -translate-y-1/2 whitespace-nowrap
                                bg-black text-white text-sm px-4 py-3 rounded-full bottom-3 opacity-0 
                                group-hover:opacity-100 transition"
              >Do you have questions? WhataApp us !</span></a>
            </div>
    );
};

export default Wicon;