import React from 'react'

export default function Connect() {
    return (
        <div className=' lg:px-[120px] px-5 py-1  w-full flex flex-col lg:flex-row items-center'>
            {/* leftside  */}
            <div className='lg:w-[50%] w-full'>
                <img src='https://a.storyblok.com/f/165154/1080x1080/6120ad9f16/helatoconnect-lp-hero-gif-updated_2-compressed.gif/m/' srcSet=' https://a.storyblok.com/f/165154/1080x1080/6120ad9f16/helatoconnect-lp-hero-gif-updated_2-compressed.gif/m/ 1080w, https://a.storyblok.com/f/165154/1080x1080/6120ad9f16/helatoconnect-lp-hero-gif-updated_2-compressed.gif/m/ 1200w, https://a.storyblok.com/f/165154/1080x1080/6120ad9f16/helatoconnect-lp-hero-gif-updated_2-compressed.gif/m/ 1920w, https://a.storyblok.com/f/165154/1080x1080/6120ad9f16/helatoconnect-lp-hero-gif-updated_2-compressed.gif/m/ 2048w, https://a.storyblok.com/f/165154/1080x1080/6120ad9f16/helatoconnect-lp-hero-gif-updated_2-compressed.gif/m/ 3840w,' alt='connect' className='w-full' />
            </div>
            {/* rightside  */}
            <div className='lg:w-[50%] lg:px-[60px] px-5 '>
                <p className='text-[18px] gelato-regular text-[#212121]' >For print producers</p>
                <h1 className='text-[2rem] lg:text-[60px] gelato-medium text-[#212121] leading-[60px] lg:mt-3'>GelatoConnect</h1>
                <p className='text-[24px] gelato-regular text-[#212121] mt-2 lg:mt-8 leading-[35px] ' >Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry</p>
                <button className='bg-black text-[16px] text-white rounded-full py-1 px-5 mt-7'>Learn more</button>
            </div>

        </div>
    )
}
