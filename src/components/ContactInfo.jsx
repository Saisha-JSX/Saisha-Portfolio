import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

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
    <div>
      <h3 className="text-2xl font-semibold text-pink-800 mb-4 font-serif">Contact Information</h3>
      <p className="text-gray-600 mb-6">Feel free to reach out if you'd like to connect!</p>

      {info.map((item, idx) => (
        <div key={idx} className="flex items-start space-x-4 mb-6"> 
          <div className="bg-pink-100 p-3 rounded-full">{item.icon}</div>
          <div>
            <p className="text-sm text-gray-500 font-medium">{item.label}</p>
            <p className="text-sm text-gray-700">{item.value}</p>
          </div>
        </div>
      ))}

      <h4 className="text-2xl font-semibold text-pink-800 mt-6 mb-4 font-serif">Find me on</h4>
      <div className="flex space-x-4">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-pink-500 hover:scale-110 transition-transform"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
