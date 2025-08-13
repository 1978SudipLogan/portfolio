import { FaGithub, FaLinkedin, FaInstagram  } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

const LetsConnect = () => {
  return (
    <div className="text-white w-full gap-4 flex justify-center items-center">
      {/* Text */}

      {/* Icons */}
      <div className="flex gap-6 text-2xl text-cyan-400">
        <a
          href="https://github.com/1978SudipLogan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/sudip-kumar-752934230"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/1978sudip"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://vercel.com/1978sudiplogans-projects"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          < IoLogoVercel />
        </a>
      </div>
    </div>
  );
};

export default LetsConnect;
