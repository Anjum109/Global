import React, { useState } from 'react';
import logo from '../../assets/Logo/gelato_logo_black.svg';
import { FaHeadphones } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


export default function Navbar() {
    // State to toggle sidebar visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='border border-b-2 border-gray-200'>
            <div className='mx-10 lg:mx-[130px] py-5 flex justify-between items-center'>
                {/* Hamburger Menu Icon */}
                <div className='lg:hidden text-[24px]' onClick={toggleSidebar}>
                    <IoMenu />
                </div>

                {/* Logo */}
                <div className=''>
                    <img src={logo} alt='logo' className='w-[120px]' />
                </div>

                {/* Buttons for larger screens */}
                <div className='flex items-center gap-2'>
                    <div className='hidden lg:block '>
                        <div className='lg:flex items-center gap-2'>
                            <button className='flex gap-2 items-center text-[14px] cursor-pointer hover:bg-gray-200 px-3 rounded-full py-1'>
                                <FaHeadphones />
                                <p className='font-medium font-gelato'>Contact Us</p>
                            </button>
                            <button className='flex gap-2 items-center text-[14px] cursor-pointer hover:bg-gray-200 px-3 rounded-full py-1'>
                                <MdLanguage />
                                <p className='font-medium font-gelato'>IN / EURO</p>
                                <FaAngleDown />
                            </button>
                            <button className='flex gap-2 items-center text-[14px] cursor-pointer hover:bg-gray-200 px-3 rounded-full py-1'>
                                <FaCartShopping />
                                <p className='font-medium font-gelato'>Cart</p>
                            </button>
                            <button className='flex gap-2 items-center text-[14px] cursor-pointer hover:bg-gray-200 px-3 rounded-full py-1'>
                                <IoMdPerson />
                                <p className='font-medium font-gelato'>SignIn</p>
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className='font-medium font-gelato text-[14px] text-white bg-black px-4 py-1 rounded-full hover:text-gray-400 cursor-pointer' >Sign up for free</p>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 w-[350px] h-full bg-white shadow-lg z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className='p-5 flex justify-between items-center'>
                    <IoMdClose className='text-[24px] cursor-pointer' onClick={toggleSidebar} />
                    <div>
                        <button className='flex gap-2 items-center text-[14px] cursor-pointer hover:bg-gray-200 px-3 rounded-full py-1'>
                            <MdLanguage />
                            <p className='font-medium font-gelato'>IN / EURO</p>
                            <FaAngleDown />
                        </button>
                    </div>
                    <div className='h-[20px] w-[1px] bg-gray-400' />
                    <div className='flex items-center gap-2'>
                        <FaShoppingCart />
                        <p className='font-medium font-gelato'>Cart</p>
                    </div>
                </div>
                <div className='w-full  border-gray-[300] border-[1px]' />
                <div className='flex justify-between items-center my-5 px-5'>
                    <button className='flex gap-2 items-center text-[14px] cursor-pointer hover:bg-gray-200 px-3 rounded-full py-1'>
                        <IoMdPerson />
                        <p className='font-medium font-gelato'>SignIn</p>
                    </button>
                    <div className='h-[20px] w-[1px] bg-gray-400' />
                    <button>
                        <p className='font-medium font-gelato text-[14px] text-white bg-black px-4 py-1 rounded-full hover:text-gray-400 cursor-pointer' >Sign up for free</p>
                    </button>
                </div>
                <div className='w-full  border-gray-[300] border-[1px] ' />
                <div className='w-full  flex flex-col mt-5'>
                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                        Products
                        <span><IoIosArrowForward /></span>
                    </button>
                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                        Start Selling
                        <span><IoIosArrowForward /></span>
                    </button>
                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                        Tools & Apps
                        <span><IoIosArrowForward /></span>
                    </button>
                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                        Pricing
                        <span><IoIosArrowForward /></span>
                    </button>
                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                        Resources
                        <span><IoIosArrowForward /></span>
                    </button>
                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                        Pro sellers
                        <span><IoIosArrowForward /></span>
                    </button>
                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                        Gelato Connect
                        <span><IoIosArrowForward /></span>
                    </button>

                </div>
            </div>
        </div>
    );
}
