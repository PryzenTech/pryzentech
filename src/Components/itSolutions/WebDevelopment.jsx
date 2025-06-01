import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import heroimg from '../../assets/heroimg2.png';

const WebDevelopment = () => {
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
        <h2 className="text-2xl md:text-3xl gap-y-10 flex flex-col text-center font-semibold">
          <span>Custom Website Development</span>
          <span>Overview</span>
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
            We build fast, secure, and scalable websites tailored to your brand and goals. From e-commerce to portfolios, our expert developers deliver results that convert.
          </p>
          <p className="text-purple-900 font-semibold mb-2">What We Offer:</p>
          <ul className="list-disc pl-5 text-gray-800 space-y-1">
            <li>Custom designs & development</li>
            <li>CMS integration</li>
            <li>SEO-ready architecture</li>
          </ul>
        </div>

        {/* Image Section */}
        <div
          ref={imageRef}
          className="md:w-1/2 w-full flex justify-center"
        >
          <img
            src={heroimg}
            alt="Web development"
            className="w-full max-w-md rounded-xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
