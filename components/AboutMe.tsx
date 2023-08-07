import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll } from 'framer-motion';

type Props = {}

export default function AboutMe({ }: Props) {

    return (
        <div className="relative w-full h-full">
            <motion.div
                className='bg-orange absolute md:w-1/2 md:h-full md:right-0 w-full h-1/2 bottom-0'
                initial={{ x: 1000 }}
                whileInView={{ x: 0 }}

            // viewport={{ once: f alse }}
            >

            </motion.div>
            <div className="container mx-auto">
                <div className='flex flex-col md:flex-row items-center justify-center h-screen md:space-x-10'>
                    <div className='md:flex-inital text-justify w-1/2'>
                        <h2 className='text-3xl'>lorem ipsum</h2>
                        <span className='brightness-75'>Full Stack Web Entwickler</span>
                    </div>
                    <div className='md:flex-initial w-1/2 md:h-1/3 sm:h-full'>
                        <div className="relative">
                            <Image src={'/assets/keychron.jpg'} width='200' height='200' alt="Keychron K2 Keyboard" className='rounded-xl bottom-0 hidden md:absolute' />
                            <Image src={'/assets/workstation-compressed.jpg'} width='200' height='200' alt="Keychron K2 Keyboard" className='left-0 top-0 my-auto hidden md:absolute' />
                            <Image src={'/assets/ai-portrait.jpg'} width='400' height='200' alt="Keychron K2 Keyboard" className='rounded-lg absolute top-0 bottom-0 right-0 ' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}