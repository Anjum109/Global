import React from 'react'
import { FaAngleDown } from "react-icons/fa";

export default function Navbar2nd() {
    return (
        <div className='border border-b-2 border-gray-200'>
            <div className='mx-[130px]  flex  items-center'>
                <button className='flex gap-2 items-center text-[14px] cursor-pointer  px-5  py-3 h-full hover:bg-gray-100'>
                    <p className='font-medium font-gelato'>Product</p>
                    <FaAngleDown />
                </button>
                <button className='flex gap-2 items-center text-[14px] cursor-pointer  px-5  py-3 h-full hover:bg-gray-100'>
                    <p className='font-medium font-gelato'>Start Selling</p>
                    <FaAngleDown />
                </button>
                <button className='flex gap-2 items-center text-[14px] cursor-pointer  px-5  py-3 h-full hover:bg-gray-100'>
                    <p className='font-medium font-gelato'>Tools and apps</p>
                    <FaAngleDown />
                </button>
                <button className='flex gap-2 items-center text-[14px] cursor-pointer  px-5  py-3 h-full hover:bg-gray-100'>
                    <p className='font-medium font-gelato'>Pricing</p>
                    <FaAngleDown />
                </button>
                <button className='flex gap-2 items-center text-[14px] cursor-pointer  px-5  py-3 h-full hover:bg-gray-100'>
                    <p className='font-medium font-gelato'>Resources</p>
                    <FaAngleDown />
                </button>
                <button className='flex gap-2 items-center text-[14px] cursor-pointer  px-5  py-3 h-full hover:bg-gray-100'>
                    <p className='font-medium font-gelato'>Pro sellers</p>

                </button>
                <button className='flex gap-2 items-center text-[14px] cursor-pointer  px-5  py-3 h-full hover:bg-gray-100'>
                    <p className='font-medium font-gelato'>Gelato Connect</p>
                    <FaAngleDown />
                </button>
            </div>
        </div>
    )
}
