import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const submitButton = () => {
    alert("Message Sent Successfully!");
  };
  
  return (
    <section
      id="contact"
      className="bg-gray-900 text-gray-100 py-20 px-6 md:px-20"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-10 text-center">
          Contact <span className="text-blue-500">Me</span>
        </h2>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <FaEnvelope className="text-3xl text-blue-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Email</h3>
            <a
              href="ykacha243@rku.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              ykacha243@rku.ac.in
            </a>
          </div>

          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <FaGithub className="text-3xl text-blue-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">GitHub</h3>
            <a
              href="https://github.com/YashKachaRK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              github.com/YashKachaRK
            </a>
          </div>

          <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <FaLinkedin className="text-3xl text-blue-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">LinkedIn</h3>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/yash
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Send a Message
          </h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              onClick={submitButton}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
