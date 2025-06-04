import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Portfolio = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const letters = headingRef.current.querySelectorAll('span');
    
    gsap.set(letters, { y: -340, opacity: 0 });

    gsap.to(letters, {
      y: 16,
      opacity: 1,
      stagger: 0.1,
      duration: 2.2,
      ease: 'bounce.out',
      onComplete: () => {
        gsap.to(letters, {
          y: 16,
          repeat: 0,
          // yoyo: true,
          stagger: 0.1,
          duration: 0.3,
          ease: 'power1.inOut'
        });
      }
    });
  }, []);

  const text = 'Coming soon';

  return (
    <div className="h-[90vh] bg-gradient-to-b from-purple-950 via-purple-700 to-pink-400 text-white flex items-center justify-center">
      <div className=" h-[70%] flex justify-center items-center">
        <h2
          ref={headingRef}
          className="uppercase border-b text-6xl md:text-9xl font-bold tracking-widest font-serif"
        >
          {text.split('').map((letter, i) => (
            <span key={i} className="inline-block ">
              {letter}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
};


export default Portfolio;