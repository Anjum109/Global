import React from 'react'
import logo from '../../assets/Logo/gelato_logo_black.svg'
import { FaHeadphones } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
    return (
        <div className='border border-b-2 border-gray-200'>
            <div className='mx-10 lg:mx-[130px] py-5 flex justify-between items-center'>
                <div className='lg:hidden text-[24px]'>
                    <IoMenu />
                </div>
                <div className=''>
                    <img src={logo} alt='logo' className='w-[120px]' />
                </div>
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
        </div >
    )
}
