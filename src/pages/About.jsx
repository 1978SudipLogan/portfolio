import React, { useEffect, useState } from "react";
import {
  FaArrowUp,
  FaFileDownload,
  FaCode,
  FaProjectDiagram,
  FaSmile,
} from "react-icons/fa";
import bgImage from "../assets/image1.png"; // Replace with your actual image path

const About = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const skills = [
    "Node.js",
    "Express.js",
    "React.js",
    "MongoDB",
    "Java",
    "Spring Boot",
    "MySQL",
    "Redux",
    "Tailwind CSS",
    "Bootstrap",
    "ShadCN",
    "Material UI",
    "Daisy UI",
    "Chakra UI",
    "Git & GitHub",
    "REST APIs",
  ];

  return (
    <div
      className="min-h-screen relative bg-fixed bg-center bg-cover flex flex-col items-center justify-center px-6 py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.9)), url(${bgImage})`,
      }}
    >
      <div className="rounded-2xl p-10 max-w-4xl w-full text-white text-center transition-all duration-500 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400 font-mono tracking-tight">
          Hello, I'm Sudip 👋
        </h1>

        <p className="text-lg md:text-xl font-light leading-relaxed mb-6 text-gray-200">
          I'm a{" "}
          <span className="text-yellow-400 font-semibold">
            Full-Stack Developer
          </span>{" "}
          focused on building modern, responsive, and scalable web apps using
          the <span className="text-emerald-400">MERN</span> stack and more.
        </p>

        <div className="text-base md:text-lg text-gray-300 font-light space-y-4 mb-6 text-left">
          <p>
            With over{" "}
            <span className="text-cyan-400 font-semibold">2 years</span> of
            experience in web development, I've built dynamic user interfaces
            and powerful backend services for a range of clients and startups.
          </p>
          <p>
            I enjoy turning ideas into reality through code, collaborating with
            teams, and continuously learning to stay ahead in the tech world.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Outside of coding, I love{" "}
            <span className="text-pink-300 font-medium">traveling</span>, and
            exploring the latest in{" "}
            <span className="text-green-300 font-medium">UI/UX design</span>.
            I'm also passionate about{" "}
            <span className="text-yellow-300 font-medium">cricket</span>,{" "}
            <span className="text-blue-300 font-medium">football</span>, and{" "}
            <span className="text-red-300 font-medium">table tennis</span>, and
            I love discovering{" "}
            <span className="text-cyan-300 font-medium">new places</span>.
          </p>
        </div>

        {/* Resume Button */}
        <div className="mb-8">
          <a
            href="https://raw.githubusercontent.com/1978SudipLogan/resume/main/Sudip Kumar-SDE-2YoE.pdf"
            id="download-resume"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-emerald-400  text-emerald-400 hover:bg-emerald-400 hover:text-black transition font-semibold shadow-md"
          >
            <FaFileDownload />
            Download Resume
          </a>
        </div>

        {/* Skills Section */}
        <h2 className="text-2xl text-white font-bold mb-4">
          Technologies I Use
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-8 justify-center max-w-lg mx-auto">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="py-2  bg-white/10 text-green-200 border border-cyan-500 rounded-md text-sm font-medium hover:scale-105 transition transform duration-200 text-center"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Stats Section */}
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-white">
          <div className="flex flex-col items-center">
            <FaCode className="text-3xl mb-2 text-yellow-300" />
            <p className="text-3xl font-bold">2+</p>
            <p className="text-sm text-gray-300">Years of Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <FaProjectDiagram className="text-3xl mb-2 text-green-300" />
            <p className="text-3xl font-bold">10+</p>
            <p className="text-sm text-gray-300">Personal Projects</p>{" "}
            {/* changed from 'Projects Delivered' */}
          </div>
          <div className="flex flex-col items-center">
            <FaSmile className="text-3xl mb-2 text-pink-300" />
            <p className="text-3xl font-bold">Self-Motivated</p>{" "}
            {/* replaced % with a quality */}
            <p className="text-sm text-gray-300">Passionate Developer</p>{" "}
            {/* positive trait */}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-600 text-white text-xl p-3 rounded-full shadow-lg transition duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default About;
