import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import axios from "axios"; // Import axios for API calls
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm } from "react-hook-form"; // Import useForm for form management

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  // State for form submission status and loading
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', null

  // useForm hook for form validation and submission
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  // Function to handle form submission
  const submitContactForm = async (data) => {
    setLoading(true);
    setSubmissionStatus(null); // Reset status on new submission

    try {
      // Replace with your actual backend API endpoint
      const response = await axios.post("/api/v1/mail", data); // Assuming /api/contact is your backend endpoint

      if (response.status === 200) {
        setSubmissionStatus("success");
        reset(); // Reset form fields on successful submission
      } else {
        setSubmissionStatus("error");
        console.error("Form submission failed with status:", response.status);
      }
    } catch (error) {
      setSubmissionStatus("error");
      console.error("Error submitting form:", error);
      // You might want to display a more user-friendly error message here
    } finally {
      setLoading(false);
    }
  };

  // Effect to reset submission status after successful submission
  useEffect(() => {
    if (isSubmitSuccessful) {
      // You can add a timeout here to clear the success message after a few seconds
      // For now, it will stay until the user navigates away or submits again.
    }
  }, [isSubmitSuccessful]);

  // Refs for GSAP animations
  const headingRef = useRef(null);
  const introTextRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Animation for the main heading and intro text
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 }
    ).fromTo(
      introTextRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.5" // Stagger slightly after the heading
    );

    // Scroll-triggered animation for contact info and form
    gsap.fromTo(
      contactInfoRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
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
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
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
        ease: "power2.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-100 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-purple-800 mb-6 leading-tight"
          >
            Get in Touch with PryzenTech
          </h1>
          <p
            ref={introTextRef}
            className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Have a project in mind, a question about our **web development
            services**, or just want to say hello? We're here to help you
            achieve your **digital goals**.
          </p>
        </section>

        {/* Contact Content: Info & Form */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div
            ref={contactInfoRef}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-purple-100"
          >
            <h2 className="text-3xl font-bold text-purple-800 mb-6">
              Reach Out to Our Team
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Whether you're looking for a **custom website solution**, **SEO
              expertise**, or **digital marketing strategies**, our team is
              ready to assist.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <span className="text-purple-600 text-3xl mr-4">📧</span>
                <div>
                  <h3 className="font-semibold text-xl text-purple-700">
                    Email Us
                  </h3>
                  <p className="text-gray-700">
                    For general inquiries or project discussions.
                  </p>
                  <a
                    href="mailto:info@pryzentech.com"
                    className="text-indigo-600 hover:underline"
                  >
                    info@pryzentech.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-purple-600 text-3xl mr-4">📞</span>
                <div>
                  <h3 className="font-semibold text-xl text-purple-700">
                    Call Us
                  </h3>
                  <p className="text-gray-700">
                    Speak directly with our experts.
                  </p>
                  <a
                    href="tel:+918882320645"
                    className="text-indigo-600 hover:underline"
                  >
                    +91 8882320645
                  </a>
                  <p></p>
                  <a
                    href="tel:+918936950459"
                    className="text-indigo-600 hover:underline"
                  >
                    {" "}
                    +91 8936950459
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-purple-600 text-3xl mr-4">📍</span>
                <div>
                  <h3 className="font-semibold text-xl text-purple-700">
                    Visit Our Office
                  </h3>
                  <p className="text-gray-700">PryzenTech Headquarters:</p>
                  <address className="not-italic text-indigo-600">
                    Vishwash Nagar <br />
                    Sihani Ghaziabad 201001
                  </address>
                </div>
              </div>
            </div>

            <h3 className="font-semibold text-xl text-purple-700 mb-4">
              Connect on Social Media
            </h3>
            <div className="flex space-x-5">
              <a
                href="#"
                className="text-purple-600 hover:text-indigo-600 transition-colors duration-200"
              >
                {/* LinkedIn Icon */}
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-purple-600 hover:text-indigo-600 transition-colors duration-200"
              >
                {/* Twitter Icon */}
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.484 0-6.31 2.827-6.31 6.31 0 .497.056.983.164 1.447-5.243-.263-9.89-2.784-13.006-6.6-.543.935-.85 2.03-.85 3.197 0 2.185 1.112 4.12 2.808 5.263-.82-.025-1.59-.251-2.263-.624v.08c0 3.062 2.18 5.618 5.07 6.195-.532.145-1.094.222-1.668.222-.407 0-.802-.04-1.189-.114.804 2.509 3.13 4.339 5.899 4.39-.215.169-.434.331-.657.487-1.162.83-2.52 1.32-3.953 1.32-.257 0-.51-.015-.758-.045 3.013 1.92 6.593 3.044 10.46 3.044 12.55 0 19.33-10.373 19.33-19.33v-.875c1.32-.958 2.45-2.145 3.35-3.49z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-purple-600 hover:text-indigo-600 transition-colors duration-200"
              >
                {/* Facebook Icon */}
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.776-3.89 1.094 0 2.24.195 2.24.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-purple-100"
          >
            <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
              Send Us a Message
            </h2>
            <form
              onSubmit={handleSubmit(submitContactForm)}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-purple-900 font-semibold mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your name"
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                    errors.fullName ? "border-red-500" : "border-purple-300"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-purple-900 font-semibold mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                    errors.email ? "border-red-500" : "border-purple-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phoneNo"
                  className="block text-purple-900 font-semibold mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel" // Use type="tel" for phone numbers
                  id="phoneNo"
                  placeholder="e.g., +91 9876543210"
                  {...register("phoneNo", {
                    required: "Phone Number is required",
                    pattern: {
                      value:
                        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im, // Basic phone number regex
                      message: "Invalid phone number format",
                    },
                  })}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                    errors.phoneNo ? "border-red-500" : "border-purple-300"
                  }`}
                />
                {errors.phoneNo && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phoneNo.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-purple-900 font-semibold mb-1"
                >
                  Service Required
                </label>
                <select
                  id="service"
                  {...register("service", {
                    required: "Please select a service",
                  })}
                  className={`w-full px-4 py-3 rounded-lg bg-white text-purple-900 border focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none transition-all duration-200 ${
                    errors.service ? "border-red-500" : "border-purple-300"
                  }`}
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
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.service.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-purple-900 font-semibold mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us about your project or inquiry..."
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                    errors.message ? "border-red-500" : "border-purple-300"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading} // Disable button when loading
                  className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:from-purple-800 hover:to-indigo-900 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Your Inquiry"}
                </button>
              </div>

              {/* Submission Status Messages */}
              {submissionStatus === "success" && (
                <p className="text-green-600 text-center mt-4 font-semibold">
                  Thank you! Your message has been sent successfully. We will
                  get back to you shortly.
                </p>
              )}
              {submissionStatus === "error" && (
                <p className="text-red-600 text-center mt-4 font-semibold">
                  There was an error sending your message. Please try again
                  later or contact us directly.
                </p>
              )}
            </form>
          </div>
        </section>

        {/* Map Section */}
        <section
          ref={mapRef}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 border border-purple-100"
        >
          <h2 className="text-3xl font-bold text-purple-800 text-center py-4">
            Find Us on the Map
          </h2>
          <div className="w-full h-96 ">
            {/* Google Map Embed for Ghaziabad, Uttar Pradesh, India */}
            <iframe
              src="https://maps.google.com/maps?q=Vishwash%20Nagar,%20Sihani,%20Ghaziabad,%20Uttar%20Pradesh%20201001,%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
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
