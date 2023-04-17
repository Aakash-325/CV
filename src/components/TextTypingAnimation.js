import React, { useState, useEffect } from 'react';

const TextTypingAnimation = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
      } else {
        setTimeout(() => {
          setDisplayedText('');
          i = -1;
        }, 1000);
      }
      i++;
    }, 80);

    return () => clearInterval(typingInterval);
  }, [text]);

  return <span>{displayedText}</span>;
};

export default TextTypingAnimation;
