import React from 'react'
import '../../App.css'
import { BsExclamationCircle } from "react-icons/bs";

export default function TopNav() {
    return (
        <div>
            <div className='p-2 bg-black w-full flex justify-center text-white items-center gap-2'>
                <p className='text-[16px] text-white underline font-gelato font-light'>FREE SHIPPING for orders over $300. Order today</p>
                <div className='hidden lg:block'>
                    <BsExclamationCircle />
                </div>
            </div>
        </div>
    )
}
