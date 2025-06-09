import React, { useEffect, useState } from "react";

const logos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://vitejs.dev/logo.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
];

const random = (min, max) => Math.random() * (max - min) + min;

const FloatingLogosBackground = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // Initialize positions with random start coordinates and animation delay
    const initialPositions = Array(15)
      .fill()
      .map(() => ({
        logo: logos[Math.floor(Math.random() * logos.length)],
        x: random(0, 100), // % horizontal
        y: random(0, 100), // % vertical
        size: random(30, 60), // px
        delay: random(0, 10), // sec animation delay
        duration: random(15, 30) // sec animation duration
      }));
    setPositions(initialPositions);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
    >
      {positions.map(({ logo, x, y, size, delay, duration }, i) => (
        <img
          key={i}
          src={logo}
          alt=""
          draggable={false}
          className="absolute opacity-20"
          style={{
            width: size,
            height: size,
            top: `${y}%`,
            left: `${x}%`,
            filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.15))",
            animation: `floatAnim ${duration}s ease-in-out infinite`,
            animationDelay: `${delay}s`
          }}
        />
      ))}

      <style>{`
        @keyframes floatAnim {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.15;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingLogosBackground;
