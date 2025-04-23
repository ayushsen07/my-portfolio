import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { NavLink } from 'react'
import { motion } from "framer-motion"
import { fadeInBottomVariant, fadeInLeftVariant, fadeInRightVariant, fadeInTopVariant } from "../animations/Variants";

function MyProjects() {


    const projects = [

        {
            id: 0,
            project_name: "ElevateHub: Mentor & Mentee Platform",
            project_desc: "A full-stack Find Mentor portal for mentees/student.",
            features:
                "JWT based diffrent  authentication/authorization for mentor and mentee, allows mentees to find top mentor among mentors, Mentor can add a service, mentees can book a session with their fav. mentor, Handle zoom service for efficient handling of sessions.",
            tech_stack: ["React JS", "Node.js", "Express.js", "MongoDB", "Mongoose", "zustand"],
            //   project_img: Project3,
            project_url: "https://seh-shiksha.vercel.app",
            github_link: "https://github.com/mikasa-404/sehShiksha",
            reverse: false,
        },
        {
            id: 1,
            project_name: "VideoVibes: Video Sharing Platform",
            project_desc:
                "An Backend proficient video sharing platform where user can post, do share, like videos .",
            features:
                "Create and share podcasts by leveraging OpenAI API for on-demand audio generation from text transcripts and custom image generation for podcast thumbnails.Implemented functionalities like search by title or creator, view trending podcasts and a sticky podcast player to play, pause, skip, and mute podcasts.",
            tech_stack: ["Next.js", "TypeScript", "Convex", "OpenAI API", "Clerk", "Tailwind CSS", "Next.js", "TypeScript"],
            //   project_img: Project4,
            project_url: "https://ai-podcast-platform.vercel.app",
            github_link: "https://github.com/mikasa-404/ai-podcast-platform",
            reverse: true,
        },

        {
            id: 2,
            project_name: "Personal PortFolio Website",
            project_desc: "A fully responsive and attractive personalised portfolio page",
            features:
                "A personal portfolio showcasing modern web design and user experience with sleek layouts, smooth animations, and highlights of my skills and projects.",
            tech_stack: ["React JS", "framer-motion", "Tailwind", "Express.js"],
            //   project_img: Project2,
            project_url: "https://priya-youtube.netlify.app/",
            github_link: "https://github.com/mikasa-404/yt-clone",
            reverse: false,
        },
    ]

    return (
        <div id='projects' className='bg-[#000213] w-full pb-10'>
            <div className='w-[90%] m-auto space-y-20'>
                <motion.div variants={fadeInTopVariant}
                    initial="hidden"
                    whileInView="visible" >
                    <h3 className="text-2xl font-bold text-white  ">MY PROJECTS</h3>
                    <h1 className="text-[64px] font-bold text-white">What <span className="text-[#84AB91]">I have built</span></h1>
                </motion.div>
                <div className='space-y-40 w-[95%] m-auto'>

                    {/* left side of the card */}
                    {projects.map((project, index) => (
                        <div key={index} className='w-[50%]'>
                            <h1 className='flex text-white font-bold text-4xl pb-8 leading-15'>{project.project_name}</h1>

                            <div className='flex flex-wrap space-x-6'>
                                {project.tech_stack.map((tech, i) => (
                                    <div key={i} className='mb-6'>
                                        <span className='bg-[#84AB91] text-white text-[16px] px-3 py-1 rounded'>{tech}</span>
                                    </div>
                                ))}
                            </div>

                            <p className=' text-white text-[20px] mb-2 font-semibold'>{project.project_desc}</p>
                            <p className='text-white text-[17px]'> <span className='text-[#84AB91] font-semibold'>Features:{" "}</span>{project.features}</p>

                            <div className='flex items-center mt-10 gap-8'>
                                <button className='rounded text-white border border-[#84AB91] px-4 py-3 font-semibold hover:bg-[#84AB91]'>
                                    Visit Website
                                </button>
                                <a className='text-white text-[45px] hover:text-[#84AB91]' href="/"><FaGithub /></a>
                            </div>

                        </div>
                    ))}


                    {/* right side */}
                    <div>
                        {/* project image */}
                        sdafkjh
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MyProjects