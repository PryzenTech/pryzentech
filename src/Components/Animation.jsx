// // import React from "react";
// // import { motion } from "framer-motion";

// // const logos = [
// //   { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
// //   { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
// //   { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
// //   { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
// //   { name: "Vite", src: "https://vitejs.dev/logo.svg" },
// //   { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
// //   { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
// //   { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
// // ];
// // const Animation = () => {
// //   return (
// //     <div className="w-full h-[50rem] bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex items-center justify-center">
// //       <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
// //         {logos.map((logo, index) => (
// //           <motion.div
// //             key={logo.name}
// //             initial={{ scale: 0, rotate: 0 }}
// //             animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
// //             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
// //             className="w-24 h-24 p-4 bg-white rounded-xl shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
// //           >
// //             <img src={logo.src} alt={logo.name} className="w-full h-full object-contain" />
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Animation;
// import React, { useEffect, useState } from "react";

// const logos = [
//   { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
//   { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
//   { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
//   { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
//   // { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
//   { name: "Vite", src: "https://vitejs.dev/logo.svg" },
//   { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//   { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
//   { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
// ];

// const radius = 150;

// const Animation = () => {
//   const [angle, setAngle] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAngle((prev) => prev + 0.01);
//     }, 16);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full h-[50rem] bg-purple-700 text-white flex items-center justify-center">
//       <div className="relative w-[400px] h-[400px]">
//         {logos.map((logo, i) => {
//           const theta = (2 * Math.PI * i) / logos.length + angle;
//           const x = radius * Math.cos(theta);
//           const y = radius * Math.sin(theta);

//           return (
//             <img
//               key={logo.name}
//               src={logo.src}
//               alt={logo.name}
//               title={logo.name}
//               className="absolute w-16 h-16 object-contain rounded-md shadow-lg"
//               style={{
//                 top: `calc(50% + ${y}px)`,
//                 left: `calc(50% + ${x}px)`,
//                 transform: "translate(-50%, -50%)"
//               }}
//             />
//           );
//         })}
//         <div className="absolute inset-0 rounded-full"></div>
//       </div>
//     </div>
//   );
// };

// export default Animation;
import React, { useEffect, useState } from "react";

const logos = [
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Vite", src: "https://vitejs.dev/logo.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
];

const radius = 150;

const Animation = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 0.01);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[40rem]  flex items-center justify-center">
      <div
        className="relative w-[400px] h-[400px] rounded-3xl shadow-[ 
          0_4px_15px_rgba(0,0,0,0.7), 
          inset_0_0_30px_rgba(255,255,255,0.05),
          0_0_20px_5px_rgba(152,0,255,0.4)
        ]"
        style={{ perspective: "800px" }}
      >
        {logos.map((logo, i) => {
          const theta = (2 * Math.PI * i) / logos.length + angle;
          const x = radius * Math.cos(theta);
          const y = radius * Math.sin(theta);

          return (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              title={logo.name}
              className="absolute w-16 h-16 object-contain rounded-md shadow-2xl"
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: "translate(-50%, -50%)",
                filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.4))",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = `translate(-50%, -50%) scale(1.2)`)}
              onMouseLeave={e => (e.currentTarget.style.transform = `translate(-50%, -50%) scale(1)`)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Animation;
