import React from 'react'
import { motion } from 'framer-motion';

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}

function Button({ children, onClick, className, icon, disabled = false }: Props) {
    return (
        <button className='px-btn px-btn-theme' onClick={onClick} disabled={disabled}>
            <span className="flex items-center justify-center">
                <span className="text-lg">{icon}</span>
                <span className="ml-2">{children}</span>
            </span>
        </button>
    );
}

export default Button