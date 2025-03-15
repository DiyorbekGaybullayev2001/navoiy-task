import React from 'react'
import hemis from '../../assets/images/hemis-right.png'


function Cabinet() {
  return (
    <>
        <div className='w-full bg-gray-200 h-[400px]'>
            <div className='container m-auto pt-[50px]'>
                <div className='bg-white shadow-md md:w-[80%] flex h-[300px] m-auto rounded-4xl p-[10px] relative'>

                    <div className='p-[10px] '>
                        <h1 className='text-[40px] font-serif mt-2'>Shaxsiy kabinet</h1>
                        <p className='text-[25px] font-serif mt-2'>Hemis tizimiga oson kirib, o'z kabinetingizni kuzatib boring!</p>
                        <button className='bg-[#028910] px-[30px] mt-10 py-[10px] rounded-4xl text-white text-[20px] font-bold cursor-pointer hover:scale-110 transition-all'><a href="#">Hemisga kirish</a></button>
                    </div>

                    <div className='absolute  -top-[70px] right-0'>
                        <img src={hemis} alt="img" width={'370px'} className=''/>
                    </div>

                </div>
            </div>
        </div>
        
    </>
  )
}

export default Cabinet