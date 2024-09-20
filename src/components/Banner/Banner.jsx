import React from 'react'
import img from '../../assets/images/a.storyblok.webp'
import shopify from '../../assets/Logo/shopify_monotone_black.svg'
import { FaStar } from "react-icons/fa";
export default function Banner() {
    return (
        <div className='px-[200px] py-5  w-full'>
            <div className='flex justify-between items-center w-full'>
                {/* leftside  */}
                <div className='w-[50%]'>
                    <div>
                        <p className='gelato-medium text-[#212121] text-[60px] font-medium leading-[70px]'>Print on demand for your ecommerce business</p>
                        <p className='gelato-regular text-[#212121] text-[24px] font-normal '>Sign up for free and only pay for what you sell</p>
                        <p className=' text-[#212121] text-[16px]  me-5 gelato-light'>Turn your passion into profit with the world's largest <span className=' underline hover:text-gray-400'>print on demand</span> network.</p>
                    </div>
                    <div className='my-3 flex gap-5 items-center'>
                        <button className='bg-black text-[16px] text-white rounded-full py-1 px-5'>Get started for free</button>
                        <button className='text-[16px] border-2 rounded-full py-1 px-5'>See our products</button>
                    </div>
                    <div className='w-[200px]'>
                        <img src={shopify} alt='shopify' className='w-[150px]' />
                        <div className=''>
                            <div className='hover-container'>
                                <button className='text-[#20c997] flex items-center gap-2 text-[20px] my-3'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </button>
                                <div className='hover:text-gray-400 text-[#212121]'>
                                    <button className='gelato-light text-[16px]  '>
                                        4.8 / 5
                                    </button>
                                    <button className='gelato-light text-[16px]  '>
                                        based on 910 reviews
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* rightside */}
                <div className='w-[50%]'>
                    <img src='https://a.storyblok.com/f/165154/1105x958/e9c9ddb8d6/01_hp_top-banner_white-version-1.png/m/' alt='img' className='w-full' />
                </div>
            </div>

        </div>
    )
}
