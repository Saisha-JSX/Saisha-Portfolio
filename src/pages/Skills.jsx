import React, { useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'; 
import { SiTailwindcss } from 'react-icons/si'; 

const Skills = () => {

  return (
 <section id="skills" className="bg-pink-100 py-16 skills-section">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-700 mb-8">My Skills</h2>
        <div className="flex justify-center gap-16 flex-wrap">
          {/* HTML */}
          <div className="flex flex-col items-center skill-icon">
            <FaHtml5 className="text-5xl text-orange-500 mb-4" />
            <span className="text-lg font-medium text-gray-700">HTML</span>
          </div>

          {/* CSS */}
          <div className="flex flex-col items-center skill-icon">
            <FaCss3Alt className="text-5xl text-blue-500 mb-4" />
            <span className="text-lg font-medium text-gray-700">CSS</span>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center skill-icon">
            <FaJs className="text-5xl text-yellow-500 mb-4" />
            <span className="text-lg font-medium text-gray-700">JavaScript</span>
          </div>

          {/* React */}
          <div className="flex flex-col items-center skill-icon">
            <FaReact className="text-5xl text-cyan-500 mb-4" />
            <span className="text-lg font-medium text-gray-700">React</span>
          </div>

          {/* Node.js */}
          <div className="flex flex-col items-center skill-icon">
            <FaNodeJs className="text-5xl text-green-500 mb-4" />
            <span className="text-lg font-medium text-gray-700">Node.js</span>
          </div>

          {/* Tailwind CSS */}
          <div className="flex flex-col items-center skill-icon">
            <SiTailwindcss className="text-5xl text-teal-400 mb-4" />
            <span className="text-lg font-medium text-gray-700">Tailwind CSS</span>
          </div>

          {/* Git */}
          <div className="flex flex-col items-center skill-icon">
            <FaGitAlt className="text-5xl text-red-600 mb-4" />
            <span className="text-lg font-medium text-gray-700">Git</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
