import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { motion } from 'framer-motion'
// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'

// function Loading() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     const handleStart = (url: any) => (url !== router.asPath) && setLoading(true);
//     const handleComplete = (url: any) => (url === router.asPath) && setTimeout(() => { setLoading(false) }, 5000);

//     router.events.on('routeChangeStart', handleStart);
//     router.events.on('routeChangeComplete', handleComplete);
//     router.events.on('routeChangeError', handleComplete);

//     return () => {
//       router.events.off('routeChangeStart', handleStart);
//       router.events.off('routeChangeComplete', handleComplete);
//       router.events.off('routeChangeError', handleComplete);
//     }
//   })
//   return (
//     <div className="bg-gray-200 w-full min-h-screen flex justify-center items-center">
//       <div className="flex min-h-screen w-full items-center justify-center bg-gray-200">
//         <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
//           <div className="h-9 w-9 rounded-full bg-gray-200"></div>
//         </div>
//       </div>
//     </div>
//   ) && loading
// }

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {/* 
      <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        }
      }}> */}

      <Component {...pageProps} />

      {/* </motion.div> */}

    </ThemeProvider>
  )
}
