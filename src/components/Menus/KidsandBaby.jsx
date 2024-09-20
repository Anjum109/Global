import React from 'react'
import boy from '../../assets/images/baby1.webp'
import boy1 from '../../assets/images/baby24.webp'
import boy2 from '../../assets/images/baby3.webp'
export default function KidsandBaby() {
    return (
        <div className='p-5'>
            <h1 className='text-[18px] py-3 gelato-medium'>Kids and Baby</h1>
            <div className='grid grid-cols-3 gap-5'>
                <p>T-shirt</p>

                <p>Hoodies</p>

                <p>Organic</p>
                <p>Premium</p>
                <p>baby clothing</p>
            </div>
            <h1 className='text-[18px] py-3 gelato-medium mt-6'>Best Sellers</h1>
            <div className='grid grid-cols-3 gap-5  '>
                <div>
                    <img src={boy} alt='img' />
                    <p>T-sShirt</p>
                    <h1>Classic kids crewneck t-shirt</h1>
                </div>
                <div>
                    <img src={boy1} alt='img' />
                    <p>Hoddie</p>
                    <h1>Classic kids pullover hoodie</h1>
                </div>
                <div>
                    <img src={boy2} alt='img' />
                    <p>T-sShirt</p>
                    <h1>Classic baby long sleeve bodysuit</h1>
                </div>

            </div></div>
    )
}

