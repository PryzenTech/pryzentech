import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import comingSoonImage from '../assets/comingSoon.jpg'// Import the image

const ComingSoonBanner = () => {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate the entire banner in
    tl.fromTo(
      bannerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5 }
    )
    // Animate the title
    .fromTo(
      titleRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, stagger: 0.2 },
      '-=0.8' // Start title animation before banner finishes
    )
    // Animate the descriptive text
    .fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.5' // Start text animation slightly after title
    );

    // Optional: Add a subtle pulsing animation to the entire banner or a specific element
    gsap.to(bannerRef.current, {
      scale: 1.01,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: 'sine.inOut',
    });

  }, []);

  return (
    <div
      ref={bannerRef}
      className="bg-gradient-to-br from-purple-700 to-purple-900 text-white min-h-[50vh] flex items-center justify-center p-8 sm:p-12 lg:p-16 rounded-xl shadow-2xl overflow-hidden relative"
      style={{ opacity: 0 }} // Start with opacity 0 for GSAP animation
    >
      {/* Animated Background Pattern / Image */}
      <style>
        {`
          .animated-background {
            position: absolute;
            inset: 0;
            background-image: url(${comingSoonImage}); /* Use the imported image */
            background-size: cover; /* Cover the entire area */
            background-position: center; /* Center the image */
            background-repeat: no-repeat; /* Do not repeat the image */
            z-index: 0; /* Ensure it's behind the content */
            opacity: 0.8; /* Adjust opacity to blend, can be tweaked */
          }

          /* Add a semi-transparent dark overlay on top of the image for text readability */
          .animated-background::before {
            content: '';
            position: absolute;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.4); /* Dark overlay with 40% opacity */
            z-index: 1; /* Ensure overlay is above the image but below text */
          }
        `}
      </style>
      <div className="animated-background"></div> {/* This is the "backend" banner */}

      <div className="text-center max-w-4xl mx-auto z-10"> {/* Ensure text content is above the background and overlay */}
        <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          Portfolio Coming Soon!
        </h1>
        <p ref={textRef} className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
          We're diligently curating our latest and greatest projects to showcase the breadth of our work.
          Stay tuned for an inspiring display of innovation and excellence!
        </p>
        <div className="mt-8">
          {/* Optional: Add a subtle animated element like a spinning gear or loading icon */}
          <svg className="animate-spin h-12 w-12 text-purple-300 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonBanner;
