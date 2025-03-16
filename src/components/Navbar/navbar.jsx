
import React, { useState } from 'react';
import logo from '../../../public/logo.png';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import Search from '../Search/search';
import { motion } from 'framer-motion';

function Navbar() {
    const [isAboutOpen, setAboutOpen] = useState(false);
    const [isStructureOpen, setStructureOpen] = useState(false);
    const [isContactOpen, setContactOpen] = useState(false);
    const [isMediaOpen, setMediaOpen] = useState(false);
    const [isAplicationOpen, setAplicationOpen] = useState(false);
    const [isLuangeOpen, setLuangeOpen] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const menuItems = [
        { title: "Biz Haqimizda", submenu: ["Biz Haqimizda", "Savol-Javoblar", "Manzil (Lokatsiya)", "Litsenziya", "Universitet Yangiliklari"] },
        { title: "Tuzilma", submenu: ["Rahbariyat", "Fakultetlar va Kafedralar", "Bo'lim xodimlari"] },
        { title: "Yashil Universitet" },
        { title: "Xalqaro Aloqalar", submenu: ["Xalqaro aloqalar bo'limi", "Hamkor universitet va tashkilotlar"] },
        { title: "Elektron Kutubxona" },
        { title: "Media", submenu: ["Videolar", "Rasmlar"] },
        { title: "Ariza", submenu: ["Imtihon topshirish", "Ariza topshirish"] }
    ];

    return (
        <div>
            <nav className='bg-[#018a0f] h-[80px] p-[5px] fixed z-99 w-full'>
                <div className='flex justify-between container m-auto items-center'>

                    <div>
                        <a href="/">
                            <img src={logo} alt="logo" width={'150px'} />
                        </a> 
                    </div>

                    <div className='lg:flex items-center hidden '>
                        <ul className='flex gap-10 items-center text-white font-serif text-lg'>
                            {/* Biz haqimizda  dropdown*/}
                            <li className='relative flex items-center gap-1 hover:text-amber-300' 
                                onMouseEnter={() => setAboutOpen(true)}
                                onMouseLeave={() => setAboutOpen(false)}
                            >
                              <a href="#">Biz haqimizda</a> <BsChevronDown />
                              {
                                    isAboutOpen && (
                                        <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.5 }}
                                            className='absolute top-full  left-0 bg-white text-black pt-[10px] shadow-lg rounded-md w-[300px]'>
                                             <li className='p-2 hover:bg-[#028910] hover:text-white '><a href="#">Savol javoblar</a></li>
                                             <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Manzil (Lokatsiya)</a></li>
                                             <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Litsenziya</a></li>
                                             <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Universitet yangiliklari</a></li>
                                        </motion.ul>
                                    )
                                }
                              </li>

                            {/* Tuzilma dropdown */}
                            <li 
                                className='relative flex items-center gap-1 hover:text-amber-300' 
                                onMouseEnter={() => setStructureOpen(true)} 
                                onMouseLeave={() => setStructureOpen(false)}
                            >
                                <a href="#">Tuzilma</a> <BsChevronDown />
                                {isStructureOpen && (
                                    <motion.ul
                                    initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.5 }}
                                    className='absolute top-full  left-0 bg-white text-black shadow-lg rounded-md w-[300px]'>
                                        <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Rahbariyat</a></li>
                                        <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Fakultetlar va Kafedralar</a></li>
                                        <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Bo'lim xodimlari</a></li>
                                        <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Bo'lim va markazlar</a></li>
                                        <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Barqaror rivojlanish maqsadlari</a></li>
                                        <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Universitet hujjatlari</a></li>
                                        <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Bitiruvchilar</a></li>
                                        <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Ta'lim yo'nalishlari</a></li>
                                    </motion.ul>
                                )}
                            </li>
                                {/* Yashil universitet */}
                            <li className='flex items-center gap-1 hover:text-amber-300'><a href="#">Yashil Universitet</a></li>

                            {/* Xalqaro aloqalar dropdown */}
                            <li 
                            onMouseEnter={() => setContactOpen(true)} 
                            onMouseLeave={() => setContactOpen(false)}
                            className='relative flex items-center gap-1 hover:text-amber-300'>
                                <a href="#">Xalqaro Aloqalar</a> <BsChevronDown />
                                {isContactOpen && (
                                    <motion.ul
                                    initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.5 }}
                                    className='absolute top-full  left-0 bg-white text-black shadow-lg rounded-md w-[400px]'>
                                        <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Xalqaro aloqalar bo'limi</a></li>
                                        <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Hamkor universitet va tashkilotlar</a></li>
                                        <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Xalqaro faoliyat</a></li>
                                        <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Xalqaro reyting</a></li>
                                        <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Xorijiy professorlar</a></li>
                                        <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Xalqaro stajirovka va malaka oshirish </a></li>
                                        <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Xalqaro akademik amaliy dasturlar </a></li>
                                    </motion.ul>
                                )}
                                </li>
                                    {/* Electiron kutubxona  */}
                            <li className='flex items-center gap-1 hover:text-amber-300'><a href="#">Elektron Kutubxona</a></li>
                                    {/* Media dropdown  */}
                            <li
                            onMouseEnter={() => setMediaOpen(true)} 
                            onMouseLeave={() => setMediaOpen(false)}
                            className='relative flex items-center gap-1 hover:text-amber-300'>
                                <a href="#">Media</a> <BsChevronDown />
                                {
                                    isMediaOpen && (
                                        <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.5 }}
                                            className='absolute top-full  left-0 bg-white text-black pt-[10px] shadow-lg rounded-md w-[200px]'>
                                             <li className='p-2 hover:bg-[#028910] hover:text-white '><a href="#">Videolar</a></li>
                                             <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Rasmlar</a></li>
                                        </motion.ul>
                                    )
                                }
                                </li>
                                {/* Ariza  */}
                                <li 
                            onMouseEnter={() => setAplicationOpen(true)} 
                            onMouseLeave={() => setAplicationOpen(false)}
                            className='relative flex items-center gap-1 hover:text-amber-300'>
                                <a href="#">Ariza</a> <BsChevronDown />
                                {
                                    isAplicationOpen && (
                                        <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.5 }}
                                            className='absolute top-full  left-0 bg-white text-black pt-[10px] shadow-lg rounded-md w-[300px]'>
                                             <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Imtihon topshirish</a></li>
                                             <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Ariza topshirish</a></li>
                                             <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Arizani tekshirish</a></li>
                                             <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Arizani to'lovi</a></li>
                                             <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Imtihon natijasi</a></li>
                                             <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">2 tomonlama shartnoma</a></li>
                                             <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">3 tomonlama shartnoma</a></li>
                                             <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Bo'sh ish o'rinlari</a></li>
                                             <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">Ishga ariza</a></li>
                                        </motion.ul>
                                    )
                                }
                                </li>
                        </ul>
                    </div>

                    <div className='hidden lg:flex items-center gap-3'>
                        <ul>
                        <li 
                            onMouseEnter={() => setLuangeOpen(true)} 
                            onMouseLeave={() => setLuangeOpen(false)}
                            className='relative flex items-center gap-1 hover:text-amber-300 text-white'>
                                <a href="#">UZB</a> <BsChevronDown />
                                {
                                    isLuangeOpen && (
                                        <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.5 }}
                                            className='absolute top-full  left-0 bg-white text-black pt-[10px] shadow-lg rounded-md '>
                                             <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">UZB</a></li>
                                             <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">RUS </a></li>
                                             <li className='p-2 hover:bg-[#028910] hover:text-white'><a href="#">ENG </a></li>
                                            
                                        </motion.ul>
                                    )
                                }
                                </li>
                        </ul>
                        <div>
                            <Search />
                        </div>
                    </div>

                    <div className='items-center flex gap-10'>
                        <Search/>
                        <FiMenu className='text-white text-4xl cursor-pointer lg:hidden' onClick={toggleMenu} />
                    </div>

                    {/* Sidebar Menu */}
                {isOpen && (
                  <motion.div 
                    initial={{ x: "100%" }} 
                    animate={{ x: 0 }} 
                    exit={{ x: "100%" }} 
                    transition={{ duration: 0.3 }}
                    className='fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 p-5 overflow-y-auto'
                >
                    <div className='flex justify-between items-center'>
                        {/* <h2 className='text-lg font-bold'>Menyu</h2> */}
                        <FiX className='text-3xl cursor-pointer' onClick={toggleMenu} />
                    </div>
                    
                    <ul className='mt-5'>
                        {menuItems.map((item, index) => (
                            <li key={index} className='border-b py-3'>
                                <div className='flex justify-between items-center cursor-pointer' onClick={() => item.submenu && toggleDropdown(index)}>
                                    <span className='text-lg font-medium'>{item.title}</span>
                                    {item.submenu && (openDropdown === index ? <BsChevronUp /> : <BsChevronDown />)}
                                </div>
                                {openDropdown === index && item.submenu && (
                                    <motion.ul 
                                        initial={{ opacity: 0, height: 0 }} 
                                        animate={{ opacity: 1, height: "auto" }} 
                                        exit={{ opacity: 0, height: 0 }} 
                                        transition={{ duration: 0.3 }}
                                        className='mt-2 pl-4 border-l'
                                    >
                                        {item.submenu.map((subItem, subIndex) => (
                                            <li key={subIndex} className='py-2 text-sm'>{subItem}</li>
                                        ))}
                                    </motion.ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}

                </div>
            </nav>
        </div>
    );
}

export default Navbar;











