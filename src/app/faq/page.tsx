"use client"
import { useEffect } from "react";
import Wicon from "@/components/Cards/Wicon";


export default function Faq(){
    useEffect(() =>{
        document.body.style.overflowX = "hidden";
        return()=>{
            document.body.style.overflowX = "auto";
        };
    },[]);
    return(
        <>
        <div className=" mt-30 ml-24 w-full h-[1150px]">
            <Wicon />
            <div className=" mt-8 space-y-4">
                 <h1 className="font-[650] text-5xl">Frequently asked questions</h1>
                 <div className="mt-8 space-y-4">
                    <span className="font-bold">Do you have a question or is something unclear? </span><br/>
                    Then first view the frequently asked questions below.
                    <p className="font-bold mt-1">Is your question not listed?</p>
                <p>Please feel free to contact us at <a href="mailto:klantenservice@favotrip.nl" className="underline text-blue-600">klantenservice@favotrip.nl</a> or call us during office hours between +31 (20) 261 49 16.<br /> We are happy to help you!</p>
             </div>
             <div className="mt-8 space-y-4">
                <p className="font-bold">General </p>
                <p><span className="font-bold">Where can I find your general terms and conditions?</span><br/><p>You can find our general terms and conditions [here].<br/><span className="font-bold">Do you have questions?</span></p><p>Please feel free to contact our customer service.</p></p>
             </div>
             <div className=" mt-8 space-y-4">
                <p><span className="font-bold">Can I change or cancel my booking?</span><br/><p>Yes, you can usually request changes or cancellations up to 7 days before departure via our customer service. Please note that this may incur<br/> additional costs.</p><br />
                <p>Favotrip charges €14.95 change costs, in addition to any costs of the service providers. Our customer service will clearly inform you in advance of<br/>the total costs before the change or cancellation is implemented.</p></p>
             </div>
             <div  className=" mt-8 space-y-4">
                <p><span className="font-bold">Cancellation policy:</span><br/></p>
                <p className="ml-9 space-y-4">
                    <li>You can cancel package trips without flight/train/activity free of charge up to 7 days before departure. You will then receive a refund of the<br/>amount of your booking, excluding the booking costs of €19.95.</li>
                <li>Some offers are non-refundable. In that case, cancellations or changes are usually not possible. Please contact our customer service for the<br/>exact terms and conditions.</li>
                <li>Bookings with a voucher cannot be changed or canceled unless a specific appointment has been made with the accommodation or transport<br/>partner.</li>
                </p>
             </div>
              <div className=" mt-8 space-y-4">
                <p><span className="font-bold">Can I cancel my voucher order?</span><br/><p>Yes, you can cancel your order within 14 days of receipt by contacting our customer service</p></p>
              </div>
              <div className=" mt-8 space-y-4">
             <p className="font-bold text-lg">Bookings</p><br/><p><span className="font-bold">I want to leave for several days, but I can only book a different number of days. What now?</span><p>Each offer has a fixed length of stay. With city trips or weekend trips you can often choose from several options. For tours, the duration is fixed per<br/> destination and cannot be adjusted.</p></p>
              </div>
              <div>
                <p><span className="font-bold">Can I choose a room type or care type?</span><br/><p>With some deals you can choose a different room type or care type (for example including breakfast). The prices shown are based on the cheapest<br/> combination. You can make a different selection yourself under the calendar.</p></p>
              </div>
              <div>
                <p><span className="font-bold">Is my reservation final as soon as I book?</span><br/><p>Yes, your reservation is final once you have completed and paid for the entire booking process. The travel agreement is concluded at that time. You<br/> will immediately receive a booking confirmation and invoice by e-mail.</p></p>
              </div>
              <div>
                <p><span className="font-bold">What name should I enter when booking?</span><br/><p>Always use the first and last name as they appear in the passport.</p></p>
              </div>
              <div>
                <p><span className="font-bold">When will I receive my travel documents?</span><br/><p>You will receive the travel documents 14 days before departure. Do you book within 14 days before departure? You will then receive the documents <br/> within 24 hours of your booking.</p></p>
              </div>
              <div>
                <p><span className="font-bold">I have not received a booking confirmation – is that possible?</span><br/><p>Didn't receive a confirmation within two hours? Then check your spam folder, especially if you use an Outlook address. Also search for the word<br/> “Favotrip” in your mailbox —. The email will often still appear. Still can't find the confirmation? Please contact us at 
                <a href="mailto:klantenservice@favotrip.nl" className="underline text-blue-600">klantenservice@favotrip.nl</a></p></p>
              </div>
              <div>
                <p className="font-bold text-xl">Books with a voucher</p>
                </div>
                <div>
                <p><span className="font-bold">Did you buy a voucher?</span><br/><p>You can then only redeem this via the special voucher page and under the conditions stated in the confirmation email.</p></p>
              </div>
              <div>
                <p><span className="font-bold">Have you made a booking with the voucher?</span><br/><p>This cannot then be changed or canceled unless Favotrip determines otherwise in consultation with the accommodation or transport partners.<br/>
                 The voucher code is valid for a maximum of 12 months from the date of issue.</p></p>
              </div>
              <div >
                <p className="font-bold text-xl">After your booking</p>
                </div>
                 <div>
                <p><span className="font-bold">I have booked a transfer, where can I find it?</span><br/><p>All information about your transfer can be found on the voucher you receive. Make sure you take a printed version of this voucher with you when<br/> traveling.</p></p>
              </div>
               <div>
                <p><span className="font-bold">My trip contains an activity, what can I find more information about here?</span><br/><p>You will receive a separate voucher for the activity together with your travel documents. This contains all relevant information, such as what exactly<br/>
                is included, the starting point and the starting time. Also take this printed voucher with you when traveling.</p></p>
              </div>
            </div>
        </div>
        </>
    )
}


                
                
          