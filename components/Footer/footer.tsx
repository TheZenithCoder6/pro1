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
        
        <footer className="bg-gray-100 text-[#73736F] w-full px-6 py-10"> 
            {/* paymenticon */}
              <div className="mb-8 md:w-1/2 md:ml-auto md:flex md:flex-col md:items-center md:text-left">
                <span className="flex text-center justify-center text-sm font-semibold mb-3 ">Safe payment</span>
               <div className="flex flex-wrap justify-center md:justify-end gap-3">
                 <img
                src="https://www.favotrip.nl/assets/images/payment-icon-ideal.svg"
                alt="iconx1"
                className="w-8 h-8"
                />
                <img
                src="https://www.favotrip.nl/assets/images/payment-icon-credit.svg"
                alt="iconx2"
                className="w-8 h-8"
                />
                <img
                src="https://www.favotrip.nl/assets/images/payment_methods/klarna.png"
                alt="iconx3"
                className="w-8 h-8"
                />
                <img
                src="https://www.favotrip.nl/assets/images/payment-icon-bancontact.svg"
                alt="iconx4"
                className="w-8 h-8"
                />
                <img
                src="https://www.favotrip.nl/assets/images/payment-icon-paypal.svg"
                alt="iconx5"
                className="w-10 h-10"
                />
            </div>   
            </div>

            
            {/* TEXT */}
               <div className="text-[#73736F] text-sm  px-8 mt-4 md:mt-12 md:w-1/2 md:mr-auto md:flex-col">
                 <span className="flex items-center justify-center w-full md:justify-start md:ml-26">Would you like to be the first to receive our travel offers?<br/>
                    </span>
                    <p className="flex items-center justify-center w-full md:justify-start md:ml-26">Don't miss it and ask them!</p>
                </div>
                         {/* email */}
             
              <div className="flex flex-col md:flex-row items-center  md:mr-16 gap-2 w-full rounded-full mt-4 md:justify-end md:w-1/2 md:ml-auto">
                         <input
                           type="email"
                           placeholder="E-mailadres"
                           className="w-full mx-1 border border-gray-800 rounded-sm px-5 py-2 bg-white md:w-[400px] md:"
                          />
                         <button type="button" className="bg-blue-500 w-full md:w-auto md:px-12 text-white showed-md px-2 py-2 rounded-sm">
                            Request
                         </button>
                    </div>
            {/* icon2  facebook insta*/}
                <div className="flex flex-col md:flex-col-reverse sm:flex-row sm:justify-between items-center gap-4 border-t md:border-t-0 pt-6 md:pt-2 md:text-left md:w-1/2 md:justify-start text-gray-A1A1A1">
                    <div className="flex items-center md:items-center gap-3 md:mt-2">
                         <img
                            src="https://www.favotrip.nl/assets/images/Facebook.png"
                            alt="Facebook"
                            className="w-9 h-9 mt-2"
                            />
                            <img
                            src="https://www.favotrip.nl/assets/images/Instagram.png"
                            alt="instagram"
                            className="w-9 h-9 mt-2"
                            />
                    </div>
                     <div className="flex items-center gap-4 ">
                        <p className="text-5xl font-smbold">Favotrip </p><span>©2025</span>
                     </div>
                  </div>
            
              {/* link */}
             <div className="grid grid-cols-2 md:flex md:flex-row md:gap-12  gap-6 py-6 mb-8 text-center md:justify-end">
                 <div className="flex flex-col gap-2">
                    <Link href="/faq" className="cursor-pointer md:mb-5" >Frequently asked questions</Link>
                    <Link href="/privacy-policy" className="cursor-pointer md:ml-16" >Privacy & cookies</Link> 
                 </div>
                 <div className="flex flex-col">
                    <Link href="/algemene-voorwaarden" className="cursor-pointer md:mb-5">General terms and conditions</Link> 
                    <Link href="/contact" className="cursor-pointer md:ml-40"> Contact</Link>     
                </div>       
          </div>

        {/* abot site */}
          <div className="text-[#73736F] flex flex-row text-sm items-center gap-6 md:mx-12 md:justify-between md:mx-24 md:items-end md:h-full md:pb-0">  
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
               
         
        </footer>
        </>
    )
}

