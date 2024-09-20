import React from 'react'
import boy from '../../assets/images/girl1.webp'
import boy1 from '../../assets/images/girl2.webp'
import boy2 from '../../assets/images/girl3.webp'
export default function WomensClothing() {
    return (
        <div className='p-5'>
            <h1 className='text-[18px] py-3 gelato-medium'>Womens Clothing</h1>
            <div className='grid grid-cols-3 gap-5'>
                <p>T-shirt</p>
                <p>Tank tops</p>
                <p>3/4 Sleeve shirts</p>
                <p>Long sleeve shirts</p>
                <p>Hoodies</p>
                <p>Sweat shirts</p>
                <p>Organic</p>
                <p>Premium</p>
                <p>Sportswear</p>
            </div>
            <h1 className='text-[18px] py-3 gelato-medium mt-6'>Best Sellers</h1>
            <div className='grid grid-cols-3 gap-5  '>
                <div>
                    <img src={boy} alt='img' />
                    <p>T-sShirt</p>
                    <h1>heavy weight unisex crewneck t-shirt</h1>
                </div>
                <div>
                    <img src={boy1} alt='img' />
                    <p>T-sShirt</p>
                    <h1>heavy weight unisex crewneck t-shirt</h1>
                </div>
                <div>
                    <img src={boy2} alt='img' />
                    <p>T-sShirt</p>
                    <h1>heavy weight unisex crewneck t-shirt</h1>
                </div>

            </div></div>
    )
}
