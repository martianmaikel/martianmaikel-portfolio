import React from 'react'
import { motion } from 'framer-motion';
import { BounceLoader } from 'react-spinners';
import ClipLoader from 'react-spinners/ClipLoader';

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    loading?: boolean;
}

function Button({ children, onClick, className, icon, disabled = false, loading = false }: Props) {
    return (
        <button className='px-btn px-btn-theme' onClick={onClick} disabled={disabled}>
            <span className="flex items-center justify-center">

                <span className="text-lg">{loading == true ? <ClipLoader size={13} /> : icon}</span>
                <span className="ml-2">{children}</span>
            </span>
        </button>
    );
}

export default Button