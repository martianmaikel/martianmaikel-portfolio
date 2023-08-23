import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
    children: React.ReactNode,
    width?: "w-fit" | "w-full",
}

export const RevealOnScroll = ({ children, width = "w-fit" }: Props) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const mainControl = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (inView) {
            mainControl.start("visible")
            slideControls.start("visible")
        }
    }, [inView])

    const variants = {
        hidden: {
            opacity: 0,
            y: 80,
        },
        visible: {
            opacity: 1,
            y: 0,
        }
    }
    return (
        <div ref={ref} className={`relative ${width}`}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={mainControl}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" }
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn", delay: 0.2 }}
                className="absolute top-4 bottom-4 left-0 right-0 bg-slate-200 dark:bg-slate-800 z-60"
            >
            </motion.div>
        </div>
    )
}

export default RevealOnScroll