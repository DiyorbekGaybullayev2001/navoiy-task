import React from 'react'
import bgimg from '../../assets/images/footer.png'
import FAQ from '../Faq/faq'
import logo from '../../../public/logo.png'
import { BsTelegram } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { PiPhoneFill } from "react-icons/pi";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <>
        <footer
          className=" w-full h-[100%] bg-cover bg-center mt-[50px]"
          style={{ backgroundImage: `url(${bgimg})` }} 
         >
                <div className='w-full h-full bg-[#1549188c] pt-[30px] p-[20px] '>
                    <div className='container m-auto'>
                        <FAQ/>
                        <br />
                    </div>
                    
                </div>
                        <span className='bg-white h-[1px] w-full block'></span>
                        
                    <div className='w-full h-full bg-[#09240ae7] pt-[20px] p-[20px] '>
                        <div className='container m-auto'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-[10px] gap-2'>
                                {/* 1 */}
                                <div className='p-[10px] items-center text-center'>
                                    <img src={logo} alt="" />
                                    <h1 className='text-white mt-[10px] text-3xl md:text-[40px] text-center' >Navoiy innovatsiyalar instituti</h1>
                                    
                                </div>

                                {/* 2 */}
                                <div className='text-white font-serif font-bold flex flex-col gap-3 p-[10px]'> 
                                    <h1 className='text-2xl md:text-4xl'>Sahifalar</h1>
                                    <a href="#" className='hover:text-amber-400 transition-all text-lg'>Biz haqimizda </a>
                                    <a href="#" className='hover:text-amber-400 transition-all text-lg'>Universitet yangiliklari</a>
                                    <a href="#" className='hover:text-amber-400 transition-all text-lg'>Tadbirlar</a>
                                    <a href="#" className='hover:text-amber-400 transition-all text-lg'>Elektron kutubxona</a>
                                    <a href="#" className='hover:text-amber-400 transition-all text-lg'>Litsinziya</a>
                                </div>

                                {/* 3 */}
                                <div className='text-white font-bold flex flex-col gap-3 p-[10px]'>
                                    <h1 className='text-2xl md:text-3xl'>Biz bilan bog'lanish</h1>
                                    <a href="tel:555000043" className='flex items-center gap-2 md:text-2xl'> <PiPhoneFill/> (55) 500 00 43 </a>
                                    <a href="mailto:info@niuedu.uz" className='flex items-center gap-2 md:text-2xl'> <MdMarkEmailUnread/> Email </a>
                                    <a href="#" className='flex items-center gap-2  md:text-2xl'> <FaLocationDot/> Navoiy viloyati Karmana tumani Toshkent ko'chasi 39-uy </a>
                                    <div className='flex text-4xl gap-3 text-center  text-white w-full  mt-[20px]'>
                                        <a href="https://t.me/niuedu_uz" className='hover:text-[#028910] transition-all'><BsTelegram/></a>
                                        <a href="https://www.instagram.com/niuedu.uz/" className='hover:text-[#028910] transition-all'><FaInstagramSquare/></a>
                                        <a href="https://www.facebook.com/profile.php?id=100092875050918" className='hover:text-[#028910] transition-all'><FaFacebook/></a>
                                        <a href="https://www.youtube.com/@niuedu_uz" className='hover:text-[#028910] transition-all'><SiYoutubemusic/></a>
                                        <a href="https://www.linkedin.com/company/navoi-innovation-university" className='hover:text-[#028910] transition-all'><FaLinkedin/></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
        </footer>
    </>
  )
}

export default Footer