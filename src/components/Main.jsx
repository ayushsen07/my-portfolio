import React from 'react'
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profileImage from '../utils/profile.jpg'
import {LuMouse} from 'react-icons/lu'
function Main() {
  return (
    <>
      {/* home page */}
      <div className='h-[calc(100vh-100px)] w-full bg-[#000213] flex justify-center'>
        <div className='w-[85%] flex justify-around items-center'>
          {/* left section */}
          <div className='h-[80%] flex flex-col'>
            <h1 className='text-3xl font-bold text-white mb-[50px] mt-6'>Hello, I'm <span className="text-[#84AB91] text-6xl font-bold">Ayush Sen!</span></h1>
            <h2 className='text-4xl font-bold text-white mb-6'>
              A {'   '}
              <TypeAnimation className='text-[#84AB91]'
                sequence={[
                  "FullStack developer",
                  1000,
                  "Problem solver",
                  1000,
                  "Tech enthusiast",                                                                                                                                                                            



                  
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className='text-[1.1rem] mt-2 text-white w-[]'>I'm a passionate Software Developer with a strong background in backend development. <br /> Pre-final year CSE  studednt at RGPV Bhopal, I have a deep interest in building scalable web applications. <br /> Always eager to learn, solve complex problems, and contribute to impactful projects.</p>

            {/* social links */}
            <div className="flex gap-4 mt-10">
              <a href="https://www.linkedin.com/in/ayushsen07" target="_blank" rel="noopener noreferrer"
                className="bg-white p-2 rounded-full">
                <FaLinkedin className="text-[#0A66C2] text-3xl" />
              </a>

              <a href="https://github.com/ayushsen07" target="_blank" rel="noopener noreferrer"
                className="bg-gray-100 p-2 rounded-full">
                <FaGithub className="text-black text-3xl" />
              </a>

              <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer"
                className="bg-yellow-500 p-2 rounded-full">
                <SiLeetcode className="text-black text-3xl" />
              </a>
            </div>

          </div>

          {/* right section */}
          <div className=''>
            <div className=''>
              <img className='w-[350px] h-[480px] rounded-3xl' src={profileImage} alt="" />
            </div>
          </div>

          {/* scroll mouse */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <LuMouse className="text-white text-4xl animate-bounce" />
          <p className="text-white text-sm mt-2">Scroll Down</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Main