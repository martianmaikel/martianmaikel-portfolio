import React, { useEffect, useState } from 'react';

import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import MainLayout from '../components/Layouts/MainLayout';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Maikel = () => {
  return (
    <>
      <div id="hero" data-scroll-data="0">
        <Hero />
      </div>
      <div id="services" data-scroll-data="1">
        <Services />
      </div>
      <div id="me" data-scroll-data="2">
        <AboutMe />
      </div>
      <div id="projects" data-scroll-data="3">
        <Projects />
      </div>
      <Footer />
    </>
  )
};

export default function Home() {
  const [isLogoAnimationComplete, setIsLogoAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLogoAnimationComplete(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <MainLayout>
      {isLogoAnimationComplete && <Maikel />}
    </MainLayout>
  )
}
