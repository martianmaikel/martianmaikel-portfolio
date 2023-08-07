import { useEffect } from 'react';

interface Props {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const ScrollToLink = ({ href, children, className }: Props) => {
    const handleClick = () => {
        const target = document.getElementById(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button onClick={handleClick} className={className}>
            {children}
        </button>
    );
};

export default ScrollToLink;