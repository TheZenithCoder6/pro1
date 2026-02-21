
"use client"
import Home_bar from "./Home_bar"
import Accounts from "../Cards/Accounts"
import Wicon from "../Cards/Wicon"
import Text from "../Cards/Text"
import Image_card1 from "../Cards/Img_card1"


export default function (){
    return(
        <div className="w-full h-full flex flex-col mt-6 sm:mt-6">
        <div><Accounts /></div>
        <div><Wicon /></div>
        <div className=" relative bg-orange-400 w-full md:h-96 lg:h-[30rem] flex flex-col-reverse md:flex-row items-center py-4"> 
           <div className="w-full text-white lg:w-1/2 mb-8 lg:mb-0 px-12 sm:px-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Your Travle Luck</h1>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">We inspire you to discover new places. Choose from a variety of <br />
            travel offers, curated by our local experts for every suitcase and <br />
            budget</p>
         </div>
         <div className="w-full lg:w-1/2 md:h-96 lg:h-[30rem] mb-12 md:mb-0">
           <img src="https://www.favotrip.nl/assets/images/favotrip-header.png" alt="favotrip-header" className="w-full h-full object-cover rounded-lg"/>
         </div>
        </div>
        <div className="w-full mt-2"><Home_bar /></div>
        <div><Image_card1/></div>
        <div className="w-full"><Text/></div>
        </div>
    )}