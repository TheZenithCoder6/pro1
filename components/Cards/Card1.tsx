"use client"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {images, ImageValues} from "@/src/config/imageConfig"

export default function Card1(){
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isHoverd, setIsHoverd] = useState(false)

    const  imageArray: readonly ImageValues[] = images
        useEffect(() =>{
        document.body.style.overflowX = "hidden";
        return()=>{
            document.body.style.overflowX = "auto";
        };
    },[]);

    //apne aap scrol
    useEffect(()=>{
        if(isHoverd) return

        const interval = setInterval(()=>{
            if(scrollRef.current){
                scrollRef.current.scrollBy({
                left: scrollRef.current.offsetWidth,
              behavior: "smooth",
            })}
        }, 3000)
        return () => clearInterval(interval)
    }, [isHoverd])

const scrolLeft = () => {
        scrollRef.current?.scrollBy({
            left: -scrollRef.current.offsetWidth,
            behavior: "smooth",
        })
    }

const scrollRight = () =>{
     scrollRef.current?.scrollBy({
            left: scrollRef.current.offsetWidth,
            behavior: "smooth",
        })

}

return(
        <div className="relative w-full py-10 bg-gray-100 cursor-pointer mt-24">
            <button
             onClick={scrolLeft}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-3 rounded-full">◀️</button>
            <button
             onClick={scrollRight}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-3 rounded-full">▶️</button>

              <div
               ref={scrollRef}
               onMouseEnter={() => setIsHoverd(true)}
               onMouseLeave={() => setIsHoverd(false)}
               className="flex overflow-x-hidden scroll-smooth no-scrollbar gap-6 px-6">
                {imageArray.map((Values,i) => 
                  <div 
                   key={i}
                   className="min-w-[85%] sm:min-w-[45%] lg:min-w-[30%] bg-white rounded-xl shadow-lg flex-shrink-0 px-0 py-0"> 
                      <div className="relative w-full h-64">
                           <Image 
                             src={Values.src} 
                             alt={Values.title} 
                             fill
                             className="object-cover rounded-t-xl" />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                            <img src={Values.icon1} alt="icon1" className="w-5 h-5"/> +
                            <img src={Values.icon2} alt="icon2" className="w-5 h-5"/>
                        </div>
                        <h3 className="font-bold text-lg mb-2 whitespace-pre-line">{Values.title}</h3>
                        <p className="text-gray-600 text-sm">now form <span className="font-bold text-black">€ 99</span> per person</p>
                      </div>

                  </div> )}
              </div>
            
        </div>

    )}