import React from 'react';
import { AcademicCapIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Education = () => {
  const educationData = [
    {
      title: "BSc (Hons) Computing",
      institution: "Itahari International College",
      duration: "2023 - Present",
      location: "Duhabi, Itahari",
      description: "Studying software development, programming, and system analysis with a practical focus.",
      image: "https://via.placeholder.com/160x100",
    },
    {
      title: "High School ",
      institution: "Koshi St. James",
      duration: "2020 - 2022",
      location: "Itahari, Sunsari",
      description: "Completed higher secondary education with an emphasis on science and biology.",
      image: "https://via.placeholder.com/160x100",
    },
  ];

  return (
    <section id="education" className="bg-pink-100 w-full py-12 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-pink-700 border-b-2 border-pink-400 pb-2 mb-12 text-center">
        Education
      </h2>

      <div className="flex flex-col gap-12 max-w-screen-xl w-full">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-pink-50 rounded-lg shadow-lg overflow-hidden border border-pink-300 w-full"
          >
            {/* Left: Image */}
            <div className="md:w-1/3 flex items-center justify-center bg-pink-100">
              <img
                src={edu.image}
                alt={edu.title}
                className="w-full h-40 object-cover rounded-xl border border-pink-200 m-4"
              />
            </div>

            {/* Right: Content */}
            <div className="flex-1 p-8 text-pink-900">
              <h3 className="text-2xl font-semibold text-pink-800 mb-2">{edu.title}</h3>

              <div className="text-pink-600 text-lg font-medium mb-2">
                {edu.institution}
              </div>

              <div className="flex items-center space-x-6 text-sm text-pink-500 mb-4">
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <span>{edu.duration}</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  <span>{edu.location}</span>
                </div>
              </div>

              <p className="text-base text-pink-800 leading-relaxed">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
