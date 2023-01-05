import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import * as Fa from 'react-icons/fa'

type Props = {};

const socialContent = [
    {
        name: "Twitter",
        link: "https://twitter.com/martianmaikel",
        icon: <Fa.FaTwitter />,
        color: 'twitter'
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/martianmaikel/",
        icon: <Fa.FaInstagram />,
        color: 'instagram'
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/maikel-szymanski-bb01241a2/",
        icon: <Fa.FaLinkedin />,
        color: 'linkedin'
    },
    {
        name: "Github",
        link: "https://github.com/martianmaikel",
        icon: <Fa.FaGithub />,
        color: 'github'
    }
];

export default function Social({ }: Props) {
    return <>{
        socialContent.map((value, key) => {
            return (

                <li key={value.name} >
                    <Link target={'_blank'} className={`sidebar-icon ${value.color} 
                        bg-opacity-60 hover:bg-opacity-100 social-icon items-center`} href={`${value.link}`}>
                        <div>
                            {value.icon}
                        </div>
                    </Link>
                </li>

            )
        })
    }</>
}



