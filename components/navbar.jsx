'use client';

import React, { useState, useEffect } from 'react';
import Logo from '@/assets/logo.svg'; // Ensure the path is correct
import Image from 'next/image';
import  SideNav  from './Sidenav';

// Define the component with TypeScript
const Navbar = () => {
    const [winCheck, setWinCheck] = useState(false);
    const [toggleNav, setToggleNav] = useState(false);
    const [showHamburger, setShowHamburger] = useState(false);

    useEffect(() => {
        // Update the winCheck state based on window width
        const updateWinCheck = () => {
            setWinCheck(window.innerWidth >= 850);
        };

        // Handle scroll event to show/hide hamburger menu
        const handleScroll = () => {
            const navElement = document.querySelector('.navUp');
            if (navElement) {
                const navHeight = navElement.offsetHeight;
                setShowHamburger(window.scrollY >= navHeight);
            }
        };

        updateWinCheck();
        window.addEventListener('resize', updateWinCheck);
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('resize', updateWinCheck);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Toggle navigation on hamburger click
    const handleBarClick = () => {
        setToggleNav(prevState => !prevState);
    };

    return (
        <div className="navUp">
            <nav className="nav">
                <div className="sticky top-0 z-999 p-2">
                    <div className="logo-container top-[4vh] mix-blend-difference">
                        <Image
                            src={Logo}
                            alt="Amon Sharma"
                            height={winCheck ? 50 : 35}
                        />
                    </div>
                </div>
                <div className={`${winCheck ? '' : 'toggle'}`}>
                    <div
                        className={`${winCheck ? '' : 'bars'} ${toggleNav ? 'click' : ''}`}
                        onClick={handleBarClick}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    {winCheck && (
                        <ul className={`nav-list space-x-[6vw] ${toggleNav ? 'click' : ''}`}>
                            <li className="nav-item">Home</li>
                            <li className="nav-item">About me</li>
                            <li className="nav-item">Projects</li>
                            <li className="nav-item">Contact Me</li>
                        </ul>
                    )}
                </div>
            </nav>
            <SideNav isOpen={toggleNav} onClose={() => setToggleNav(false)} />
            {showHamburger && (
                <div
                    className="hamburger fixed top-[4vh] bars flex-col right-[4vw] w-8 h-8 space-y-2  rounded-full mix-blend-difference flex items-center justify-center z-50"
                    onClick={handleBarClick}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
