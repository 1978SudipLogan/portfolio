import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import LetsConnect from "../components/LetsConnect";
import myImage from '../assets/myImage.jpg'
import '../css/Navbar.css'



const roles = [
  "Full Stack Developer",
  "MERN Stack Enthusiast",
  "Java Developer",
  "Clean UI/UX Advocate",
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const currentText = roles[index];
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayText("");
        setIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0f172a] overflow-x-hidden flex items-center justify-center px-6 pb-20 pt-5">
      <div className="w-full max-w-5xl flex flex-col items-center justify-center text-center gap-3">
        {/* Profile Image */}
        <img
          src={myImage}
          alt="Sudip Kumar"
          className="w-56 h-48 w-44 sm:h-44 rounded-full object-cover aspect-[2/1]  shadow-lg drop-shadow "
        />
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-200 via-sky-400 to-purple-200 bg-clip-text text-transparent ">
          Hello, I'm Sudip Kumar
        </h1>

        {/* Typing Animation Role */}
        <h2 className="text-lg sm:text-2xl font-mono text-sky-400 tracking-wider min-h-[2rem]">
          {displayText}
          <span className="animate-pulse text-sky-300">|</span>
        </h2>

        {/* Sub Text */}
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl animate-fade-in transition-all duration-500 ease-in">
          I build modern, fast, and scalable full-stack web applications with
          clean code and delightful UX. Let’s collaborate to create meaningful
          digital products with real-world impact.
        </p>

        {/* Social Links */}
        <div className="pt-0">
          <LetsConnect />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-0 relative top-4">
          <NavLink
            to="/projects"
            className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 font-semibold transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105"
          >
            🚀 View Projects
          </NavLink>

          <NavLink
            to="/contact"
            className="px-6 py-3 rounded-full border border-purple-400 text-purple-400 font-semibold transition-all duration-300 hover:bg-purple-400 hover:text-black hover:scale-105"
          >
            📩 Contact Me
          </NavLink>

          <a
            href="https://raw.githubusercontent.com/1978SudipLogan/resume/main/Sudip Kumar-SDE-2YoE.pdf"
            id="download-resume"
            download
            className="px-6 py-3 rounded-full border border-emerald-400 text-emerald-400 font-semibold transition-all duration-300 hover:bg-emerald-400 hover:text-black hover:scale-105"
          >
            📄 Download Resume
          </a>
        </div>
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

export default Home;
