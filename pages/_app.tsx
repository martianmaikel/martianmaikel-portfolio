import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { motion } from 'framer-motion'
import Image from "next/image";
import React, { useState, useEffect } from 'react'
import Logo from '../public/assets/mm-logo-sm.png'
import { useRouter } from 'next/router';
import CustomCursor from '../components/Shared/CustomCursor';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);
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
          <>
            {/* <CustomCursor /> */}
            <Component {...pageProps} />
          </>

      }
    </ThemeProvider >
  )
}
