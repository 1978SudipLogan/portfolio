import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "../App.css";
import { FaArrowUp } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiNetlify,
  SiVercel,
  SiLinux,
  SiJsonwebtokens,
  SiGooglechrome,
} from "react-icons/si";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Grouped skills
const skills = {
  Frontend: [
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Java", icon: "☕" },
    { name: "Spring Boot", icon: <SiSpringboot /> },
  ],
  Database: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Linux", icon: <SiLinux /> },
  ],
  Others: [
    { name: "JWT", icon: <SiJsonwebtokens /> },
    { name: "REST APIs", icon: <SiGooglechrome /> },
  ],
};

// Skill card
const SkillCard = ({ icon, name }) => (
  <motion.div
    className="w-full h-28 bg-slate-900 backdrop-blur-md border border-white/20 rounded-xl flex flex-col items-center justify-center text-cyan-400 shadow-md"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="text-3xl mb-2">{icon}</div>
    <p className="text-sm font-medium text-center text-cyan-400">{name}</p>
  </motion.div>
);

// One slide = category title + grid of cards
const SkillSlide = ({ title, items }) => (
  <div className="px-4">
    <h3 className="text-2xl font-semibold text-teal-300 mb-6 text-center">
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {items.map((skill) => (
        <SkillCard key={skill.name} {...skill} />
      ))}
    </div>
  </div>
);

// Carousel with prev/next buttons
const SkillsCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // we use custom arrows
    responsive: [
      {
        breakpoint: 640,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="relative bg-slate-900 backdrop-blur-md rounded-xl p-6 border border-white/10"
    >
      {/* Custom Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="bg-cyan-500 hover:bg-cyan-700 text-white p-2 rounded-full shadow"
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="bg-cyan-500 hover:bg-cyan-700 text-white p-2 rounded-full shadow"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {Object.entries(skills).map(([category, items]) => (
          <SkillSlide key={category} title={category} items={items} />
        ))}
      </Slider>
    </motion.div>
  );
};

// Main Component
const Skills = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 5); // show button if scrolled > 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen px-4 py-16 bg-[#0f172a] text-white relative "
     
    >
      <div className="max-w-7xl mx-auto space-y-14">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center  text-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>

        <SkillsCarousel />
      </div>

      {/* Scroll to Top Button (visible only when scrolled down) */}
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

export default Skills;
