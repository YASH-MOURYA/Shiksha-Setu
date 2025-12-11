import React, { useState, useEffect } from 'react';

const CursorEffect = ({ colorClass = 'bg-blue-200', size = 70 }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
    
    // We will use a higher blur value for a more atmospheric fade.
    const FADE_BLUR = '20px'; // Increased from 10px to 20px

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ 
                x: e.clientX - size / 2, 
                y: e.clientY - size / 2 
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [size]);

    return (
        <div
            className={`
                pointer-events-none 
                fixed top-0 left-0 
                rounded-full 
                mix-blend-screen 
                transition-transform duration-100 ease-out 
                ${colorClass} 
                opacity-0 md:opacity-100 
                animate-cursorPulse
            `} 
            style={{
                width: `${size}px`,
                height: `${size}px`,
                
                transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`,
                
                // *** FIX: Increased blur for a softer, more faded start ***
                filter: `blur(${FADE_BLUR})`, 
                zIndex: 9999,
            }}
        />
    );
};

export default CursorEffect;