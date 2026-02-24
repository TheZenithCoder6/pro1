"use client"
import { RefObject } from "react";
import { useState ,useRef,useEffect } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";




export default function Home_bar(){
//div open up and down
const [arrivalUpward, setArrivalUpward] = useState(false);
const [nightsUpward, setNightsUpward] = useState(false);
const [travelUpward, setTravelUpward] = useState(false);



const [openTravel, setOpenTravel] = useState(false);
const [adults, setAdults] = useState(2);
const [child, setChild] = useState(0);
const [openNights, setOpenNights] = useState(false)
const [nights, setNights] = useState(1)
const [openArrival, setOpenArrival] = useState(false)
const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
const [selectedDate, setSelectedDate] = useState<Date | null>(null);
const [minNight, setMinNight] = useState<number>(1);
const [maxNight, setMaxNight] = useState<number>(1);


const dropdownRef = useRef<HTMLDivElement>(null)
const nightRef = useRef<HTMLDivElement>(null)
const arrivalRef = useRef<HTMLDivElement>(null)

// box close
useEffect(()=> {
    function handeClickOutside(event: MouseEvent){
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)){
            setOpenTravel(false)
        }
        if (nightRef.current && !nightRef.current.contains(event.target as Node)){
            setOpenNights(false)
        }
        if (arrivalRef.current && !arrivalRef.current.contains(event.target as Node)){
            setOpenArrival(false) 
        } }

    function handelPosition(ref:RefObject<HTMLElement | null>, isOpen:boolean, setUpward:React.Dispatch<React.SetStateAction<boolean>>){
        if(!ref.current || !isOpen) return;

          const rect = ref.current.getBoundingClientRect();
          const dropdownHeight = 350;
          const spaceBelow = window.innerHeight - rect.bottom;
          const spaceAbove = rect.top;

          if (spaceBelow < dropdownHeight && spaceAbove >dropdownHeight){
            setUpward(true)
          } else {
            setUpward(false)
          }
    }
    function handelScroll() {
          handelPosition(arrivalRef,openArrival,setArrivalUpward) 
          handelPosition(nightRef,openNights,setNightsUpward)    
          handelPosition(dropdownRef,openTravel,setTravelUpward)              
    
 }

    document.addEventListener("mousedown", handeClickOutside);
    //SCROL EVENT
    window.addEventListener("scroll",handelScroll)
    return () => { document.removeEventListener("mousedown", handeClickOutside);
                window.removeEventListener("scroll",handelScroll) }

},[openArrival , openNights ,openTravel]);


//date day ke liye function
function getDaysInMonth(year: number , month: number){
    return new Date(year , month + 1, 0).getDate(); 
}

function getFirstDay(year:number , month:number){
    return new Date(year , month , 1).getDay(); 
}

    return(
        <div className="absolute w-full flex justify-center top-[450px] md:top-[520px] mt-8 sm:mt-24 md:mt-0">
            <div className="w-full mx-6 md:mx-12 max-w-[1330] bg-white rounded-md border border-gray-300 shadow-xl">
               <div className="grid grid-cols-1 md:grid-cols-4 md:items-center px-4 py-4 gap-6 md:gap-0">

                  {/* ARRIVAL KI LOGIC */}
                    <div ref={arrivalRef} className="relative w-full  flex-1 border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:px-8">
                    <div
                        onClick={() => {
                          setOpenArrival(prev => !prev); 
                          if (arrivalRef.current) {
                             const rect = arrivalRef.current.getBoundingClientRect();
                             const dropdownHeight = 350;
                             if (rect.bottom + dropdownHeight > window.innerHeight){
                                setArrivalUpward(true);
                                  } else {
                                setArrivalUpward(false);
                            }

                          }
                        }}
                        className="cursor-pointer select-one">
                            <p className="text-gray-700 text-sm">Arrival</p>
                            <p className="text-gray-900">
                                {selectedDate ? selectedDate.toDateString() : "No preference"}</p>
                    </div>
                        
                        

                         {openArrival && (
                            <div className={`absolute left-[-5px] mt-4 w-full md:w-80 bg-white rounded-xl shadow-xl p-4 z-50 ${
                                arrivalUpward ? "bottom-full mb-4" : "mt-4"
                            }`}>
                                <div className="flex justify-between items-center mb-4 md:w-full gap-2">
                                    <button
                                      onClick={() => {
                                        if (currentMonth == 0){
                                         setCurrentMonth(11);
                                        setCurrentYear(prev => prev - 1);
                                        } else {
                                            setCurrentMonth(prev => prev - 1);
                                        }
                                        
                                      }}
                                      className=" flex-shrink-0 shadow-sm border border-black/10 rounded-full p-1">
                                       <SlArrowLeft />
                                    </button>

                                    {/* month_year */}

                                    <div className="flex items-center gap-2 md:gap-4 justify-center">
                                        <select
                                          value={currentMonth}
                                          onChange={(e) => setCurrentMonth(Number(e.target.value))}
                                          className="px-1 py-1 text-sm md:text-[17px] w-16 md:w-24"
                                          >
                                          {["Jan","Feb","Mar","Apr","May","Jun","Jul",
                                        "Aug","Sep","Oct","Nov","Dec"].map((month, index) => (
                                            <option key={index} value={index}>{month}</option>
                                        ))}

                                        </select>

                                         <select
                                          value={currentYear}
                                          onChange={(e) => setCurrentYear(Number(e.target.value))}
                                          className="px-1 py-1 text-sm md:text-[17px] w-16 md:w-24 "
                                          >
                                         {Array.from({length: 7},(_,i) => {
                                            const year = currentYear - 0 + i;
                                            return(
                                              <option key={year} value={year}>{year}</option>  
                                            )
                                         } )}

                                        </select>
                                    </div>

                                    <button
                                      onClick={() => {
                                        if (currentMonth == 11){
                                         setCurrentMonth(0);
                                        setCurrentYear(prev => prev + 1);
                                        } else {
                                            setCurrentMonth(prev => prev + 1);
                                        }                                 
                                      }}
                                       className=" flex-shrink-0 shadow-sm border border-black/10 rounded-full p-1">
                                      <SlArrowRight />
                                    </button>
                            </div>

                                {/* Days_week ka logic */}
                                {/* weeks */}
                                <div className="grid grid-cols-7 gap-2 text-center text-gray-500 text-sm mb-2">
                                    {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((day,i) => (
                                        <span key={i}>{day}</span>
                                    ))}
                                </div>
                                {/* date */}
                                <div className="grid grid-cols-7 gap-2">
                                    {Array.from({length: getFirstDay(currentYear, currentMonth) },(_,i) => (
                                    <span key={i}></span> ))}
                                    {Array.from({length: getDaysInMonth(currentYear, currentMonth) },(_,i) => {
                                     const date = i +1; 
                                     return (
                                        <button
                                         key={date}
                                         onClick={() => {
                                            setSelectedDate(new Date(currentYear,currentMonth,date));
                                            setOpenArrival(false)
                                         }}
                                         className={`p-2 rounded hover:bg-blue-100 $ {
                                            selectedDate?.getDate() == date &&
                                            selectedDate?.getMonth() == currentMonth &&
                                            selectedDate?.getFullYear() == currentYear 
                                            ? "bg-blue-500 text-white"
                                            :""
                                            } `}
                                         >
                                            {date}
                                        </button>
                                     )    
                                    })}
                                </div>
                                
                            </div>
                         )}
                    </div>
                  {/* night logic */}
                 <div ref={nightRef} className="relative w-full flex-1 mr-8 border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:px-8">
                        <div 
                         onClick={() => {
                          setOpenNights(prev => !prev); 
                          if (nightRef.current) {
                             const rect = nightRef.current.getBoundingClientRect();
                             const dropdownHeight = 350;
                             if (rect.bottom + dropdownHeight > window.innerHeight){
                                setNightsUpward(true);
                                  } else {
                                setNightsUpward(false);
                            }

                          }
                        }}
                        className="cursor-pointer select-one">
                            <p className="text-gray-700 text-sm">Number of nights</p>
                            <p className="text-gray-900">
                                {minNight} - {maxNight} nights
                            </p>
                        </div>
                        {openNights && (
                                    <div className={`absolute left-0 mt-4 w-full md:w-80 bg-white rounded-xl shadow-xl p-6 z-50  ${
                                nightsUpward ? "bottom-full mb-4" : "mt-4"
                            }`}>
                                    <h3 className="font-semibol mb-4">Number of nights</h3>


                                    {/* night ka logic */}
                                    <div className="mt-6 relative w-full  h-10 flex flex-center overflow-hidden">
                                        {/* line */}
                                        <div className="absolute w-full h-1 bg-gray-300 rounded-md mt-2"></div>
                                        {/* orange line */}
                                         <div className="absolute w-auto h-1 bg-orange-500 rounded-md mt-2"
                                         style={{
                                            left:`${(minNight / 14 )* 100}%`,
                                            right: `${100- (maxNight / 14 )* 100}%`,
                                         }}></div>

                                                                      {/* MIN */}
                                                                    <input
                                                                      type="range"
                                                                     min={1}
                                                                      max={14}
                                                                      value={minNight}
                                                                      onChange={(e) =>
                                                                        setMinNight(
                                                                          Math.min(Number(e.target.value), maxNight - 1)
                                                                        )
                                                                      }
                                                                      className="absolute w-full z-10 appearance-none bg-transparent
                                                                      [&::-webkit-slider-thumb]:appearance-none
                                                                      [&::-webkit-slider-thumb]:h-5
                                                                      [&::-webkit-slider-thumb]:w-5
                                                                      [&::-webkit-slider-thumb]:rounded-full
                                                                      [&::-webkit-slider-thumb]:bg-orange-500"
                                                                    />
                                                                  
                                                                    {/* MAX */}
                                                                    <input
                                                                      type="range"
                                                                      min={1}
                                                                      max={14}
                                                                      value={maxNight}
                                                                      onChange={(e) =>
                                                                        setMaxNight(
                                                                          Math.max(Number(e.target.value), minNight + 1)
                                                                        )
                                                                      }
                                                                      className="absolute w-full z-20 appearance-none bg-transparent
                                                                      [&::-webkit-slider-thumb]:appearance-none
                                                                      [&::-webkit-slider-thumb]:h-5
                                                                      [&::-webkit-slider-thumb]:w-5
                                                                      [&::-webkit-slider-thumb]:rounded-full
                                                                      [&::-webkit-slider-thumb]:bg-orange-500"
                                                                                                                                      />

                                    </div>
                                     <p className="text-center font-semibold mt-6"> {minNight} - {maxNight} nights</p>
                                    </div>
                        )}

                 </div>
              

                 <div ref={dropdownRef} className="relative  w-full flex-1 border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:px-2">
                  {/* click box */}
                        <div 
                            onClick={() => {
                          setOpenTravel(prev => !prev); 
                          if (dropdownRef.current) {
                             const rect = dropdownRef.current.getBoundingClientRect();
                             const dropdownHeight = 350;
                             if (rect.bottom + dropdownHeight > window.innerHeight){
                                setTravelUpward(true);
                                  } else {
                                setTravelUpward(false);
                            }

                          }
                        }}
                        className="select-one">
                            <p className="text-gray-700 text-sm">Travel participants</p>
                            <p className="text-gray-900">
                                {adults} adults{child > 0 && `, ${child} child`}
                            </p>
                        </div>
                        {/* downdrop */}
                        {openTravel && (
                            <div className={`absolute left-0 mt-4 w-full md:w-80 bg-white rounded-xl shadow-xl p-6 z-50 ${
                                travelUpward ? "bottom-full mb-4" : "mt-4"
                            }`}>
                                    <h3 className="font-semibol mb-4">Travel participants</h3>

                                    {/* adult ka logic */}
                                     <div className="flex justify-between items-center mb-4">
                                        <span>Adults</span>
                                        <div className="flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-lg cursor-pointer">
                                             <button className="cursor-pointer"
                                              onClick={() => setAdults((prev) => Math.max(2, prev - 1))}>
                                                -
                                             </button>
                                             <span>{adults}</span>
                                             <button  className="cursor-pointer"
                                              onClick={() => setAdults((prev) => prev + 1)}>
                                                +
                                             </button>
                                        </div>
                           
                                     </div>

                                     {/* child ka logic */}
                                      <div className="flex justify-between items-center mb-4">
                                        <span>Child</span>
                                        <div className="flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-lg cursor-pointer">
                                             <button className="cursor-pointer"
                                              onClick={() => setChild((prev) => Math.max(0, prev - 1))}>
                                                -
                                             </button>
                                             <span>{child}</span>
                                             <button className="cursor-pointer"
                                              onClick={() => setChild((prev) => prev + 1)}>
                                                +
                                             </button>
                                        </div>
                           
                                     </div>
                                     <div className="mt-4 flex items-center gap-2">
                                        <input type="checkbox"/>
                                        <label className="text-sm">All Person in a room</label>
                                     </div>
                            </div>
                        )}
                 </div>
                                
                 <div>
                   <div className="flex justify-center w-full flex-1 md:justify-start">
                       <button className="bg-blue-500  w-full md:w-auto text-white px-4  cursor-pointer rounded-md py-4 ml-2 md:ml-48">
                         Show travel
                        </button>
                   </div>
              </div>
               </div>
            </div>
        </div>
    )}


