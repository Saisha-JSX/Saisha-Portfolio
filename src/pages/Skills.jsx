import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';

const iconVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: 'spring'
    }
  })
};

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 className="text-5xl text-orange-500 mb-4" />, label: 'HTML' },
    { icon: <FaCss3Alt className="text-5xl text-blue-500 mb-4" />, label: 'CSS' },
    { icon: <FaJs className="text-5xl text-yellow-500 mb-4" />, label: 'JavaScript' },
    { icon: <FaReact className="text-5xl text-cyan-500 mb-4" />, label: 'React' },
    { icon: <FaNodeJs className="text-5xl text-green-500 mb-4" />, label: 'Node.js' },
    { icon: <SiTailwindcss className="text-5xl text-teal-400 mb-4" />, label: 'Tailwind CSS' },
    { icon: <FaGitAlt className="text-5xl text-red-600 mb-4" />, label: 'Git' }
  ];

  return (
    <motion.section
      id="skills"
      className="bg-pink-100 py-16 skills-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-gray-700 mb-8">My Skills</h2>
        <div className="flex justify-center gap-16 flex-wrap">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center skill-icon"
              custom={index}
              variants={iconVariants}
            >
              {skill.icon}
              <span className="text-lg font-medium text-gray-700">{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
