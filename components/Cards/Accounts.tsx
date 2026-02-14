"use client"
import {useState} from "react";

export default function Newsletter(){
    const [open, setOpen] = useState(false)
    return(
        <>
        <div onClick={()=> setOpen(true)}
        className="fixed bg-blue-600 text-white z-70 cursor-pointer px-4 py-2 top-1/2 rounded-l-lg [writing-mode:vertical-rl] right-0 shadow-lg">
            Newsletter
        </div>
        {open && (
            <div onClick={()=> setOpen(false)}
            className="fixed  right-0 mx-14 insert-0 flex items-center justify-right bg-transparent mt-24 z-50 shadow-md">
                <div onClick={(e)=> e.stopPropagation()}
                    className="bg-white relative w-[350px] h-[600px] overflow-hidden">

                      <button onClick={()=> setOpen(false)}
                             className="absolute top-2 right-2 text-gray-600 hover:text-black ">
                                 X
                      </button>
                      <img src="https://www.favotrip.nl/assets/images/news-letter-img.png" alt="" className="w-full h-[320px] "/>
                      <h2 className="text-3xl text-bold m-4 ">Looking for inspiration</h2>
                      <p className="text-bold text-black mb-4 ml-8">Sign up for Favotrip's daily newsletter <br /> and receive personal offers from us!</p>
                      <input
                      type="email"
                      placeholder="Your email"
                      className="w-[330px] mx-1 border border-gray-300 rounded px-5 py-2 mb-4"
                      />
                    <button className="w-auto  py-2 px-2 mx-6 mb-3 rounded text-white cursor-pointer bg-[#037DFF] roundedw-full text-white cursor-pointer bg-blue-600" >
                        Activate
                    </button>
                    <p className="cursor-pointer text-1xl mx-6">View Privacy Policies</p>
             </div>
            </div>
        )}
        </>
    )
}