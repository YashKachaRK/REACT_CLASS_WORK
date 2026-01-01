import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-800 text-gray-100 py-20 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            I am a passionate <span className="text-blue-400 font-semibold">
            Full Stack Developer</span> with strong skills in 
            <span className="text-blue-400"> React </span> and 
            <span className="text-blue-400"> Java backend</span>.
            I enjoy building real-world web applications that solve practical problems.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Currently, I am focusing on improving my development skills,
            learning modern technologies, and preparing for placements
            and internships in software development.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-blue-400">10+</h3>
              <p className="text-sm text-gray-300">Projects</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-blue-400">1+</h3>
              <p className="text-sm text-gray-300">Certificates</p>
            </div>
          </div>
        </div>

        {/* Right Side - Info Card */}
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Quick Info</h3>

          <ul className="space-y-4 text-gray-300">
            <li>
              <span className="font-semibold text-gray-100">Name:</span> Yash Kacha
            </li>
            <li>
              <span className="font-semibold text-gray-100">Role:</span> Full Stack Developer
            </li>
            <li>
              <span className="font-semibold text-gray-100">Tech Stack:</span> React, Java, MySQL
            </li>
            <li>
              <span className="font-semibold text-gray-100">Goal:</span> Software Developer
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;
