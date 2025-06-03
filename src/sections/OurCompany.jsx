import React from 'react';

const OurCompany = () => {
  return (
    <div className="border-t text-white border-white bg-gradient-to-r from-purple-900 to-purple-400 relative z-10  py-16 px-4 flex flex-col items-center rounded-lg shadow-lg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        {/* Left Column: Heading and Subtitle */}
        <div className="flex flex-col justify-center">
          <p className="text-sm text-purple-300 stroke-2 uppercase mb-2">Our Company</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Pryzentech Private Limited is your trusted source in Development Company in Ghaziabad, India
          </h2>
        </div>
        {/* Right Column: Main Description */}
        <div className="flex text-purple-300 items-center">
          <p className="text-lg leading-relaxed">
            Pryzentech Pvt is a privately owned <strong className="text-white">Development company in Ghaziabad, India </strong> 
            and IT Services business formed in 2025. Today we’re proud 
            to boast a strong team of <strong className="text-white">Web development</strong>and <strong className="text-white">SEO Optimization </strong> 
            who thrive on rolling up their sleeves and solving your IT problems and meeting your business needs. We are on a mission to exceed your expectations and form a long-term, mutually beneficial relationship with you.
          </p>
        </div>
      </div>

     

      {/* Call to Action */}
      <p className="text-lg text-slate-300 mt-8 text-center max-w-3xl mx-auto px-4">
        Stop wasting time and money on technology. <strong className="text-white">Explore our development company in Ghaziabad, India.</strong>
      </p>
    </div>
  );
};

export default OurCompany;
