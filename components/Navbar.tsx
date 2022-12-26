import React from 'react';
import Link from "next/link";
import ThemeToggle from '../components/ThemeToggle'
import { motion } from 'framer-motion';
import * as Fa from 'react-icons/fa'
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
    path: "/",
    icon: <Fa.FaRegEnvelope />
  },
];

export default function Navbar({ }: Props) {
  return (
    <motion.aside
      initial={{
        y: -2000,
        opacity: 0.8,
        scale: 0
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.7
      }}

      className='fixed flex flex-col h-screen items-center justify-center text-text-light ml-3'
      aria-label='Sidebar'>
      <ul>
        {navContent.map((value, key) => {
          return (

            <li key={value.name} className='rounded-full bg-space-blue md:text-xl sm:text-lg hover:ring-2 ring-space-blue dark:hover:ring-text-light transition-all duration-300 focus:outline-none dark:bg-text-light'>
              <Link className='group p-3 my-2 flex justify-center items-center w-full text-text-light hover:text-[#fff] transition-all delay-100 dark:text-text-dark' href='{ link.path }'>
                <div className='hidden group-hover:ease-in duration-200'>
                  {value.name}
                </div>
                <div>
                  {value.icon}
                </div>
              </Link>
            </li>

          )
        })}
      </ul>

      <ThemeToggle></ThemeToggle>

    </motion.aside>

  )
}



