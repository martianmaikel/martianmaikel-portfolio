import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll } from 'framer-motion';
import Button from './Shared/Button';
import { FaDownload, FaLinkedin } from 'react-icons/fa';
import RevealOnScroll from './Animations/RevealOnScroll';
import DottedBackground from './Shared/DottedBackground';
import { DiGithubBadge } from 'react-icons/di';
import { BiLogoUpwork } from 'react-icons/bi';
import { MdMail } from 'react-icons/md';

type Props = {}

const calculateAge = () => {
    const birthDate = new Date('1997-10-13');
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    // Überprüfen, ob der Geburtstag in diesem Jahr noch bevorsteht
    if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
            currentDate.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
}

export default function AboutMe({ }: Props) {

    const openCV = () => {
        const url = 'https://resume.io/r/khfcNDpWt';
        window.open(url, '_blank');
    }

    return (
        <>
            <div className="container mx-auto  p-16 my-24">

                <h1 className="text-4xl">Über mich</h1>

                <div className="flex flex-col md:flex-row justify-between items-center  gap-4">
                    <div className="w-full md:w-1/2 flex flex-col md:pr-32">
                        <RevealOnScroll width='w-full'>
                            <div className='flex md:flex-row flex-col gap-4 justify-center my-4 custom-border-y gap-x-20 py-4 '>
                                <div className="flex flex-col gap-y-8">
                                    <div className="flex flex-col gap-4">
                                        <div>
                                            <ul className='list-none text-center md:text-left'>
                                                <li className='font-console text-lg text-slate-500'>Name</li>
                                                <li className='font-bold'>Maikel Szymanski</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className='list-none text-center md:text-left'>
                                                <li className='font-console text-lg text-slate-500'>Alter</li>
                                                <li className='font-bold'>{calculateAge()}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-8">
                                    <div className="flex flex-col gap-4">
                                        <div>
                                            <ul className='list-none text-center md:text-left'>
                                                <li className='font-console text-lg text-slate-500'>Erfahrung</li>
                                                <li className='font-bold'>+ 4 Jahre</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className='list-none text-center md:text-left'>
                                                <li className='font-console text-lg text-slate-500'>Rolle</li>
                                                <li className='font-bold'>Freelancer</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-8">
                                    <div className="flex flex-col gap-4">
                                        <div>
                                            <ul className='list-none text-center md:text-left'>
                                                <li className='font-console text-lg text-slate-500'>Job</li>
                                                <li className='font-bold'>Full Stack Developer</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className='list-none text-center md:text-left'>
                                                <li className='font-console text-lg text-slate-500'>Standort</li>
                                                <li className='font-bold'>Dresden, Deutschland</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            <p>
                                Derzeit absolviere ich ein Fernstudium im Bereich Softwareentwicklung,
                                um meine Fähigkeiten weiter zu vertiefen und stets auf dem neuesten Stand zu bleiben.
                            </p>

                        </RevealOnScroll>
                        <RevealOnScroll>
                            <p>
                                Mein Fokus liegt im Backend-Bereich,
                                wo ich meine Leidenschaft für die Entwicklung von skalierbaren und robusten Anwendungen auslebe.
                                Ich habe umfangreiche Erfahrung in der Arbeit mit PHP und dem Laravel-Framework.
                                Die Möglichkeit, komplexe Probleme zu lösen und effiziente Backend-Systeme zu erstellen,
                                treibt mich immer wieder an.
                            </p>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            <p>
                                Auf der anderen Seite des
                                Spektrums begeistere ich mich für das Frontend.
                                React JS ist meine Wahl, wenn es darum geht,
                                interaktive und benutzerfreundliche Benutzeroberflächen zu gestalten.
                                Die Verwendung von Tailwind CSS ermöglicht es mir, effizient und ansprechend zu gestalten,
                                ohne Kompromisse bei der Performance einzugehen.
                            </p>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            <div className="flex flex-col gap-6 items-center justify-center">
                                <Button className='mt-4' icon={<FaDownload />} onClick={openCV}>
                                    Lebenslauf
                                </Button>
                                <div className='flex flex-row gap-x-2 items-center'>
                                    <MdMail />
                                    <Link
                                        href='mailto:maikel.szy@gmail.com'
                                        className='hover:text-orange-500 transition-all duration-100 ease-in-out hover:scale-[101%]'
                                    >
                                        maikel.szy.developer@gmail.com
                                    </Link>
                                </div>
                            </div>

                        </RevealOnScroll>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-1 flex-col md:flex-row justify-center items-center">
                        <RevealOnScroll>
                            <div className='flex flex-row md:flex-col md:my-0 my-8 gap-8 items-center justify-center'>
                                <Link href="https://github.com/martianmaikel" target={'_blank'}>
                                    <DiGithubBadge className='text-6xl dark:text-white text-slate-800 hover:text-purple-300 transition-all duration-100 ease-in-out' />
                                </Link>
                                <Link href="https://www.linkedin.com/in/maikel-szymanski-bb01241a2/" target={'_blank'}>
                                    <FaLinkedin className='text-6xl dark:text-white text-slate-800 hover:text-linkedin transition-all duration-100 ease-in-out' />
                                </Link>
                                <Link href="https://www.upwork.com/freelancers/~015b17189472e95ca8" target={'_blank'}>
                                    <BiLogoUpwork className='text-6xl dark:text-white text-slate-800 hover:text-[#14a800] transition-all duration-100 ease-in-out' />
                                </Link>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="border-4 border-slate-600 dark:border-slate-900 rounded-lg overflow-hidden sm:w-full md:w-2/3 lg:w-1/2 mx-auto">
                                <img src="/assets/portrait.jpg" alt="" className='object-cover h-full' />
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>

            </div>

        </>
    )

}