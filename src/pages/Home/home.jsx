import React from 'react';
import bg from '../../assets/images/home_bg.png';

function Home() {
  return (
    <div 
      className=" w-full h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className='w-full h-full bg-[#13651954] pt-[100px]'>
        <div className='container m-auto  h-[500px] p-[10px]'>
            <div className='mt-[100px]'>
                <h1 className='text-white text-[50px] font-bold font-serif'>Navoiy innovatsiyalar <br /> universitetiga xush kelibsiz</h1><br />
                <p className='text-[#e4e4e4] text-[25px] font-serif'>Yangi olam, yangi jamiyatda ilg'or texnologiyalar <br /> innovatsiyalar asosida yetuk mutaxassislarni <br /> tayyorlash maskani.</p>
                <div className='mt-[10px] gap-5 flex'>
                    <button className='bg-[#028910] px-[30px] py-[10px] rounded-4xl text-white text-[20px] font-bold cursor-pointer hover:scale-110 transition-all' ><a href="#">Hujjat topshirish</a></button>
                    <button className='bg-white px-[30px] py-[10px] rounded-4xl text-black text-[20px] font-bold cursor-pointer hover:scale-110 transition-all'><a href="#">Shaxsiy kabinet</a></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
