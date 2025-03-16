import React from 'react'
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlineArrowRight } from "react-icons/ai";
import events1 from '../../assets/images/events1.jpeg'
import events2 from '../../assets/images/events2.jpeg'
import events3 from '../../assets/images/events3.jpeg'
import events4 from '../../assets/images/events4.jpeg'
import events5 from '../../assets/images/events5.jpeg'
import events6 from '../../assets/images/events6.jpeg'

function Events() {
  return (
    <>
        <div className='container m-auto p-[5px]'>
        <div>
                <h1 className='text-[#028910] font-bold text-3xl md:text-[40px] font-serif'>Tadbirlar</h1>
                {/* <p className='text-[23px] font-serif mt-[10px]'>Universitet hayotida sodir bo'layotgan yangiliklar va xabarlar.</p> */}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10'>
                
                {/* 1 */}
                <a href="#">
                <div
                    className="h-[400px] bg-cover bg-center mt-[50px] relative group overflow-hidden rounded-2xl"
                    style={{ backgroundImage: `url(${events1})` }}
                > 
                 {/* Yashil parda */}
                    <div className="absolute bottom-0 left-0 w-full h-full bg-green-900 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-80 group-hover:translate-y-0 translate-y-full"></div>

                 <div className='bg-[#10370fb6] p-[20px] bottom-0 absolute w-full rounded-b-2xl'>
                    <p className='flex items-center text-white font-bold text-2xl gap-1'><IoCalendarOutline/> 28-fevral</p>
                    <p className='text-white font-bold text-xl'>Deputat va yoshlar uchrashuvi</p>
                 </div>
                </div>
                </a>

                {/* 2 */}
                <a href="#">
                <div
                    className="h-[400px] bg-cover bg-center mt-[50px] relative group overflow-hidden rounded-2xl"
                    style={{ backgroundImage: `url(${events2})` }}
                > 
                 {/* Yashil parda */}
                    <div className="absolute bottom-0 left-0 w-full h-full bg-green-900 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-80 group-hover:translate-y-0 translate-y-full"></div>

                 <div className='bg-[#10370fb6] p-[20px] bottom-0 absolute w-full rounded-b-2xl'>
                    <p className='flex items-center text-white font-bold text-2xl gap-1'><IoCalendarOutline/> 27-fevral</p>
                    <p className='text-white font-bold text-xl'>Teatr- tarbiya maskani</p>
                 </div>
                </div>
                </a>

                {/* 3 */}
                <a href="#">
                <div
                    className="h-[400px] bg-cover bg-center mt-[50px] relative group overflow-hidden rounded-2xl"
                    style={{ backgroundImage: `url(${events3})` }}
                > 
                 {/* Yashil parda */}
                    <div className="absolute bottom-0 left-0 w-full h-full bg-green-900 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-80 group-hover:translate-y-0 translate-y-full"></div>

                 <div className='bg-[#10370fb6] p-[20px] bottom-0 absolute w-full rounded-b-2xl'>
                    <p className='flex items-center text-white font-bold text-2xl gap-1'><IoCalendarOutline/> 22-fevral</p>
                    <p className='text-white font-bold text-xl'>Hashar- elga yarashar</p>
                 </div>
                </div>
                </a>

                {/* 4 */}
                <a href="#">
                <div
                    className="h-[400px] bg-cover bg-center mt-[50px] relative group overflow-hidden rounded-2xl"
                    style={{ backgroundImage: `url(${events4})` }}
                > 
                 {/* Yashil parda */}
                    <div className="absolute bottom-0 left-0 w-full h-full bg-green-900 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-80 group-hover:translate-y-0 translate-y-full"></div>

                 <div className='bg-[#10370fb6] p-[20px] bottom-0 absolute w-full rounded-b-2xl'>
                    <p className='flex items-center text-white font-bold text-2xl gap-1'><IoCalendarOutline/> 20-fevral</p>
                    <p className='text-white font-bold text-xl'>NIU tasarrufidagi TTJ da yashovchi talabalar uchun osh tarqatildi </p>
                 </div>
                </div>
                </a>

                {/* 5 */}
                <a href="#">
                <div
                    className="h-[400px] bg-cover bg-center mt-[50px] relative group overflow-hidden rounded-2xl"
                    style={{ backgroundImage: `url(${events5})` }}
                > 
                 {/* Yashil parda */}
                    <div className="absolute bottom-0 left-0 w-full h-full bg-green-900 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-80 group-hover:translate-y-0 translate-y-full"></div>

                 <div className='bg-[#10370fb6] p-[20px] bottom-0 absolute w-full rounded-b-2xl'>
                    <p className='flex items-center text-white font-bold text-2xl gap-1'><IoCalendarOutline/> 14-fevral</p>
                    <p className='text-white font-bold text-xl'>NIU tashabbusi bilan A.Navoiy merosi haqida amaliy anjuman utkazildi </p>
                 </div>
                </div>
                </a>

                {/* 6 */}
                <a href="#">
                <div
                    className="h-[400px] bg-cover bg-center mt-[50px] relative group overflow-hidden rounded-2xl"
                    style={{ backgroundImage: `url(${events6})` }}
                > 
                 {/* Yashil parda */}
                    <div className="absolute bottom-0 left-0 w-full h-full bg-green-900 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-80 group-hover:translate-y-0 translate-y-full"></div>

                 <div className='bg-[#10370fb6] p-[20px] bottom-0 absolute w-full rounded-b-2xl'>
                    <p className='flex items-center text-white font-bold text-2xl gap-1'><IoCalendarOutline/> 14-fevral</p>
                    <p className='text-white font-bold text-xl'>NIU da Respublika ilmiy-amaliy anjumani !</p>
                 </div>
                </div>
                </a>
               
            </div> 
                <button 
                  className='bg-[#028910] flex items-center gap-2 px-[30px] mt-10 py-[10px] rounded-4xl text-white text- [20px] font-bold cursor-pointer hover:scale-110 transition-all'>
                  <a href="https://niuedu.uz/uz/tadbirlar/1">Barcha Tadbirlar </a>
                  <AiOutlineArrowRight/>  
                </button>

        </div>
    </>
  )
}

export default Events



