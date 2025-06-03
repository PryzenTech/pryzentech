import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutCompany = () => {
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const section2Ref = useRef(null);
  const section2ImageRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.2, ease: 'power3.out' } });

    // Initial animation for the hero section (text and first image)
    tl.fromTo(
      heroTextRef.current,
      { x: -100, opacity: 0, scale: 0.9 },
      { x: 0, opacity: 1, scale: 1 }
    )
    .fromTo(
      heroImageRef.current,
      { x: 100, opacity: 0, scale: 0.9 },
      { x: 0, opacity: 1, scale: 1 },
      '-=0.8'
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
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section2Ref.current,
          start: 'top 80%', // When top of trigger hits 80% of viewport
          toggleActions: 'play none none none', // Play animation once
        }
      }
    );

    gsap.fromTo(
      section2ImageRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: section2ImageRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
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
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 90%', // Adjust as needed
          toggleActions: 'play none none none',
        }
      }
    );

  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-200 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto rounded-xl shadow-2xl overflow-hidden bg-white">
        {/* Hero Section for PryzenTech Web Services */}
        <div className="relative p-8 md:p-12 lg:p-16 text-center bg-purple-700 text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            PryzenTech: Your Web Services Partner
          </h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
            Delivering comprehensive web solutions to elevate your digital presence and drive business growth.
          </p>
        </div>

        {/* Content Section 1: Our Expertise */}
        <div className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16">
          <div ref={heroTextRef} className="md:w-1/2 text-gray-800">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              Full-Spectrum Web Solutions for Every Need
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              At PryzenTech, we specialize in a wide array of web services designed to meet the diverse needs of modern businesses. From crafting responsive and engaging websites to developing robust backend systems and optimizing your online visibility, we are your one-stop solution for digital success.
            </p>
            <p className="text-purple-900 font-semibold mb-2">Our Key Web Services Include:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Custom Website Design & Development</li>
              <li>Frontend & Backend Development</li>
              <li>E-commerce Solutions</li>
              <li>UI/UX Design & Prototyping</li>
              <li>SEO Optimization & Digital Advertising</li>
              <li>Software Maintenance & Support</li>
            </ul>
          </div>

          <div ref={heroImageRef} className="md:w-1/2 flex justify-center items-center">
            <img
              src="https://placehold.co/600x400/8B5CF6/ffffff?text=Web+Services"
              alt="PryzenTech Web Services Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/8B5CF6/ffffff?text=Web+Services+Image"; }} // Fallback
            />
          </div>
        </div>

        {/* Content Section 2: Our Approach and Benefits */}
        <div ref={section2Ref} className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16 bg-purple-50 rounded-b-xl">
          <div ref={section2ImageRef} className="md:w-1/2 flex justify-center items-center">
            <img
              src="https://placehold.co/600x400/8B5CF6/ffffff?text=Digital+Transformation"
              alt="Digital Transformation Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/8B5CF6/ffffff?text=Digital+Trans+Image"; }} // Fallback
            />
          </div>
          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              Driving Your Digital Transformation
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              We partner with businesses to navigate the complexities of the digital world. Our approach is collaborative, agile, and results-oriented, ensuring that every solution we deliver is not just technically sound but also strategically aligned with your long-term objectives. We focus on creating measurable impact.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Client-Centric Development Process</li>
              <li>Focus on Performance, Security & Scalability</li>
              <li>Transparent Communication & Reporting</li>
              <li>Post-Launch Support & Continuous Improvement</li>
              <li>Innovative Solutions for Competitive Advantage</li>
            </ul>
          </div>
        </div>

        {/* Call to Action or Additional Info */}
        <div ref={ctaRef} className="bg-purple-600 text-white p-8 md:p-12 lg:p-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to elevate your online presence?</h3>
          <p className="text-lg mb-6">
            Partner with PryzenTech for expert web services that deliver real results.
          </p>
          <button className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-100 hover:text-purple-900 transition-colors duration-300">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
