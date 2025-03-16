import React from 'react';
import bg from '../../assets/images/home_bg2.png';

function Home() {
  return (
    <div 
      className=" w-full h-[650px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className='w-full h-full bg-[#13651895] pt-[100px]'>
        <div className='container m-auto  h-[500px] p-[10px]'>
            <div className='mt-[100px]'>
                <h1 className='text-white text-3xl sm:text-[50px] font-bold font-serif'>Navoiy innovatsiyalar <br /> universitetiga xush kelibsiz</h1><br />
                <p className='text-[#ffffff] sm:text-[25px] font-serif'>Yangi olam, yangi jamiyatda ilg'or texnologiyalar <br /> innovatsiyalar asosida yetuk mutaxassislarni <br /> tayyorlash maskani.</p>
                <div className='mt-[10px] gap-5 flex  sm:flex'>
                    <button className='bg-[#028910] px-[20px] sm:px-[30px] py-[10px] sm:rounded-4xl rounded-xl text-white sm:text-[20px] font-bold cursor-pointer hover:scale-110 transition-all' ><a href="#">Hujjat topshirish</a></button>
                    <button className='bg-white px-[20px] sm:px-[30px] py-[10px] sm:rounded-4xl rounded-xl text-black sm:text-[20px] font-bold cursor-pointer hover:scale-110 transition-all'><a href="#">Shaxsiy kabinet</a></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
