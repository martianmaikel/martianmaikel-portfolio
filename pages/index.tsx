import Head from 'next/head';
import Image from 'next/image';
import { useRef } from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';

export default function Home() {
  return (
    <div className='dark:bg-bg-darker dark:text-text-light dark:scrollbar-track-bg-darker
    h-auto md:h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0 scrollbar-track-text-light  scrollbar-thumb-orange scrollbar-thin'>
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
      <section id='projects' className='snap-center'>
        <Projects />
      </section>
      <section id='about' className='snap-center'>
        <AboutMe />
      </section>

    </div>
  )
}
