import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaCode, FaFileCode } from 'react-icons/fa'
import { Project } from '../../data/projects'
import { motion } from 'framer-motion'
import { CgMediaLive } from 'react-icons/cg'

function ProjectCard(props: Project) {
    const cardHover = {
        hover: {
            scale: 1.03,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
        tap: {
            scale: 0.95,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    };
    return (
        <>
            <motion.div
                variants={cardHover}
                whileHover="hover"
                className="max-w-sm h-auto rounded shadow-lg border-2 border-slate-900 flex flex-col"
            >
                <img className="w-full" src={`/assets/projects/${props.headerImage}`} alt={props.name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 flex flex-col gap-y-4">
                        {props.name}
                        {props.githubUrl ?
                            <span
                                className="bg-green-600 
                            rounded-full px-3 text-[8px] font-semibold w-fit text-slate-200 "
                            >
                                Open Source
                            </span>
                            :
                            <span
                                className="bg-orange-500 
                            rounded-full px-3 text-[8px] font-semibold w-fit text-slate-200 "
                            >
                                Closed Source
                            </span>

                        }
                    </div>
                    <div className="flex flex-col">
                        <p className="text-base">
                            {props.description}
                        </p>
                        <div className="flex flex-row gap-x-2 items-center mt-4 text-xl">
                            {props.githubUrl && (
                                <Link
                                    href={props.githubUrl}
                                    target="_blank"
                                    className="rounded-full p-4 shadow-md hover:bg-orange-100 dark:hover:bg-slate-700 transition-all duration-300 ease-in-out"
                                >
                                    <FaCode />
                                </Link>
                            )}
                            {props.productionUrl && (
                                <Link
                                    href={props.productionUrl}
                                    target="_blank"
                                    className="rounded-full p-4 shadow-md hover:bg-orange-100 dark:hover:bg-slate-700 transition-all duration-300 ease-in-out"
                                >
                                    <CgMediaLive />
                                </Link>
                            )}
                        </div>
                    </div>

                </div>
                <div className="px-6 pt-4 pb-2">
                    {
                        props.tags && props.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="inline-block bg-gray-200 dark:bg-slate-600 
                                rounded-full px-3 py-1 text-[9px] font-semibold 
                                text-gray-700 dark:text-slate-300 mr-2 mb-2"
                            >
                                {tag}
                            </span>
                        ))
                    }
                </div>
            </motion.div>
        </>

    )
}

export default ProjectCard