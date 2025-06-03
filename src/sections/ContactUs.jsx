import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  // Refs for GSAP animations
  const headingRef = useRef(null);
  const introTextRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Animation for the main heading and intro text
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });

    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 }
    )
    .fromTo(
      introTextRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1 },
      '-=0.5' // Stagger slightly after the heading
    );

    // Scroll-triggered animation for contact info and form
    gsap.fromTo(
      contactInfoRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      formRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Scroll-triggered animation for the map
    gsap.fromTo(
      mapRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: mapRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

  }, []);

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-100 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 ref={headingRef} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-purple-800 mb-6 leading-tight">
            Get in Touch with PryzenTech
          </h1>
          <p ref={introTextRef} className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Have a project in mind, a question about our <strong>web development services</strong>, or just want to say hello? We're here to help you achieve your digital goals.
          </p>
        </section>

        {/* Contact Content: Info & Form */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div ref={contactInfoRef} className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-purple-100">
            <h2 className="text-3xl font-bold text-purple-800 mb-6">
              Reach Out to Our Team
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Whether you're looking for a <strong> custom website solution , SEO expertise or Google Ads </strong> our team is ready to assist.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <span className="text-purple-600 text-3xl mr-4">📧</span>
                <div>
                  <h3 className="font-semibold text-xl text-purple-700">Email Us</h3>
                  <p className="text-gray-700">For general inquiries or project discussions.</p>
                  <a href="mailto:info@pryzentech.com" className="text-indigo-600 hover:underline">info@pryzentech.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-purple-600 text-3xl mr-4">📞</span>
                <div>
                  <h3 className="font-semibold text-xl text-purple-700">Call Us</h3>
                  <p className="text-gray-700">Speak directly with our experts.</p>
                  <a href="tel:+918882320645" className="text-indigo-600 hover:underline">+91 8882320645</a>
                  <p></p>
                  <a href="tel:+918936950459" className="text-indigo-600 hover:underline"> +91 8936950459</a>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-purple-600 text-3xl mr-4">📍</span>
                <div>
                  <h3 className="font-semibold text-xl text-purple-700">Visit Our Office</h3>
                  <p className="text-gray-700">PryzenTech Headquarters:</p>
                  <address className="not-italic text-indigo-600">
                    Vishwash Nagar <br />
                    Sihani Ghaziabad 201001
                  </address>
                </div>
              </div>
            </div>

            <h3 className="font-semibold text-xl text-purple-700 mb-4">Connect on Social Media</h3>
            <div className="flex space-x-5">
              <a href="#" className="text-purple-600 hover:text-indigo-600 transition-colors duration-200">
                {/* LinkedIn Icon */}
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-purple-600 hover:text-indigo-600 transition-colors duration-200">
                {/* Twitter Icon */}
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.484 0-6.31 2.827-6.31 6.31 0 .497.056.983.164 1.447-5.243-.263-9.89-2.784-13.006-6.6-.543.935-.85 2.03-.85 3.197 0 2.185 1.112 4.12 2.808 5.263-.82-.025-1.59-.251-2.263-.624v.08c0 3.062 2.18 5.618 5.07 6.195-.532.145-1.094.222-1.668.222-.407 0-.802-.04-1.189-.114.804 2.509 3.13 4.339 5.899 4.39-.215.169-.434.331-.657.487-1.162.83-2.52 1.32-3.953 1.32-.257 0-.51-.015-.758-.045 3.013 1.92 6.593 3.044 10.46 3.044 12.55 0 19.33-10.373 19.33-19.33v-.875c1.32-.958 2.45-2.145 3.35-3.49z" />
                </svg>
              </a>
              <a href="#" className="text-purple-600 hover:text-indigo-600 transition-colors duration-200">
                {/* Facebook Icon */}
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.776-3.89 1.094 0 2.24.195 2.24.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-purple-100">
            <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-purple-900 font-semibold mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-purple-900 font-semibold mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-purple-900 font-semibold mb-1">
                  Service Required
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg bg-white text-purple-900 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none transition-all duration-200"
                >
                  <option value="">Select a service</option>
                  <option>Custom Website Development</option>
                  <option>E-commerce Solutions</option>
                  <option>Frontend Development</option>
                  <option>Backend Development</option>
                  <option>UI/UX Design</option>
                  <option>Software Maintenance & Support</option>
                  <option>SEO Optimization</option>
                  <option>Digital Marketing & Advertising</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-purple-900 font-semibold mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full px-4 py-3 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:from-purple-800 hover:to-indigo-900 transition-all duration-300 transform hover:scale-105"
                >
                  Submit Your Inquiry
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Map Section */}
        <section ref={mapRef} className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 border border-purple-100">
          <h2 className="text-3xl font-bold text-purple-800 text-center py-4">
            Find Us on the Map
          </h2>
          <div className="w-full h-96 ">
            {/* Placeholder for Google Map Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7000.236993621807!2d77.42159493789669!3d28.686101733119582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1748972468318!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PryzenTech Office Location - Vishwash Nagar Ghaziabad"
            ></iframe>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ContactUs;
