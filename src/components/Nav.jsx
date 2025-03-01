import React from 'react';
import { FaDownload } from "react-icons/fa"
const Nav = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" }
  ];

  return (
    <div className='bg-[#000111]'>
      <nav className=" w-[88%] m-auto h-[100px] flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white text-3xl">AyushSen<span className="text-[#84AB91]">.dev</span></h1>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.href} className="bg-white font-semibold px-4 py-1 rounded-2xl">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          className="bg-white font-semibold px-4 py-2 rounded-[10px] flex gap-3"
          href="https://drive.google.com/file/d/1TDXuF_xJw7dy7gnGg4GNYtqj-2fySjAJ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
          <FaDownload size={20} />
        </a>
      </nav>
    </div>
  );
};

export default Nav;
