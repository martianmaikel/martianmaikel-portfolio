import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion';
import PictureMe from '../public/assets/ai-portrait-2.jpg'
import { DiGithubBadge } from 'react-icons/di'
import { SiPhp, SiJavascript, SiHtml5, SiCss3, SiMysql, SiTailwindcss } from "react-icons/si";


type Props = {}

export default function Hero({ }: Props) {
    const [nameText, count] = useTypewriter({
        words: [
            "Hi, ich bin Maikel",
        ],
        // loop: true,
        typeSpeed: 100,
        delaySpeed: 2000
    })

    const [servicesText, count2] = useTypewriter({
        words: [
            "UI Design",
            "Beratung",
            "Refactoring",
            "Software Entwicklung",
            "Optimierung",
        ],
        loop: true,
    })
    return (
        <motion.div className='h-screen cursor-default flex flex-col space-y-12 items-center justify-center text-center overflow-hidden'
            initial={{
                scale: 0
            }}
            animate={{
                scale: 1
            }}
            transition={{
                duration: 0.8
            }}
        >
            <div className='mb-4 grid grid-cols gap-4'>
                <h2 className='text-3xl font-standard'>
                    ✌️
                    {nameText}
                </h2>
                <h1 className='drop-shadow-lg font-extrabold '>
                    Software Entwickler
                </h1>
                <h3>
                    <span className='text-[#ff9f32]'>{'>   '}</span>
                    {servicesText}
                    <span className='text-[#ff9f32]'>{'   <'}</span>
                </h3>
            </div>


            <div className='relative group'>
                <div className="absolute 
                        -inset-3
                        animate-border 
                        opacity-50 
                        group-hover:opacity-100 
                        group-hover:duration-500 
                        duration-700 blur 
                        rounded-full bg-white
                        from-grad-l via-grad-mid to-grad-r p-1.5 bg-gradient-to-r
                        bg-[length:400%_400%] "></div>
                <Image
                    src={PictureMe}
                    alt='Maikel Szymanski - Web Entwicklung'
                    width={200} height={200}
                    className='rounded-full relative h-44 w-44 mx-auto object-cover leading-none '
                />
            </div>

            <div className=''>
                <div className="grid sm:grid-cols-3 text-4xl gap-4">
                    <div className='flex flex-row space-x-6 items-center justify-center'>
                        <SiHtml5 className='text-[#d74b24] hover:brightness-125 duration-300'></SiHtml5>
                        <SiCss3 className='text-[#2548d7] hover:brightness-125 duration-300'></SiCss3>
                        <SiTailwindcss className='text-[#35b3eb] hover:brightness-125 duration-300'></SiTailwindcss>
                    </div>
                    <div className='flex flex-row space-x-6 items-center justify-center'>
                        <span className='text-lg font-extrabold hover:brightness-125 duration-300 font-console'>Full Stack</span>
                    </div>
                    <div className='flex flex-row space-x-6 items-center justify-center'>
                        <SiJavascript className='dark:text-[#ffe732] text-[#ff9f32] hover:brightness-125 duration-300'></SiJavascript>
                        <SiPhp className='text-[#4b568c] hover:brightness-125 duration-300'></SiPhp>
                        <SiMysql className='text-[#e68a10] hover:brightness-125 duration-300'></SiMysql>
                    </div>



                </div>
            </div>

            <button className='btn'>
                Kontakt
            </button>

            <div className='text-center'>
                <div className="flex flex-row items-center justify-center">

                    <Link href="https://github.com/martianmaikel/martianmaikel-portfolio" target="_blank" className='text-5xl hover:text-github dark:brightness-200 duration-300'>
                        <DiGithubBadge />
                    </Link>
                </div>
            </div>


        </motion.div>
    )
}