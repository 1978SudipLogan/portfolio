import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaArrowUp,
} from "react-icons/fa";

const Contact = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="min-h-screen bg-gray-900 text-slate-100 flex items-center justify-center py-20 px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 bg-gray-900 md:bg-gradient-to-r md:from-gray-900 md:to-gray-800 md:rounded-xl md:shadow-2xl md:p-12">
          {/* Intro + Contact Info */}
          <div className="space-y-6 md:pr-8">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
              Let&apos;s Talk Tech
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              I'm a results-driven MERN-stack developer with{" "}
              <span className="text-cyan-400 font-medium">2+ years</span> of
              experience building fast, scalable, and user-focused web
              applications. From intuitive UIs to robust backend systems, I turn
              ideas into impactful digital solutions.
            </p>

            <div className="space-y-4 text-sm md:text-base text-slate-200">
              <a
                id="email-link"
                href="mailto:78sudipsunny@gmail.com"
                className="flex items-center space-x-3 hover:text-cyan-400 transition"
              >
                <FaEnvelope /> <span>78sudipsunny@gmail.com</span>
              </a>
              <a
                id="phone-link"
                href="tel:+91 7979912877"
                className="flex items-center space-x-3 hover:text-cyan-400 transition"
              >
                <FaPhone /> <span>+91‑7979912877</span>
              </a>
              <a
                id="linkedin-link"
                href="https://linkedin.com/in/sudip-kumar-752934230"
                className="flex items-center space-x-3 hover:text-cyan-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
              <a
                id="github-link"
                href="https://github.com/1978SudipLogan"
                className="flex items-center space-x-3 hover:text-cyan-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/mkgwnkzv" // Replace with your actual Formspree ID
            method="POST"
            className="bg-gray-800 p-6 md:p-10 rounded-lg shadow-md space-y-6 border-l-0 md:border-l-2 md:border-cyan-500"
          >
            <div>
              <label className="block text-slate-300 mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full p-3 rounded bg-gray-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full p-3 rounded bg-gray-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full p-3 rounded bg-gray-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <button
              id="contact-form"
              type="submit"
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Floating Scroll-to-Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-600 text-white text-xl p-3 rounded-full shadow-lg transition duration-300 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Contact;
