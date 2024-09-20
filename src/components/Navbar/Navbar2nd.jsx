import React, { useState, useRef } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowForward } from "react-icons/io";
import BestSellers from '../Menus/BestSellers';
import MensClothing from '../Menus/MensClothing';
import WomensClothing from '../Menus/WomensClothing';

const menus = {
    "Product": {
        items: ["Best Sellers", "Mens clothing", "Womens clothing"],
        submenus: {}
    },
    "Start Selling": {
        items: ["Guide", "FAQ", "Tips"],
        submenus: {}
    },
    "Tools and apps": {
        items: ["Tool 1", "App 1", "App 2"],
        submenus: {}
    },
    "Pricing": {
        items: ["Plan A", "Plan B"],
        submenus: {}
    },
    "Resources": {
        items: ["Docs", "Support"],
        submenus: {}
    },
    "Gelato Connect": {
        items: ["Connection 1", "Connection 2"],
        submenus: {}
    }
};

export default function Navbar2nd() {
    const [hovered, setHovered] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [submenuHovered, setSubmenuHovered] = useState(null);
    const [submenuVisible, setSubmenuVisible] = useState(false);
    const timeoutRef = useRef(null);

    const buttons = [
        "Product",
        "Start Selling",
        "Tools and apps",
        "Pricing",
        "Resources",
        "Pro sellers",
        "Gelato Connect",
    ];

    const handleMouseEnter = (index) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setHovered(index);
        setIsMenuOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setHovered(null);
            setIsMenuOpen(false);
            setSubmenuHovered(null);
            setSubmenuVisible(false);
        }, 300);
    };

    const handleSubmenuMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setSubmenuVisible(true);
    };

    const handleSubmenuMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setSubmenuVisible(false);
        }, 300);
    };

    return (
        <div className='border border-b-2 border-gray-200'>
            <div className='mx-[130px] flex items-center relative'>
                {buttons.map((buttonText, index) => (
                    <div key={index}
                        className='relative'
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button
                            className='flex gap-2 items-center text-[14px] cursor-pointer px-5 py-3 h-full hover:bg-gray-100'
                        >
                            <p className='font-medium font-gelato'>{buttonText}</p>
                            {buttonText === "Pro sellers" ? null : (hovered === index ? <IoIosArrowUp /> : <FaAngleDown />)}
                        </button>
                        {isMenuOpen && hovered === index && buttonText !== "Pro sellers" && (
                            <div
                                className="absolute left-0 bg-white border border-gray-200 p-2 shadow-lg z-10 w-[250px]"
                                onMouseEnter={handleSubmenuMouseEnter}
                                onMouseLeave={handleSubmenuMouseLeave}
                            >
                                {menus[buttonText].items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className='flex justify-between items-center px-4 py-2 hover:bg-gray-100 w-full cursor-pointer'
                                        onMouseEnter={() => setSubmenuHovered(item)}
                                        onMouseLeave={() => setSubmenuHovered(null)}
                                    >
                                        <span>{item}</span>
                                        <IoIosArrowForward />
                                        {/* Custom content for Best Sellers */}
                                        {submenuVisible && submenuHovered === item && item === "Best Sellers" && (
                                            <div className="absolute left-full top-0 bg-white border border-gray-200 shadow-lg z-10 w-[600px] mt-0 p-4">
                                                <BestSellers />
                                            </div>
                                        )}

                                        {/* Custom content for Mens Clothing */}
                                        {submenuVisible && submenuHovered === item && item === "Mens clothing" && (
                                            <div className="absolute left-full top-0 bg-white border border-gray-200 shadow-lg z-10 w-[600px] mt-0 p-4">
                                                <MensClothing />
                                            </div>
                                        )}
                                        {/* Custom content for Mens Clothing */}
                                        {submenuVisible && submenuHovered === item && item === "Womens clothing" && (
                                            <div className="absolute left-full top-0 bg-white border border-gray-200 shadow-lg z-10 w-[600px] mt-0 p-4">
                                                <WomensClothing />
                                            </div>
                                        )}

                                        {/* Default submenus */}
                                        {submenuHovered === item && menus[buttonText].submenus[item] && (
                                            <div className="absolute left-full top-0 bg-white border border-gray-200 shadow-lg z-10 w-[200px] mt-0">
                                                {menus[buttonText].submenus[item].map((subitem, subIdx) => (
                                                    <div
                                                        key={subIdx}
                                                        className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                                                        onClick={() => console.log(`Clicked on ${subitem}`)}
                                                    >
                                                        {subitem}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
