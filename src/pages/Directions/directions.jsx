import React from 'react'
import bgimg from '../../assets/images/direktions.png'
import { MdOutlineSettingsApplications } from "react-icons/md";

const directions = [
    { title: "Maktabgacha ta'lim" },
    { title: "Turizm (Faoliyat yo‘nalishlari bo‘yicha)" },
    { title: "Iqtisodiyot (tarmoqlar va sohalar bo‘yicha)" },
    { title: "Axborot tizimlari va texnologiyalari (tarmoqlar va sohalar bo‘yicha)" },
    { title: "Filiolagiya va tillarni o'qitish (Uzbek tili) " },
    { title: "Filiolagiya va tillarni o'qitish (Ingliz tili) " },
    { title: "Filiolagiya va tillarni o'qitish (Rus tili) " },
    { title: "Pedagogika " },
    { title: "Boshlang'ich ta'lim"},
    { title: "Biologiya"},
    { title: "Tarix"},
    { title: "Kompyuter injiniringi"},
    { title: "Psixologiya"},
    { title: "Marketing"},
    { title: "Bugaltiriya hisobi"},
  ];

function Directions() {
  return (
    <>
    <div 
      className=" w-full h-[100%] bg-cover bg-center mt-[50px]"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className='w-full h-full bg-[#154918a3] pt-[50px] p-[20px] '>
        <div className='container m-auto'>
            <div className='text-white font-serif'>
                <h1 className='text-[50px]'>Yo'nalishlar</h1>
                <p className='text-[25px]'>Ushbu yo'nalishlarda sirtqi va kunduzgi shaklda professional ta'lim olishingiz mumkin.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-auto mt-[50px]'>
                {
                    directions.map((direction, index) => (
                        <div key={index} className='bg-white text-black p-6 mt-[30px] rounded-2xl shadow-lg flex flex-col items-center relative hover:text-green-700'>
                            <div className="absolute -top-6 bg-green-600 p-3 rounded-lg shadow-md">
                                <span className="text-white text-4xl">
                                    <MdOutlineSettingsApplications/>
                                </span>
                            </div>
                            <p className="text-center text-xl font-semibold mt-8 hover:text-green-500">
                                {direction.title}
                            </p>
                        </div>
                    ))
                }
            </div>


        </div>
      </div>
    </div>
    <br /><br /><br />
    </>
  )
}

export default Directions