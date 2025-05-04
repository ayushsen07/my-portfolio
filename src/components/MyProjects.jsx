import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { NavLink } from 'react'
import { motion } from "framer-motion"
import { fadeInBottomVariant, fadeInLeftVariant, fadeInRightVariant, fadeInTopVariant } from "../animations/Variants";
import Project1 from "../assets/Project_1.png"
import { div } from 'framer-motion/client';

function MyProjects() {


    const projects = [

        {
            id: 0,
            project_name: "ElevateHub: Mentor & Mentee Platform",
            project_desc: "A full-stack Find Mentor portal for mentees/student.",
            features:
                "JWT based diffrent  authentication/authorization for mentor and mentee, allows mentees to find top mentor among mentors, Mentor can add a service, mentees can book a session with their fav. mentor, Handle zoom service for efficient handling of sessions.",
            tech_stack: ["React JS", "Node.js", "Express.js", "MongoDB", "Mongoose", "zustand"],
            project_img: Project1,
            project_url: "",
            github_link: "https://github.com/ayushsen07",
            reverse: false,
        },
        {
            id: 1,
            project_name: "VideoVibes: Video Sharing Platform",
            project_desc:
                "An Backend proficient video sharing platform integrated tweet system.",
            features:
                "Built a scalable video-sharing platform with tweet-like features, enabling channel creation, video uploads, and user engagement. Optimized RESTful APIs improved response time by 40%, while JWT-based authentication enhanced security by 50%. Refactored modules reduced codebase size by 20%, boosting maintainability and performance..",
            tech_stack: ["Node.js", "JavaScript", "Express.js", "MongoDB", "Cloudinary", "Postman",],
              project_img: Project1,
            project_url: "",
            github_link: "https://github.com/ayushsen07/VideoVibes",
            reverse: true,
        },

        {
            id: 2,
            project_name: "Personal PortFolio Website",
            project_desc: "A fully responsive and attractive personalised portfolio page",
            features:
                "A personal portfolio showcasing modern web design and user experience with sleek layouts, smooth animations, and highlights of my skills and projects.",
            tech_stack: ["React JS", "framer-motion", "Tailwind", "Express.js"],
              project_img: Project1,
            project_url: "",
            github_link: "https://github.com/ayushsen07/my-portfolio",
            reverse: false,
        },
    ]

    return (
        <div id='projects' className='bg-[#000213] w-full pt-[150px] pb-10 overflow-hidden'>
            <div className='w-[90%] m-auto space-y-20'>
                <motion.div
                    variants={fadeInTopVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                    <h3 className="sm:text-2xl text-[18px] font-bold text-white">MY PROJECTS</h3>
                    <h1 className="sm:text-6xl text-4xl font-bold text-white">What <span className="text-[#84AB91]">I have built</span></h1>
                </motion.div>

                <div className='space-y-40 '>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`flex flex-col wra ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                            variants={fadeInTopVariant}
                            initial="hidden"
                            whileInView="visible"
                        >
                            {/* Content Section */}
                            <motion.div className='w-full md:w-[50%] space-y-4' 
                            variants={fadeInLeftVariant}
                            initial="hidden"
                            whileInView="visible">
                                <h1 className='text-white font-bold md:text-4xl text-[24px] pb-4 leading-tight'>{project.project_name}</h1>

                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tech_stack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className='bg-[#84AB91] text-white text-[14px] px-3 py-1 rounded inline-block mb-2'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <p className='text-white text-[20px] mb-2 font-semibold'>{project.project_desc}</p>
                                <p className='text-white text-[17px]'>
                                    <span className='text-[#84AB91] font-semibold'>Features:{" "}</span>
                                    {project.features}
                                </p>

                                <div className='flex items-center mt-6 gap-6'>
                                    <button className='rounded text-white border border-[#84AB91] px-4 py-2 font-semibold hover:bg-[#84AB91] transition duration-300'>
                                        Visit Website
                                    </button>
                                    <a
                                        className='text-white text-[32px] hover:text-[#84AB91] transition duration-300'
                                        href={project.github_link}
                                        target='_blank'
                                        rel="noreferrer"
                                    >
                                        <FaGithub />
                                    </a>
                                </div>
                            </motion.div>

                            {/* Image Section */}
                            <motion.div className='w-full md:w-[50%] flex justify-center' 
                            variants={fadeInRightVariant}
                            initial="hidden"
                            whileInView="visible">
                                <div className='relative w-[90%] aspect-video rounded-lg overflow-hidden border- border-[#84AB91] shadow-xl'>
                                    {typeof project.project_img === 'string' ? (
                                        <img
                                            src={project.project_img}
                                            alt={project.project_name}
                                            className='w-full h-full object-cover'
                                        />
                                    ) : (
                                        // If project_img is a React component
                                        project.project_img
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default MyProjects