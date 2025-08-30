// import React, { useEffect, useState } from "react";
// import { assets, projectsData } from "../assets/assets";

// const Projects = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cardsToShow, setCardToShow] = useState(1);

//   useEffect(() => {
//     const updateCardsToShow = () => {
//       if (window.innerWidth >= 1024) {
//         setCardToShow(projectsData.length);
//         // setCardToShow(4);
//       } else {
//         setCardToShow(1);
//       }
//     };
//     updateCardsToShow();
//     window.addEventListener("resize", updateCardsToShow);
//     return () => window.removeEventListener("resize", updateCardsToShow);
//   }, []);

//   //   const nextProject = () => {
//   //     if (cardsToShow === projectsData.length) return; // don't slide on desktop
//   //     setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
//   //   };

//   //   const prevProject = () => {
//   //     if (cardsToShow === projectsData.length) return; // don't slide on desktop
//   //     setCurrentIndex((prevIndex) =>
//   //       prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
//   //     );
//   //   };
//   const nextProject = () => {
//     if (cardsToShow >= projectsData.length) return; // all visible, no slide
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 > projectsData.length - cardsToShow ? 0 : prevIndex + 1
//     );
//   };

//   const prevProject = () => {
//     if (cardsToShow >= projectsData.length) return;
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? projectsData.length - cardsToShow : prevIndex - 1
//     );
//   };
//   return (
//     <div
//       className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
//       id="Projects"
//     >
//       <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
//         Projects{" "}
//         <span className="underline underline-offset-4 decoration-1 font-light">
//           Completed
//         </span>
//       </h1>
//       <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
//         Crafting spaces, Building Legacies-Explore Our Portfolio
//       </p>
//       {/* Slider Buttons */}
//       <div className="flex items-center justify-end mb-8">
//         <button
//           onClick={prevProject}
//           className="cursor-pointer p-3 bg-gray-200 rounded mr-2"
//           aria-label="Previous Project"
//         >
//           <img src={assets.left_arrow} alt="Previous" />
//         </button>
//         <button
//           onClick={nextProject}
//           className="cursor-pointer p-3 bg-gray-200 rounded mr-2"
//           aria-label="Next Project"
//         >
//           <img src={assets.right_arrow} alt="Next" />
//         </button>
//       </div>
//       {/* Project Slider Container */}
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{
//             transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
//             // transform: `translateX(-${currentIndex * 100}%)`,
//           }}
//         >
//           {projectsData.map((project, index) => (
//             <div
//               key={index}
//               className="relative flex-shrink-0"
//               style={{ width: `${100 / cardsToShow}%` }}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-auto mb-14 rounded"
//               />

//               <div className="absolute left-0 right-0 bottom-5 flex justify-center">
//                 <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
//                   <h2 className="text-xl font-semibold text-gray-800">
//                     {project.title}
//                   </h2>
//                   <p className="text-gray-500 text-sm">
//                     {project.price} <span className="px-1">|</span>{" "}
//                     {project.location}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
//------------------------------------------------------------
import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [cardWidth, setCardWidth] = useState(100); // in %

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4); // 4 cards on desktop
      } else {
        setCardsToShow(1); // 1 card on mobile
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Update cardWidth whenever cardsToShow or window width changes
  useEffect(() => {
    const gapPx = 32; // Tailwind gap-8 = 32px
    const containerWidth = window.innerWidth;
    const totalGap = gapPx * (cardsToShow - 1);
    const widthPercent =
      ((containerWidth - totalGap) / containerWidth / cardsToShow) * 100;
    setCardWidth(widthPercent);
  }, [cardsToShow]);

  const nextProject = () => {
    if (cardsToShow >= projectsData.length) return; // all visible
    setCurrentIndex((prev) =>
      prev + 1 > projectsData.length - cardsToShow ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    if (cardsToShow >= projectsData.length) return;
    setCurrentIndex((prev) =>
      prev === 0 ? projectsData.length - cardsToShow : prev - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting spaces, Building Legacies-Explore Our Portfolio
      </p>

      {/* Slider Buttons */}
      <div className="flex items-center justify-end mb-8">
        <button
          onClick={prevProject}
          className="cursor-pointer p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextProject}
          className="cursor-pointer p-3 bg-gray-200 rounded mr-2"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Project Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              currentIndex * (cardWidth + (32 / window.innerWidth) * 100)
            }%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0"
              style={{ width: `${cardWidth}%` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14 rounded"
              />

              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span className="px-1">|</span>{" "}
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
