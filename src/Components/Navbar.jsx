import React, { useState, useCallback } from 'react'; // Added useCallback
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
  FaPhoneAlt
} from 'react-icons/fa';
import { GrTasks } from "react-icons/gr";
import { MdClose, MdInfo, MdSupervisorAccount, MdOutlinePhotoLibrary } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from '../assets/pryzenlogo2.png';

const itSolutions = [
  { name: 'Custom Website Development', path: '/solutions/web-development', icon: <FaWrench /> },
  { name: 'Backend Development', path: '/solutions/backend-development', icon: <FaCogs /> },
  { name: 'Frontend Development', path: '/solutions/frontend-development', icon: <FaMobile /> },
  { name: 'React Development', path: '/solutions/react-development', icon: <FaAndroid /> },
  { name: 'UI/UX Design', path: '/solutions/ui-ux', icon: <FaApple /> },
  { name: 'Software Maintenance & Support', path: '/solutions/software-maintenanace', icon: <FaShieldAlt /> },
  { name: 'SEO Optimization', path: '/solutions/seo-optimization', icon: <FaCloud /> },
  { name: 'Google Advertising', path: '/solutions/google-advertising', icon: <FaLightbulb /> },
];

const company = [
  { name: 'About', path: '/company/aboutcompany', icon: <MdInfo /> },
  { name: 'Mission, Vision and Values', path: '/company/vision-mission', icon: <FaLightbulb /> },
  { name: 'Awards', path: '/company/awards', icon: <FaAward /> },
  { name: 'Leadership Team', path: '/company/team', icon: <MdSupervisorAccount /> },
  { name: 'Media', path: '/company/media', icon: <MdOutlinePhotoLibrary /> },
  { name: 'Careers', path: '/company/careers', icon: <FaBriefcase /> },
  { name: 'Why Choose Us', path: '/company/why-choose-us', icon: <FaUsers /> },
  { name: 'Locations', path: '/company/locations', icon: <FaMapMarkerAlt /> },
  { name: 'FAQ', path: '/company/faq', icon: <FaQuestionCircle /> },
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
  {
    name: 'Portfolio',
    icon: <GrTasks />,
    path: '/portfolio',
  },
  {
    name: 'Contact Us',
    icon: <FaPhoneAlt />,
    path: '/contactus',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Renamed hovered to activeDropdown for clarity
  const [mobileDropdown, setMobileDropdown] = useState(null);

  // Memoize toggle functions for potential performance gains
  const toggleMobileDropdown = useCallback((name) => {
    setMobileDropdown(prev => (prev === name ? null : name));
  }, []);

  const handleMouseEnter = useCallback((name) => {
    setActiveDropdown(name);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
    setMobileDropdown(null); // Also close any open mobile dropdown
  }, []);

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-purple-400 text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold overflow-hidden">
          <Link to="/" onClick={closeMobileMenu}> {/* Close mobile menu on logo click */}
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
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              {item.path ? (
                // Direct link without dropdown
                <Link to={item.path} className="flex items-center gap-1 cursor-pointer hover:text-purple-300 select-none py-2 px-1">
                  {item.icon}
                  <span className=''>{item.name}</span>
                </Link>
              ) : (
                // Item with dropdown
                <div className="flex items-center gap-1 cursor-pointer hover:text-purple-300 select-none py-2 px-1">
                  {item.icon}
                  <span className=''>{item.name}</span>
                </div>
              )}

              {/* Dropdown on hover for desktop */}
              {item.children && (
                <ul
                  // Use activeDropdown for explicit control, combined with group-hover for resilience
                  className={`absolute z-50 bg-white text-black mt-[1px] p-2 rounded shadow-lg w-72 origin-top transition-all duration-200 ease-out transform border-2 
                    ${activeDropdown === item.name ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}
                    group-hover:scale-y-100 group-hover:opacity-100 group-hover:pointer-events-auto
                  `}
                >
                  {item.children.map((subItem, subIdx) => (
                    <li
                      key={subIdx}
                      className="px-4 py-2 hover:bg-purple-100 hover:text-purple-700 transition-colors flex items-center gap-2"
                    >
                      <Link to={subItem.path} className="flex items-center gap-2 w-full h-full"> {/* Ensure link covers full area */}
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

      {/* Mobile Menu Slide-in */}
      <div
        className={`fixed top-0 right-0 text-lg h-full w-64 bg-purple-900 text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex justify-end p-4"> {/* Close button inside mobile menu */}
          <MdClose className="text-3xl cursor-pointer" onClick={closeMobileMenu} />
        </div>
        <ul className="flex flex-col mt-4 px-4"> {/* Adjusted margin-top for close button */}
          {navItems.map((item, idx) => (
            <li key={idx} className="mb-2">
              {/* Main item */}
              {item.path ? (
                <Link
                  to={item.path}
                  onClick={closeMobileMenu}
                  className="flex items-center gap-2 cursor-pointer px-2 py-3 hover:bg-purple-700 rounded select-none "
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ) : (
                <div
                  onClick={() => toggleMobileDropdown(item.name)}
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
              )}

              {/* Mobile dropdown children */}
              {item.children && mobileDropdown === item.name && (
                <ul className="pl-6 mt-1 space-y-1">
                  {item.children.map((subItem, subIdx) => (
                    <li key={subIdx}>
                      <Link
                        to={subItem.path}
                        onClick={closeMobileMenu} // Close mobile menu when sub-item is clicked
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
          onClick={closeMobileMenu} // Close mobile menu when overlay is clicked
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;