import React, { useEffect, useState } from "react";
import gsap from "gsap";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Show button after user scrolls down 300px or more
    const onScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    gsap.fromTo(
      ".profile-img",
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      ".text-section",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );

    gsap.fromTo(
      ".buttons a",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="bg-pink-100 min-h-screen flex flex-col items-center pt-10">
      {/* Your sections */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start px-6 md:px-44 py-24">
        <div className="profile-img w-64 h-64 mb-8 md:mb-0 md:mr-18 flex justify-center items-center bg-pink-200 rounded-full overflow-hidden">
          <img
            src="https://via.placeholder.com/250"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="text-section flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-xl font-thin text-gray-600 mb-2">Hello, I’m</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-2">Saisha Karki</h1>
          <span className="text-lg text-gray-600 mb-4">
            A passionate <span className="text-pink-600">Web Developer</span> and{" "}
            <span className="text-pink-600">Designer</span> based in Nepal.
          </span>
          <p className="text-gray-700 text-lg mb-6 max-w-[600px]">
            I'm passionate about creating meaningful experiences and pushing the boundaries of what is possible in my field.
          </p>
          <div className="buttons flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0">
            <a
              href="#contact"
              className="bg-pink-500 text-white py-2 px-6 rounded-3xl text-lg hover:bg-pink-600 transition"
            >
              Contact Me
            </a>
            <a
              href="#portfolio"
              className="border-2 border-pink-600 text-pink-600 py-2 px-6 rounded-3xl text-lg hover:bg-pink-100 transition"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />

      {/* Scroll to top button */}
      {showScrollTop && <ScrollToTopButton onClick={scrollToTop} />}
    </div>
  );
};

export default Home;
