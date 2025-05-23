import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Scroll to top"
      className="fixed right-6 bottom-20 z-50 p-3 rounded-full bg-pink-600 text-white shadow-lg hover:bg-pink-700 transition"
      style={{ width: "48px", height: "48px" }}
    >
      <FaArrowUp className="w-5 h-5 mx-auto" />
    </button>
  );
};

export default ScrollToTopButton;
