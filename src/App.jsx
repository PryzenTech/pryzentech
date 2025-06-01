import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

const Home = () => <div className="p-4 text-xl">Welcome to Home</div>;
const About = () => <div className="p-4 text-xl">About Us</div>;
const MobileAppDev = () => <div className="p-4 text-xl">Mobile App Development</div>;
// Add more dummy pages as needed...

const App = () => {
  return (
    <Router>
      <div className="text-4xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mobile-app-development-company" element={<MobileAppDev />} />
          {/* Add more Route components for other paths you defined in Navbar */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
