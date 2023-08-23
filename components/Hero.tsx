import React from 'react'
import Image from 'next/image'
import ReactTypingEffect from 'react-typing-effect';
import { motion } from 'framer-motion';
import PictureMe from '../public/assets/ai-portrait-2.jpg'
import { DiGithubBadge } from 'react-icons/di'
import { SiPhp, SiJavascript, SiHtml5, SiCss3, SiMysql, SiTailwindcss } from "react-icons/si";
import Portrait from '../public/assets/maikel-portrait-1-grey-square.png'
import Button from './Shared/Button';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-scroll';
import { BiSolidMap } from 'react-icons/bi';
import { FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import Skills from './Skills';
import RevealOnScroll from './Animations/RevealOnScroll';
import DarkModeToggle from './Shared/DarkModeToggle';

type Props = {}

export default function Hero({ }: Props) {
    return (
        <>
            <div className="container relative mx-auto min-h-screen h-auto flex flex-col pt-32 ">
                <div className="flex-1 flex flex-col lg:flex-row justify-center items-center gap-4">
                    <div className="w-full md:w-2/3 mb-6 md:mb-0 flex flex-col">
                        <RevealOnScroll>
                            <h6 className="uppercase text-[14px] md:text-[16px] tracking-[2px] font-[600] mb-[20px] md:mb-[30px]">✌️, ich bin
                                <span className='drop-shadow-md text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 inline text-xl font-console ml-2'>Maikel</span>
                            </h6>
                            <h1 className='text-2xl lg:text-5xl dark:text-orange-500'>
                                <span id="type-it" >
                                    <ReactTypingEffect text={
                                        [
                                            'Full Stack Web Developer',
                                            'Beratung', 'Konzeption', 'Entwicklung',
                                        ]
                                    }
                                        speed={50} staticText={'> '} eraseSpeed={20} typingDelay={700} />
                                </span>
                            </h1>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="lg:w-1/2 my-6 ">
                                <p>
                                    <b className='themed'>Full Stack Web Entwickler</b> und habe mich auf die Entwicklung von Webseiten und Webanwendungen spezialisiert.
                                    Hier findest Du Informationen zu meinem Tech Stack, Projekten und weiterer Arbeitserfahrung.
                                </p>
                                <p>
                                    Ich bin auf der Suche nach neuen Herausforderungen und freue mich über Deine Kontaktaufnahme.
                                </p>
                            </div>

                            <div className="pt-[10px] flex flex-row gap-4">
                                <Link className="px-btn px-btn-theme" to="contactus">Kontakt</Link>
                                <div className='sm:block md:hidden'>
                                    <DarkModeToggle />
                                </div>
                            </div>
                        </RevealOnScroll>

                    </div>

                    <div className='lg:w-1/3 flex flex-col'>
                        <RevealOnScroll>
                            <div className="relative rounded-full overflow-hidden border-4 border-bg-dark 
                            dark:border-slate-900 bg-orange-lighter aspect-w-1 aspect-h-1
                            hover:border-orange-lighter hover:bg-opacity-90 hover:bg-bg-orange-900 shadow-lg
                            transition-all duration-300 ease-in-out">

                                {/* Bild */}
                                <Image
                                    src={Portrait}
                                    alt="Maikel Szymanski - Web Entwicklung"
                                    className="object-cover w-full h-full"
                                />

                                {/* make an overlay div with social media icons in the middle and make it appear on hover, the background should have a opacity of 0.5, icons hsould be white  */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out">
                                    <div className="flex gap-4">
                                        <a href="https://github.com/martianmaikel" className=''>
                                            <DiGithubBadge className="text-white text-6xl hover:text-purple-300 transition-all duration-100 ease-in-out" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/maikel-szymanski-bb01241a2/" className=''>
                                            <FaLinkedinIn className="text-white text-6xl hover:text-linkedin  transition-all duration-100 ease-in-out" />
                                        </a>
                                        {/* <a href="">
                                <DiGithubBadge className="text-white text-8xl" />
                            </a> */}
                                    </div>
                                </div>

                            </div>
                            <div className="flex justify-center items-center mt-4">
                                <span className='flex gap-2 text-[16px] items-center text-slate-600 dark:text-slate-300'>
                                    <BiSolidMap />  Germany
                                </span>
                            </div>
                        </RevealOnScroll>


                    </div>
                </div>
                <RevealOnScroll width='w-full'>
                    <div id="skills" className='bg-slate-700 text-slate-200 border-4 border-slate-900 dark:border-none dark:bg-opacity-0 rounded-lg my-20'>
                        <Skills />
                    </div>
                </RevealOnScroll>



            </div>

        </>

    )

}