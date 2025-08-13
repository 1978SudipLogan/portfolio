import React, { useEffect, useState } from "react";
import { FaSchool, FaUniversity, FaGraduationCap } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const educationDetails = [
  {
    level: "Matriculation",
    institution: "Gandhi Shikshan Sansthan",
    result: "9.4 CGPA",
    year: "2016",
    icon: <FaSchool className="text-3xl text-cyan-500" />,
  },
  {
    level: "Intermediate",
    institution: "MLSM College",
    result: "62.20%",
    year: "2018",
    icon: <FaUniversity className="text-3xl text-purple-500" />,
  },
  {
    level: "B.Tech in ECE",
    institution: "National Institute of Science and Technology",
    result: "8.4 CGPA",
    year: "2023",
    icon: <FaGraduationCap className="text-3xl text-yellow-400" />,
  },
];

const Education = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-14 tracking-tight text-cyan-400">
        🎓 My Education
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {educationDetails.map((edu, index) => (
          <div
            key={index}
            className="bg-white/90 dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-cyan-900 text-white p-3 rounded-full shadow-md">
                {edu.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white/60 group-hover:text-cyan-500 transition-colors duration-300">
                {edu.level}
              </h3>
            </div>

            <div className="pl-2 space-y-3 text-gray-800 dark:text-gray-300 text-sm sm:text-base">
              <p>
                <span className="font-semibold text-cyan-600">
                  🏫 Institution:{" "}
                </span>
                <span className="font-semibold text-white/60">
                  {edu.institution}
                </span>
              </p>
              <p>
                <span className="font-semibold text-cyan-600">📊 Result: </span>
                <span className="font-semibold text-white/60">
                  {edu.result}
                </span>
              </p>
              <p>
                <span className="font-semibold text-cyan-600">📅 Year: </span>
                <span className="font-semibold text-white/60">{edu.year}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 text-xl p-3 rounded-full shadow-lg bg-cyan-500 text-white hover:scale-110 transition-transform z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Education;
