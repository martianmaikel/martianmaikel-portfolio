import React from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import PictureMe from '../public/assets/ai-portrait-2.jpg'

type Props = {}

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
                        -inset-1 
                        animate-border 
                        opacity-60 
                        group-hover:opacity-100 
                        group-hover:duration-500 
                        duration-700 blur 
                        rounded-full bg-white
                        from-grad-l via-grad-mid to-grad-r p-1.5 bg-gradient-to-r
                        bg-[length:400%_400%] "></div>
                <Image
                    src={PictureMe}
                    alt='Maikel Szymanski - Web Entwicklung'
                    width={250}
                    height={250}
                    className='rounded-full relative shadow-2xl h-44 w-44 mx-auto object-cover leading-none '
                />
            </div>



            <div className='max-w-sm'>
                <p className='skilltag'>HTML & CSS</p>
                <p className='skilltag'>Next JS</p>
                <p className='skilltag'>PHP</p>
                <p className='skilltag'>MySQL</p>
            </div>

            <h4>lorem ipsum</h4>
            <button className='btn'>Kontakt</button>
        </div>
    )
}