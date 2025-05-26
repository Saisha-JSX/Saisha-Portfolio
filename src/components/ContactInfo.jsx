import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const ContactInfo = () => {
  const info = [
    {
      icon: <HiOutlineMail className="text-pink-500 text-2xl" />,
      label: "Email",
      value: "example@email.com",
    },
    {
      icon: <HiOutlinePhone className="text-pink-500 text-2xl" />,
      label: "Phone",
      value: "+123 456 7890",
    },
    {
      icon: <HiOutlineLocationMarker className="text-pink-500 text-2xl" />,
      label: "Location",
      value: "123 Location St, City, Country",
    },
  ];

  const socials = [
    { icon: <FaInstagram />, url: "https://www.instagram.com" },
    { icon: <FaFacebook />, url: "https://www.facebook.com" },
    { icon: <FaTwitter />, url: "https://www.twitter.com" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com" },
    { icon: <FaTiktok />, url: "https://www.tiktok.com" },
  ];

  return (
    <motion.div
      className="ml-0 sm:ml-8 md:ml-20"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl sm:text-2xl font-semibold text-pink-800 mb-3 sm:mb-4 font-serif">
        Contact Information
      </h3>
      <p className="text-sm sm:text-base text-gray-600 mb-5">
        Feel free to reach out if you'd like to connect!
      </p>

      {info.map((item, idx) => (
        <motion.div
          key={idx}
          className="flex items-start space-x-3 sm:space-x-4 mb-5 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="bg-pink-100 p-2 sm:p-3 rounded-full">{item.icon}</div>
          <div>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              {item.label}
            </p>
            <p className="text-sm text-gray-700">{item.value}</p>
          </div>
        </motion.div>
      ))}

      <h4 className="text-xl sm:text-2xl font-semibold text-pink-800 mt-6 mb-3 font-serif">
        Find me on
      </h4>
      <div className="flex flex-wrap gap-4">
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg sm:text-xl text-pink-500 hover:scale-110 transition-transform"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {s.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo;
