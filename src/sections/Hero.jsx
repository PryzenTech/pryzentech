import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import uiux from '../assets/uiux1.jpeg';

const Hero = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const typingRef = useRef(null);

  const phrases = [
    'Welcome to Pryzen Technologies —',
    'We Make You Visible In Digital World ',
  ];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.2, ease: 'power3.out' } });

    tl.fromTo(
      textRef.current,
      { x: -100, scale: 0.9, opacity: 0 },
      { x: 0, scale: 1, opacity: 1 }
    ).fromTo(
      imageRef.current,
      { x: 100, scale: 0.8, opacity: 0 },
      { x: 0, scale: 1, opacity: 1 },
      '-=0.8'
    );
  }, []);

  useEffect(() => {
    if (index >= phrases.length) return;

    const timeout = setTimeout(() => {
      setText(phrases[index].substring(0, subIndex));

      if (!reverse) {
        if (subIndex < phrases[index].length) {
          setSubIndex((prev) => prev + 1);
        } else {
          setReverse(true);
          setTimeout(() => {}, 1000); // pause before deleting
        }
      } else {
        if (subIndex > 0) {
          setSubIndex((prev) => prev - 1);
        } else {
          setReverse(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, reverse ? 30 : 70);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="border-t border-white bg-gradient-to-r from-purple-100 to-purple-300 justify-center">
      <div className="flex flex-col md:flex-row items-center max-w-[94vw] mt-20 mx-auto px-4 py-12 gap-16 ">
        {/* Text Content */}
        <div
          ref={textRef}
          className="text-xl font-semibold md:w-[47%] ml-[3vw] leading-relaxed min-h-[230px]" // <- fixed height to avoid image shift
        >
          <div
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-purple-800 mr-3"
            style={{
              fontFamily: 'monospace',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}
            ref={typingRef}
          >
            {text}
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-gray-800 text-lg">
            Your all-in-one partner for premium digital solutions. From startups to enterprises, we help you build and scale a powerful online presence.
          </p>
        </div>

        {/* Image */}
        <div
          ref={imageRef}
          className="ml-2 md:w-[45%] flex-shrink-0" // prevent shrinking due to text growth
        >
          <img
            src={uiux}
            alt="UI/UX"
            className="w-full h-auto rounded-xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
