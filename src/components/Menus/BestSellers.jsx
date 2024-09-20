import React from 'react'
import boy from '../../assets/images/boy.webp'
import cards from '../../assets/images/cards.webp'
import canvas from '../../assets/images/canvas.webp'
import Photobokk from '../../assets/images/Photobokk.webp'
import wallart from '../../assets/images/wall art.webp'
import wooden from '../../assets/images/wooden.webp'

export default function BestSellers() {
    return (
        <div className='p-5'>
            <h1 className='text-[18px] py-3 gelato-medium'>Best Sellers</h1>
            {/* card */}
            <div className='grid grid-cols-3 gap-5'>
                <div className='p-3 hover:bg-gray-300'>
                    <img src={boy} alt='img' />
                    <p className='text-[15px] text-gray-400'>T-shirt</p>
                    <h1 className='text-[12px]'>heavy weight unisex crewneck t-shirt</h1>
                </div>
                <div className='p-3 hover:bg-gray-300'>
                    <img src={wallart} alt='img' />
                    <p className='text-[15px] text-gray-400'>Wall Art</p>
                    <h1 className='text-[12px]'>Premium Matte poster</h1>
                </div>
                <div className='p-3 hover:bg-gray-300'>
                    <img src={wooden} alt='img' />
                    <p className='text-[15px] text-gray-400'>Wall Art</p>
                    <h1 className='text-[12px]'>Premium Wooden framed poster</h1>
                </div>
                <div className='p-3 hover:bg-gray-300'>
                    <img src={canvas} alt='img' />
                    <p className='text-[15px] text-gray-400'>Wall Art</p>
                    <h1 className='text-[12px]'>Canvas</h1>
                </div>
                <div className='p-3 hover:bg-gray-300'>
                    <img src={Photobokk} alt='img' />
                    <p className='text-[15px] text-gray-400'>Photo book</p>
                    <h1 className='text-[12px]'>Soft Cover Photo book</h1>
                </div>
                <div className='p-3 hover:bg-gray-300'>
                    <img src={cards} alt='img' />
                    <p className='text-[15px] text-gray-400'>Cards</p>
                    <h1 className='text-[12px]'>Cards</h1>
                </div>

            </div>
        </div>
    )
}

