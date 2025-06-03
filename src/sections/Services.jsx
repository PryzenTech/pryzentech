import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import autoplay styles if needed

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const OurCompany = () => {
  // Define the list of services with icons (using inline SVG for simplicity)
  const services = [
    {
      title: "Custom Website Development",
      description: "Crafting bespoke web solutions tailored to your unique business needs and goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Backend Development",
      description: "Building robust and scalable server-side logic and databases to power your applications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Frontend Development",
      description: "Creating engaging and intuitive user interfaces that provide seamless and enjoyable experiences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "React Development",
      description: "Leveraging the power of React.js to build fast, interactive, and modern single-page applications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive and engaging user interfaces (UI) and user experiences (UX) that captivate your audience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h6l-1-1l-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Software Maintenance & Support",
      description: "Ensuring your software runs smoothly with ongoing maintenance, updates, and dedicated support.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      title: "SEO Optimization",
      description: "Increase your online visibility and attract more organic traffic with our comprehensive  (SEO) services.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: "Advertising",
      description: "Drive immediate, targeted traffic to your website with expertly managed Google advertising campaigns.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
  ];

  return (
    <div className=" bg-gradient-to-r from-purple-100 to-purple-300  relative z-15 py-16 px-4 flex flex-col items-center rounded-lg shadow-lg ">
      
{/* Custom styles for Swiper pagination and navigation */}
      <style>
        {`
          /* Pagination bullets */
          .swiper-pagination {
            position: absolute;
            bottom: 0px !important; /* Increased bottom to push bullets further down */
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10; /* Ensure bullets are above content */
          }

          .swiper-pagination-bullet {
            background-color: #a78bfa !important; /* Light purple for inactive bullets */
            opacity: 0.7;
      
            width: 10px; /* Adjust size */
            height: 10px; /* Adjust size */
            border-radius: 50%; /* Make them perfectly round */
            transition: all 0.3s ease;
            margin: 0 6px !important; /* Add more horizontal spacing between bullets */
          }

          .swiper-pagination-bullet-active {
            background-color: #8b5cf6 !important; /* Darker purple for active bullet */
            opacity: 1;
            width: 12px; /* Slightly larger for active */
            height: 12px;
            box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.5); /* Add a subtle glow */
          }

          /* Navigation arrows */
          .swiper-button-next,
          .swiper-button-prev {
            color: #a78bfa !important; /* Purple color for navigation arrows */
            transition: color 0.3s ease, background-color 0.3s ease;
            top: 50%; /* Vertically center */
            transform: translateX(-50%); /* Adjust for perfect centering */
            z-index: 20; /* Ensure arrows are above content and bullets */
            width: 40px; /* Make arrows slightly larger for better clickability */
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%; /* Make arrows round */
           
            
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            color: #8b5cf6 !important; /* Darker purple on hover */
            background-color: rgba(0,0,0,0.6); /* Darker background on hover */
          }

          /* Adjust arrow positions to be slightly more outside the slide content */
          .swiper-button-prev {
            left: 15px !important; /* Push left arrow slightly more to the left */
          }

          .swiper-button-next {
            right: 15px !important; /* Push right arrow slightly more to the right */
          }

          /* Responsive adjustments for arrows on smaller screens */
          @media (max-width: 768px) {
            .swiper-button-next,
            .swiper-button-prev {
              transform: scale(0.8) translateY(-50%); /* Slightly smaller arrows on mobile, maintain center */
              top: 50%;
              width: 35px;
              height: 35px;
            }
            .swiper-button-prev {
              left: 5px !important;
            }
            .swiper-button-next {
              right: 5px !important;
            }
          }
        `}
      </style>
      {/* Our Services Section with Swiper */}
      <div className="max-w-[90vw]  border-black  mx-auto w-full mt-10 p-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">Our Services</h2>
        <Swiper 
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000, // Auto-swipe every 1 seconds
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[13rem] "
          breakpoints={{
            640: { // sm breakpoint
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: { // lg breakpoint
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="border-t  border-black bg-white  p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border flex flex-col items-center text-center h-full">
                {service.icon}
                <h3 className="text-2xl font-semibold text-purple-700 mb-4">{service.title}</h3>
                <p className=" flex-grow">{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='mt-10 text-lg'>
        Explore Our Services and Give us opportunity to solve your Problems
      </div>

     
    </div>
  );
};

export default OurCompany;
