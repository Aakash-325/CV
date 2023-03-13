import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ArrowButton = () => {
    const [BackToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        })
    }, []);

    const scrollToTop = () => {
        window.scroll({
            top: 150,
            behavior: "smooth"
        })
    };

    return (
        <>
            {BackToTop && (
                <button style={{
                    position: 'fixed',
                    bottom: '80px',
                    right: '50px',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: '#333',
                    color: '#fff',
                    fontSize: '24px',
                    lineHeight: '50px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    zIndex: '999',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                    className={BackToTop ? 'back-to-top active' : 'back-to-top'}
                    onClick={scrollToTop}
                >
                    <FaArrowUp />
                </button>
            )}
        </>
    )
}

export default ArrowButton;
