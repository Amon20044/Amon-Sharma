import React from 'react';
import './Footer.css';
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t-2 border-blue-50 text-[var(--primaryColor)] pt-12 pb-12 flex  justify-between items-center px-20 max-[850px]:justify-between max-[850px]:px-5">
            <div className="space-x-8 max-[850px]:flex-col-reverse flex-row flex max-[850px]:space-x-0">
                <div>
                    2024 &copy; Edition
                </div>
                <div>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true, timeZoneName: 'short' })}
                </div></div>

            <div className="flex space-x-4 max-[850px]:flex-col max-[850px]:space-x-0">
                <a href="https://www.github.com/Amon20044" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://www.linkedin.com/in/amon-sharma-ab8a15216/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.behance.net/amonsharma" target="_blank" rel="noopener noreferrer">Behance</a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
        </footer>
    );
};

export default Footer;
