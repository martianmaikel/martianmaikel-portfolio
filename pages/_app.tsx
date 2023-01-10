import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { motion } from 'framer-motion'
import Image from "next/image";
import React, { useState, useEffect } from 'react'
import Logo from '../public/assets/mm-logo-sm.png'

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {
        loading ?
          <div className={` dark:bg-bg-darker bg-bg-lighter w-full min-h-screen flex justify-center items-center`}>
            <motion.div
              initial={{
                scale: 0.7,
              }}
              animate={{
                scale: [1, 1.2, 1, 1.2, 1, 1.4, 0],
              }}
              transition={{
                duration: 0.8,
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
