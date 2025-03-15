import React from 'react'
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlineArrowRight } from "react-icons/ai";
import news1 from '../../assets/images/news1.png'
import news2 from '../../assets/images/news2.png'
import news3 from '../../assets/images/news3.png'
import news4 from '../../assets/images/news4.png'
import news5 from '../../assets/images/news5.png'
import news6 from '../../assets/images/news6.png'

function News() {
  return (
    <>
        <div className='container m-auto p-[5px]'>
            <div>
                <h1 className='text-[#028910] text-[40px] font-serif'>Yangiliklar</h1>
                <p className='text-[23px] font-serif mt-[10px]'>Universitet hayotida sodir bo'layotgan yangiliklar va xabarlar.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                
                {/* 1 */}
                <a href="#">
                <div
                    className="h-[400px] bg-cover bg-center mt-[50px] relative group overflow-hidden rounded-2xl"
                    style={{ backgroundImage: `url(${news1})` }}
                > 
                 {/* Yashil parda */}
                    <div className="absolute bottom-0 left-0 w-full h-full bg-green-900 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-80 group-hover:translate-y-0 translate-y-full"></div>

                 <div className='bg-[#10370fb6] p-[20px] bottom-0 absolute w-full rounded-b-2xl'>
                    <p className='flex items-center text-white font-bold text-2xl gap-1'><IoCalendarOutline/> 14.03.2025</p>
                    <p className='text-white font-bold text-xl'>Matematikaning chuqur sirlariga sayohat</p>
                 </div>
                </div>
                </a>

                {/* 2 */}
                <a href="#">
                <div
                    className="h-[400px] bg-cover bg-center mt-[50px] relative group overflow-hidden rounded-2xl"
                    style={{ backgroundImage: `url(${news2})` }}
                > 
                 {/* Yashil parda */}
                    <div className="absolute bottom-0 left-0 w-full h-full bg-green-900 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-80 group-hover:translate-y-0 translate-y-full"></div>

                 <div className='bg-[#10370fb6] p-[20px] bottom-0 absolute w-full rounded-b-2xl'>
                    <p className='flex items-center text-white font-bold text-2xl gap-1'><IoCalendarOutline/> 14.03.2025</p>
                    <p className='text-white font-bold text-xl'>Tabiatga mehr- kelajakga sarmoya</p>
                 </div>
                </div>
                </a>

                {/* 3 */}
                <a href="#">
                <div
                    className="h-[400px] bg-cover bg-center mt-[50px] relative group overflow-hidden rounded-2xl"
                    style={{ backgroundImage: `url(${news3})` }}
                > 
                 {/* Yashil parda */}
                    <div className="absolute bottom-0 left-0 w-full h-full bg-green-900 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-80 group-hover:translate-y-0 translate-y-full"></div>

                 <div className='bg-[#10370fb6] p-[20px] bottom-0 absolute w-full rounded-b-2xl'>
                    <p className='flex items-center text-white font-bold text-2xl gap-1'><IoCalendarOutline/> 14.03.2025</p>
                    <p className='text-white font-bold text-xl'>Geometriya va zamonaviy ta'lim usullari</p>
                 </div>
                </div>
                </a>

                {/* 4 */}
                <a href="#">
                <div
                    className="h-[400px] bg-cover bg-center mt-[50px] relative group overflow-hidden rounded-2xl"
                    style={{ backgroundImage: `url(${news4})` }}
                > 
                 {/* Yashil parda */}
                    <div className="absolute bottom-0 left-0 w-full h-full bg-green-900 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-80 group-hover:translate-y-0 translate-y-full"></div>

                 <div className='bg-[#10370fb6] p-[20px] bottom-0 absolute w-full rounded-b-2xl'>
                    <p className='flex items-center text-white font-bold text-2xl gap-1'><IoCalendarOutline/> 14.03.2025</p>
                    <p className='text-white font-bold text-xl'>Tashabbus va ishbilarmonlik: faol talaba-qizlar "Baraka Non Navoiy" rahbari bilan uchrashuvda </p>
                 </div>
                </div>
                </a>

                {/* 5 */}
                <a href="#">
                <div
                    className="h-[400px] bg-cover bg-center mt-[50px] relative group overflow-hidden rounded-2xl"
                    style={{ backgroundImage: `url(${news5})` }}
                > 
                 {/* Yashil parda */}
                    <div className="absolute bottom-0 left-0 w-full h-full bg-green-900 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-80 group-hover:translate-y-0 translate-y-full"></div>

                 <div className='bg-[#10370fb6] p-[20px] bottom-0 absolute w-full rounded-b-2xl'>
                    <p className='flex items-center text-white font-bold text-2xl gap-1'><IoCalendarOutline/> 14.03.2025</p>
                    <p className='text-white font-bold text-xl'>Pedagog xodimlar uchun stressga barqarorlik bo'yicha trening </p>
                 </div>
                </div>
                </a>

                {/* 6 */}
                <a href="#">
                <div
                    className="h-[400px] bg-cover bg-center mt-[50px] relative group overflow-hidden rounded-2xl"
                    style={{ backgroundImage: `url(${news6})` }}
                > 
                 {/* Yashil parda */}
                    <div className="absolute bottom-0 left-0 w-full h-full bg-green-900 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-80 group-hover:translate-y-0 translate-y-full"></div>

                 <div className='bg-[#10370fb6] p-[20px] bottom-0 absolute w-full rounded-b-2xl'>
                    <p className='flex items-center text-white font-bold text-2xl gap-1'><IoCalendarOutline/> 14.03.2025</p>
                    <p className='text-white font-bold text-xl'>Ingliz madaniyati ta'lim yondashuvi: "Mamlakatshunoslik" fanidan noan'anaviy ochiq seminar</p>
                 </div>
                </div>
                </a>
               
            </div> 
                <button 
                  className='bg-[#028910] flex items-center gap-2 px-[30px] mt-10 py-[10px] rounded-4xl text-white text- [20px] font-bold cursor-pointer hover:scale-110 transition-all'>
                  <a href="https://niuedu.uz/uz/yangiliklar/1">Barcha yangiliklar </a>
                  <AiOutlineArrowRight/>  
                </button>

        </div>
    </>
  )
}

export default News





// import React from "react";
// import news1 from "../../assets/images/news1.png";
// import { IoCalendarOutline } from "react-icons/io5";

// function News() {
//   return (
//     <div className="container m-auto p-[5px]">
//       <div>
//         <h1 className="text-[#028910] text-[40px] font-serif">Yangiliklar</h1>
//         <p className="text-[23px] font-serif mt-[10px]">
//           Universitet hayotida sodir bo'layotgan yangiliklar va xabarlar.
//         </p>
//       </div>

//       <div className="grid grid-cols-4">
//         <div
//           className="h-[400px] bg-cover bg-center mt-[50px] relative rounded-2xl group overflow-hidden"
//           style={{ backgroundImage: `url(${news1})` }}
//         >
//           <div className="absolute bottom-0 w-full bg-[#10370fd3] p-[20px] rounded-b-2xl ">
//             <p className="flex items-center text-white font-bold text-2xl gap-1">
//               <IoCalendarOutline /> 14.03.2025
//             </p>
//             <p className="text-white font-bold text-xl">
//               Matematikaning chuqur sirlariga sayohat
//             </p>
//           </div>

//           {/* Hover effekti uchun yashil parda */}
//           <div className="absolute inset-0 bg-green-700 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-40"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default News;
