
"use client"
import Home_bar from "./Home_bar"
import Accounts from "../Cards/Accounts"
import Wicon from "../Cards/Wicon"
import Text from "../Cards/Text"
import Card1 from "../Cards/Card1"


export default function (){
    return(
        <div className="w-full flex flex-col mt-6 sm:mt-6 h-[900px]">
        <div><Accounts /></div>
        <div><Wicon /></div>
        <div className=" relative bg-orange-400 w-full flex flex-col lg:flex-row items-center py-12 lg:py-50 px-4 sm:px-6 lg:px-20"> 
           <div className="w-full text-white lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-3xl md:text-4xl md:text-5xl font-bold mb-4">Your Travle Luck</h1>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">We inspire you to discover new places. Choose from a variety of <br />
            travel offers, curated by our local experts for every suitcase and <br />
            budget</p>
         </div>
         <div className=" absolute lg:ml-[680px] w-full lg:w-1/2  h-full md:h-96 lg:h-120">
           <img src="https://www.favotrip.nl/assets/images/favotrip-header.png" alt="favotrip-header" className="w-full h-full object-cover lg:h-128 rounded-lg"/>
         </div>
        </div>
        <div className="w-full"><Home_bar /></div>
        <div className="w-full"><Text/></div>
        <div className="w-full">< Card1/></div>
        </div>
    )}