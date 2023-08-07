import React from 'react'
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

type Props = {}

export default function ThemeToggle({ }: Props) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return (
        <li key='theme-toggle' className='border-y-2 dark:border-bg-darker border-bg-lighter'>
            <button className='sidebar-icon nav-icon w-full'
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                aria-label="Toggle Dark Mode"
            >
                {theme === 'light' ? (
                    <FaMoon className="text-md" />
                ) : (
                    <FaSun className="text-md" />
                )}
            </button>
        </li>
    );
}