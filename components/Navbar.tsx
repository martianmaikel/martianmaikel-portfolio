import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from '../components/ThemeToggle'
import SocialIcons from '../components/Social'
import { motion } from 'framer-motion';
import * as Fa from 'react-icons/fa'
import Logo from '../public/assets/mm-logo-sm.png'

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
        duration: 1.3
      }}
      aria-label='sidebar'>
      <div className={`${open ? "w-44" : "w-20"} glass p-2 rounded-2xl w-100 relative transition-all duration-200 shadow-inner border border-bg-dark/10`}>

        <Fa.FaChevronRight className={`${open ? "rotate-180" : ""}
           absolute cursor-pointer -right-3 -top-0 w-6 h-6 bg-bg-light text-text-dark 
           rounded-full p-1 transition-all duration-700 hover:bg-orange border border-bg-dark/40`}
          onClick={() => setOpen(!open)}
        />

        <Link href='/' className='flex justify-center items-center'>
          <Image
            src={Logo}
            alt='martianmaikel - Logo'
            width={200}
            height={200}
            className="my-5 h-auto w-12 object-center"
          />
        </Link>
        <ul>

          {navContent.map((value, key) => {
            return (

              <li key={value.name}>
                <Link className={`sidebar-icon nav-icon ${open ? "justify-start" : ""} `} href='{ link.path }'>
                  <div className={`${open ? "" : ""} `}>
                    {value.icon}
                  </div>
                  <div className={`${open ? "scale-100 duration-300" : "scale-0 hidden duration-100"} ml-4 text-sm`}>
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



