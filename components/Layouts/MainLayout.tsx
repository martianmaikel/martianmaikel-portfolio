import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Navbar from '../Navbar'

type Props = {
  children: React.ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Software Entwickler - Maikel Szymanski</title>
        <meta
          name="description"
          content="Individuelle Web Entwicklung" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className='dark:bg-bg-darker dark:text-text-light dark:scrollbar-track-bg-darker
    h-auto overflow-x-hidden z-0 scrollbar-track-text-light  scrollbar-thumb-orange scrollbar-thin'>
      </div> */}

      <Navbar />
      <main className='wrapper'>
        {children}
      </main>
    </>


  )
}

export default MainLayout