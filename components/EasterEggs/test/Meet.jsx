import samp from "../../../public/assets/icons/meet/samp.png"
import sayak from "../../../public/assets/icons/meet/sayak.png"
import Image from "next/image"
const Meet = ({setMeet, stop}) => {

    return (
      <div className="absolute z-50 bg-vs-gray-5 w-full p-20 max-sm:px-4 pt-0 h-full top-10 left-0">
        <div className="gap-4 flex justify-center items-center lg:flex-row max-lg:flex-col h-full">
            <div className="bg-vs-gray-2 max-[940px]:h-fit rounded-xl min-[940px]:basis-1/2">
                <div className="p-5">
                    <div className="bg-blue-500 w-fit rounded-full p-1 ml-auto ">
                        <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/></svg>
                    </div>
                    <Image className=" rounded-full mx-auto my-10 w-[30%]" src={samp} alt="" />
                </div>
                <div className="font-sans font-lg mb-4 mx-6">Sampurna Bhadury</div>
            </div>
            <div className="bg-vs-gray-2 max-[940px]:h-fit rounded-xl min-[940px]:basis-1/2">
                <div className="p-5">
                    <div className="bg-blue-500 w-fit rounded-full p-1 ml-auto ">
                        <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/></svg>
                    </div>
                    <Image className=" rounded-full mx-auto my-10 w-[30%]" src={sayak} alt="" />
                </div>
                <div className="font-sans font-lg mb-4 mx-6">Sayak Sarkar</div>
            </div>
        </div>
        
            <div className="absolute flex flex-row justify-between max-[940px]:justify-center px-20 py-24 items-center w-screen bottom-0 h-20 left-0">
                
                <div className="flex flex-row justify-center items-center text-center gap-2 max-[940px]:hidden">
                    <h4 className=" font-sans ">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})}</h4>
                    <div className="w-[2px] h-5 bg-vs-white-2/50"></div>
                    <div className=" font-sans mb-1 truncate overflow-ellipsis">pwo-nwdh-nzx</div>
                </div>

                <div className="flex gap-2 flex-row items-center justify-center max-sm:justify-between grow">
                    <div className="bg-vs-gray-2 hover:bg-white/20 w-12 h-12 p-3 cursor-pointer flex items-center justify-center rounded-3xl">
                        <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-423q-43 0-72-30.917-29-30.916-29-75.083v-251q0-41.667 29.441-70.833Q437.882-880 479.941-880t71.559 29.167Q581-821.667 581-780v251q0 44.167-29 75.083Q523-423 480-423Zm-30 303v-136q-106-11-178-89t-72-184h60q0 91 64.288 153t155.5 62Q571-314 635.5-376 700-438 700-529h60q0 106-72 184t-178 89v136h-60Z"/></svg>
                    </div>
                    <div className="bg-red-500 w-12 h-12 p-3 hover:bg-red-600 cursor-pointer flex items-center justify-center rounded-3xl">
                        <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M880-275 720-435v111l-60-60v-356H304l-60-60h416q24 0 42 18t18 42v215l160-160v410ZM848-27 39-836l42-42L890-69l-42 42ZM484-560Zm-87 82ZM159-800l60 60h-79v520h520v-79l60 60v19q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h19Z"/></svg>
                    </div>
                    <div className="bg-vs-gray-2 max-[940px]:hidden w-12 h-12 p-3 hover:bg-white/20 cursor-pointer flex items-center justify-center rounded-3xl">
                        <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M180-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h600q24 0 42 18t18 42v520q0 24-18 42t-42 18H180Zm0-60h600v-520H180v520Zm90-141h142q12.75 0 21.375-8.625T442-391v-42h-50v22H290v-138h102v22h50v-42q0-12.75-8.625-21.375T412-599H270q-12.75 0-21.375 8.625T240-569v178q0 12.75 8.625 21.375T270-361Zm279 0h142q12 0 21-9t9-21v-42h-50v22H569v-138h102v22h50v-42q0-12-9-21t-21-9H549q-12 0-21 9t-9 21v178q0 12 9 21t21 9ZM180-220v-520 520Z"/></svg>
                    </div>
                    <div className="bg-vs-gray-2 max-[940px]:hidden w-12 h-12 p-3 hover:bg-white/20 cursor-pointer flex items-center justify-center rounded-3xl">
                        <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm146 272q66 0 121.5-35.5T682-393H278q26 61 81 96.5T480-261Zm0 181q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z"/></svg>
                    </div>
                    <div className="bg-vs-gray-2 w-12 h-12 p-3 hover:bg-white/20 cursor-pointer flex items-center justify-center rounded-3xl">
                        <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M451-328h59v-194l79 81 43-43-153-152-152 152 43 43 81-81v194ZM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-520H140v520Zm0 0v-520 520Z"/></svg>
                    </div>
                    <div className="bg-vs-gray-2 w-12 h-12 hover:bg-white/20 cursor-pointer flex items-center justify-center rounded-3xl">
                        <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
                    </div>
                    <div
                    onClick={()=>{setMeet(false);stop();}}
                    className="order-first md:order-last bg-red-500 w-16 h-12 hover:bg-red-600 cursor-pointer flex items-center justify-center rounded-3xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="28" viewBox="0 -960 960 960" width="28"><path d="M480-640q118 0 232.5 47.5T916-450q12 12 12 28t-12 28l-92 90q-11 11-25.5 12t-26.5-8l-116-88q-8-6-12-14t-4-18v-114q-38-12-78-19t-82-7q-42 0-82 7t-78 19v114q0 10-4 18t-12 14l-116 88q-12 9-26.5 8T136-304l-92-90q-12-12-12-28t12-28q88-95 203-142.5T480-640Z"/></svg>
                        <div className="absolute text-white text-[12px] bg-vs-gray-2 h-8 px-3 top-10 animate-bounce max-sm:animate-pulse rounded-lg ml-10 shadow-lg">
                            <div className="relative top-2 ">Click to Exit</div> 
                            <div className="relative w-4 h-4 bg-vs-gray-2 rotate-45 top-1 rounded-sm"></div>
                        </div>
                    </div>
                    
                </div>

                <div className="flex gap-3 flex-row max-[940px]:hidden">
                    <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="white" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-280q17 0 28.5-11.5T520-320v-160q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480v160q0 17 11.5 28.5T480-280Zm0-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                    <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="white" height="24" viewBox="0 -960 960 960" width="24"><path d="M80-160q-17 0-28.5-11.5T40-200v-72q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v72q0 17-11.5 28.5T640-160H80Zm661 0q9-7 14-17.5t5-23.5v-79q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v80q0 17-11.5 28.5T880-160H741ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 280Z"/></svg>
                    <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="white" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-400h240q17 0 28.5-11.5T560-440q0-17-11.5-28.5T520-480H280q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0-120h400q17 0 28.5-11.5T720-560q0-17-11.5-28.5T680-600H280q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-120h400q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720H280q-17 0-28.5 11.5T240-680q0 17 11.5 28.5T280-640Zm-40 400-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm-80-80h640v-480H160v480Zm0 0v-480 480Z"/></svg>
                    <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="white" height="24" viewBox="0 -960 960 960" width="24"><path d="M148-520q-23 0-34.5-19.5T113-579l132-238q11-20 35-20t35 20l132 238q11 20-.5 39.5T412-520H148Zm132 400q-66 0-113-47t-47-113q0-67 47-113.5T280-440q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T360-280q0-33-23.5-56.5T280-360q-33 0-56.5 23.5T200-280q0 33 23.5 56.5T280-200Zm-64-400h128l-64-115-64 115Zm344 480q-17 0-28.5-11.5T520-160v-240q0-17 11.5-28.5T560-440h240q17 0 28.5 11.5T840-400v240q0 17-11.5 28.5T800-120H560Zm40-80h160v-160H600v160ZM280-658Zm0 378Zm400 0Zm-56-420-76-76q-11-11-11-28t11-28q11-11 28-11t28 11l76 76 76-76q11-11 28-11t28 11q11 11 11 28t-11 28l-76 76 76 76q11 11 11 28t-11 28q-11 11-28 11t-28-11l-76-76-76 76q-11 11-28 11t-28-11q-11-11-11-28t11-28l76-76Z"/></svg>
                    <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="white" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-160v-400 400-15 15Zm120-480h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v164q-11-2-21-3t-21-1q-10 0-19.5 1t-18.5 3v-164H240v400h324q5 23 14 43t23 37H240Zm520 0q-42 0-71-29t-29-71q0-20 7-36.5t19-30.5l52-58q9-10 22-10t22 10l52 58q12 14 19 30.5t7 36.5q0 42-29 71t-71 29ZM480-280q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280Z"/></svg>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/50 to-transparent h-20 flex flex-row justify-center items-center text-center gap-2 min-[940px]:hidden">
            <h4 className=" font-sans ">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false})}</h4>
            <div className="w-[2px] h-5 bg-vs-white-2/50"></div>
            <div className=" font-sans mb-1 truncate overflow-ellipsis">pwo-nwdh-nzx</div>
        </div>
        
      </div>
    )
  }
  
  export default Meet
  