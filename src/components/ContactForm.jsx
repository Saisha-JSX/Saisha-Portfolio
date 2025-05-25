import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setSuccess(false);

    // Simulate async API call
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Auto-hide success after 4s
      setTimeout(() => setSuccess(false), 4000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg">
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
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 border ${
                errors[field] ? "border-red-400" : "border-pink-300"
              } rounded-lg`}
            />
          ) : (
            <input
              type={field === "email" ? "email" : "text"}
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Enter your ${field}`}
              className={`w-full px-3 py-2 sm:px-4 sm:py-3 border ${
                errors[field] ? "border-red-400" : "border-pink-300"
              } rounded-lg`}
            />
          )}
          {errors[field] && (
            <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
          )}
        </div>
      ))}

      {success && (
        <div className="flex items-center text-green-600 mb-4 text-sm font-medium">
          <AiOutlineCheckCircle className="mr-2 text-xl" />
          Message sent successfully!
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className={`w-full py-3 px-4 flex items-center justify-center gap-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors ${
          submitting ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {submitting && (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        )}
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
