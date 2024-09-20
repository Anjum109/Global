import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowForward } from "react-icons/io";

const menus = {
    "Product": {
        items: ["Best Sellers", "Mens clothing", "Womens clothing"],
        submenus: {
            "Best Sellers": ["Item A", "Item B"],
            "Mens clothing": ["Shirts", "Pants"],
            "Womens clothing": ["Dresses", "Tops"],
        }
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

    const buttons = [
        "Product",
        "Start Selling",
        "Tools and apps",
        "Pricing",
        "Resources",
        "Pro sellers",
        "Gelato Connect",
    ];

    const handleMenuItemClick = (item) => {
        console.log(`Clicked on ${item}`); // Replace with desired action
    };

    const handleMouseEnter = (index) => {
        setHovered(index);
        setIsMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setHovered(null);
        setIsMenuOpen(false);
        setSubmenuHovered(null);
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
                            <div className="absolute left-0 bg-white border border-gray-200 p-2 shadow-lg z-10 w-[250px]">
                                {menus[buttonText].items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className='flex justify-between items-center px-4 py-2 hover:bg-gray-100 w-full cursor-pointer'
                                        onClick={() => handleMenuItemClick(item)}
                                        onMouseEnter={() => setSubmenuHovered(item)}
                                        onMouseLeave={() => setSubmenuHovered(null)}
                                    >
                                        <span>{item}</span>
                                        <IoIosArrowForward />
                                        {submenuHovered === item && menus[buttonText].submenus[item] && (
                                            <div className="absolute left-full top-0 bg-white border border-gray-200 shadow-lg z-10 w-[200px] mt-0">
                                                {menus[buttonText].submenus[item].map((subitem, subIdx) => (
                                                    <div
                                                        key={subIdx}
                                                        className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                                                        onClick={() => handleMenuItemClick(subitem)}
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
