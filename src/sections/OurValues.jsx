import React from 'react';

const OurValues = () => {
  return (
    // Added relative positioning and z-index to ensure it layers above the fixed 3D background.
    // A background color (bg-white) is crucial for readability over the animated sphere.
    <div className="paraFont-900 bg-gradient-to-r from-purple-100 to-purple-300  relative py-20 px-4  shadow-lg rounded-lg  z-14 ">
      <div className="max-w-[90vw] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Value Card 1: Innovation */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Innovation</h3>
            <p className="text-gray-700">
              We constantly explore new technologies and creative approaches to deliver cutting-edge solutions that keep you ahead of the curve.
            </p>
          </div>

          {/* Value Card 2: Client-Centricity */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Client-Centricity</h3>
            <p className="text-gray-700">
              Your success is our priority. We listen, understand, and tailor our services to meet your specific goals and exceed expectations.
            </p>
          </div>

          {/* Value Card 3: Quality Excellence */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Quality Excellence</h3>
            <p className="text-gray-700">
              We are committed to delivering high-quality, robust, and scalable web solutions that stand the test of time.
            </p>
          </div>

          {/* Value Card 4: Transparency */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Transparency</h3>
            <p className="text-gray-700">
              Open communication and clear processes are at the heart of our operations, ensuring you're always informed.
            </p>
          </div>

          {/* Value Card 5: Continuous Growth */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Continuous Growth</h3>
            <p className="text-gray-700">
              We foster a culture of learning and improvement, constantly evolving to better serve our clients and team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurValues;
