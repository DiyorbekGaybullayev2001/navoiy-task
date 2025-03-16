import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";


function Search() {
    const [isOpen, setOpen] = useState(false)
    // Tugmani bosganda menyuni ochish/yopish
    const toggleSearch = () => {
        setOpen(!isOpen);
    };
  return (
    <div className='relative'>
        <button onClick={toggleSearch}>
            <IoSearch className='text-white h-[25px] w-[25px] cursor-pointer hover:text-amber-400 mt-2'/>
        </button>
        {
            isOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }} 
                    transition={{ duration: 0.3 }}
                    className="absolute top-10 -right-14 bg-white px-10 py-3 rounded-lg shadow-md " >
                        <input
                        type="text"
                        placeholder="Qidirish..."
                        className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                </motion.div>
            )
        }
    </div>
  )
}

export default Search




