import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (Connect this to backend)");
    // Connect to backend, Formspree, EmailJS, etc.
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {["name", "email", "subject", "message"].map((field, index) => (
        <div key={index} className="mb-5 sm:mb-6">
          <label
            htmlFor={field}
            className="block text-sm text-gray-700 font-medium mb-1 sm:mb-2 capitalize"
          >
            {field === "message" ? "Your Message" : `Your ${field}`}
          </label>
          {field === "message" ? (
            <textarea
              id={field}
              name={field}
              rows="3"
              value={formData[field]}
              onChange={handleChange}
              placeholder="Write your message"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-pink-300 rounded-lg"
            />
          ) : (
            <input
              type={field === "email" ? "email" : "text"}
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter your ${field}`}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-pink-300 rounded-lg"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-full py-3 px-4 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
