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
  const secondImageRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const thirdImageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.2, ease: 'power2.out' } });

    tl.fromTo(textRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 })
      .fromTo(imageRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 }, '-=0.6');

    // Scroll grow-up animations for second and third images
    [secondSectionRef, secondImageRef, thirdSectionRef, thirdImageRef].forEach((ref, index) => {
      if (index % 2 === 0) {
        gsap.fromTo(
          ref.current,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
            }
          }
        );
      } else {
        gsap.fromTo(
          ref.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 85%',
            }
          }
        );
      }
    });
  }, []);

  return (
    <div className="bg-gradient-to-t md:bg-gradient-to-r from-purple-100 to-purple-400 py-12">
      {/* Header */}
      <div className="flex justify-center mb-10">
        <h2 className="text-2xl md:text-3xl text-center font-semibold flex flex-col">
          <span>Google Advertising</span>
          <span>Maximize Your Reach</span>
        </h2>
      </div>

      {/* Content Section 1 */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-16">
        <div ref={textRef} className="md:w-1/2 w-full text-left p-2 md:p-6">
          <p className="text-gray-900 text-lg mb-4">
            Reach the right audience at the right time with our results-driven Google Ads services. 
            We create targeted campaigns that boost visibility, drive qualified traffic, and increase your ROI.
          </p>
          <p className="text-purple-900 font-semibold mb-2">Our Services:</p>
          <ul className="list-disc pl-5 text-gray-800 space-y-1">
            <li>Search & Display Ads</li>
            <li>Conversion tracking for better insights</li>
            <li>A/B Testing to optimize performance</li>
          </ul>
        </div>

        <div ref={imageRef} className="md:w-1/2 w-full flex justify-center">
          <img
            src={adimg1}
            alt="Google Ads Campaign"
            className="w-full max-w-md h-[400px] object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div ref={secondSectionRef} className="py-12 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10 mt-16">
        <div ref={secondImageRef} className="md:w-1/2 w-full">
          <img
            src={adimg2}
            alt="Ad Strategy"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 w-full text-gray-900">
          <h3 className="text-2xl font-semibold text-purple-900 mb-4">Smart Ad Strategies</h3>
          <p>
            We don't just run ads — we craft campaigns designed to convert. Our team leverages search intent,
            competitor data, and audience demographics to build smart, cost-effective strategies.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div ref={thirdSectionRef} className="py-12 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10 mt-10">
        <div className="md:w-1/2 w-full text-gray-900 order-2 md:order-1">
          <h3 className="text-2xl font-semibold text-purple-900 mb-4">Why Google Ads?</h3>
         <p>
  <span className='text-purple-950 font-semibold'>Google Ads:</span> Unlock Unmatched Visibility with Powerful <span className='text-purple-950 font-semibold'>Online Advertising</span>.
  <span className='text-purple-950 font-semibold'>Google Ads</span> is one of the most powerful and cost-effective 
  <span className='text-purple-950 font-semibold'>digital marketing</span> tools available in today’s competitive online landscape. 
  With billions of daily <span className='text-purple-950 font-semibold'>Google searches</span>, this advertising platform allows your business 
  to reach high-intent users who are actively searching for products or services like yours.
  <br /><br />
  Whether you’re a startup, small business, or an established enterprise, 
  <span className='text-purple-950 font-semibold'>Google Ads</span> helps you appear at the top of 
  <span className='text-purple-950 font-semibold'>search engine results</span>, driving qualified traffic directly to your website. 
  By leveraging <span className='text-purple-950 font-semibold'>keyword targeting</span>, 
  <span className='text-purple-950 font-semibold'>location-based ads</span>, and 
  <span className='text-purple-950 font-semibold'>custom audience segments</span>, we ensure your brand appears in front of the right people — 
  at exactly the right time.
  <br /><br />
  Our strategic approach to <span className='text-purple-950 font-semibold'>PPC (Pay-Per-Click) advertising</span>, 
  combined with <span className='text-purple-950 font-semibold'>conversion-optimized landing pages</span>, allows you to maximize ROI 
  while reducing unnecessary ad spend. With continuous <span className='text-purple-950 font-semibold'>campaign optimization</span>, 
  <span className='text-purple-950 font-semibold'>A/B testing</span>, and 
  <span className='text-purple-950 font-semibold'>performance analytics</span>, your business stays one step ahead of the competition.
  <br /><br />
  Let us help you harness the full potential of 
  <span className='text-purple-950 font-semibold'>Google search ads</span>, 
  <span className='text-purple-950 font-semibold'>display ads</span>, and 
  <span className='text-purple-950 font-semibold'>remarketing campaigns</span> to generate more leads, increase sales, and build brand authority.
</p>

        </div>
        <div ref={thirdImageRef} className="md:w-1/2 w-full order-1 md:order-2">
          <img
            src={adimg3}
            alt="Why Google Ads"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleAds;
