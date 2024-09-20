import React from 'react'
import Photobokk from '../../assets/images/Photobokk.webp'
export default function PhotoBooks() {
    return (
        <div className='p-5'>
            <h1 className='text-[18px] py-3 gelato-medium'>Photo books</h1>
            <div className='grid grid-cols-2 gap-5'>
                <p>Soft cover photo</p>
                <p>hard cover photo</p>
                <p>Books</p>
                <p>Books</p>
            </div>
            <h1 className='text-[18px] py-3 gelato-medium mt-6'>Best Sellers</h1>
            <div className='grid grid-cols-3 gap-5  '>
                <div>
                    <img src={Photobokk} alt='img' />
                    <p>Photo book</p>
                    <h1>Soft cover photo book</h1>
                </div>
                <div>
                    <img src={Photobokk} alt='img' />
                    <p>Photo book</p>
                    <h1>hard cover photo book</h1>
                </div>


            </div></div>
    )
}
