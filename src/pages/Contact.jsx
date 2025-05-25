import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="bg-pink-100 w-full py-12 px-4 sm:px-6 flex flex-col items-center">
      <div className="bg-white rounded-2xl px-4 sm:px-8 py-10 sm:py-14 w-full max-w-7xl flex flex-col items-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-pink-700 border-b border-pink-600 pb-2 mb-10 sm:mb-14 font-serif">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          <ContactInfo />
          <div className="w-full max-h-[600px] sm:max-h-none overflow-y-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
