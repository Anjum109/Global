import React from 'react'
import img from '../../assets/images/a.storyblok.webp'
import shopify from '../../assets/Logo/shopify_monotone_black.svg'
import { FaStar } from "react-icons/fa";
export default function Banner() {
    return (
        <div className='bg-[#faf6ef] lg:bg-white px-10 lg:px-[160px] py-5  w-full'>
            <div className='flex flex-col-reverse lg:flex-row justify-between items-center w-full'>
                {/* leftside  */}
                <div className='lg:w-[50%]'>
                    <div>
                        <p className='gelato-medium text-[2rem] lg:text-[#212121] lg:text-[60px] font-medium leading-[40px] lg:leading-[70px] mt-5 lg:mt-0'>Print on demand for your ecommerce business</p>
                        <p className='gelato-regular text-[#212121] text-[1.5rem] lg:text-[24px] font-normal mt-5 '>Sign up for free and only pay for what you sell</p>
                        <p className=' text-[#212121] text-[16px]  me-5 gelato-light mt-2 '>Turn your passion into profit with the world's largest <span className=' underline hover:text-gray-400'>print on demand</span> network.</p>
                    </div>
                    <div className='my-3 flex flex-col lg:flex-row gap-5 lg:items-center w-[200px] lg:w-full mt-8 lg:mt-5'>
                        <button className='bg-black text-[16px] text-white rounded-full py-1 lg:px-5'>Get started for free</button>
                        <button className='text-[16px] border-2 rounded-full py-1 px-5'>See our products</button>
                    </div>
                    <div className='w-[200px] mt-10 lg:mt-5'>
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
                <div className='lg:w-[50%]'>
                    <img src='https://a.storyblok.com/f/165154/1105x958/e9c9ddb8d6/01_hp_top-banner_white-version-1.png/m/' alt='img' className='w-full' />
                </div>
            </div>

        </div>
    )
}
