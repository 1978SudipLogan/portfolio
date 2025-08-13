import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaQuoteLeft, FaQuoteRight, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchTestimonials = () => {
      axios
        .get("https://sheetdb.io/api/v1/hnhdltmv7d38x")
        .then((response) => {
          setTestimonials(response.data);
          setLoading(false);
        })
        .catch(() => {
          setTestimonials([]);
          setLoading(false);
        });
    };

    // Initial fetch
    fetchTestimonials();

    // Poll every 10 seconds
    const interval = setInterval(fetchTestimonials, 5000); // 10000ms = 10 seconds

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  if (loading)
    return (
      <p className="text-center text-cyan-400 flex justify-center items-center  text-xl font-semibold bg-slate-900 min-h-screen">
        Ruko Jara Sabar Karo...
      </p>
    );

  return (
    <div className="min-h-screen bg-[#0f172a] py-12 px-6 sm:px-10">
      <h2 className="text-4xl font-bold text-center mb-0 text-cyan-400">
        What People Say About Me
      </h2>
      <p className="text-center text-sm text-gray-500 mt-2">
        Got something to share?{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdVf7KXZFOoebhn6zwK85GjKuiSvJnr9agomzK4Bbjf73h4-A/viewform?usp=header"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-cyan-500 underline hover:text-cyan-400 transition-colors duration-200"
        >
          Tell me here →
        </a>
      </p>

      <div className="grid md:grid-cols-2 mt-12 lg:grid-cols-3 gap-10 mb-16">
        {testimonials.length === 0 ? (
          <p className="text-center text-gray-300 col-span-full">
            No testimonials yet.
          </p>
        ) : (
          testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gray-200 to-blue-300 shadow-xl rounded-2xl p-6 relative overflow-hidden hover:scale-105 transition-transform"
            >
              <FaQuoteLeft className="absolute top-3 left-2 text-teal-600 text-sm" />
              <p
                className={`text-gray-900 italic mb-4 mt-8 ${
                  expanded[index] ? "" : "line-clamp-3"
                }`}
              >
                {testi["Testimonial"]}
              </p>
              <button
                onClick={() => toggleExpand(index)}
                className="text-sm text-blue-800 underline focus:outline-none"
              >
                {expanded[index] ? "Show Less" : "Read More"}
              </button>

              <FaQuoteRight className="absolute bottom-3 right-2 text-teal-600 text-sm" />
              <div className="flex items-center mt-6">
                <FaUserCircle className="text-blue-500 text-4xl" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-black">
                    {testi["Name"]}
                  </h4>
                  <p className="text-sm text-black">{testi["Role/Company"]}</p>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg text-white">
        <h3 className="text-2xl font-semibold mb-6 text-cyan-400 text-center">
          Share Your Thoughts About Me
        </h3>
        <p className="text-center">
          Please submit your testimonial{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdVf7KXZFOoebhn6zwK85GjKuiSvJnr9agomzK4Bbjf73h4-A/viewform?usp=header"
            target="_blank"
            rel="noreferrer"
            className="underline text-cyan-400 hover:text-cyan-300"
          >
            here
          </a>
          .
        </p>
      </div>
      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 text-xl p-3 rounded-full shadow-lg bg-cyan-500  hover:scale-110 transition-transform z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp style={{ color: "white" }} />
        </button>
      )}
    </div>
  );
};

export default Testimonials;
