import React from 'react'
import aboutimg from '../../assets/images/about.png'
import Marquee from "react-fast-marquee";

function About() {
  return (
    <>
        <div className='container m-auto '>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-[50px]'>
                <div className='p-[10px]'>  
                    <h1 className='text-[#028910] text-3xl  sm:text-[40px] font-bold font-serif'>Biz haqimizda</h1>
                    <p className='sm:text-[23px] font-serif mt-[10px]'>Biz zamonaviy oliy ta’lim muassasasi bo‘lib, xalqaro pedagoglar bilan sifatli ta’lim, kasb-hunar va xorijiy tillarni o‘rganish imkoniyatini taqdim etamiz. Talabalarimiz AQSH, Germaniya, Hindiston, Koreya kabi mamlakatlarda tahsil va ish imkoniyatlariga ega. Biz bilimli va raqobatbardosh liderlarni tayyorlaymiz.</p>
                </div>
                <div className='w-full p-[10px]'>
                    <img src={aboutimg} alt="about" className='h-[300px] sm:w-[70%] rounded-4xl m-auto'/>
                </div>
            </div>

            <div className='mt-[30px] p-[20px] w-[93%] '>
                <Marquee>
                    <div className='text-center font-bold text-2xl sm:text-3xl font-serif mx-[50px]'>
                        <p className='text-[#028910] mb-[10px] '>19</p>
                        <p>Yunalish</p>
                    </div>
                    <div className='text-center font-bold text-2xl sm:text-3xl font-serif mx-[50px]'>
                        <p className='text-[#028910]  mb-[10px]'>11413</p>
                        <p>Talaba</p>
                    </div>
                    <div className='text-center font-bold text-2xl sm:text-3xl font-serif mx-[50px]'>
                        <p className='text-[#028910]  mb-[10px]'>175</p>
                        <p>O'qtuvchi</p>
                    </div>
                    <div className='text-center font-bold text-2xl sm:text-3xl font-serif mx-[50px]'>
                        <p className='text-[#028910]  mb-[10px]'>5000</p>
                        <p>Bitiruvchi</p>
                    </div>
                    <div className='text-center font-bold text-2xl sm:text-3xl font-serif mx-[50px]'>
                        <p className='text-[#028910]  mb-[10px]'>4</p>
                        <p>Fakultet</p>
                    </div>
                    <div className='text-center font-bold text-2xl sm:text-3xl font-serif mx-[50px]'>
                        <p className='text-[#028910]  mb-[10px]'>19</p>
                        <p>Yunalish</p>
                    </div>
                    <div className='text-center font-bold text-2xl sm:text-3xl font-serif mx-[50px]'>
                        <p className='text-[#028910]  mb-[10px]'>11413</p>
                        <p>Talaba</p>
                    </div>
                    <div className='text-center font-bold text-2xl sm:text-3xl font-serif mx-[50px]'>
                        <p className='text-[#028910]  mb-[10px]'>175</p>
                        <p>O'qtuvchi</p>
                    </div>
                    <div className='text-center font-bold text-2xl sm:text-3xl font-serif mx-[50px]'>
                        <p className='text-[#028910]  mb-[10px]'>5000</p>
                        <p>Bitiruvchi</p>
                    </div>
                    <div className='text-center font-bold text-2xl sm:text-3xl font-serif mx-[50px]'>
                        <p className='text-[#028910]  mb-[10px]'>4</p>
                        <p>Fakultet</p>
                    </div>
                    
                </Marquee>
                
            </div>
        </div>
    </>
  )
}

export default About