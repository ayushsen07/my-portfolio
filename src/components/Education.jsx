import React from 'react'
import clgLogo from '../assets/clg_logo.png'
import BulletPoint from "../assets/Point_logo.png"
import {motion} from "framer-motion"
import { fadeInBottomVariant, fadeInLeftVariant, fadeInRightVariant, fadeInTopVariant } from "../animations/Variants";

function Education() {
    return (
        <div className='bg-[#000213] h-[600px]'>
            <div className='w-[90%] m-auto h-[80%] flex flex-col justify-around'>
                <motion.div variants={fadeInTopVariant}
                            initial="hidden"
                            whileInView="visible" >
                    <h3 className="text-2xl font-bold text-white  pb-3">MY EDUCATION</h3>
                    <h1 className="text-6xl font-bold text-white pb-14">Where <span className="text-[#84AB91]">I'm Learning</span></h1>
                </motion.div>

                <div className='flex gap-10'>
                    {/* image section on the right side   */}
                    <motion.div className='' variants={fadeInLeftVariant}
                                initial="hidden"
                                whileInView="visible">
                        <img className='w-[200px] h-[200px]' src={clgLogo} alt="Clg_Logo" />
                    </motion.div>
                    {/* content section on the left */}
                    <motion.div className='pt-6' variants={fadeInRightVariant}
                                initial="hidden"
                                whileInView="visible">
                        <h1 className='text-white text-3xl font-serif font-semibold pb-3'>RGPV University</h1>
                        <h3 className='text-white font-semibold text-2xl pb-1'>Bachlore's of Technology in Computer Science</h3>
                        <p className='text-white font-semibold text-2xl pb-1'>August 2022 - May 2026</p>
                        <dl className=" space-y-2">
                            <dt className="text-white text-2xl font-semibold">Active Member of College Organizations and Societies</dt>
                            <dd className="text-white ml-8 text-lg text-gray-700">• Head Coordinator, TNP Cell</dd>
                            <dd className="text-white ml-8 text-lg text-gray-700">• Public Representative, ISTE SC MANIT</dd>
                        </dl>


                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Education