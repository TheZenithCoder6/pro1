"use client"
import Link from "next/link"

export default function Text(){
    return(
        <div className=" w-full  h-full absolute mt-[650px] px-16 ">
            <div className="flex flex-col">
            <div className="flex w-full gap-12 ">
            <div className="w-1/2 flex flex-col justify-start"><h2 className="font-smbold text-3xl">Discover your travel happiness during your next holiday</h2>
            <p className="mt-4">Favotrip is all about special trips that suit you. Every day we put together a surprising selection from hotels, activities and transport to complete, ready-made packages. From a spontaneous weekend trip close to home to a short holiday to unknown pearls in Europe, everything is smartly put together and easy to book</p><br/>
            <p>We don't believe in one kind of trip for everyone. Your ideal trip is personal. That is why we offer authentic experiences that are not only affordable, but also well organized and inspiring. For every type of traveler and every budget</p><br/>
            <p>Whether you are looking for peace, adventure or culture, with Favotrip your next journey of discovery starts when you book. Be surprised and experience more without hassle</p>
            </div>
            <div className="w-1/2 flex flex-col justify-start"><h2 className="font-smbold text-3xl">Select one of our trips with the help of our local experts</h2>
            <p className="mt-4">Our travel specialists are curious travelers just like you. They know where to go, what you certainly don't want to miss and which hidden places really make a destination special
                Together with local partners, we develop complete packages with care and attention. Think of fair prices, unique activities and personal tips that enrich your trip</p><br/>
                <p>Whether you are looking for relaxation, culture or adventure – we ensure a smooth experience from the first search moment to the moment you return home. All you have to do is enjoy
                   Be inspired by Favotrip and discover how easy and fun booking a special trip can be</p>
            </div>
        </div>
        </div>
        <div className="mt-6">
            <h2 className="font-smbold text-3xl">Discover more</h2>
            <div className="flex flex-row cursor-pointer gap-40 mt-3">
                    <Link href="/" className="cursor-pointer mb-5" >Belgium</Link>
                    <Link href="/" className="cursor-pointer ml-16" >Germany</Link> 
                    <Link href="/" className="cursor-pointer ml-16" >England</Link>
                    <Link href="/" className="cursor-pointer ml-16" >France</Link>
                    <Link href="/" className="cursor-pointer ml-16" >Netherlands</Link>
                 </div>
        </div>
        </div>
    )}