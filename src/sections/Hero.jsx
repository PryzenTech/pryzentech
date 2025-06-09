import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

// import { useNavigate } from "react-router-dom";
import heroimg from "../assets/heroimg2.png"; // Assuming this path is correct in your project
import hero1 from "../assets/Hero1.mp4"; // Assuming this path is correct in your project

import { FaPhoneAlt } from "react-icons/fa";
import Animation from "../Components/Animation";
import FloatingLogosBackground from "../Components/Background/FloatingLogosBackground";
const Hero = () => {
  const navigate = useNavigate();
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const typingRef = useRef(null);

  const phrases = [
    "Welcome to Pryzen Technologies —",
    "We Make You Visible In Digital World ",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.2, ease: "power3.out" },
    });

    tl.fromTo(
      textRef.current,
      { x: -100, scale: 0.9, opacity: 0 },
      { x: 0, scale: 1, opacity: 1 }
    ).fromTo(
      imageRef.current,
      { x: 100, scale: 0.8, opacity: 0 },
      { x: 0, scale: 1, opacity: 1 },
      "-=0.8"
    );
  }, []);

  useEffect(() => {
    if (index >= phrases.length) return;

    let timeout;

    if (!reverse && subIndex === phrases[index].length) {
      // Pause after typing complete
      timeout = setTimeout(() => setReverse(true), 1500); // 2 sec pause
    } else if (reverse && subIndex === 0) {
      // Pause after deleting
      timeout = setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }, 500); // 1 sec pause
    } else {
      timeout = setTimeout(
        () => {
          setText(phrases[index].substring(0, subIndex));
          setSubIndex((prev) => prev + (reverse ? -1 : 1));
        },
        reverse ? 75 : 150
      ); // slower typing/deleting
    }

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, phrases]); // Added phrases to dependency array

  return (
    <div className="paraFont-900 border-white shadow-lg rounded-lg bg-purple-100 relative z-10">
      {/* Floating logos rendered first */}
      <FloatingLogosBackground />

      <div className="flex flex-col md:flex-row items-center w-full mx-auto px-4 gap-16 relative z-20">
        <div className="flex flex-col md:flex-row items-center max-w-[94vw] mx-auto px-4  gap-16 ">
          {/* Text Content */}
          <div
            ref={textRef}
            className="text-xl font-semibold md:w-[47%] ml-[3vw] leading-relaxed min-h-[230px]" // <- fixed height to avoid image shift
          >
            <div
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-purple-800 mr-3 paraFont-900"
              ref={typingRef}
            >
              {text}
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-gray-800 text-lg ">
              Your all-in-one partner for premium digital solutions. From
              startups to enterprises, we help you build and scale a powerful
              online presence.
            </p>

            <div className="flex flex-col mt-4 ">
              <p className="px-1 text-purple-900">Start Your Project </p>

              <button
                type="button"
                onClick={() => {
                  navigate("/contactus");
                }}
                className="w-[60%] md:w-1/4 mt-2 hover:scale-110 border rounded-md bg-gradient-to-b flex gap-4 items-center from-purple-950 to-purple-400 text-white px-4 py-2 cursor-pointer"
              >
                Contact Us
                <p className="flex items-center gap-4 text-red-600 cursor-pointer">
                  <FaPhoneAlt />
                </p>
              </button>
              <div className="flex items-center gap-4">
                <div className="mt-2">
                  <div className="text-purple-800 cursor-pointer ">
                    <a
                      href="tel:+918882320645"
                      className="text-purple-800 cursor-pointer hover:text-purple-600 transition-colors duration-200"
                    >
                      +91 8882320645
                    </a>

                    <p className=" h-0.5 bg-black"></p>
                  </div>
                  <a
                    href="tel:+918936950459"
                    className="text-purple-800 cursor-pointer hover:text-purple-600 transition-colors duration-200"
                  >
                    +91 8936950459
                  </a>{" "}
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="ml-2 md:w-[45%] borde flex-shrink-0">
            <Animation />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;
