import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import frontendimg from '../../assets/Frontend1.jpeg';

const FrontendDevelopment = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.2, ease: 'power3.out' } });

    tl.fromTo(
      textRef.current,
      { x: -100, opacity: 0, scale: 0.9 },
      { x: 0, opacity: 1, scale: 1 }
    ).fromTo(
      imageRef.current,
      { x: 100, opacity: 0, scale: 0.9 },
      { x: 0, opacity: 1, scale: 1 },
      '-=0.8'
    );
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-100 to-purple-400 py-12">
      {/* Header */}
      <div className="flex justify-center mb-10">
        <h2 className="text-2xl md:text-3xl text-center font-semibold flex flex-col">
          <span>Frontend Development</span>
          <span>Crafting Stunning Interfaces</span>
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-16">
        {/* Text Section */}
        <div
          ref={textRef}
          className="md:w-1/2 w-full text-left p-2 md:p-6"
        >
          <p className="text-gray-900 text-lg mb-4">
            We design clean, responsive, and animated web interfaces using ReactJS, TailwindCSS, Bootstrap, and GSAP. Our frontend work ensures your users get fast, interactive, and visually rich experiences across devices.
          </p>
          <p className="text-purple-900 font-semibold mb-2">Tech & Highlights:</p>
          <ul className="list-disc pl-5 text-gray-800 space-y-1">
            <li>ReactJS + TailwindCSS + Bootstrap stack</li>
            <li>GSAP-powered animations for modern effects</li>
            <li>Fully responsive and pixel-perfect designs</li>
            <li>We also build creative animated landing pages</li>
          </ul>
        </div>

        {/* Image Section */}
        <div
          ref={imageRef}
          className="md:w-1/2 w-full flex justify-center"
        >
          <img
            src={frontendimg}
            alt="Frontend Development"
            className="w-full max-w-md rounded-xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FrontendDevelopment;
