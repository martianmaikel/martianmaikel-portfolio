import { useTheme } from 'next-themes'
import React, { useState, useEffect } from 'react'
import { BiSolidSun } from 'react-icons/bi';
import { SiDarkreader } from 'react-icons/si';
import Button from './Button'

function DarkModeToggle() {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <button
            className={`px-btn ${theme === 'light' ? 'px-btn-dark-full' : 'px-btn-light-full'}`}
            onClick={toggleTheme}
        >
            <span className="flex items-center justify-center">
                <span className="text-lg">{theme === 'light' ? <SiDarkreader /> : <BiSolidSun />}</span>
                <span className="ml-2">{theme === 'light' ? 'Going Dark' : 'Lights On'}</span>
            </span>
        </button>
    )
}

export default DarkModeToggle