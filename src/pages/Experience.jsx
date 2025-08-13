import React, { useEffect, useState } from "react";
import { FaCode, FaNetworkWired, FaLaptopCode } from "react-icons/fa";
import { MdTimeline } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUp } from "react-icons/fa";

const experiences = [
  {
    company: "Aitanaa (Client: TCS)",
    title: "Configuration Engineer",
    duration: "Sep 2024 – May 2025",
    location: "Noida, India",
    icon: <FaNetworkWired className="text-white text-xl" />,
    link: "https://www.tcs.com",
    skills: [
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Git",
      "Github",
    ],
    points: [
      "Developed internal web interfaces using React.js to support BSNL 4G configuration workflows.",
      "Built dynamic dashboards for managing telecom configuration data.",
      "Implemented reusable component architecture for performance.",
      "Enhanced UX via optimized React state management.",
      "Collaborated with cross-functional teams to align UI with operational needs.",
      "Utilized Tailwind CSS for responsive and clean UI design.",
      "Integrated Firebase Firestore for real-time data monitoring and logging.",
    ],
  },
  {
    company: "FixityEDX",
    title: "Java FullStack Developer",
    duration: "May 2024 – Aug 2024",
    location: "Hyderabad, India",
    icon: <FaLaptopCode className="text-white text-xl" />,
    link: "https://fixityedx.com",
    skills: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Github",
    ],
    points: [
      "Developed full-stack apps using React (frontend) and Java Spring Boot (backend).",
      "Built responsive UIs with Tailwind CSS and JavaScript.",
      "Refactored components for reusability and maintainability.",
      "Designed and connected MySQL database schemas for various modules.",
      "Used Hibernate ORM to simplify DB operations and ensure performance.",
      "Implemented form validation and state management using React Hooks.",
      "Created role-based authentication and authorization systems using Spring Security.",
    ],
  },
  {
    company: "Integral Scape Technology",
    title: "Associate Software Developer",
    duration: "Apr 2023 – May 2024",
    location: "Remote",
    icon: <FaCode className="text-white text-xl" />,
    link: "https://integralscape.com",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Chart.js",
      "Git",
      "Github",
    ],
    points: [
      "Developed responsive web app connecting rural agents with consultants via video/audio.",
      "Integrated frontend UI with backend APIs using Axios and React lifecycle methods.",
      "Boosted performance via reusable components and modular folder structure.",
      "Used Firebase Authentication and Firestore for secure login and user data storage.",
      "Created admin dashboards with data visualization using Chart.js.",
      "Handled client-side routing using React Router DOM.",
      "Managed deployment and version control with Git and GitHub.",
    ],
  },
];

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 800 });

    const handleScroll = () => {
      if (window.scrollY > 5) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-16 px-6 md:px-20 relative">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
        Experience
      </h2>

      {/* Timeline Layout for Mobile */}
      <div className="md:hidden border-l-4 border-cyan-500 pl-6 relative space-y-10 ">
        {experiences.map((exp, index) => {
          const isExpanded = expandedCard === index;
          return (
            <div key={index} className="relative" data-aos="fade-up">
              <div className="absolute  -left-7 top-1 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                <MdTimeline className="text-white text-sm" />
              </div>
              <h3 className="text-xl font-semibold text-cyan-400">
                {exp.title}
              </h3>
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 underline mb-1 block hover:text-blue-300"
              >
                {exp.company}
              </a>
              <p className="text-sm text-gray-500 mb-2">
                {exp.duration} | {exp.location}
              </p>
              <ul className="list-disc ml-5 space-y-1 text-gray-300 text-sm">
                {(isExpanded ? exp.points : exp.points.slice(0, 3)).map(
                  (point, idx) => (
                    <li key={idx}>{point}</li>
                  )
                )}
              </ul>
              {exp.points.length > 3 && (
                <button
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                  className="text-blue-400 text-sm mt-2"
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-cyan-800 text-white text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Card Layout for Desktop */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-2xl p-6 shadow-lg border border-cyan-500 hover:scale-105 transition-transform duration-300 group"
            data-aos="fade-up"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center shadow-md group-hover:rotate-12 transition-all duration-300">
                {exp.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400">
                  {exp.title}
                </h3>
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 underline hover:text-blue-300"
                >
                  {exp.company}
                </a>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-2">
              {exp.duration} | {exp.location}
            </p>
            <ul className="list-disc ml-5 space-y-2 text-gray-300 text-sm">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-cyan-800 text-white text-xs font-medium px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-600 text-white text-xl p-3 rounded-full shadow-lg transition duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Experience;
