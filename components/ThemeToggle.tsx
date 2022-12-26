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
        <button
            className="rounded-full p-3 bg-space-blue flex items-center my-2 justify-center hover:ring-2 ring-space-blue dark:hover:ring-text-light transition-all duration-300 focus:outline-none dark:bg-text-light dark:text-text-dark"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle Dark Mode"
        >
            {theme === 'light' ? (
                <FaMoon className="w-5 h-5" />
            ) : (
                <FaSun className="w-5 h-5" />
            )}
        </button>
    );
}