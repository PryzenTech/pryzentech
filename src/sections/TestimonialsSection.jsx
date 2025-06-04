import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Techwarezen transformed our online presence. Their expertise and dedication are truly remarkable. We saw a significant increase in engagement and conversions.",
      author: "Jane Doe",
      title: "CEO of InnovateCorp",
      avatar: "https://placehold.co/100x100/A78BFA/ffffff?text=JD" // Placeholder image
    },
    {
      quote: "The team at Techwarezen delivered a stunning e-commerce platform that exceeded our expectations. Their communication and support throughout the project were exceptional.",
      author: "John Smith",
      title: "Founder of E-Shop Solutions",
      avatar: "https://placehold.co/100x100/8B5CF6/ffffff?text=JS" // Placeholder image
    },
    {
      quote: "Working with Techwarezen was a seamless experience. Their game development skills are top-notch, and they brought our vision to life perfectly.",
      author: "Emily White",
      title: "Game Studio Lead",
      avatar: "https://placehold.co/100x100/5B21B6/ffffff?text=EW" // Placeholder image
    },
    {
      quote: "Their SEO optimization services significantly boosted our organic traffic. Techwarezen is a reliable partner for digital growth.",
      author: "Michael Brown",
      title: "Marketing Director",
      avatar: "https://placehold.co/100x100/6D28D9/ffffff?text=MB" // Placeholder image
    },
    {
      quote: "The React application developed by Techwarezen is incredibly fast and user-friendly. Highly recommend their development team!",
      author: "Sarah Green",
      title: "Product Manager",
      avatar: "https://placehold.co/100x100/7C3AED/ffffff?text=SG" // Placeholder image
    },
  ];

  return (
    <div className=" bg-gradient-to-r from-purple-100 to-purple-300  text-white   py-20 px-4 rounded-lg shadow-lg z-11 ">
      {/* Custom styles for Swiper pagination and navigation specific to this component */}
      <style>
        {`
          /* Ensure Swiper container has relative positioning for absolute children */
          .swiper-container-testimonials {
            position: relative;
            padding-bottom: 60px; /* Space for pagination */
          }

          /* Pagination bullets */
          .swiper-pagination-testimonials {
            position: absolute;
            // bottom: 20px !important; /* Position bullets below the slides */
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10; /* Ensure bullets are above content */
          }

          .swiper-pagination-testimonials .swiper-pagination-bullet {
            background-color: #a78bfa !important; /* Light purple for inactive bullets */
            opacity: 0.7;
            width: 10px; /* Adjust size */
            height: 10px; /* Adjust size */
            border-radius: 50%; /* Make them perfectly round */
            transition: all 0.3s ease;
            margin: 0 6px !important; /* Add more horizontal spacing between bullets */
          }

          .swiper-pagination-testimonials .swiper-pagination-bullet-active {
            background-color: #8b5cf6 !important; /* Darker purple for active bullet */
            opacity: 1;
            width: 12px; /* Slightly larger for active */
            height: 12px;
            border-radius: 50%; /* Ensure it's explicitly circular */
            box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.7); /* Enhanced glow for active circular bullet */
          }

          /* Navigation arrows */
          .swiper-button-next-testimonials,
          .swiper-button-prev-testimonials {
            // color: #a78bfa !important; /* Purple color for navigation arrows */
            transition: color 0.3s ease, background-color 0.3s ease;
            top: 50%; /* Vertically center */
            transform: translateY(-50%); /* Adjust for perfect centering */
            z-index: 20; /* Ensure arrows are above content and bullets */
            width: 40px; /* Make arrows slightly larger for better clickability */
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%; /* Make arrows round */
            background-color: rgba(0,0,0,0.4); /* Semi-transparent background for visibility */
            box-shadow: 0 2px 10px rgba(0,0,0,0.3); /* Add subtle shadow to arrows */
          }

          .swiper-button-next-testimonials:hover,
          .swiper-button-prev-testimonials:hover {
            color: #8b5cf6 !important; /* Darker purple on hover */
           
          }

          /* Adjust arrow positions to be slightly more outside the slide content */
          .swiper-button-prev-testimonials {
            left: 15px !important; /* Push left arrow slightly more to the left */
          }

          .swiper-button-next-testimonials {
            right: 15px !important; /* Push right arrow slightly more to the right */
          }

          /* Responsive adjustments for arrows on smaller screens */
          @media (max-width: 768px) {
            .swiper-button-next-testimonials,
            .swiper-button-prev-testimonials {
              transform: scale(0.8) translateY(-50%); /* Slightly smaller arrows on mobile, maintain center */
              top: 50%;
              width: 35px;
              height: 35px;
            }
            .swiper-button-prev-testimonials {
              left: 5px !important;
            }
            .swiper-button-next-testimonials {
              right: 5px !important;
            }
          }
        `}
      </style>

      <div className=" mx-auto w-full ">
        <h3 className="paraFont-900 text-4xl text-purple-800 font-bold text-center mb-12 ">What Our Clients Say</h3>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000, // Auto-swipe every 3 seconds
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          loop={true} // Continuous circular motion
        //   pagination={{
        //     clickable: true,
        //  }}
        //  navigation={true}
          
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper" // Unique class for this Swiper instance
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gradient-to-r from-purple-600 to-purple-900 p-8 rounded-lg shadow-xl border border-purple-700 flex flex-col items-center text-center max-w-2xl mx-auto h-full justify-between">
                {/* <img
                  src={testimonial.avatar}
                  alt={`${testimonial.author}'s avatar`}
                  className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-purple-500"
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/100x100/A78BFA/ffffff?text=${testimonial.author.split(' ').map(n => n[0]).join('')}`; }} // Fallback for image loading errors
                /> */}
                <p className="bona-italic text-purple-100 mb-6 flex-grow text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="text-purple-300 font-semibold text-base">
                  <p>- {testimonial.author}</p>
                  <p className="text-sm text-purple-200">{testimonial.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialsSection;
