"use client"
import Wicon from "@/components/Cards/Wicon";

export default function contact(){
    return(
      <div>
        <Wicon />
          <div className="max-w-5xl h-full px-4 md:px-8 lg-px-12 mt-16 md:mt-24 mb-8">
            <strong className="text-3xl md:text-5xl text-extrabold">Contact</strong>
            <p className="font-semibold mt-4 text-base text-lg">
            Do you have a question about one of our travel packages or do you need help with your booking?</p>
            <p className=" text-sm md:text-base leading-realaxed">We are happy to help you! <br/> Please feel free to contact us at <a href="mailto:klantenservice@favotrip.nl" className="underline text-blue-600">klantenservice@favotrip.nl</a> {" "}or call us during office hours between +31 (20) 261 49 16. </p>
            <p className="font-bold">Do you already have a booking?</p><span>Don't forget to include your booking<br/> number so we can help you faster.</span>
            <p className="mt-3">You may also find the answer to your <br/>question a good starting point in our <br/>frequently asked questions –.</p>
            <h2 className="font-smbold mt-6 text-2xl">Opening hours</h2><br/>
            <p>Our customer service is available during<br/> the week of 09:00 to 13:00 and on<br/> Saturdays from 09:00 to 13:00.</p>
            <span className="font-bold mt-4 font-bold text-sxl">Are you traveling and do you have an emergency that can't wait until the next morning?</span><br/>
            <p>You will find an emergency number in your travel documents. This number can also be reached outside our opening hours.</p>
            <h3 className="mt-4 font-bold text-xl">Favotrip</h3><span>Papaverweg 34<br/>1032 KJ Amsterdam
</span>
        </div>
      </div>
    )
}