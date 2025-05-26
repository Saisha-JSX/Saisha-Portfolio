import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio to showcase my projects, skills, and experience.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    link: "https://example.com/project1",
  },
  {
    name: "E-Commerce App",
    description: "Full-stack e-commerce platform with user authentication and payment gateway.",
    tech: ["Node.js", "MongoDB", "Express", "React"],
    link: "https://example.com/project2",
  },
  {
    name: "Blog API",
    description: "RESTful API for a blogging platform built with robust authentication.",
    tech: ["Python", "Django", "PostgreSQL"],
    link: "https://example.com/project3",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const Project = () => {
  return (
    <motion.section
      id="projects"
      className="bg-pink-50 w-full py-16 px-6 flex flex-col items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="max-w-7xl w-full">
        <motion.h2
          className="text-4xl font-bold text-pink-700 mb-12 text-center"
          style={{ fontFamily: "Times New Roman, serif" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-pink-200 rounded-2xl shadow p-5 flex flex-col items-center"
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Placeholder image box */}
              <div className="w-full h-[250px] bg-pink-100 rounded-xl mb-4 flex items-center justify-center text-pink-400 text-3xl">
                Image
              </div>

              {/* Content */}
              <div className="w-full text-left">
                <h3
                  className="text-xl font-semibold text-pink-800 mb-2"
                  style={{ fontFamily: "Times New Roman, serif" }}
                >
                  {project.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 text-sm font-semibold flex items-center hover:underline"
                >
                  View Project <FiExternalLink className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Project;
