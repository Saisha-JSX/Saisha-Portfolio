import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';  // <-- Import Gallery

// Import Navbar
import Navbar from './components/Navbar';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />  {/* Added Gallery route */}
        </Routes>
      </div>
      <footer className="bg-pink-100 text-center py-8">
        <p className="text-pink-700 text-sm sm:text-base md:text-lg font-light leading-relaxed">
          © 2023 Saisha Karki. All rights reserved.
        </p>
        <p className="text-pink-700 text-xs sm:text-sm md:text-base font-light mt-2 flex justify-center items-center space-x-1">
          <span className="text-xs sm:text-sm">Made with</span> 
          <FontAwesomeIcon icon={faHeart} className="text-pink-500 text-xs sm:text-sm" />
          <span className="text-xs sm:text-sm">using React</span>
        </p>
      </footer>
    </Router>
  );
};

export default App;
