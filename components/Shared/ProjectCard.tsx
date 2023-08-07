import React from 'react'
import PropTypes from 'prop-types';
import { DiGithubBadge } from 'react-icons/di'
import { CgMediaLive } from 'react-icons/cg'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    titel: string,
    text: string,
    features?: string[],
    logo?: string,
    subject: string,
    githubLink?: string,
    prodLink?: string,
    usedTech: string[]
}


export default function ProjectCard({ titel, text, features, logo, subject, githubLink, prodLink, usedTech }: Props) {
    return (
        <div className='glass p-10 rounded-lg mx-4 md:mx-0 md:hover:-translate-y-4 md:opacity-80 hover:md:opacity-100 hover:md:brightness-125 duration-200'>

            <div className="flex flex-col">
                <div className='mb-8'>
                    <div className='flex justify-center items-center'>
                        <Image src={logo ? logo : '/assets/mm-logo-sm.png'} loading='lazy' width="90" height="90" alt='Project Logo' className='float-right ml-6 my-2'></Image>
                    </div>
                </div>

                <div>
                    <div className="flex flex-row justify-between items-center">
                        <span className='text-3xl font-extrabold brightness-90'>{titel}</span>
                        <div className='flex flex-row items-center'>
                            {
                                !githubLink ?
                                    ''
                                    :
                                    <span className='text-4xl'>
                                        <Link href={githubLink} title='Project on GitHub' target='_blank'>
                                            <DiGithubBadge
                                                className='hover:brightness-200 hover:scale-105 duration-200 text-[#b83af3]'>
                                            </DiGithubBadge>
                                        </Link>
                                    </span>
                            }

                            {
                                !prodLink ?
                                    ''
                                    :
                                    <span className='text-3xl'>
                                        <Link href={prodLink} title='Live Project' target='_blank'>
                                            <CgMediaLive
                                                className='hover:brightness-200 hover:scale-105 duration-200 text-orange-lighter'>
                                            </CgMediaLive>
                                        </Link>
                                    </span>
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <span className='brightness-75 italic'>{subject}</span>
                </div>

                <hr className='my-3' />

                <div>
                    <div className='flex flex-wrap justify-center items-center space-x-2'>
                        {
                            usedTech.map((value, key) => {
                                return (
                                    <span key={key} className='dark:bg-bg-darker bg-bg-lighter font-bold p-1 my-1 rounded-lg text-xs hover:-translate-y-1 shadow-lg duration-200 cursor-pointer'>
                                        #{value}
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>

                <hr className='my-3' />

            </div>
            <div>
                <Image src={logo ? logo : '/assets/mm-logo-sm.png'} loading='lazy' width="80" height="80" alt='Project Logo' className='float-right ml-6 my-2'></Image>
                <p className='text-justify brightness-75'>{text}</p>
            </div>
            <div className='flex mt-8 items-center justify-center'>
                {
                    !githubLink ?
                        ''
                        :
                        <Link href={githubLink} title='Watch on GitHub' target='_blank' className=''>
                            <button className='btn'>
                                Code on GitHub
                            </button>
                        </Link>
                }

            </div>
        </div >
    )
}