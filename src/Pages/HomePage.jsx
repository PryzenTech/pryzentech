// import React from 'react'
// import Hero from '../sections/Hero'
// import Services from '../sections/Services'
// import Clients from '../sections/Clients'
// import OurValues from '../sections/OurValues'

// const HomePage = () => {
//   return (
//     <div className='text-purple-900'>
//         <Hero />
//         <Services/>
//         <Clients/>
//         <OurValues/>
//     </div>

//   )
// }

// export default HomePage
// src/HomePage.jsx
import React from "react";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Clients from "../sections/Clients";
import OurValues from "../sections/OurValues";
import OurCompany from "../sections/OurCompany";
import { useNavigate } from 'react-router-dom';
import TestimonialsSection from "../sections/TestimonialsSection";

const HomePage = () => {
    const navigate = useNavigate();
  return (
    <div className="">
      {/* The 3D background is now here, fixed behind all content */}
      {/* <ScrollExplosionEffect /> */}

      {/* All sections will now stack on top of the fixed 3D background */}
      <Hero />
      <OurCompany />
      <Services />
      <OurValues />
      <Clients />
      <TestimonialsSection/>
      <div className=" bg-gradient-to-r from-purple-100 to-purple-300  relative z-10 p-4 px-4  shadow-lg flex flex-col items-center justify-center gap-2 rounded-lg">
        <p>Let’s get started</p>
        <p>
          Are you ready for a better, more productive business? 
          </p>
          <p>Stop worrying
          about technology problems. Focus on your business. Let us provide the
          support you deserve.
        </p>
        <button type="button" onClick={()=>{
          navigate('/contactus')
        }}
        className="hover:scale-110 border rounded-md bg-purple-800 text-white p-2 px-4">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default HomePage;
