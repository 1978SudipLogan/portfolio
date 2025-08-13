import React, { useEffect, useState } from "react";
import cinewood from "../assets/cinewood.png";
import Restaurant from "../assets/Restaurant.png";
import EdTech from "../assets/edtech.png";
import Password from "../assets/password.png";
import ToDoList from "../assets/todolist.png";
import Bookstore from "../assets/bookstore.png";
import Bloomcare from "../assets/Bloomcare.png";
import Calculator from "../assets/Calculator.png";
import ExpenseTracker from "../assets/ExpenseTracker.png";

import { FaArrowUp } from "react-icons/fa";

const projects = [
  {
    title: "BloomCare EMR System",
    image: Bloomcare, // Add your project image when available
    tagline:
      "A comprehensive Electronic Medical Records (EMR) system tailored for American therapist centers, enabling seamless patient management, secure data handling, and streamlined therapy session tracking.",
    tech: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Material UI",
      "Shadcn",
    ],
    // features: [
    //   "Patient record management with secure, HIPAA-compliant data handling",
    //   "Therapy session scheduling and progress tracking",
    //   "Role-based access control for therapists and administrators",
    //   "Real-time data updates with a responsive, user-friendly interface",
    //   "Robust backend APIs for efficient data processing and retrieval",
    // ],
    link: "/projects/bloomcare",
    github: "https://github.com/yourusername/bloomcare-emr",
    live: "https://bloomcare-demo.netlify.app", // replace with actual live URL if available
  },
  {
    title: "Cinewood OTT Platform",
    image: cinewood, // Replace with your actual imported image variable
    tagline:
      "A feature-rich OTT movie platform with secure authentication, dynamic content, and real-time user engagement tools.",
    tech: ["React.js", "Redux", "Tailwind CSS"],
    // features: [
    //   "Browse and stream a wide range of movies and shows",
    //   "Real-time updates and dynamic content loading",
    //   "Responsive design for seamless viewing on all devices",
    //   "User engagement features like watchlist and ratings",
    //   "Search any Movies",
    // ],
    link: "/projects/cinewood",
    github: "https://github.com/1978SudipLogan/cinewood.git",
    live: "https://cinewood.vercel.app",
  },
  {
    title: "Restaurant Finder App",
    image: Restaurant, // Replace with your actual imported image variable
    tagline:
      "A responsive restaurant UI app showcasing listings, filters, and modern UI built purely with React and Tailwind CSS.",
    tech: ["React.js", "Tailwind CSS"],
    // features: [
    //   "Browse restaurant listings with detailed info",
    //   "Use filters to narrow down restaurants by cuisine and rating",
    //   "Responsive design optimized for all screen sizes",
    //   "Modern, clean UI focused on user-friendly browsing experience",
    //   "No booking or ordering functionality — browse-only app",
    // ],
    link: "/projects/restaurant-app",
    github: "https://github.com/1978SudipLogan/Restaurant.git",
    live: "https://sudiprestaurant.vercel.app/",
  },
  {
    title: "Expense Tracker App",
    image: ExpenseTracker, // Placeholder for the image
    tagline:
      "A modern and intuitive expense tracker app designed to help you manage your finances with ease, visualize spending habits, and stay on budget.",
    tech: ["React Native", "MongoDB", "Node.js", "Express.js"],
    link: "/projects/expense-tracker",
    github: "https://github.com/1978SudipLogan/expenseTracker.git",
    live: "https://your-live-app-link.vercel.app/",
  },
  {
    title: "EduHub – EdTech Platform",
    image: EdTech, // Replace with your actual imported image variable
    tagline:
      "An educational tech platform with student dashboards, course browsing, and engaging UI components tailored for online learning.",
    tech: ["React.js", "Tailwind CSS"],
    // features: [
    //   "Interactive student dashboards to track progress and courses",
    //   "Browse and enroll in a variety of online courses",
    //   "Responsive and modern UI built with Tailwind CSS",
    //   "Firebase backend for authentication and real-time data",
    //   "Seamless user experience with fast load times and smooth navigation",
    // ],
    link: "/projects/edtech-platform",
    github: "https://github.com/1978SudipLogan/my-Tube.git",
    live: "https://sudiptube.vercel.app/",
  },
  {
    title: "Random Password Generator",
    image: Password, // Replace with your actual imported image variable
    tagline:
      "A secure password generator tool that lets users create random, strong passwords with customizable length and characters.",
    tech: ["HTML", "CSS", "JavaScript"],
    // features: [
    //   "Generate strong random passwords with letters, numbers, and symbols",
    //   "Customize password length according to user preference",
    //   "Option to include or exclude uppercase, lowercase, numbers, and special characters",
    //   "Copy password to clipboard with a single click",
    //   "Clean and responsive UI for easy use on all devices",
    // ],
    link: "/projects/password-generator",
    github: "https://github.com/1978SudipLogan/randompasswordgenerator.git",
    live: "https://sudiprpg.vercel.app/",
  },

  {
    title: "To-Do List Web App",
    image: ToDoList, // Replace with your actual imported image variable
    tagline:
      "A simple and elegant to-do list application with task management and local storage integration.",
    tech: ["HTML", "CSS", "JavaScript"],
    // features: [
    //   "Add, edit, and delete tasks easily",
    //   "Mark tasks as complete or incomplete",
    //   "Tasks are saved in local storage for persistence",
    //   "Clean and responsive user interface",
    //   "Filter tasks by status (all, completed, pending)",
    // ],
    link: "/projects/todolist",
    github: "https://github.com/1978SudipLogan/todolistapp.git",
    live: "https://sudiptodolistapp.vercel.app/",
  },
  {
    title: "Calculator App",
    image: Calculator, // Replace with your actual imported image variable
    tagline:
      "A sleek and user-friendly calculator app supporting basic and advanced mathematical operations, designed for quick and accurate calculations.",
    tech: ["React.js", "JavaScript", "CSS"],
    // features: [
    //   "Perform basic arithmetic operations: addition, subtraction, multiplication, division",
    //   "Supports advanced functions like percentage, square root, and decimals",
    //   "Responsive design for smooth experience on all devices",
    //   "Clear and reset functionality to start fresh anytime",
    // ],
    link: "/projects/calculator",
    github: "https://github.com/1978SudipLogan/Calculator.git",
    live: "https://sudipcalculator.vercel.app/",
  },

  {
    title: "Bookstore Web App",
    image: Bookstore, // Replace with your actual imported image variable
    tagline:
      "A modern online bookstore where users can browse books, add favorites, manage a shopping cart, and purchase books seamlessly.",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    // features: [
    //   "Browse and search a wide collection of books",
    //   "Add books to favorites for easy access later",
    //   "Manage shopping cart with add/remove items functionality",
    //   "Secure checkout process to buy selected books",
    //   "Responsive design for desktop and mobile devices",
    // ],
    link: "/projects/bookstore",
    github: "https://github.com/1978SudipLogan/bookstore-app",
    live: "https://bookstore-app-sudip.web.app",
  },
];

const Projects = () => {
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
    <section className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-6 text-cyan-400">
        Personal Projects
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        These are some of the real-world applications I have built over 2+ years
        using modern stacks including MERN, Spring Boot, and Firebase.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group flex flex-col justify-start relative block bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-700 transition-shadow h-full"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-cyan-400">{p.title}</h3>
              <p className="mt-2 text-gray-300 text-sm">{p.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-cyan-800 text-sm px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {/* Add mt-auto here */}
              <div className="mt-auto flex gap-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white text-sm px-4 py-2 mt-4 rounded-full hover:bg-gray-600 transition"
                >
                  GitHub Repo
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 text-black text-sm px-4 py-2 mt-4 rounded-full hover:bg-cyan-600 transition"
                >
                  View Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          className="text-black px-6 py-2 relative bottom-4 bg-cyan-500 hover:bg-cyan-600 rounded-full font-semibold transition"
          href="https://github.com/1978SudipLogan"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More on GitHub
        </a>
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
    </section>
  );
};

export default Projects;
