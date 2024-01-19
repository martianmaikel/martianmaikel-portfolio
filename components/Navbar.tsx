import React, { useEffect, useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Logo from './Animations/Logo';
import PopInOnLoad from './Animations/PopInOnLoad';
import DarkModeToggle from './Shared/DarkModeToggle';
import { Squash as Hamburger } from 'hamburger-react'// import { Link } from "react-scroll";

type TabProps = {
  id: number;
  name: string;
  link: string;
  key: number;
}
function Tab(props: TabProps) {
  return (
    <li>
      <Link data-scroll-nav={props.id} smooth={true} to={props.link}>
        <span className="font-console">{props.name}</span>
      </Link>
    </li>
  );
}

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const headerMenus = [
    { id: 0, name: 'start()', scroll_link: 'hero' },
    { id: 1, name: 'services()', scroll_link: 'services' },
    { id: 2, name: 'me()', scroll_link: 'me' },
    { id: 3, name: 'projects()', scroll_link: 'projects' },
    // { id: 4, name: 'contact()', scroll_link: 'contact' }
  ]
  useEffect(() => {
    // Header fixing
    function headerFixing() {
      const scrollTop = window.scrollY;
      const body = document.body;

      if (scrollTop >= 100) {
        body.classList.add('fixed-header');
      } else {
        body.classList.remove('fixed-header');
      }
    }

    // Header nav link activation
    function headerNavActive() {
      const winTop = window.scrollY;
      const sections = document.querySelectorAll('[data-scroll-data]');

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.getBoundingClientRect().height;
        const isActive = winTop >= sectionTop - 10 && winTop < sectionTop - 10 + sectionHeight;

        const navLink = document.querySelector(`[data-scroll-nav="${section.getAttribute('data-scroll-data')}"]`);
        if (navLink) {
          if (isActive) {
            navLink.classList.add('active');
          } else {
            navLink.classList.remove('active');
          }
        }
      });
    }
    // Scrolling event
    window.addEventListener('scroll', () => {
      // Call header fixing method
      headerFixing();
      // Call header nav link activation method
      headerNavActive();
    });

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', headerFixing);
      window.removeEventListener('scroll', headerNavActive);
    };
  }, []);
  return (
    <>
      <header className={`main-header fixed left-0 right-0 z-[111] ${isOpenMenu && '!bg-slate-50 dark:!bg-slate-700'}`}>

        <div className="lg:px-20 px-5 mx-auto flex items-center justify-between one-page-nav relative py-5 lg:py-3">
          <Logo />


          <PopInOnLoad className={isOpenMenu ? 'sm:hidden md:block' : ''}>
            <div className={`navbar-collapse flex ${isOpenMenu ? 'menu-open' : ''}`}>
              <ul className="navbar lg:mx-auto flex flex-col lg:flex-row p-4 lg:p-0">
                {
                  headerMenus.map((val, i) => {
                    return <Tab key={i} id={val.id} name={val.name} link={val.scroll_link} />
                  })
                }
              </ul>
            </div>
          </PopInOnLoad>

          <PopInOnLoad className={isOpenMenu ? 'sm:hidden md:block' : ''}>
            <div className="ms-auto hidden lg:flex gap-4">
              <Link className="px-btn px-btn-theme" data-scroll-nav="4" to="contact">Contact Now</Link>
              <DarkModeToggle />
            </div>
          </PopInOnLoad>
          <PopInOnLoad className='md:hidden'>
            <Hamburger toggled={isOpenMenu} toggle={setIsOpenMenu} />
          </PopInOnLoad>
        </div>

      </header>
    </>
  )
}
