import React from 'react'

export default function Product() {
    return (
        <div>
            <div className='w-full flex flex-col mt-5'>

                <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                    Mens clothing
                    <IoIosArrowForward />
                </button>
                <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                    Womens clothing
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    )
}
