import React, { useState } from 'react';
import {
  FaHome,
  FaBuilding,
  FaCogs,
  FaBars,
  FaMobile,
  FaAndroid,
  FaApple,
  FaCloud,
  FaShieldAlt,
  FaWrench,
  FaUsers,
  FaAward,
  FaBriefcase,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaLightbulb,
} from 'react-icons/fa';
import { MdClose, MdInfo, MdSupervisorAccount, MdOutlinePhotoLibrary } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from '../assets/pryzenlogo2.png';

const itSolutions = [
  { name: 'Custom Website Development', path: '/custom-website-development', icon: <FaWrench /> },
  { name: 'Backend Development', path: '/backend-development', icon: <FaCogs /> },
  { name: 'Frontend Development', path: '/frontend-development', icon: <FaMobile /> },
  { name: 'React Development', path: '/react-development', icon: <FaAndroid /> },
  { name: 'UI/UX Design', path: '/ui-ux-design', icon: <FaApple /> },
  { name: 'Software Maintenance & Support', path: '/software-maintenance-support', icon: <FaShieldAlt /> },
  { name: 'SEO Optimization', path: '/seo-optimization', icon: <FaCloud /> },
  { name: 'Google Advertising', path: '/google-advertising', icon: <FaLightbulb /> },
];


const company = [
  { name: 'About', path: '/about', icon: <MdInfo /> },
  { name: 'Mission, Vision and Values', path: '/mission-vision-and-values', icon: <FaLightbulb /> },
  { name: 'Awards', path: '/awards', icon: <FaAward /> },
  { name: 'Leadership Team', path: '/leadership-team', icon: <MdSupervisorAccount /> },
  { name: 'Media', path: '/media', icon: <MdOutlinePhotoLibrary /> },
  { name: 'Careers', path: '/careers', icon: <FaBriefcase /> },
  { name: 'Why Choose Us', path: '/why-choose-us', icon: <FaUsers /> },
  { name: 'Locations', path: '/locations', icon: <FaMapMarkerAlt /> },
  { name: 'FAQ', path: '/faq', icon: <FaQuestionCircle /> },
];

const navItems = [
  {
    name: 'Home',
    path: '/',
    icon: <FaHome />,
  },
  {
    name: 'IT Solutions',
    icon: <FaCogs />,
    children: itSolutions,
  },
  {
    name: 'Company',
    icon: <FaBuilding />,
    children: company,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  // Toggle dropdown on mobile menu for better UX
  const toggleMobileDropdown = (name) => {
    if (mobileDropdown === name) {
      setMobileDropdown(null);
    } else {
      setMobileDropdown(name);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-purple-400 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold overflow-hidden">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-14" />
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdClose /> : <FaBars />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center gap-6 text-sm">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative group text-sm"
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-purple-300 select-none">
                {item.icon}
                <span className=''>{item.name}</span>
              </div>

              {/* Dropdown on hover for desktop */}
              {item.children && (
                <ul
                  className={`absolute z-50 bg-white text-black mt-2 p-2 rounded shadow-lg w-72 ${
                    hovered === item.name ? 'block' : 'hidden'
                  } group-hover:block`}
                >
                  {item.children.map((subItem, subIdx) => (
                    <li
                      key={subIdx}
                      className="px-4 py-2 hover:bg-purple-100 hover:text-purple-700 transition-colors flex items-center gap-2"
                    >
                      {subItem.icon}
                      <Link to={subItem.path}>{subItem.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Slide-in */}
      <div
        className={`fixed top-0 right-0 text-lg h-full w-64 bg-purple-900 text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <ul className="flex flex-col mt-20 px-4">
          {navItems.map((item, idx) => (
            <li key={idx} className="mb-2">
              {/* Main item */}
              <div
                onClick={() => (item.children ? toggleMobileDropdown(item.name) : setIsOpen(false))}
                className="flex items-center gap-2 cursor-pointer px-2 py-3 hover:bg-purple-700 rounded select-none"
              >
                {item.icon}
                <span>{item.name}</span>
                {item.children && (
                  <svg
                    className={`w-4 h-4 ml-auto transition-transform ${
                      mobileDropdown === item.name ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>

              {/* Mobile dropdown children */}
              {item.children && mobileDropdown === item.name && (
                <ul className="pl-6 mt-1 space-y-1">
                  {item.children.map((subItem, subIdx) => (
                    <li key={subIdx}>
                      <Link
                        to={subItem.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 px-2 py-2 rounded hover:bg-purple-700 transition-colors"
                      >
                        {subItem.icon}
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay behind mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;
