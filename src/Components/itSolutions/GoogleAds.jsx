import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import adimg1 from '../../assets/ADS3.jpeg';
import adimg2 from "../../assets/ADS2.jpeg";
import adimg3 from "../../assets/ADS5.jpeg";

gsap.registerPlugin(ScrollTrigger);

const GoogleAds = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const secondSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);

  useEffect(() => {
    // First entry animation
    const tl = gsap.timeline({ defaults: { duration: 1.2, ease: 'power2.out' } });

    tl.fromTo(
      textRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1 }
    ).fromTo(
      imageRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1 },
      '-=0.6'
    );

    // Scroll animation for next sections
    gsap.fromTo(
      secondSectionRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: secondSectionRef.current,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo(
      thirdSectionRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: thirdSectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-100 to-purple-400 py-12">
      {/* Header */}
      <div className="flex justify-center mb-10">
        <h2 className="text-2xl md:text-3xl text-center font-semibold flex flex-col">
          <span>Google Advertising</span>
          <span>Maximize Your Reach</span>
        </h2>
      </div>

      {/* Content Section 1 */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-16">
        {/* Text */}
        <div ref={textRef} className="md:w-1/2 w-full text-left p-2 md:p-6">
          <p className="text-gray-900 text-lg mb-4">
            Reach the right audience at the right time with our results-driven Google Ads services. 
            We create targeted campaigns that boost visibility, drive qualified traffic, and increase your ROI. 
            Whether you're looking to generate leads, promote products, or grow brand awareness — we've got you covered.
          </p>
          <p className="text-purple-900 font-semibold mb-2">Our Services:</p>
          <ul className="list-disc pl-5 text-gray-800 space-y-1">
            <li>Search & Display Ads</li>
            <li>Conversion tracking for better insights</li>
            <li>A/B Testing to optimize performance</li>
          </ul>
        </div>

        {/* Image */}
        <div ref={imageRef} className="md:w-1/2 w-full flex justify-center">
          <img
            src={adimg1}
            alt="Google Ads Campaign"
            className="w-full max-w-md rounded-xl shadow-xl"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div ref={secondSectionRef} className="bg-gradient-to-r from-purple-400 to-purple-100 py-12 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10 mt-16">
        <div className="md:w-1/2 w-full">
          <img src={adimg2} alt="Ad Strategy" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 w-full text-gray-900">
          <h3 className="text-2xl font-semibold text-purple-900 mb-4">Smart Ad Strategies</h3>
          <p>
            We don't just run ads — we craft campaigns designed to convert. Our team leverages search intent,
            competitor data, and audience demographics to build smart, cost-effective strategies. With continuous 
            optimization, real-time tracking, and regular reporting, you get performance that scales with your goals.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div ref={thirdSectionRef} className="py-12 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10 mt-10">
        <div className="md:w-1/2 w-full text-gray-900 order-2 md:order-1">
          <h3 className="text-2xl font-semibold text-purple-900 mb-4">Why Google Ads?</h3>
          <p>
            Google Ads is one of the most powerful marketing tools available today. With billions of daily searches, 
            you can put your brand in front of people actively looking for your product or service. We help you harness 
            this power with precise targeting, engaging copy, and high-converting landing pages tailored for your business.
          </p>
        </div>
        <div className="md:w-1/2 w-full order-1 md:order-2">
          <img src={adimg3} alt="Why Google Ads" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default GoogleAds;
