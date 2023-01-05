import React from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion';
import PictureMe from '../public/assets/ai-portrait-2.jpg'

type Props = {}

const skillTags = [
    'HtmlCSS',
    'SQL',
    'PHP',
    'JavaScript',
    'C/C++',
    'Frontend',
    'Backend'
]

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, ich bin Maikel",
        ],
        // loop: true,
        typeSpeed: 100,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <h2 className='text-3xl'>
                ✌️
                {text}
                {/* <Cursor cursorColor='#F7AB0A'></Cursor> */}
            </h2>

            <h1
                className='drop-shadow-lg bg-clip-text text-transparent font-extrabold text-opacity-100 bg-gradient-to-r from-purple-400 to-pink-600'>
                Web-Entwicklung
            </h1>

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
                    width={500} height={500}
                    className='rounded-full relative h-44 w-44 mx-auto object-cover leading-none '
                />
            </div>



            <div className='max-w-sm'>
                {/* {
                    skillTags.map((value, key) => {
                        return (
                            <p
                                className='skilltag'>
                                #{value}
                            </p>
                        )
                    })
                } */}

            </div>

            <h4>lorem ipsum</h4>

            <button className='btn'>
                Kontakt
            </button>
        </div>
    )
}