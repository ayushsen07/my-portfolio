import React, { useState, useEffect } from 'react';
import { FaDownload } from "react-icons/fa";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full bg-[#000111] z-50 transition-all duration-300 ${scrolled ? 'shadow-lg bg-black' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="w-[1350px] mx-auto">
          <nav className="flex items-center justify-between h-[100px]">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <a href="#home" className="block">
                <h1 className="text-white text-3xl font-bold">
                  AyushSen<span className="text-[#84AB91]">.dev</span>
                </h1>
              </a>
            </div>

            {/* Navigation Links Section */}
            <div className="hidden md:block">
              <ul className="flex items-center space-x-8 ">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="bg-white hover:bg-black hover:border-2 hover:border-white hover:text-white transition-colors duration-300 font-semibold px-4 py-2 rounded-2xl"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resume Button Section */}
            <div className="flex-shrink-0">
           <a
              className="bg-white hover:bg-black hover:border-2 hover:border-white hover:text-white transition-colors duration-300 font-semibold px-4 py-2 rounded-[10px] flex items-center gap-3"
              href="https://drive.google.com/file/d/1TDXuF_xJw7dy7gnGg4GNYtqj-2fySjAJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Resume</span>
              <FaDownload size={20} />
            </a>
        </div>
      </nav>
    </div>
      </div >
    </header >
  );
};

export default Nav;