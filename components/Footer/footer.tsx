


"use client"
import Link from "next/link"

export default function Footer(){
    const scrollTop = () =>{
        window.scroll({
            top:0,
            behavior:"smooth",
        })
    }
    return(
        <>
        
        <footer className=" relative text-[#73736F] fixed relative bg-gray-100 w-full h-120 mt-[800px]"> 
             <div className="text-gray-A1A1A1 absolute flex flex-row gap-8 justify-end right-[100px] mt-64 font-bold gap-4 ">
                 <div className="flex flex-col">
                    <Link href="/faq" className="cursor-pointer mb-5" >Frequently asked questions</Link>
                    <Link href="/privacy-policy" className="cursor-pointer ml-16" >Privacy & cookies</Link> 
                 </div>
                 <div className="flex flex-col">
                    <Link href="/algemene-voorwaarden" className="cursor-pointer mb-5">General terms and conditions</Link> 
                    <Link href="/contact" className="cursor-pointer ml-40"> Contact</Link>     
                </div>       
          </div>
            <div className="flex justify-end absolute mt-12 text-[#73736F] right-[300px]">
                <div className=" relative flex flex-col w-fit ">
                <span className="right-16 text-sm font-semibold absolute">Safe payment</span>
               <div className="flex flex-row my-2 mt-5 gap-3">
                 <img
                src="https://www.favotrip.nl/assets/images/payment-icon-ideal.svg"
                alt="icon"
                className="w-10 h-10 mt-2"
                />
                <img
                src="https://www.favotrip.nl/assets/images/payment-icon-credit.svg"
                alt="icon"
                className="w-10 h-10 mt-2"
                />
                <img
                src="https://www.favotrip.nl/assets/images/payment_methods/klarna.png"
                alt="icon"
                className="w-10 h-10 mt-2"
                />
                <img
                src="https://www.favotrip.nl/assets/images/payment-icon-bancontact.svg"
                alt="icon"
                className="w-10 h-10 mt-2"
                />
                <img
                src="https://www.favotrip.nl/assets/images/payment-icon-paypal.svg"
                alt="icon"
                className="w-10 h-10 mt-2"
                />
               </div>
            </div>
            </div>
               <div className=" absolute text-[#73736F] flex px-24 ">
                 <p className="flex items-center justify-center h-80">Would you like to be the first to receive our travel offers?<br/>
                    Don't miss it and ask them!</p>
                  <div className="absolute mt-64 text-gray-A1A1A1">
                    <span className="text-4xl">Favotrip </span>©2025
                    <div className="flex flex-row gap-3 rounded-full mt-4">
                         <img
                            src="https://www.favotrip.nl/assets/images/Facebook.png"
                            alt="icon"
                            className="w-8 h-8 mt-2"
                            />
                            <img
                            src="https://www.favotrip.nl/assets/images/Instagram.png"
                            alt="icon"
                            className="w-8 h-8 mt-2"
                            />
                    </div>
                  </div>
               </div>
          <div className="text-[#73736F] flex items-center justify-between mx-24 items-end h-full pb-12">  
            <div>
                Favotrip
            </div>
            <button onClick={scrollTop} className="hover:text cursor-pointer">
                Up
            </button>
            <div>
                ©2025 All rights reserved
            </div>
            <div className="hover:underline cursor-pointer">
                Manage cookies
            </div>
        
          </div>
                <div className=" absolute flex items-center gap-2 w-1/2 rounded-full mt-4 right-[100px] top-[150px] justify-end">
                         <input
                           type="email"
                           placeholder="E-mailadres"
                           className="w-[400px] mx-1 border border-gray-600 rounded px-5 py-2 h-[42px] bg-white"
                          />
                         <button type="button" className="bg-blue-500 text-white showed-md  px-24 h-[42px]">
                            Request
                         </button>
                    </div>
         
        </footer>
        </>
    )
}

