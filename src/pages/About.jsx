import React from "react";
import { LuGraduationCap, LuLightbulb, LuTarget } from "react-icons/lu";
import { motion } from "framer-motion";

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

const About = () => {
  return (
    <section
      id="about"
      className="bg-pink-100 w-full py-6 px-4 sm:px-6 flex flex-col items-center"
    >
      <motion.div
        className="bg-white rounded-3xl px-4 sm:px-8 py-10 sm:py-14 w-full max-w-7xl flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Title */}
        <motion.h1
          className="text-2xl sm:text-4xl font-bold text-pink-700 border-b border-pink-600 pb-2 mb-10 sm:mb-14"
          style={{ fontFamily: "Times New Roman, serif" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 w-full">
          {[
            {
              icon: <LuGraduationCap className="text-2xl text-pink-600" />,
              title: "Education",
              text: "Currently pursuing a bachelor's degree in computing, focused on software and web development.",
            },
            {
              icon: <LuLightbulb className="text-2xl text-pink-600" />,
              title: "Passion",
              text: "Passionate about building impactful user experiences and solving real-world problems.",
            },
            {
              icon: <LuTarget className="text-2xl text-pink-600" />,
              title: "Goal",
              text: "Aiming to become a full-stack developer contributing to meaningful and inclusive digital solutions.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-white border border-pink-300 rounded-2xl shadow p-6 text-center transition-transform hover:-translate-y-1 hover:shadow-lg"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <div className="bg-pink-200 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                {card.icon}
              </div>
              <h2
                className="text-lg sm:text-2xl font-semibold text-pink-800 mb-2"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                {card.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* My Story Section */}
        <motion.div
          className="bg-pink-100 w-full mt-10 sm:mt-14 rounded-2xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-xl sm:text-3xl font-semibold text-pink-700 mb-4 sm:mb-6 text-center"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            My Story
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-6 text-justify">
            I've always been fascinated by how things work and how technology shapes the world around us. While I haven’t always had the easiest path—and I wouldn’t call myself the sharpest tool in the toolbox—I’m proud of the progress I’ve made. Tech wasn’t my first choice, but it’s where I’ve found purpose. Now that I’m here, I’m doing my best to learn, grow, and eventually make meaningful changes through the work I do.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
