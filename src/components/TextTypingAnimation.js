import React, { useState, useEffect } from 'react';

const TextTypingAnimation = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prevText => prevText + text.charAt(i));
        i++;
      } else {
        setTimeout(() => {
          setDisplayedText('');
          i = 0;
        }, 1000);
      }
    }, 80);
    // Handle initial state of displayedText
    setDisplayedText('');
    return () => clearInterval(typingInterval);
  }, [text]);

  return <span>{displayedText}</span>;
};

export default TextTypingAnimation;
