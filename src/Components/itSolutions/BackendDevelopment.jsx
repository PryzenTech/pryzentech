import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import backendimg1 from "../../assets/backend1.jpeg"; // Assuming this path is correct in your project
import backendimg2 from "../../assets/backend2.jpeg"; // Assuming this path is correct in your project
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const BackendDevelopment = () => {
  const navigate = useNavigate();
  const heroTextRef = useRef(null); // Ref for the hero section text
  const heroImageRef = useRef(null); // Ref for the hero section image
  const section2Ref = useRef(null); // Ref for the second content section (text)
  const section2ImageRef = useRef(null); // Ref for the second content section (image)
  const ctaRef = useRef(null); // Ref for the Call to Action section

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.2, ease: "power3.out" },
    });

    // Initial animation for the hero section (text and first image)
    tl.fromTo(
      heroTextRef.current,
      { x: -100, opacity: 0, scale: 0.9 },
      { x: 0, opacity: 1, scale: 1 }
    ).fromTo(
      heroImageRef.current,
      { x: 100, opacity: 0, scale: 0.9 },
      { x: 0, opacity: 1, scale: 1 },
      "-=0.8"
    );

    // Scroll-triggered animations for subsequent sections
    // Section 2 animation (text and image)
    gsap.fromTo(
      section2Ref.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 80%", // When top of trigger hits 80% of viewport
          toggleActions: "play none none none", // Play animation once
        },
      }
    );

    gsap.fromTo(
      section2ImageRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section2ImageRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // CTA section animation
    gsap.fromTo(
      ctaRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 90%", // Adjust as needed
          toggleActions: "play none none none",
        },
      }
    );
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-200 min-h-screen py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90vw] mx-auto rounded-xl shadow-2xl overflow-hidden bg-white">
        {/* Hero Section for Backend Development */}
        <div className="relative p-4 md:p-6 lg:p-8 text-center bg-purple-700 text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            Backend Development
          </h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
            Building robust, secure, and scalable server-side solutions to power
            your applications.
          </p>
        </div>

        {/* Content Section 1: Powering Your Application */}
        <div className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16">
          {/* Text Content */}
          <div ref={heroTextRef} className="md:w-1/2 text-gray-800">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              Powering Your Application with a Strong Backend
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              We specialize in building reliable, scalable, and efficient
              backend systems using modern technologies like Node.js and
              Express. Our backend solutions ensure smooth communication between
              your frontend, servers, and databases, providing the foundation
              for high-performing applications.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              A well-architected backend is crucial for data management,
              security, and overall application functionality. Our team focuses
              on creating robust APIs and efficient database structures that can
              handle complex operations and scale with your business growth.
            </p>
          </div>

          {/* Image Section */}
          <div
            ref={heroImageRef}
            className="md:w-1/2 flex justify-center items-center"
          >
            <img
              src={backendimg1}
              alt="Backend Development Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/8B5CF6/ffffff?text=Backend+Development";
              }} // Fallback
            />
          </div>
        </div>
        <div ref={heroTextRef} className=" mx-auto rounded-xl overflow-hidden bg-white px-16">
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>RESTful API & server development (Node.js, Express.js)</li>
            <li>Secure authentication & authorization systems</li>
            <li>Database design & integration (MongoDB, MySQL, PostgreSQL)</li>
            <li>Cloud infrastructure setup and management (AWS, Azure, GCP)</li>
            <li>Real-time communication with WebSockets</li>
            <li>Error handling, logging, and performance optimization</li>
          </ul>
        </div>

        {/* Content Section 2: Our Backend Expertise & Process */}
        <div
          ref={section2Ref}
          className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16 bg-purple-50 rounded-b-xl"
        >
          <div
            ref={section2ImageRef}
            className="md:w-1/2 flex justify-center items-center"
          >
            <img
              src={backendimg2}
              alt="Backend Development Process Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/8B5CF6/ffffff?text=Backend+Process+Image";
              }} // Fallback
            />
          </div>
          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              Our Comprehensive Backend Development Process
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              We follow a rigorous development methodology to ensure your
              backend is robust, secure, and perfectly aligned with your
              business needs. From initial requirements gathering to deployment
              and ongoing support, we prioritize efficiency, security, and
              scalability.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Requirements Analysis & System Design</li>
              <li>API Development & Integration</li>
              <li>Database Management & Optimization</li>
              <li>Security Implementation & Testing</li>
              <li>Scalability Planning & Load Balancing</li>
              <li>Continuous Integration & Deployment (CI/CD)</li>
            </ul>
          </div>
        </div>

        {/* Call to Action or Additional Info */}
        <div
          ref={ctaRef}
          className="bg-purple-600 text-white p-8 md:p-12 lg:p-16 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Need a powerful backend for your app?
          </h3>
          <p className="text-lg mb-6">
            Let's discuss how our backend development expertise can build a
            strong foundation for your digital product.
          </p>
          <button onClick={()=>{navigate('/contactus')}}
          className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-100 hover:text-purple-900 transition-colors duration-300">
            Request a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackendDevelopment;
