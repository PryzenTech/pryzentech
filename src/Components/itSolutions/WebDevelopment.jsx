import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import uiux3img from '../../assets/uiux3.jpeg'
import Frontendimg from '../../assets/Frontend1.jpeg'

gsap.registerPlugin(ScrollTrigger);

const WebDevelopment = () => {
  const navigate = useNavigate();
  const heroTextRef = useRef(null); // Ref for the hero section text
  const heroImageRef = useRef(null); // Ref for the hero section image
  const section2Ref = useRef(null); // Ref for the second content section (text)
  const section2ImageRef = useRef(null); // Ref for the second content section (image)
  const ctaRef = useRef(null);         // Ref for the Call to Action section

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
    <div className="bg-gradient-to-br from-purple-50 to-purple-200 min-h-screen py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90vw] mx-auto rounded-xl shadow-2xl overflow-hidden bg-white">
        {/* Hero Section for Custom Website Development */}
        <div className="relative p-4 md:p-6 lg:p-8 text-center bg-purple-700 text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            Custom Website Development
          </h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
            Crafting bespoke web solutions tailored to your unique brand and business goals.
          </p>
        </div>

        {/* Content Section 1: Why Custom Web Development */}
        <div className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16">
          <div ref={heroTextRef} className="md:w-1/2 text-gray-800">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              Build a Unique Online Presence That Converts
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              In today's digital landscape, a generic website won't cut it. Custom web development ensures your online presence is a true reflection of your brand, designed to meet your specific business objectives and stand out from the competition. We focus on creating engaging, user-friendly, and high-performing websites.
            </p>
            <p className="text-purple-900 font-semibold mb-2">What We Offer:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Bespoke Designs & Responsive Development</li>
              <li>Intuitive Content Management System (CMS) Integration</li>
              <li>SEO-Ready Architecture for Organic Visibility</li>
              <li>Scalable Solutions for Future Growth</li>
              <li>E-commerce Functionality & Payment Gateway Integration</li>
            </ul>
          </div>

          <div ref={heroImageRef} className="md:w-1/2 flex justify-center items-center">
            <img
              src={uiux3img}
              alt="Custom Web Development Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/8B5CF6/ffffff?text=Web+Dev+Image"; }} // Fallback
            />
          </div>
        </div>

        {/* Content Section 2: Our Approach to Web Development */}
        <div ref={section2Ref} className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16 bg-purple-50 rounded-b-xl">
          <div ref={section2ImageRef} className="md:w-1/2 flex justify-center items-center">
            <img
              src={Frontendimg}
              alt="Web Development Process Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/8B5CF6/ffffff?text=Web+Process+Image"; }} // Fallback
            />
          </div>
          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              Our Collaborative Web Development Process
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              We follow a transparent and collaborative development process, working closely with you from concept to launch. Our agile methodology ensures flexibility, allowing us to adapt to your evolving needs and deliver a website that truly aligns with your vision.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Discovery & Planning: Understanding your goals and audience.</li>
              <li>Design & Prototyping: Creating engaging UI/UX designs.</li>
              <li>Development & Testing: Building robust and bug-free code.</li>
              <li>Deployment & Launch: Bringing your website to life.</li>
              <li>Post-Launch Support & Maintenance: Ensuring long-term success.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action or Additional Info */}
        <div ref={ctaRef} className="bg-purple-600 text-white p-8 md:p-12 lg:p-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to build your dream website?</h3>
          <p className="text-lg mb-6">
            Let's discuss your vision and craft a powerful online presence that drives your business forward.
          </p>
          <button onClick={()=>{navigate('/contactus')}}
          className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-100 hover:text-purple-900 transition-colors duration-300">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
