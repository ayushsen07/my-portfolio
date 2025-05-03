import React, { useState, useEffect } from 'react';
import { FaDownload, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // Control body overflow when menu is open (prevents background scrolling)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-[#000111] z-50 transition-all duration-300 overflow-x-hidden ${
        scrolled ? 'shadow-lg bg-black' : ''
      }`}
    >
      <div className="max-w-[95%] mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-[70px] sm:h-[100px] w-ful">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="#home" className="block">
              <h1 className="text-white text-[27px] sm:text-3xl">
                AyushSen<span className="text-[#84AB91]">.dev</span>
              </h1>
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none p-2"
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <FaTimes size={24} />
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-4 lg:space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="bg-white hover:bg-black hover:border-2 hover:border-white hover:text-white transition-colors duration-300 font-semibold px-3 py-2 lg:px-4 lg:py-2 rounded-2xl text-sm lg:text-base"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Resume Button */}
          <div className="hidden md:flex flex-shrink-0">
            <a
              className="bg-white hover:bg-black hover:border-2 hover:border-white hover:text-white transition-colors duration-300 font-semibold px-3 py-2 lg:px-4 lg:py-2 rounded-[10px] flex items-center gap-2 lg:gap-3 text-sm lg:text-base"
              href="https://drive.google.com/file/d/1TDXuF_xJw7dy7gnGg4GNYtqj-2fySjAJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Resume</span>
              <FaDownload size={16} className="lg:w-5 lg:h-5" />
            </a>
          </div>
        </nav>

        {/* Mobile Navigation Menu - Slide down animation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden w-full ${
            menuOpen 
              ? 'max-h-[300px] opacity-100 shadow-xl' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 bg-[#000111] py-4 rounded-b-xl w-full">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full text-center">
                <a
                  href={link.href}
                  className="block w-full py-2 text-white font-semibold hover:text-[#84AB91] transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="w-full flex justify-center py-2">
              <a
                className="bg-white hover:bg-black hover:border-2 hover:border-white hover:text-white transition-colors duration-300 font-semibold px-4 py-2 rounded-[10px] flex items-center gap-2 w-[140px] justify-center"
                href="https://drive.google.com/file/d/1TDXuF_xJw7dy7gnGg4GNYtqj-2fySjAJ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                <span>Resume</span>
                <FaDownload size={16} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Nav;