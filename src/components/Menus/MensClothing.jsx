import React from 'react'
import boy from '../../assets/images/boy.webp'
import boy1 from '../../assets/images/boy2.webp'
import boy2 from '../../assets/images/boy3.webp'
export default function MensClothing() {
    return (
        <div className='p-5'>
            <h1 className='text-[18px] py-3 gelato-medium'>MensClothing</h1>
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
