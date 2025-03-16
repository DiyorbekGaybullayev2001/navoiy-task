import React from 'react'
import bgimg from '../../assets/images/servicesbg.png'
import { FaRobot } from "react-icons/fa";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { IoPeopleSharp } from "react-icons/io5";
import { GiOpenBook } from "react-icons/gi";
import { MdEmail } from "react-icons/md";


function Services() {
  return (
    <>
    <div 
      className=" w-full h-[100%] bg-cover bg-center mt-[50px]"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className='w-full h-full bg-[#154918a3] pt-[50px] p-[20px] '>
        <div className='container m-auto'>
            <div className='text-white font-serif'>
                <h1 className='text-3xl md:text-[50px] font-bold'>Interaktiv xizmatlar</h1>
                <p className='sm:text-[25px]'>Talabalarga qulaylik yaratadigan raqamli xizmatlar to‘plami</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-10 '>
                {/* 1 */}
                <a href="#">
                    <div className='bg-white rounded-2xl shadow-sm transition-all p-[15px] hover:text-[#028910] mt-[20px]'>
                        <FaRobot className='text-[45px] text-[#028910]'/>
                        <h1 className='font-serif font-bold text-2xl mt-2'>NIU hemis bot</h1>
                        <p className='text-lg font-sans'>NIU hemis bot</p>
                    </div>
                </a>
                {/* 2 */}
                <a href="#">
                    <div className='bg-white rounded-2xl shadow-sm transition-all p-[15px] hover:text-[#028910] mt-[20px]'>
                        <HiClipboardDocumentList className='text-[45px] text-[#028910]'/>
                        <h1 className='font-serif font-bold text-2xl mt-2'>Imtihon topshirish</h1>
                        <p className='text-lg font-sans'>Imtihon topshirish tizimi</p>
                    </div>
                </a>
                {/* 3 */}
                <a href="#">
                    <div className='bg-white rounded-2xl shadow-sm transition-all p-[15px] hover:text-[#028910] mt-[20px]'>
                        <IoPeopleSharp className='text-[45px] text-[#028910]'/>
                        <h1 className='font-serif font-bold text-2xl mt-2'>Elektron navbat</h1>
                        <p className='text-lg font-sans'>Elektron navbat</p>
                    </div>
                </a>
                {/* 4 */}
                <a href="#">
                    <div className='bg-white rounded-2xl shadow-sm transition-all p-[15px] hover:text-[#028910] mt-[20px]'>
                        <GiOpenBook className='text-[45px] text-[#028910]'/>
                        <h1 className='font-serif font-bold text-2xl mt-2'>Elektron kutubxona</h1>
                        <p className='text-lg font-sans'>Elektron kitoblar</p>
                    </div>
                </a>
                {/* 5 */}
                <a href="#">
                    <div className='bg-white rounded-2xl shadow-sm transition-all p-[15px] hover:text-[#028910] mt-[20px]'>
                        <MdEmail className='text-[45px] text-[#028910]'/>
                        <h1 className='font-serif font-bold text-2xl mt-2'>Korporativ elektron pochta</h1>
                        <p className='text-lg font-sans'>Korporativ elektron pochta</p>
                    </div>
                </a>
                {/* 6 */}
                <a href="#">
                    <div className='bg-white rounded-2xl shadow-sm transition-all p-[15px] hover:text-[#028910] mt-[20px]'>
                        <FaRobot className='text-[45px] text-[#028910]'/>
                        <h1 className='font-serif font-bold text-2xl mt-2'>NIU hemis bot</h1>
                        <p className='text-lg font-sans'>NIU hemis bot</p>
                    </div>
                </a>
                

            </div>

            


        </div>
      </div>
    </div>
    <br /><br /><br />
    </>
  )
}

export default Services