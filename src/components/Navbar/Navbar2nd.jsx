import React, { useState, useRef } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowForward } from "react-icons/io";
import BestSellers from '../Menus/BestSellers';
import MensClothing from '../Menus/MensClothing';
import WomensClothing from '../Menus/WomensClothing';
import KidsandBaby from '../Menus/KidsandBaby';
import WallArt from '../Menus/WallArt';
import Hats from '../Menus/Hats';
import PhotoBooks from '../Menus/PhotoBooks';

const menus = {
    "Product": {
        items: ["Best Sellers", "Mens clothing", "Womens clothing", "Kids & baby clothing", "Wall art", "Calenders", "Cards", "Photo books", "Hats", "Phone cases"],
        submenus: {}
    },
    "Start Selling": {
        items: ["Print on demand", "Setup your business", "Sell custom products", "Intregrations", "Shipping & delivery", "Partner services", "Custom packaging", "Move your products"],
        submenus: {
            "Setup your business": ["Sell wall art", "Sell clothing", "Embroidery", "Personalised gifts", "Sell art online", "Printing Service", "White lebel products", "Create match for your fans", "Create logo on merchandise"],
            "Sell custom products": ["Custom products", "Custom wall art", "Custom posters", "Custom canvas prints", "Custom calenders", "Custom cards", "Custom photo book", "Custom clothing", "Custom embrodered clothing"],
            "Intregrations": ["Intregrations overview", "Etsy", "Shopify", "Woocommerce", "Wix", "Square space", "BigCommerce"],
            "Shipping & delivery": ["Shipping and delivery", "Sropshipping products"],
        }
    },
    "Tools and apps": {
        items: ["Tools and apps overview", "Personalization studio", "Auto file sync", "Design maker", "Product creation tools", "Mockup studio", "Price navigator", "Analytics", "Gelato App"],
        submenus: {
            "Personalization studio": ["Personalization studio overview", "Etsy tools", "Shopify tools", "Personalised photobook editor", "Personalised cards editor", "personalised calender editor", "personalised apparel editor"]
        }
    },
    "Pricing": {
        items: ["Payments and pricing", "Subcription plans", "Gelato+", "Gelato+ Gold", "Platinum", "Offers"],
        submenus: {}
    },
    "Resources": {
        items: ["Resource centre", "Gelato academy", "Customer stories", "Blog", "Whitepapers", "Newsroom", "Sustainebility", "Help center"],
        submenus: {
            "Blog": ["All blogs", "The best dropshipping products", "The power of personalised gifts", "Profitable dropship niches", "Stat a profitable tshirt business", "Shopify dropshipping", "Best tshirt fonts", "How to sell art online", "Best quality t-shirt"],
            "Whitepapers": ["Elivating spaces - Wall art trens 2024", "Unveilling the future - Appreal trents 2024", "From mess to meaning"],
            "Sustainebility": ["Our approach", "Sustainebility report 2023", "Local producton"]
        }
    },
    "Gelato Connect": {
        items: ["GelatoConnect", "Logistics", "Workflow", "Procurement"],
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

    const itemsWithoutArrow = ["Calenders", "Cards", "Phone cases", "Partner services", "Custom packaging", "Move your products", "Print on demand", "Auto file sync", "Design maker", "Product creation tools", "Mockup studio", "Price navigator", "Analytics", "Gelato App", "Tools and apps overview", "Payments and pricing", "Subcription plans", "Gelato+", "Gelato+ Gold", "Platinum", "Offers", "Resource centre", "Gelato academy", "Customer stories", "Newsroom", "Help center", "GelatoConnect", "Logistics", "Workflow", "Procurement"];

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
                                className="absolute left-[-20px] bg-white border border-gray-200 p-2 shadow-lg z-10 w-[250px]"
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
                                        {!itemsWithoutArrow.includes(item) && <IoIosArrowForward />}
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
                                        {/* Custom content for Womens Clothing */}
                                        {submenuVisible && submenuHovered === item && item === "Womens clothing" && (
                                            <div className="absolute left-full top-0 bg-white border border-gray-200 shadow-lg z-10 w-[600px] mt-0 p-4">
                                                <WomensClothing />
                                            </div>
                                        )}
                                        {/* Custom content for Kids & baby clothing */}
                                        {submenuVisible && submenuHovered === item && item === "Kids & baby clothing" && (
                                            <div className="absolute left-full top-0 bg-white border border-gray-200 shadow-lg z-10 w-[600px] mt-0 p-4">
                                                <KidsandBaby />
                                            </div>
                                        )}
                                        {submenuVisible && submenuHovered === item && item === "Wall art" && (
                                            <div className="absolute left-full top-0 bg-white border border-gray-200 shadow-lg z-10 w-[600px] mt-0 p-4">
                                                <WallArt />
                                            </div>
                                        )}
                                        {submenuVisible && submenuHovered === item && item === "Photo books" && (
                                            <div className="absolute left-full top-0 bg-white border border-gray-200 shadow-lg z-10 w-[600px] mt-0 p-4">
                                                <PhotoBooks />
                                            </div>
                                        )}
                                        {submenuVisible && submenuHovered === item && item === "Hats" && (
                                            <div className="absolute left-full top-0 bg-white border border-gray-200 shadow-lg z-10 w-[600px] mt-0 p-4">
                                                <Hats />
                                            </div>
                                        )}


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
