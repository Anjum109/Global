import React from 'react'
import ha1 from '../../assets/images/hat1.webp'
import hat2 from '../../assets/images/hat2.webp'
import hat3 from '../../assets/images/hat3.webp'
export default function Hats() {
    return (
        <div className='p-5 pb-12'> <h1 className='text-[18px] py-3 gelato-medium mt-6 '>Best Sellers</h1>
            <div className='grid grid-cols-3 gap-5  '>
                <div>
                    <img src={ha1} alt='img' />
                    <p>Hats</p>
                    <h1>Beanie </h1>
                </div>
                <div>
                    <img src={hat2} alt='img' />
                    <p>Hats</p>
                    <h1> Snapback </h1>
                </div>
                <div>
                    <img src={hat3} alt='img' />
                    <p>Hats</p>
                    <h1>Bucket hat </h1>
                </div>


            </div></div>
    )
}
