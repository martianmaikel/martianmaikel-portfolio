import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { motion } from 'framer-motion'
import Image from "next/image";
import React, { useState, useEffect } from 'react'
import Logo from '../public/assets/mm-logo-sm.png'

export default function App({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500)
  }, [])
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {
        loading ?
          <div className={` dark:bg-bg-darker bg-bg-lighter w-full min-h-screen flex justify-center items-center`}>
            <motion.div
              initial={{
                scale: 0,
                rotate: 0
              }}
              animate={{
                scale: 1,
                rotate: 360
              }}
              transition={{
                duration: 0.8,
                repeat: 1,
                repeatType: "reverse"
              }}

              className="h-20 w-20 rounded-full bg-gray-200 ">
              <Image
                src={Logo}
                alt='martianmaikel - Logo'
                width={200}
                height={200}
              />
            </motion.div>
          </div>
          :

          <Component {...pageProps} />
      }
    </ThemeProvider >
  )
}
