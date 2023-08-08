'use client'
import React from 'react';

interface TypeWriterProps {
  text: string
  delay: number
  className?: string
}

const Typewriter = ({ text, delay = 100, className = '' }: TypeWriterProps) => {

  const [index, setIndex] = React.useState(0);
  const [cursorVisible, setCursorVisible] = React.useState(true);


  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index => index + 1);
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(visible => !visible);
    }, 600);
    return () => clearInterval(interval);
  }, []);


  const typedText = text.substring(0, index);
  const cursor = cursorVisible ? '|' : '';

  return (
    <span className={className} style={{ animation: 'typing 0.5s steps(40, end)' }}>{typedText}{cursor}</span>
  );
};

export default Typewriter;

<style jsx global>{`
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`}</style>