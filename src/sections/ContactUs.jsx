import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ContactUs = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-100 to-purple-400 py-16 min-h-screen">
      <div className="max-w-[90vw] mx-auto px-4" ref={formRef}>
        <h1 className="text-4xl text-center font-bold text-purple-900 mb-10">
          Contact Us
        </h1>

        <form className="bg-white/80 p-6 md:p-8 rounded-2xl shadow-xl space-y-6">
          <div>
            <label className="block text-purple-900 font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-purple-900 font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
  <label className="block text-purple-900 font-semibold mb-1">
    Service Required
  </label>
  <div className=" p-[2px] rounded-lg">
    <select
      className="w-full px-4 py-2 rounded-lg bg-transparent text-purple-900 border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
    >
      <option className='' value="">Select a service</option>
      <option>Custom Website Development</option>
      <option>Backend Development</option>
      <option>Frontend Development</option>
      <option>React Development</option>
      <option>UI/UX Design</option>
      <option>Software Maintenance & Support</option>
      <option>SEO Optimization</option>
      <option>Google Advertising</option>
    </select>
  </div>
</div>


          <div>
            <label className="block text-purple-900 font-semibold mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell us what you need..."
              className="w-full px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-purple-800 transition duration-300"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
