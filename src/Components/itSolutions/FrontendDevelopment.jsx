import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import frontendimg from '../../assets/WEBdesign.jpeg'; // Assuming this path is correct
import frontendimg2 from '../../assets/Webdesign2.jpeg'; // Assuming this path is correct
import { useNavigate } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);
const FrontendDevelopment = () => {
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
      <div className="max-w-6xl mx-auto rounded-xl shadow-2xl overflow-hidden bg-white">
        {/* Hero Section for Frontend Development */}
        <div className="relative p-4 md:p-6 lg:p-8 text-center bg-purple-700 text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            Frontend Development
          </h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto">
            Crafting stunning, interactive, and user-friendly web interfaces that captivate your audience.
          </p>
        </div>

        {/* Content Section 1: Why Frontend Development */}
        <div className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16">
          <div ref={heroTextRef} className="md:w-1/2 text-gray-800">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              Bringing Your Digital Vision to Life
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              Frontend development is all about creating the visual and interactive elements users see and interact with. We design clean, responsive, and animated web interfaces using modern frameworks and libraries like ReactJS, complemented by powerful styling tools like TailwindCSS and Bootstrap.
            </p>
            <p className="text-purple-900 font-semibold mb-2">Our Frontend Expertise:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>ReactJS, Next.js for Dynamic Web Applications</li>
              <li>TailwindCSS & Bootstrap for Responsive Styling</li>
              <li>GSAP-powered Animations for Engaging User Experiences</li>
              <li>Pixel-Perfect and Cross-Browser Compatible Designs</li>
              <li>Development of Creative Animated Landing Pages</li>
              <li>Performance Optimization for Fast Loading Times</li>
            </ul>
          </div>

          <div ref={heroImageRef} className="md:w-1/2 flex justify-center items-center">
            <img
              src={frontendimg}
              alt="Frontend Development Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/8B5CF6/ffffff?text=Frontend+Image"; }} // Fallback
            />
          </div>
        </div>

        {/* Content Section 2: Our Approach to Frontend */}
        <div ref={section2Ref} className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16 bg-purple-50 rounded-b-xl">
          <div ref={section2ImageRef} className="md:w-1/2 flex justify-center items-center">
            <img
              src={frontendimg2}
              alt="Frontend Development Process Illustration"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/8B5CF6/ffffff?text=Frontend+Process+Image"; }} // Fallback
            />
          </div>
          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              A User-Centric Approach to Frontend Development
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              Our development process is deeply integrated with UI/UX principles. We prioritize user experience, ensuring that every interaction is intuitive, efficient, and enjoyable. From initial wireframes to final pixel-perfect implementation, we focus on creating interfaces that not only look great but also perform flawlessly.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Collaborative Design & Development Workflow</li>
              <li>Focus on Performance & Accessibility</li>
              <li>Modular & Reusable Component Architecture</li>
              <li>Thorough Testing for Cross-Browser Compatibility</li>
              <li>Continuous Integration & Deployment Practices</li>
            </ul>
          </div>
        </div>

        {/* Call to Action or Additional Info */}
        <div ref={ctaRef} className="bg-purple-600 text-white p-8 md:p-12 lg:p-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready for a captivating frontend?</h3>
          <p className="text-lg mb-6">
            Let's build an interactive and visually stunning interface that leaves a lasting impression.
          </p>
          <button onClick={()=>{navigate('/contactus')}}
           className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-100 hover:text-purple-900 transition-colors duration-300">
            Discuss Your Frontend Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrontendDevelopment;
