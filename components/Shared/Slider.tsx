import React from 'react'
import PropTypes from 'prop-types';
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    items: React.ReactElement[]
}

export default function Slider({ items }: Props) {
    const itemCount: number = items.length;
    return <>
        <div className="grid grid-cols-1 gap-y-6 gap-4 sm:grid-cols-2 md:grid-cols-3 h-full content-center mt-6">
            {
                items.map((value, key) => {
                    return (
                        value
                    )
                })
            }
        </div>

        {/* <div className="flex justify-center items-center">
            dot
        </div> */}
    </>

}