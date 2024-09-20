import React, { useState } from 'react';
import logo from '../../assets/Logo/gelato_logo_black.svg';
import { FaHeadphones } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Product from './Menu/Product';

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('main');
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);
    const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        setActiveMenu('main');
    };

    const openSubMenu = (menu) => {
        setActiveMenu(menu);
    };

    const goBack = () => {
        setActiveMenu('main');
    };

    const toggleLanguageMenu = () => {
        setShowLanguageMenu((prev) => !prev);
        setShowCurrencyMenu(false); // Close currency menu if it's open
    };



    return (
        <div className='border border-b-2 border-gray-200'>
            <div className='mx-10 lg:mx-[130px] py-5 flex justify-between items-center'>
                <div className='flex gap-5'>
                    <div className='lg:hidden text-[24px]' onClick={toggleSidebar}>
                        <IoMenu />
                    </div>
                    <div className=''>
                        <img src={logo} alt='logo' className='w-[120px]' />
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='hidden lg:block '>
                        <div className='lg:flex items-center gap-2'>
                            <button className='flex gap-2 items-center text-[14px] cursor-pointer hover:bg-gray-200 px-3 rounded-full py-1'>
                                <FaHeadphones />
                                <p className='font-medium font-gelato'>Contact Us</p>
                            </button>
                            <div className='relative'>
                                <button onClick={toggleLanguageMenu} className='flex gap-2 items-center text-[14px] cursor-pointer hover:bg-gray-200 px-3 rounded-full py-1'>
                                    <MdLanguage />
                                    <p className='font-medium font-gelato'>IN / EURO</p>
                                    <FaAngleDown />
                                </button>
                                {showLanguageMenu && (
                                    <div className='absolute bg-white shadow-lg mt-1 top-10 rounded-md p-5 w-[150px] z-10'>
                                        <p className='cursor-pointer hover:bg-gray-200' >Language: IN</p>
                                        <p className='cursor-pointer hover:bg-gray-200'>Currency: EUR</p>
                                    </div>
                                )}

                            </div>
                            <button className='flex gap-2 items-center text-[14px] cursor-pointer hover:bg-gray-200 px-3 rounded-full py-1'>
                                <FaCartShopping />
                                <p className='font-medium font-gelato'>Cart</p>
                            </button>
                            <button className='flex gap-2 items-center text-[14px] cursor-pointer hover:bg-gray-200 px-3 rounded-full py-1'>
                                <IoMdPerson />
                                <p className='font-medium font-gelato'>SignIn</p>
                            </button>
                        </div>
                    </div>
                    <div>
                        <p className='font-medium font-gelato text-[14px] text-white bg-black px-4 py-1 rounded-full hover:text-gray-400 cursor-pointer'>Sign up for free</p>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 w-[350px] h-full bg-white shadow-lg z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                {/* Main Menu */}
                {activeMenu === 'main' && (
                    <div>
                        <div className='p-5 flex justify-between items-center'>
                            <IoMdClose className='text-[24px] cursor-pointer' onClick={toggleSidebar} />
                            <div className='relative'>
                                <button onClick={toggleLanguageMenu} className='flex gap-2 items-center text-[14px] cursor-pointer hover:bg-gray-200 px-3 rounded-full py-1'>
                                    <MdLanguage />
                                    <p className='font-medium font-gelato'>IN / EURO</p>
                                    <FaAngleDown />
                                </button>
                                {showLanguageMenu && (
                                    <div className='absolute bg-white shadow-lg mt-1 top-10 rounded-md p-5 w-[150px] z-10'>
                                        <p className='cursor-pointer hover:bg-gray-200' >Language: IN</p>
                                        <p className='cursor-pointer hover:bg-gray-200'>Currency: EUR</p>
                                    </div>
                                )}

                            </div>
                            <div className='h-[20px] w-[1px] bg-gray-400' />
                            <div className='flex items-center gap-2'>
                                <FaShoppingCart />
                                <p className='font-medium font-gelato'>Cart</p>
                            </div>
                        </div>
                        <div className='w-full border-gray-[300] border-[1px]' />
                        <div className='flex justify-between items-center my-5 px-5'>
                            <button className='flex gap-2 items-center text-[14px] cursor-pointer hover:bg-gray-200 px-3 rounded-full py-1'>
                                <IoMdPerson />
                                <p className='font-medium font-gelato'>SignIn</p>
                            </button>
                            <div className='h-[20px] w-[1px] bg-gray-400' />
                            <button>
                                <p className='font-medium font-gelato text-[14px] text-white bg-black px-4 py-1 rounded-full hover:text-gray-400 cursor-pointer'>Sign up for free</p>
                            </button>
                        </div>
                        <div className='w-full border-gray-[300] border-[1px]' />
                        <div className='w-full flex flex-col mt-5'>
                            {/* Buttons that open submenus */}
                            <button onClick={() => openSubMenu('products')} className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                Products
                                <IoIosArrowForward />
                            </button>
                            <button onClick={() => openSubMenu('startSelling')} className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                Start Selling
                                <IoIosArrowForward />
                            </button>
                            <button onClick={() => openSubMenu('tools')} className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                Tools & Apps
                                <span><IoIosArrowForward /></span>
                            </button>
                            <button onClick={() => openSubMenu('pricing')} className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                Pricing
                                <span><IoIosArrowForward /></span>
                            </button>
                            <button onClick={() => openSubMenu('resources')} className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                Resources
                                <span><IoIosArrowForward /></span>
                            </button>
                            <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                Pro sellers

                            </button>
                            <button onClick={() => openSubMenu('gelatoConnect')} className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                Gelato Connect
                                <span><IoIosArrowForward /></span>
                            </button>
                        </div>
                    </div>
                )}

                {/* Submenu for Products */}
                {activeMenu === 'products' && (
                    <div>
                        <div className='p-5 flex justify-between items-center'>
                            <div className='flex gap-5 items-center'>
                                <IoIosArrowBack className='text-[24px] cursor-pointer' onClick={goBack} />
                                <h2 className='text-lg font-bold'>Products</h2>
                            </div>
                            <button className='text-[14px] cursor-pointer' onClick={toggleSidebar}>close</button>
                        </div>
                        <div className='border-[1px] border-gray-300 w-full mb-5' />
                        <div className='w-full px-5'>
                            <ul>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Mens clothing
                                        <IoIosArrowForward />
                                    </button> </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Womens clothing
                                        <IoIosArrowForward />
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Kids & baby clothing
                                        <IoIosArrowForward />
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Wall art
                                        <IoIosArrowForward />
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Calenders

                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Cards

                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Photo books
                                        <IoIosArrowForward />
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Hats
                                        <IoIosArrowForward />
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Phone cases
                                        <IoIosArrowForward />
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Mugs
                                        <IoIosArrowForward />
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Tote bags
                                        <IoIosArrowForward />
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Stationary & Business
                                        <IoIosArrowForward />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}

                {/* Submenu for Start Selling */}
                {activeMenu === 'startSelling' && (
                    <div>
                        <div className='p-5 flex justify-between items-center'>
                            <div className='flex gap-5 items-center'>
                                <IoIosArrowBack className='text-[24px] cursor-pointer' onClick={goBack} />
                                <h2 className='text-lg font-bold'>Start selling</h2>
                            </div>
                            <button className='text-[14px] cursor-pointer' onClick={toggleSidebar}>close</button>
                        </div>
                        <div className='border-[1px] border-gray-300 w-full mb-5' />
                        <div className='w-full px-5'>
                            <ul>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Print on demand

                                    </button> </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Setup your business
                                        <IoIosArrowForward />
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Sell custom products
                                        <IoIosArrowForward />
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Intregrations
                                        <IoIosArrowForward />
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Shipping & delivery
                                        <IoIosArrowForward />
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Partner Services

                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Custom packaging

                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Move your products

                                    </button>
                                </li>

                            </ul>
                        </div>
                    </div>
                )}
                {/* Submenu for Tools and apps */}
                {activeMenu === 'tools' && (
                    <div>
                        <div className='p-5 flex justify-between items-center'>
                            <div className='flex gap-5 items-center'>
                                <IoIosArrowBack className='text-[24px] cursor-pointer' onClick={goBack} />
                                <h2 className='text-lg font-bold'>Tools & Apps</h2>
                            </div>
                            <button className='text-[14px] cursor-pointer' onClick={toggleSidebar}>close</button>
                        </div>
                        <div className='border-[1px] border-gray-300 w-full mb-5' />
                        <div className='w-full px-5'>
                            <ul>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Tools and apps overview

                                    </button> </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Personalization studio
                                        <IoIosArrowForward />
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Auto file sync
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Design maker
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Product creation tools
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Mockup studio

                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Price Navigator

                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Analytics

                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Gelato apps

                                    </button>
                                </li>

                            </ul>
                        </div>
                    </div>
                )}
                {/* Submenu for Pricing */}
                {activeMenu === 'pricing' && (
                    <div>
                        <div className='p-5 flex justify-between items-center'>
                            <div className='flex gap-5 items-center'>
                                <IoIosArrowBack className='text-[24px] cursor-pointer' onClick={goBack} />
                                <h2 className='text-lg font-bold'>Tools & Apps</h2>
                            </div>
                            <button className='text-[14px] cursor-pointer' onClick={toggleSidebar}>close</button>
                        </div>
                        <div className='border-[1px] border-gray-300 w-full mb-5' />
                        <div className='w-full px-5'>
                            <ul>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Payments and pricing

                                    </button> </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Subcription plans
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Gelato+
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Gelato+ Gold
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Platinum
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Offers

                                    </button>
                                </li>


                            </ul>
                        </div>
                    </div>
                )}
                {/* Submenu for Resources */}
                {activeMenu === 'resources' && (
                    <div>
                        <div className='p-5 flex justify-between items-center'>
                            <div className='flex gap-5 items-center'>
                                <IoIosArrowBack className='text-[24px] cursor-pointer' onClick={goBack} />
                                <h2 className='text-lg font-bold'>Resources</h2>
                            </div>
                            <button className='text-[14px] cursor-pointer' onClick={toggleSidebar}>close</button>
                        </div>
                        <div className='border-[1px] border-gray-300 w-full mb-5' />
                        <div className='w-full px-5'>
                            <ul>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Resource center

                                    </button> </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Gelato academy

                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Customer stories

                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Blog
                                        <IoIosArrowForward />
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Whitepapers
                                        <IoIosArrowForward />
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Newsroom

                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        ustainability
                                        <IoIosArrowForward />
                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Help Center

                                    </button>
                                </li>

                            </ul>
                        </div>
                    </div>
                )}
                {/* Submenu for Gelato Connect */}
                {activeMenu === 'gelatoConnect' && (
                    <div>
                        <div className='p-5 flex justify-between items-center'>
                            <div className='flex gap-5 items-center'>
                                <IoIosArrowBack className='text-[24px] cursor-pointer' onClick={goBack} />
                                <h2 className='text-lg font-bold'>GelatoConnect</h2>
                            </div>
                            <button className='text-[14px] cursor-pointer' onClick={toggleSidebar}>close</button>
                        </div>
                        <div className='border-[1px] border-gray-300 w-full mb-5' />
                        <div className='w-full px-5'>
                            <ul>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        GelatoConnect

                                    </button> </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Logistics

                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Woekflow

                                    </button>
                                </li>
                                <li>
                                    <button className='flex justify-between items-center w-full hover:bg-gray-300 px-5 py-2'>
                                        Procurement
                                    </button>
                                </li>


                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
