import React from 'react'
import { TypeAnimation } from "react-type-animation";
function Main() {
  return (
    <>
    {/* home page */}
      <div className='h-[calc(100vh-100px)] w-full bg-[#000213] flex justify-center'>
        <div className='w-[85%] flex justify-between items-center'>
          {/* left section */}
          <div className='h-[80%] flex flex-col'>
            <h1 className='text-3xl font-semibold text-white mb-[50px] mt-6'>Hello, I'm <span className="text-[#84AB91] text-6xl font-bold">Ayush Sen!</span></h1>
            <h2 className='text-4xl font-semibold text-white mb-6'>
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
            <p className='text-[1.1rem] leading-[1.7rem] mt-2 text-white'>I'm a passionate Software Developer with a strong background in backend development. <br /> Pre-final year CSE  studednt at RGPV Bhopal, I have a deep interest in building scalable web applications. <br /> Always eager to learn, solve complex problems, and contribute to impactful projects.</p>
          </div>

          {/* right section */}
          <div className=''>
            <h1 className='text-white'>photo</h1>
          </div>

        </div>
      </div>
    </>
  )
}

export default Main