import React, { useState } from 'react'
import logo from '../../assets/Logo/_logo.svg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
    const [showMenu, setShowMenu] = useState(false);


    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    const handleLanguageChange = (language) => {
        console.log(`Selected language: ${language}`);
        setShowMenu(false);
    };
    return (
        <div className='bg-black px-[100px] py-12'>
            {/* 1st  part*/}
            <div className='flex justify-between items-center'>
                <div>
                    <img src={logo} alt='logo' className='w-[130px]' />
                </div>
                <div className='flex gap-8 text-white items-center text-[24px]'>
                    <p className='text-[16px] gelato-light cursor-pointer'>Find Gelato on:</p>
                    <FaInstagram className='cursor-pointer' />
                    <FaFacebookF className='cursor-pointer' />
                    <FaTiktok className='cursor-pointer' />
                    <FaLinkedinIn className='cursor-pointer' />
                    <IoLogoYoutube className='cursor-pointer' />
                </div>
            </div>
            {/* 2nd part  */}
            <div>
                <div className='flex items-start gap-5 text-white mt-5 w-full'>
                    <div className='w-[30%]'>
                        <p className='text-[12px] gelato-light'>Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.</p>
                        <button className='bg-white text-[14px] gelato-medium text-black rounded-full py-1 px-5 mt-7 hover:bg-blue-700 hover:text-gray-500 '>Get started </button>
                        <div className='mt-10'>
                            <p className='text-[16px] gelato-light'>
                                Get the app
                            </p>
                            <div className='flex gap-2 items-center mt-3'>
                                <img src='https://a.storyblok.com/f/165154/x/de4bf52166/badge-1.svg' />
                                <img src='https://a.storyblok.com/f/165154/x/61c51d3d38/badge.svg' />
                            </div>
                        </div>
                    </div>
                    <div className='w-[60%] grid grid-cols-5'>
                        <div className='mt-[-10px]'>
                            <p className='text-[16px] gelato-light'>Print on demand</p>
                            <ul className='text-[12px] gelato-light mt-3 flex flex-col gap-1'>
                                <li>What is print on demand?</li>
                                <li>Product catalog</li>
                                <li>Shipping and delivery</li>
                                <li>Dropshipping products</li>
                                <li>Pro sellers</li>
                                <li>White lebel products</li>
                                <li>Returns policy</li>
                                <li>Global, yet local</li>
                                <li>Sustainability</li>
                                <li>Support</li>

                            </ul>
                        </div>
                        <div className='mt-[-10px]'>
                            <p className='text-[16px] gelato-light'>Integrations</p>
                            <ul className='text-[12px] gelato-light mt-3 flex flex-col gap-1'>
                                <li>Shopify</li>
                                <li>Etsy</li>
                                <li>WooCommerce</li>
                                <li>Wix</li>
                                <li>Squarespace</li>
                                <li>BigCommerce</li>
                                <li>API</li>
                            </ul>
                        </div>
                        <div className='mt-[-10px]'>
                            <p className='text-[16px] gelato-light'>Start selling</p>
                            <ul className='text-[12px] gelato-light mt-3 flex flex-col gap-1'>
                                <li>Print on demand t-shirts</li>
                                <li>Print on demand hoodies</li>
                                <li>Print on demand posters</li>
                                <li>Print on demand canvas</li>
                                <li>Print on demand calenders</li>
                                <li>Print on demand mugs</li>
                                <li>Custom products</li>
                                <li>Custom clothing</li>
                                <li>Custom merchandise</li>
                                <li>Custom Phone cases</li>
                                <li>Print on demand Europe</li>
                                <li>Print on demand Uk</li>
                                <li>Print on demand Franch</li>
                                <li>Print on demand Canada</li>
                                <li>Merch maker</li>
                                <li></li>
                            </ul>
                        </div>
                        <div className='mt-[-10px]'>
                            <p className='text-[16px] gelato-light'>Company</p>
                            <ul className='text-[12px] gelato-light mt-3 flex flex-col gap-1'>
                                <li>GelatoConnect</li>
                                <li>About Gelato</li>
                                <li>Leadership team</li>
                                <li>Board & investors</li>
                                <li>Newsroom</li>
                                <li>Blog</li>
                                <li>Customer Stories</li>
                                <li>Partners</li>
                                <li>Careers</li>
                                <li>Affiliates program</li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            {/* 3rd part */}
            <div className='flex justify-between'>
                <div className='text-white flex text-[12px] gelato-light'>
                    <button className='border-r-2 border-white px-4'>Contact us</button>
                    <button className='border-r-2 border-white px-4'>Legal</button>
                    <button className='border-r-2 border-white px-4'>Privacy policy</button>
                    <button className='border-r-2 border-white px-4'>Cookie policy</button>
                    <button className='border-r-2 border-white px-4'>API terms</button>
                    <button className=' px-4'>Sitemap</button>
                </div>
                <div className='relative inline-block gelato-light'>
                    {/* Button to trigger dropdown */}
                    <button
                        className='text-white w-[200px] border-white border-2 text-start px-2 py-1'
                        onClick={toggleMenu}
                    >
                        English (India)
                    </button>

                    {/* Dropdown menu */}
                    {showMenu && (
                        <div className='absolute top-[-480px] left-0 bg-black border border-gray-200 w-full z-10'>
                            <ul className='text-white'>
                                <li
                                    className='px-2 py-1 hover:bg-blue-700 cursor-pointer'
                                    onClick={() => handleLanguageChange('Canada (English)')}
                                >
                                    English
                                </li>
                                <li
                                    className='px-2 py-1 hover:bg-blue-700 cursor-pointer'
                                    onClick={() => handleLanguageChange('Urdu')}
                                >
                                    English (Canada)
                                </li>
                                <li
                                    className='px-2 py-1 hover:bg-blue-700 cursor-pointer'
                                    onClick={() => handleLanguageChange('Farsi')}
                                >
                                    English (United Kingdom)
                                </li>
                                <li
                                    className='px-2 py-1 hover:bg-blue-700 cursor-pointer'
                                    onClick={() => handleLanguageChange('Farsi')}
                                >
                                    English (Australia)
                                </li>
                                <li
                                    className='px-2 py-1 hover:bg-blue-700 cursor-pointer'
                                    onClick={() => handleLanguageChange('Farsi')}
                                >
                                    English (India)
                                </li>
                                <li
                                    className='px-2 py-1 hover:bg-blue-700 cursor-pointer'
                                    onClick={() => handleLanguageChange('Farsi')}
                                >
                                    Japanese
                                </li>
                                <li
                                    className='px-2 py-1 hover:bg-blue-700 cursor-pointer'
                                    onClick={() => handleLanguageChange('Farsi')}
                                >
                                    Francais
                                </li>
                                <li
                                    className='px-2 py-1 hover:bg-blue-700 cursor-pointer'
                                    onClick={() => handleLanguageChange('Farsi')}
                                >
                                    Espanol
                                </li>
                                <li
                                    className='px-2 py-1 hover:bg-blue-700 cursor-pointer'
                                    onClick={() => handleLanguageChange('Farsi')}
                                >
                                    Italiano
                                </li>
                                <li
                                    className='px-2 py-1 hover:bg-blue-700 cursor-pointer'
                                    onClick={() => handleLanguageChange('Farsi')}
                                >
                                    Deutsch
                                </li>
                                <li
                                    className='px-2 py-1 hover:bg-blue-700 cursor-pointer'
                                    onClick={() => handleLanguageChange('Farsi')}
                                >
                                    Norsk
                                </li>
                                <li
                                    className='px-2 py-1 hover:bg-blue-700 cursor-pointer'
                                    onClick={() => handleLanguageChange('Farsi')}
                                >
                                    Svenska
                                </li>
                                <li
                                    className='px-2 py-1 hover:bg-blue-700 cursor-pointer'
                                    onClick={() => handleLanguageChange('Farsi')}
                                >
                                    Tieng Viet
                                </li>
                                <li
                                    className='px-2 py-1 hover:bg-blue-700 cursor-pointer'
                                    onClick={() => handleLanguageChange('Farsi')}
                                >
                                    Nedarlands
                                </li>
                                <li
                                    className='px-2 py-1 hover:bg-blue-700 cursor-pointer'
                                    onClick={() => handleLanguageChange('Farsi')}
                                >
                                    Densk
                                </li>

                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
