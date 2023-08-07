"use client"

import React, { useState, useEffect } from 'react'

type Props = {}

export default function PageLoader({ }: Props) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center dark:text-text-light'>
            Skills
        </div>
    )
}