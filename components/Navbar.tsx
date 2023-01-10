import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from '../components/ThemeToggle'
import SocialIcons from '../components/Social'
import { motion } from 'framer-motion';
import * as Fa from 'react-icons/fa'
import Logo from '../public/assets/mm-logo-sm.png'
import { Divide as Hamburger } from 'hamburger-react'

// import * as Const from '../const';

type Props = {};

const navContent = [
  {
    name: "start()",
    path: "/",
    icon: <Fa.FaHome />
  },
  {
    name: "skills()",
    path: "/",
    icon: <Fa.FaTerminal />
  },
  {
    name: "projects()",
    path: "/",
    icon: <Fa.FaBorderAll />
  },
  {
    name: "me()",
    path: "/",
    icon: <Fa.FaHandPeace />
  },
  {
    name: "contact()",
    path: "",
    icon: <Fa.FaRegEnvelope />
  },
];


export default function Navbar({ }: Props) {
  const [open, setOpen] = useState(false);
  return (

    <motion.aside className={`${open ? "" : ""} fixed md:ml-6 flex items-center h-screen z-10`}
      initial={{
        left: -500
      }}
      animate={{
        left: 0
      }}
      transition={{
        duration: 1.2
      }}
      aria-label='sidebar'>

      <div className="absolute left-2 top-2 md:hidden z-30">
        <Hamburger toggled={open} toggle={setOpen} />
      </div>

      <div className={`${open ? "scale-100 " : "-z-40 opacity-0 scale-0 md:scale-100 md:opacity-100"} 
        glass p-2 md:rounded-2xl w-screen h-full md:h-auto absolute
        md:w-auto duration-300 shadow-inner border border-bg-dark/10`}>

        <Fa.FaChevronRight className={`${open ? "rotate-180" : ""}
           absolute cursor-pointer -right-3 -top-0 w-6 h-6 bg-bg-light text-text-dark 
           rounded-full p-1 duration-700 hover:bg-orange border border-bg-dark/40
           hidden md:block`}
          onClick={() => setOpen(!open)}
        />

        {/* <Fa.FaAlignLeft className={`${open ? "rotate-180" : ""}
           absolute cursor-pointer top-3 w-10 h-10
            duration-700 hover:bg-orange border border-bg-dark/40
           block md:hidden`}
        /> */}
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src={Logo}
            alt='martianmaikel - Logo'
            width={200}
            height={200}
            className="my-5 h-auto w-12 object-center hover:scale-105 duration-300"

          />
        </Link>
        <ul>

          {navContent.map((value, key) => {
            return (

              <li key={value.name}>
                <Link className={`sidebar-icon nav-icon ${open ? "md:justify-start sm:justify-center" : ""} `} href='{ link.path }'>
                  <div className={`${open ? "" : ""} `}>
                    {value.icon}
                  </div>
                  <div className={`${open ? "scale-100 " : "scale-0 md:hidden"} ml-6 font-bold text-sm duration-300`}>
                    {value.name}
                  </div>
                </Link>
              </li>

            )
          })}
          <ThemeToggle></ThemeToggle>
          <SocialIcons></SocialIcons>
        </ul>
      </div>

    </motion.aside >

  )
}



