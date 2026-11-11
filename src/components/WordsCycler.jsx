import { section } from 'framer-motion/client';
import React from 'react'
import{useState, useEffect} from 'react';

const WordsCycler = ({words, interval = 5000}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setUnfade] = useState(true);

    useEffect(() => {
        let timeoutId;

        const cycle = () => {
            setUnfade(true); // to trigger fade out of  current word
            timeoutId = setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % words.length); // updates timemout after fading completes
                setUnfade(false);

                timeoutId=setTimeout(cycle, interval);// to trigger fade in of the necr word after index changes
            }, 500 );
        };

        // Initial function call;
        timeoutId = setTimeout(cycle, interval);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [words.length, interval]);


  return (
    <section className="mt-2">
        <div
        style={{
            opacity: fade ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            display: 'inline-block'
        }}
        >
            {words[currentIndex]}
        </div>
    </section>
  );
};

export default WordsCycler;