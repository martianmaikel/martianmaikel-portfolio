import React, { useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
    children: React.ReactNode,
    className?: string,
}
function PopInOnLoad({ children, className = '' }: Props) {
    const mainControl = useAnimation();

    const variant = {
        hidden: {
            y: -70,
            opacity: 0,
            scale: 0.5,
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
        }
    }

    useEffect(() => {

        mainControl.start('visible');


    }, []);

    return (
        <motion.div
            className={`${className}`}
            variants={variant}
            initial="hidden"
            transition={{ delay: 2, duration: 0.2 }}
            animate="visible"
        >
            {children}
        </motion.div>
    )
}

export default PopInOnLoad