import React,{useEffect} from "react";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Clients from "../sections/Clients";
import OurValues from "../sections/OurValues";
import OurCompany from "../sections/OurCompany";
import { useNavigate } from 'react-router-dom';
import TestimonialsSection from "../sections/TestimonialsSection";

import Scroll3DEffect from "../Components/Scroll3DEffect";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const HomePage = () => {
  const navigate = useNavigate();
  
 
  return (
    <div className="relative min-h-screen  text-white overflow-x-hidden">
      {/* Add the 3D scroll effect */}
      {/* <Scroll3DEffect /> */}
      
      {/* All content sections with higher z-index */}
      <div className="relative z-10">
        <Hero />

        <OurCompany />
        <Services />
        <OurValues />
        <TestimonialsSection />
        
        <div className="max-w-4xl mx-auto my-20 p-8 bg-gradient-to-r from-purple-800 to-purple-500 backdrop-blur-sm rounded-xl shadow-2xl border border-purple-500/30">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6  bg-clip-text">
              Ready for a Digital Transformation?
            </h2>
            <div className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-purple-100">
              Stop worrying about technology problems. Focus on your business. 
              Let us provide the support you deserve.
            </div>
            <button 
              onClick={() => navigate('/contactus')}
              className="px-8 py-3 rounded-full border text-white font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;