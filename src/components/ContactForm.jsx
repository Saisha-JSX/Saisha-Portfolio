import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (Connect this to backend)");
    // Add actual form handling here (e.g., Formspree or EmailJS)
  };

  return (
    <form onSubmit={handleSubmit}>
      {["name", "email", "subject", "message"].map((field, index) => (
        <div key={index} className="mb-6">
          <label
            htmlFor={field}
            className="block text-gray-700 text-sm font-medium mb-2 capitalize"
          >
            {field === "message" ? "Your Message" : `Your ${field}`}
          </label>
          {field === "message" ? (
            <textarea
              id={field}
              name={field}
              rows="4"
              value={formData[field]}
              onChange={handleChange}
              placeholder="Write your message"
              className="w-full px-4 py-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          ) : (
            <input
              type={field === "email" ? "email" : "text"}
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter your ${field}`}
              className="w-full px-4 py-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-full py-3 px-4 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 focus:outline-none"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
