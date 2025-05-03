import React from 'react';
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import profileImage from '../assets/logo.svg';
import { LuMouse } from 'react-icons/lu';
import Nav from './Nav';
import { motion } from 'framer-motion';
import { fadeInBottomVariant, fadeInLeftVariant, fadeInRightVariant, fadeInTopVariant } from "../animations/Variants";

function Home() {
    return (
        <>
            {/* Home Page */}
            <div id='home' className='relative min-h-screen w-full bg-[#000213] flex flex-col justify-between pt-[100px] px-4 overflow-hidden'>
                {/* Main Content Section */}
                <div className='w-full max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center'>
                    {/* Left Section */}
                    <motion.div 
                        className='w-full md:w-1/2 flex flex-col mb-10 md:mb-0 space-y-6 md:space-y-0' 
                        variants={fadeInLeftVariant}
                        initial="hidden"
                        whileInView="visible"
                    >
                        <h1 className='md:text-3xl text-[32px] sm:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-[40px] mt-6'>
                            Hello, I'm <span className="text-[#84AB91] text-[32px] sm:text-5xl md:text-6xl font-bold sm:inline">Ayush Sen!</span>
                        </h1>

                        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6'>
                            A {' '}
                            <TypeAnimation
                                className='text-[#84AB91]'
                                sequence={[
                                    "FullStack developer", 1000,
                                    "Problem solver", 1000,
                                    "Tech enthusiast", 1000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </h2>

                        {/* Paragraph - Adjusted Width */}
                        <p className='text-base text-[17.5px] sm:text-lg text-white leading-relaxed'>
                            I'm a passionate Software Developer with a strong background in backend development.
                            Pre-final year CSE student at RGPV Bhopal, I have a deep interest in building scalable web applications.
                            Always eager to learn, solve complex problems, and contribute to impactful projects.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-2 sm:gap-3 mt-6 sm:mt-8">
                            <a href="https://www.linkedin.com/in/ayushsen07" target="_blank" rel="noopener noreferrer"
                                className="p-1 sm:p-2 rounded-full">
                                <FaLinkedin className="text-[#ffffff] text-3xl sm:text-4xl" />
                            </a>

                            <a href="https://github.com/ayushsen07" target="_blank" rel="noopener noreferrer"
                                className="p-1 sm:p-2 rounded-full">
                                <FaGithub className="text-white text-3xl sm:text-4xl" />
                            </a>

                            <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer"
                                className="p-1 sm:p-2 rounded-full">
                                <SiLeetcode className="text-white text-3xl sm:text-4xl" />
                            </a>

                            {/* Email Icon */}
                            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=senayush920@gmail.com' target='blank' className="p-1 sm:p-2 rounded-full">
                                <MdEmail className="text-white text-3xl sm:text-4xl" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Section - Fixed Image Compression */}
                    <motion.div 
                        className='w-full md:w-1/2 flex justify-center' 
                        variants={fadeInRightVariant}
                        initial="hidden"
                        whileInView="visible"
                    > 
                        <div className=''>
                            <img 
                                className='w-full max-w-[320px] sm:max-w-[450px] hidden md:block lg:max-w-[650px] h-auto object-cover rounded-3xl' 
                                src={profileImage} 
                                alt="Profile" 
                            />
                        </div>
                    </motion.div>
                </div>
                
                {/* Scroll Mouse - Now at the bottom of the content, not fixed */}
                <div className="mt-16 md:mt-12 mb-8 flex flex-col items-center justify-center w-full">
                    <LuMouse className="text-white text-xl sm:text-2xl md:text-3xl animate-bounce" />
                    <p className="text-white text-xs sm:text-sm mt-1 text-center">Scroll Down</p>
                </div>
            </div>
        </>
    );
}

export default Home;