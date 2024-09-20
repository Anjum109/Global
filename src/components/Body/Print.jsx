import React from 'react'

export default function Print() {
    return (
        <div className='bg-[#faf6ef] px-[120px] py-1  w-full flex items-center'>
            {/* leftside  */}
            <div className='w-[50%] px-[50px]'>
                <p className='text-[18px] gelato-regular text-[#212121]' >For print on demand sellers</p>
                <h1 className='text-[60px] gelato-medium text-[#212121] leading-[60px] mt-3'>Accelerate business growth with innovative design tools and apps</h1>
                <p className='text-[24px] gelato-regular text-[#212121] mt-6 leading-[30px] ' >See how our cutting-edge solutions can help you reach new customers and maximize your profits.</p>
                <button className='bg-black text-[16px] text-white rounded-full py-1 px-5 mt-7'>Get started </button>
            </div>
            {/* rightside  */}
            <div className='w-[50%]'>
                <img className='w-full' src='https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/' srcSet=' https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/ 1080w, https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/ 1200w, https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/ 1920w, https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/ 2048w, https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/ 3840w,' alt='hero' />
            </div>
        </div>
    )
}
