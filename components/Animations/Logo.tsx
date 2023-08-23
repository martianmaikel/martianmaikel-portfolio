import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter'


const Logo = () => {
    const [text, setText] = useState('');

    const [logoText, count] = useTypewriter({
        words: ['<Maikel/>'],
        typeSpeed: 110,
    });
    return (
        <div className="logo">
            <Link smooth={true} to="home" className='cursor-pointer'>
                <motion.span
                    initial={{ opacity: 1, y: '50vh', x: '45vw', scale: 1.6 }}
                    animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className='uppercase font-console text-4xl flex gap-2 hover:text-orange-500 ease-in-out'
                >
                    {logoText}
                </motion.span>
            </Link>
        </div>
    )
}

export default Logo