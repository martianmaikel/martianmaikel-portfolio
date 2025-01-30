import Link from 'next/link'
import React from 'react'
import { DiGithubBadge } from 'react-icons/di';
import { BiLogoUpwork } from 'react-icons/bi';
import { FaLinkedin } from 'react-icons/fa';


function Footer() {

    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer border-t border-opacity-10 py-4 bg-slate-200 dark:bg-slate-800 dark:border-slate-900">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-y-10 justify-between items-center">
                    <div className="flex justify-center md:justify-start">
                        <Link className="hover:text-orange-600 mr-5 text-lg" href=''>
                            <FaLinkedin />
                        </Link>
                        <Link className="hover:text-orange-600 mr-5 text-lg" href="#">
                            <DiGithubBadge />
                        </Link>
                        <Link className="hover:text-orange-600 mr-5 text-lg" href="#">
                            <BiLogoUpwork />
                        </Link>
                    </div>
                    <a href="https://maikel-szymanski.de/impressum">Impressum</a>
                    <p className="text-opacity-75 text-xs">© {currentYear} copyright all rights reserved by Maikel Szymanski</p>

                </div>
            </div>
        </footer>
    )
}

export default Footer