import Head from 'next/head';
import Image from 'next/image';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div className='dark:bg-bg-darker dark:text-text-light h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar-thin scrollbar-track-text-light dark:scrollbar-track-bg-darker scrollbar-thumb-orange'>
      <Head>
        <title>Portfolio - Maikel Szymanski - Web Etnwicklung | Pirna</title>
        <meta
          name="description"
          content="Individuelle Web Entwicklung für kleine Unternehmen, Vereine und NGOs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      <section id='skills' className='snap-center'>
        <Skills />
      </section>

    </div>
  )
}
