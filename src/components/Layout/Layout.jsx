import React, { useEffect, useState } from 'react';
import TopNav from '../Navbar/TopNav';
import Navbar from '../Navbar/Navbar';
import Navbar2nd from '../Navbar/Navbar2nd';
import Footer from '../Footer/Footer';

export default function Layout({ children }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <TopNav />
            <div className={`${isScrolled ? 'fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ease-in-out' : 'relative'} transition-all duration-300 ease-in-out`}>
                <Navbar />
                <div className="hidden lg:block">
                    <Navbar2nd />
                </div>
            </div>
            <div className={`pt-[${isScrolled ? '0px' : '0'}] transition-all duration-1000 ease-in-out`}>
                {children}
            </div>
            <Footer />
        </div>
    );
}
