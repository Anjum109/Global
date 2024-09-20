import React from 'react'
import img from '../../assets/images/2.webp'

export default function WhyCooseGelato() {
    return (
        <div className='px-[120px] py-5  w-full'>
            <h1 className='text-[#212529] text-[60px] text-center gelato-medium'>Why choose Gelato</h1>
            <div className='flex w-full'>
                {/* leftside  */}
                <div className='w-[50%]'>
                    <img src={img} alt='img' />
                </div>
                {/* rightside  */}
                <div className='w-[50%] ms-12 mt-3 flex flex-col gap-3 lg:pe-24'>
                    <div className=''>
                        <h1 className='text-[24px] gelato-regular text-[#212121]'>▻ World's largest print-on-demand network</h1>
                        <p className='text-[16px] gelato-light text-[#212121]'>140+ print partners in 32 countries. Gelato is a truly global service.</p>
                    </div>
                    <div>
                        <h1 className='text-[24px] gelato-regular text-[#212121]'>▻ Sell globally, produce locally</h1>
                        <p className='text-[16px] gelato-light text-[#212121]'>Your products are produced close to your customers, wherever they are.</p>
                    </div>
                    <div>
                        <h1 className='text-[24px] gelato-regular text-[#212121]'>▻ 100% free editing tools</h1>
                        <p className='text-[16px] gelato-light text-[#212121]'>Create your custom products using our suite of <span className=' underline'>free tools.</span></p>
                    </div>
                    <div>
                        <h1 className='text-[24px] gelato-regular text-[#212121]'>▻ 60+logistics partners</h1>
                        <p className='text-[16px] gelato-light text-[#212121]'>Our global network of logistics partners ensures your products are delivered fast.</p>
                    </div>
                    <div>
                        <h1 className='text-[24px] gelato-regular text-[#212121]'>▻ High-quality products</h1>
                        <p className='text-[16px] gelato-light text-[#212121]'>We partner with the world's leading brands to ensure the best quality products.</p>
                    </div>
                    <div>
                        <h1 className='text-[24px] gelato-regular text-[#212121]'>▻ Endless creativity with Shutterstock Images</h1>
                        <p className='text-[16px] gelato-light text-[#212121]'>Access millions of images and graphics to create unique products you can sell in your store.</p>
                    </div>
                    <div>
                        <h1 className='text-[24px] gelato-regular text-[#212121]'>▻ 1-click integration to the leading ecommerce platforms</h1>
                        <p className='text-[16px] gelato-light text-[#212121]'>Connect your store to Gelato using <span className=' underline'>our integrations</span> with <span className=' underline'>Shopify, Etsy</span> and more.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
