import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import VoiceAssistant from "./VoiceAssistant";
import {
  SpeakerWaveIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Education", to: "/education" },
  { name: "Skills", to: "/skills" },
  { name: "Projects", to: "/projects" },
  { name: "Experience", to: "/experience" },
  //  { name: "Testimonials", to: "/testimonials" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aiActive, setAiActive] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="w-full  bg-[#0f172a] px-6 py-4 shadow-xl flex flex-col md:flex-row md:items-center md:justify-between md:px-10 transition-all duration-500 z-50">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link
            to="/"
            className="text-xl font-bold text-cyan-400 tracking-wider"
          >
            sudip.dev
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex justify-between gap-6 mt-4 md:mt-0">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `relative font-semibold text-cyan-400 hover:text-cyan-400 transition duration-300 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-500 hover:after:w-full ${
                  isActive ? "text-cyan-400 after:w-full" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
      <div className="relative group">
        <button
          onClick={() => setAiActive((prev) => !prev)}
          className="fixed bottom-5 w-12 h-12 left-5 z-50 px-3 py-2 bg-cyan-400 text-white rounded-full shadow-lg hover:bg-cyan-600"
        >
          {aiActive ? "🛑" : "🎤"}
        </button>

        <span className="absolute left-6 top-[525px] z-10 translate-y-1/2 px-3 py-1 text-sm text-white bg-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          {aiActive ? "Stop Voice Assistant" : "Start Voice Assistant"}
        </span>
      </div>

      {/* Mount the VoiceAssistant here */}
      <VoiceAssistant isActive={aiActive} />
      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Stylish Mobile Menu with 2 columns */}
      <div
        className={`fixed bottom-24 left-1/2 transform -translate-x-1/2 w-[90%] z-40 md:hidden transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        } bg-sky-600/70 backdrop-blur-lg border border-cyan-500 rounded-2xl p-6 shadow-2xl`}
      >
        <ul className="grid grid-cols-2 gap-4 items-center">
          {links.map((link, i) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition-all duration-500 ease-out text-black font-semibold text-base py-2 px-4 w-full text-center rounded-xl hover:bg-indigo-800 hover:text-black shadow-sm ${
                  isActive ? "bg-cyan-500/80 shadow-lg  text-black " : ""
                }`
              }
              style={{
                transitionDelay: `${i * 75}ms`,
              }}
            >
              {link.name}
            </NavLink>
          ))}
        </ul>
      </div>

      {/* Floating Toggle Button (Mobile) */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className="absolute w-20 h-20 -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 opacity-40 blur-xl animate-pulse" />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          className="relative bg-cyan-400 text-black w-14 h-14 text-2xl rounded-full shadow-xl hover:bg-cyan-300 transition-all duration-300 border-4 border-white"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>
    </>
  );
};

export default Navbar;
