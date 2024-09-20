import React from 'react'
import boy from '../../assets/images/boy.webp'

export default function GelatoConnectMenu() {
    return (
        <div>
            <h1>Best Sellers</h1>
            {/* card */}
            <div className='grid grid-cols-3 gap-5'>
                <div>
                    <img src={boy} alt='img' />
                    <p>T-sShirt</p>
                    <h1>heavy weight unisex crewneck t-shirt</h1>
                </div>
                <div>
                    <img src={boy} alt='img' />
                    <p>T-sShirt</p>
                    <h1>heavy weight unisex crewneck t-shirt</h1>
                </div>
                <div>
                    <img src={boy} alt='img' />
                    <p>T-sShirt</p>
                    <h1>heavy weight unisex crewneck t-shirt</h1>
                </div>
                <div>
                    <img src={boy} alt='img' />
                    <p>T-sShirt</p>
                    <h1>heavy weight unisex crewneck t-shirt</h1>
                </div>
                <div>
                    <img src={boy} alt='img' />
                    <p>T-sShirt</p>
                    <h1>heavy weight unisex crewneck t-shirt</h1>
                </div>
                <div>
                    <img src={boy} alt='img' />
                    <p>T-sShirt</p>
                    <h1>heavy weight unisex crewneck t-shirt</h1>
                </div>
            </div>
        </div>
    )
}
