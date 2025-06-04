import React, { useEffect, useRef, useState  } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

// import { useNavigate } from "react-router-dom";
import heroimg from "../assets/heroimg2.png"; // Assuming this path is correct in your project
import hero1 from "../assets/hero1.mp4"; // Assuming this path is correct in your project

import { FaPhoneAlt } from "react-icons/fa";
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

    const timeout = setTimeout(
      () => {
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
      },
      reverse ? 30 : 70
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, phrases]); // Added phrases to dependency array

  return (
    <div className="border-t paraFont-900 border-white shadow-lg rounded-lg bg-gradient-to-r from-purple-100 to-purple-300 justify-center">
      <div className="flex flex-col md:flex-row items-center max-w-[94vw] mt-20 mx-auto px-4 py-12 gap-16 ">
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
          <p className="text-gray-800 text-lg paraFont-600">
            Your all-in-one partner for premium digital solutions. From startups
            to enterprises, we help you build and scale a powerful online
            presence.
          </p>

          <div className="flex mt-10 py-4 items-center gap-10 ">
            <div className=" ">
              <p className="px-1">Start Your Project </p>

              <button
                type="button"

                onClick={() =>{
                  navigate("/contactus")
                }
                }
                className=" hover:scale-110 border rounded-md bg-gradient-to-b from-purple-950 to-purple-400 text-white px-4 py-2 cursor-pointer"

              >
                Contact Us
              </button>
            </div>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-4 text-red-600 cursor-pointer">
                <FaPhoneAlt />
              
              </p>
              <div className="">
                <p  className="text-purple-800 cursor-pointer ">Call us: <span> </span>
                  <a href="tel:+918882320645" className="text-purple-800 cursor-pointer hover:text-purple-600 transition-colors duration-200">+91 8882320645</a>
                  
                <p className=" h-0.5 bg-black"></p>
                  </p>
                  <a href="tel:+918936950459" className="text-purple-800 cursor-pointer hover:text-purple-600 transition-colors duration-200">+91 8936950459</a> <br/>
                
              </div>
            </div>
          </div>
        </div>

        {/* Video */}
        <div
          ref={imageRef}
          className="ml-2 md:w-[45%] flex-shrink-0" // prevent shrinking due to text growth
        >
          <video
            src={hero1}
            className="w-full h-auto rounded-xl"
            autoPlay // Enable autoplay
            loop // Loop the video continuously
            muted // Mute the video to allow autoplay in most browsers
            playsInline // Important for iOS to play video inline
            preload="auto" // Preload video for faster playback
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
