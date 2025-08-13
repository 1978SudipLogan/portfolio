import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VoiceAssistant = ({ isActive }) => {
  const navigate = useNavigate();
  // Track which field is active for typing
  const [activeField, setActiveField] = useState(null);

  useEffect(() => {
    if (!isActive) return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("🎤 Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US"; // ✅ English only
    let activeField = null;
    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript
        .toLowerCase()
        .trim();

      console.log("🎙️ Heard:", transcript);

      // ROUTING COMMANDS
      const routeMap = [
        { keywords: ["home", "go to home", "go to home page"], path: "/" },
        {
          keywords: ["about", "go to about", "go to about page"],
          path: "/about",
        },
        {
          keywords: [
            "contact",
            "contact me",
            "reach out",
            "go to contact page",
            "go to contact",
          ],
          path: "/contact",
        },
        {
          keywords: ["education", "go to education", "go to education page"],
          path: "/education",
        },
        {
          keywords: ["experience", "go to experience", "go to experience page"],
          path: "/experience",
        },
        {
          keywords: [
            "testimonials",
            "go to testimonials",
            "go to testimonials page",
          ],
          path: "/testimonials",
        },
        {
          keywords: [
            "projects",
            "view projects",
            "go to projects",
            "go to projects page",
          ],
          path: "/projects",
        },
        {
          keywords: ["skills", "go to skills", "go to skills page"],
          path: "/skills",
        },
      ];

      const matchedRoute = routeMap.find(({ keywords }) =>
        keywords.some((word) => transcript.includes(word))
      );

      if (matchedRoute) {
        console.log("➡️ Navigating to:", matchedRoute.path);
        navigate(matchedRoute.path);
        return;
      }

      // SCROLLING COMMANDS
      if (
        transcript.includes("scroll down") ||
        transcript.includes("down") ||
        transcript.includes("down more") ||
        transcript.includes("more down")
      ) {
        window.scrollBy({ top: 300, behavior: "smooth" });
      } else if (
        transcript.includes("scroll up") ||
        transcript.includes("up") ||
        transcript.includes("more up") ||
        transcript.includes("up more")
      ) {
        window.scrollBy({ top: -300, behavior: "smooth" });
      } else if (
        transcript.includes("go to top") ||
        transcript.includes("top")
      ) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (
        transcript.includes("go to bottom") ||
        transcript.includes("bottom")
      ) {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }

      // DOWNLOAD RESUME
      else if (transcript.includes("download resume")) {
        document.querySelector("#download-resume")?.click();
      }

      // OPEN CONTACT LINKS
      else if (
        transcript.includes("linkedin") ||
        transcript.includes("open linkedin")
      ) {
        document.querySelector("#linkedin-link")?.click();
      } else if (
        transcript.includes("github") ||
        transcript.includes("git") ||
        transcript.includes("open git") ||
        transcript.includes("open github")
      ) {
        document.querySelector("#github-link")?.click();
      } else if (
        transcript.includes("email") ||
        transcript.includes("open email")
      ) {
        document.querySelector("#email-link")?.click();
      } else if (transcript.includes("call") || transcript.includes("phone")) {
        document.querySelector("#phone-link")?.click();
      }

      // FORM FILLING COMMANDS
      // Check commands to set focus to input fields
      if (transcript.includes("name")) {
        activeField = "name";
        document.getElementById("name")?.focus();
        return;
      }
      if (transcript.includes("email")) {
        activeField = "email";
        document.getElementById("email")?.focus();
        return;
      }
      if (transcript.includes("message")) {
        activeField = "message";
        document.getElementById("message")?.focus();
        return;
      }

      // Stop typing commands
      if (transcript.includes("done") || transcript.includes("stop typing")) {
        activeField = null;
        return;
      }

      // If any field active, append the spoken text to its value
      if (activeField) {
        const input = document.getElementById(activeField);
        if (input) {
          // Append with space if already some text present
          input.value = input.value
            ? input.value + " " + transcript
            : transcript;
          input.focus();
        }
        return;
      }
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, [isActive, navigate, activeField]);

  return null;
};

export default VoiceAssistant;
