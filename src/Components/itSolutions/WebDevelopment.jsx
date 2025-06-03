import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import uiux3img from '../../assets/uiux3.jpeg';
import Frontendimg from '../../assets/Frontend1.jpeg';

gsap.registerPlugin(ScrollTrigger);

const WebDevelopment = () => {
  const navigate = useNavigate();

  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const section2Ref = useRef(null);
  const section2ImageRef = useRef(null);
  const ctaRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.2, ease: 'power3.out' } });

    tl.fromTo(titleRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1 });
    tl.fromTo(subtitleRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, ease: 'back.out(1.7)' }, '-=0.8');

    tl.fromTo(heroTextRef.current, { x: -100, opacity: 0, scale: 0.9 }, { x: 0, opacity: 1, scale: 1 })
      .fromTo(heroImageRef.current, { x: 100, opacity: 0, scale: 0.9 }, { x: 0, opacity: 1, scale: 1 }, '-=0.8');

    gsap.fromTo(section2Ref.current, { y: 80, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section2Ref.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.fromTo(section2ImageRef.current, { scale: 0, opacity: 0 }, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: section2ImageRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    gsap.fromTo(ctaRef.current, { y: 50, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: ctaRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-200 min-h-screen py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90vw] mx-auto rounded-xl shadow-2xl overflow-hidden bg-white">
        {/* Hero Section */}
        <div className="relative p-4 md:p-6 lg:p-8 text-center bg-gradient-to-b from-purple-950 to-purple-300 text-white">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
          >
            Custom Website Development
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl opacity-90 max-w-3xl mx-auto text-purple-950"
          >
            Bespoke web solutions tailored for your brand, business goals, and SEO success.
          </p>
        </div>

        {/* Content Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16">
          <div ref={heroTextRef} className="md:w-1/2 text-gray-800">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              Build a Unique Online Presence That Converts
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              In today’s competitive digital landscape, generic templates fall short. Our custom website development ensures a responsive web design that enhances user experience and drives conversions. Each SEO-optimized website is engineered to reflect your brand and achieve measurable results.
            </p>
            <p className="text-purple-900 font-semibold mb-2">What We Offer:</p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Responsive and custom web designs</li>
              <li>CMS integration for easy content updates</li>
              <li>SEO-friendly structure for better rankings</li>
              <li>Scalable and secure website development</li>
              <li>E-commerce functionality & secure payments</li>
            </ul>
          </div>

          <div ref={heroImageRef} className="md:w-1/2 flex justify-center items-center">
            <img
              src={uiux3img}
              alt="Custom Website Development Services"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/600x400/8B5CF6/ffffff?text=Web+Dev+Image";
              }}
            />
          </div>
        </div>

        {/* Content Section 2 */}
        <div
          ref={section2Ref}
          className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 lg:p-16 bg-purple-50 rounded-b-xl"
        >
          <div ref={section2ImageRef} className="md:w-1/2 flex justify-center items-center">
            <img
              src={Frontendimg}
              alt="Web Development Workflow"
              className="w-full h-auto rounded-lg shadow-xl border border-purple-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/600x400/8B5CF6/ffffff?text=Web+Process+Image";
              }}
            />
          </div>
          <div className="md:w-1/2 text-gray-800">
            <h3 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">
              Our Streamlined Website Development Process
            </h3>
            <p className="mb-4 text-lg leading-relaxed">
              We follow a strategic and collaborative approach to website development. Our agile process ensures your custom-built website aligns with your brand identity, is mobile-friendly, and meets SEO standards to drive growth.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Discovery: Defining website goals and target users</li>
              <li>Design: Wireframes and UX/UI design tailored to your brand</li>
              <li>Development: Scalable coding with mobile-first approach</li>
              <li>Deployment: Launching your SEO-optimized website</li>
              <li>Support: Ongoing maintenance and performance updates</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div ref={ctaRef} className="bg-purple-600 text-white p-8 md:p-12 lg:p-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to build your dream website?</h3>
          <p className="text-lg mb-6">
            Get in touch for a tailored web development solution that helps you rank and convert better.
          </p>
          <button
            onClick={() => navigate('/contactus')}
            className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-100 hover:text-purple-900 transition-colors duration-300"
          >
            Get a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
