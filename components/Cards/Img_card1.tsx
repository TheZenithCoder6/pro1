"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { images ,ImageValue } from "@/src/config/imageConfig";
import { imagesv ,ImageValuev } from "@/src/config/vouchersConfig";
import { imagesn } from "@/src/config/Newadded";
import { imagest } from "@/src/config/topics";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

export default function Img_card1(){
    const scrollRef1 = useRef<HTMLDivElement>(null);
    const scrollRef2 = useRef<HTMLDivElement>(null);
    const scrollRef3 = useRef<HTMLDivElement>(null);
    const scrollRef4 = useRef<HTMLDivElement>(null);



    const [isHovered, setIsHovered] = useState(false);
    const ImageArray = [...images, ...images,...images, ...images,...images, ...images, ...images,...images, ...images];
    const ImageArrayv = [...imagesv, ...imagesv,...imagesv, ...imagesv,...imagesv,...imagesv, ...imagesv,...imagesv, ...imagesv];
    const ImageArrayt = [...imagest, ...imagest,...imagest, ...imagest,...imagest,...imagest, ...imagest,...imagest, ...imagest];
    const ImageArrayn = [...imagesn, ...imagesn,...imagesn, ...imagesn,...imagesn,...imagesn, ...imagesn,...imagesn, ...imagesn];


    useEffect(() =>{
        if (isHovered) return;
        const refs = [
            scrollRef1,
            scrollRef2,
            scrollRef3,
            scrollRef4,
        ]
        const interval = setInterval(() =>{
            refs.forEach((ref) =>{
             if(!ref.current) return;
            const container = ref.current;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
              if(container.scrollLeft >= maxScrollLeft -5 ){
                container.scrollTo({left:0, behavior: "smooth"})
            }else{
                container.scrollBy({
                    left: container.clientWidth, behavior:"smooth"
                });
            }
            })

        },3000)

      return () =>clearInterval(interval);
    },[isHovered])

    const scrollLeft = () => {
        scrollRef1.current?.scrollBy({
             left: -scrollRef1.current.clientWidth,
              behavior:"smooth",
        })
    }

    const scrollRight = () => {
        scrollRef1.current?.scrollBy({
             left: scrollRef1.current.clientWidth,
              behavior:"smooth",
        });
    };


    const scrollLeft2 = () => {
        scrollRef2.current?.scrollBy({
             left: -scrollRef2.current.clientWidth,
              behavior:"smooth",
        })
    }

    const scrollRight2 = () => {
        scrollRef2.current?.scrollBy({
             left: scrollRef2.current.clientWidth,
              behavior:"smooth",
        });
    }

    const scrollLeft3 = () => {
        scrollRef3.current?.scrollBy({
             left: -scrollRef3.current.clientWidth,
              behavior:"smooth",
        })
    }

    const scrollRight3 = () => {
        scrollRef3.current?.scrollBy({
             left: scrollRef3.current.clientWidth,
              behavior:"smooth",
        });
    }

  
    const scrollLeft4 = () => {
        scrollRef4.current?.scrollBy({
             left: -scrollRef4.current.clientWidth,
              behavior:"smooth",
        })
    }

    const scrollRight4 = () => {
        scrollRef4.current?.scrollBy({
             left: scrollRef4.current.clientWidth,
              behavior:"smooth",
        });
    };

return (
    <div className="w-full mt-[35vh] md:mt-[15vh] py-12 bg- overflow-hidden bg-[#fdfaf2]">
        {/* New in Presentation */}
        <div className="max-w-7xl mx-auto md:px-4 relative cursor-pointer">
            <h2 className="text-2xl md:text-3xl py-4 ml-4 text-[20px]">New in Presentation</h2>

            <div className="relative">
                {/* //L-button */}
                <button
                onClick={scrollLeft}
                className="absolute hidden sm:flex items-center justify-center left-0 top-1/4 -translate-y-1/2 z-10 bg-white shadow-md p-1 rounded-full"
                >
                    <HiOutlineArrowCircleLeft size={28}/>
                </button>

                {/* right side button */}
                <button
                onClick={scrollRight}
                className="absolute hidden sm:flex items-center justify-center right-0 top-1/4 -translate-y-1/2 z-10 bg-white shadow-md p-1 rounded-full"
                >
                    <HiOutlineArrowCircleRight size={28}/>
                </button>
                  {/* auto scroll container */}
                  <div
                  ref={scrollRef1}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave= {() => setIsHovered(false)}
                  className="flex overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
                  >
                  {ImageArray.map((Values, i) => (
                    <div 
                    key={i}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 md:w-1/3 px-4 snap-start">

                        {/* card */}
                        <div className="bg-white rounded-sm shadow-lg overflow-hidden h-[420px] flex flex-col">

                            {/* image */}
                            <div  className="relative w-full h-64">
                                <Image 
                                src={Values.src}
                                alt={Values.title}
                                fill
                                className="object-cover"
                                 />
                            </div>

                            {/* issu fixeing */}
                            <div className=" flex flex-col mt-4 ml-4 flex-1 justify-between">
                                <div>
                                    <div className="mb-2  gap-2 flex items-center">
                                        <img 
                                        src={Values.icon1}
                                        alt=""
                                         className="w-5 h-5"
                                        />
                                        +
                                         <img 
                                        src={Values.icon2}
                                        alt=""
                                        className="w-5 h-5"
                                        />
                                    </div>
                                    <h3 className="font-bold text-lg mb-1 line-clamp-2">{Values.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm mb-2">
                                    now from {" "}
                                    <span className="text-bold text-black">€ 99</span>{" "} per person
                                </p>
                            </div>
                        </div>

                    </div>
                  ))}
                  </div>
            </div>
        </div>
        {/* Vouchers */}
<div className="w-full md:mt-[9vh] py-14 bg- overflow-hidden bg-white">
         <div className="max-w-7xl mt-8 mx-auto md:px-4 relative cursor-pointer">
            <h2 className="text-2xl md:text-3xl py-4 ml-4 text-[20px]">Vouchers</h2>

            <div className="relative">
                {/* //L-button */}
                <button
                onClick={scrollLeft2}
                className="absolute hidden sm:flex items-center justify-center left-0 top-1/4 -translate-y-1/2 z-10 bg-white shadow-md p-1 rounded-full"
                >
                    <HiOutlineArrowCircleLeft size={28}/>
                </button>

                {/* right side button */}
                <button
                onClick={scrollRight2}
                className="absolute hidden sm:flex items-center justify-center right-0 top-1/4 -translate-y-1/2 z-10 bg-white shadow-md p-1 rounded-full"
                >
                    <HiOutlineArrowCircleRight size={28}/>
                </button>
                  {/* auto scroll container */}
                  <div
                  ref={scrollRef2}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave= {() => setIsHovered(false)}
                  className="flex overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
                  >
                  {ImageArrayv.map((Values, i) => (
                    <div 
                    key={i}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/2 md:w-1/2 px-4 snap-start">

                        {/* card */}
                        <div className="bg-white rounded-sm shadow-lg overflow-hidden h-[420px] flex flex-col">

                            {/* image */}
                            <div  className="relative w-full h-64">
                                <Image 
                                src={Values.src}
                                alt={Values.title}
                                fill
                                className="object-cover"
                                 />
                            </div>

                            {/* issu fixeing */}
                            <div className=" flex flex-col mt-4 ml-4 flex-1 justify-between">
                                <div>
                                    <div className="mb-2  gap-2 flex items-center">
                                        <img 
                                        src={Values.icon1}
                                        alt=""
                                         className="w-5 h-5"
                                        />
                                        +
                                         <img 
                                        src={Values.icon2}
                                        alt=""
                                        className="w-5 h-5"
                                        />
                                           <div>
                                                <div className="flex text-bold bg-blue-500 text-white gap-1 px-1  md:gap-2 md:px-2 rounded ml-8 md:ml-90">
                                                  <img 
                                                   src={Values.icon3}
                                                    alt="voucher"
                                                    className=" h-auto"
                                                     />
                                                     <p className="sm:text-sm">Voucher</p>
                                                 </div>
                                            </div>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{Values.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm mb-2">
                                    now from {" "}
                                    <span className="text-bold text-black"></span>{" "}
                                </p>
                            </div>
                        </div>

                    </div>
                  ))}
                  </div>
            </div>
        </div>
        </div>
         {/* Topics */}
<div className="w-full bg- overflow-hidden bg-white">
         <div className="max-w-7xl mt-8 mx-auto md:px-4 relative cursor-pointer">
            <h2 className="text-2xl md:text-3xl py-4 ml-4 text-[20px]">Topics</h2>

            <div className="relative">
                <button
                onClick={scrollLeft3}
                className="absolute hidden sm:flex items-center justify-center left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-1 rounded-full"
                >
                    <HiOutlineArrowCircleLeft size={28}/>
                </button>

                {/* right side button */}
                <button
                onClick={scrollRight3}
                className="absolute hidden sm:flex items-center justify-center right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-1 rounded-full"
                >
                    <HiOutlineArrowCircleRight size={28}/>
                </button>
                  {/* auto scroll container */}
                  <div
                  ref={scrollRef3}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave= {() => setIsHovered(false)}
                  className="flex overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
                  ></div>
                  {/* auto scroll container */}
                  <div
                  ref={scrollRef3}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave= {() => setIsHovered(false)}
                  className="flex overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
                  >
                  {ImageArrayt.map((Values, i) => (
                    <div 
                    key={i}
                    className="flex-shrink-0 w-1/2 lg:w-1/2 md:w-1/2 px-4 snap-start">

                        {/* card */}
                        <div className="bg-white rounded-sm shadow-lg overflow-hidden h-16 md:h-56">

                            {/* image */}
                            <div  className="relative w-full h-16 md:h-56">
                                <Image 
                                src={Values.src}
                                alt="image"
                                fill
                                className="object-cover"
                                 />
                                  <div className="absolute bottom-2 left-16 md:left-48 p-2  z-10">
                                <h3 className="text-white font-bold text-sm md:text-lg">{Values.title}</h3>
                            </div>
                            </div>
                        </div>

                    </div>
                  ))}
                  </div>
            </div>
        </div>
        </div>
         {/* New added */}
<div className="w-full py-14 bg- overflow-hidden bg-white">
         <div className="max-w-7xl mt-8 mx-auto md:px-4 relative cursor-pointer">
            <h2 className="text-2xl md:text-3xl py-4 ml-4 text-[20px]">New added</h2>

            <div className="relative">
                {/* //L-button */}
                <button
                onClick={scrollLeft4}
                className="absolute hidden sm:flex items-center justify-center left-0 top-1/4 -translate-y-1/2 z-10 bg-white shadow-md p-1 rounded-full"
                >
                    <HiOutlineArrowCircleLeft size={28}/>
                </button>

                {/* right side button */}
                <button
                onClick={scrollRight4}
                className="absolute hidden sm:flex items-center justify-center right-0 top-1/4 -translate-y-1/2 z-10 bg-white shadow-md p-1 rounded-full"
                >
                    <HiOutlineArrowCircleRight size={28}/>
                </button>
                  {/* auto scroll container */}
                  <div
                  ref={scrollRef4}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave= {() => setIsHovered(false)}
                  className="flex overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
                  >
                  {ImageArrayn.map((Values, i) => (
                    <div 
                    key={i}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/2 md:w-1/2 px-4 snap-start">

                        {/* card */}
                        <div className="bg-white rounded-sm shadow-lg overflow-hidden h-[420px] flex flex-col">

                            {/* image */}
                            <div  className="relative w-full h-64">
                                <Image 
                                src={Values.src}
                                alt={Values.title}
                                fill
                                className="object-cover"
                                 />
                            </div>

                            {/* issu fixeing */}
                            <div className=" flex flex-col mt-4 ml-4 flex-1 justify-between">
                                <div>
                                    <div className="mb-2  gap-2 flex items-center">
                                        <img 
                                        src={Values.icon1}
                                        alt=""
                                         className="w-5 h-5"
                                        />
                                        +
                                         <img 
                                        src={Values.icon2}
                                        alt=""
                                        className="w-5 h-5"
                                        />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{Values.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm mb-4 ">
                                     per person{" "}
                                    <span className="text-bold sm:text-sm text-black">
                                    Total € 217 for example 2 people and 2.3.4 days incl. surcharges (incl. reservation costs € 19)</span>{" "}
                                </p>
                            </div>
                        </div>

                    </div>
                  ))}
                  </div>
            </div>
        </div>
        </div>
        {/* scroll bar hide */}
        <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
         display: none;
         }
         .no-scrollbar{
         -ms-overflow-style: none;
         scrollbar-width: none;
         }`}</style>
              
</div>   
)
}

