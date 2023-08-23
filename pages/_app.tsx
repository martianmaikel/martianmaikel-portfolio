import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { motion } from 'framer-motion'
import Image from "next/image";
import React, { useState, useEffect } from 'react'
import Logo from '../public/assets/mm-logo-sm.png'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider >
  )
}
