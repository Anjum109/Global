import React from 'react'
import canvas from '../../assets/images/canvas.webp'
import wooden from '../../assets/images/wooden.webp'
import wallart from '../../assets/images/wall art.webp'
export default function WallArt() {
    return (
        <div className='p-5'>
            <h1 className='text-[18px] py-3 gelato-medium'>Wall Art</h1>
            <div className='grid grid-cols-3 gap-5'>
                <p>Posters</p>
                <p>Canvas</p>
                <p>Framed canvas</p>
                <p>Premium wooden framed posters</p>
                <p>Wooden framed posters</p>
                <p>Posters with hanggers</p>
                <p>Aluminium print</p>
                <p>Acrylic print</p>
                <p>Foam print</p>
                <p>wood print</p>
            </div>
            <h1 className='text-[18px] py-3 gelato-medium mt-6'>Best Sellers</h1>
            <div className='grid grid-cols-3 gap-5  '>
                <div>
                    <img src={wallart} alt='img' />
                    <p>Poster</p>
                    <h1>Premium matte poster</h1>
                </div>
                <div>
                    <img src={wooden} alt='img' />
                    <p>Framed poster</p>
                    <h1>Premium matte framed poster</h1>
                </div>
                <div>
                    <img src={canvas} alt='img' />
                    <p>Canvas</p>
                    <h1>Canvas</h1>
                </div>

            </div></div>
    )
}
