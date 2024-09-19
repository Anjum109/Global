import React from 'react'
import img from '../../assets/images/a.storyblok.webp'

export default function Banner() {
    return (
        <div className='px-[200px] py-5  w-full'>
            <div className='flex justify-between items-center w-full'>
                {/* leftside  */}
                <div className='w-[50%]'>
                    <p className=' text-[#212121] text-[60px] font-medium font-gelato'>Print on demand for your ecommerce business</p>
                    <p className=' text-[#212121] text-[24px] font-normal font-gelato'>Sign up for free and only pay for what you sell</p>
                    <p className=' text-[#212121] text-[16px] font-light me-5 font-gelato'>Turn your passion into profit with the world's largest <span className=' underline hover:text-gray-400'>print on demand</span> network.</p>
                </div>
                {/* rightside */}
                <div className='w-[50%]'>
                    <img src={img} alt='img' />
                </div>
            </div>

        </div>
    )
}
