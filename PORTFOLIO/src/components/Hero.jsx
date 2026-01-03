import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-900">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Yash Kacha</h1>
      <p className="text-xl mb-6">Full Stack Developer | React | Java | SQL</p>
      <div className="flex gap-4">
        <a
          href="/Resume.pdf"
          download="Resume.pdf"
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="px-4 py-2 border border-blue-600 rounded hover:bg-blue-600"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
