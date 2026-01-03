import React from "react";

const projects = [
  {
    name: "Cloths Renting System",
    desc: "A web application for renting clothes with user authentication and database management.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    github: "https://github.com/YashKachaRK/WP-PROJECT.git",
    demo: "#",
  },
  {
    name: "Portfolio Website",
    desc: "Personal portfolio website showcasing projects, skills, and contact details.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/YashKachaRK/Portfolio-React.git",
    demo: "https://portfolio-react-mu-snowy-24.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-900 text-gray-100 py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-blue-500">Projects</span>
        </h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              {/* Project Title */}
              <h3 className="text-2xl font-semibold mb-3">
                {p.name}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4">
                {p.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-700 text-blue-400 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
                >
                  GitHub
                </a>
                <a
                  href={p.demo}
                  className="px-4 py-2 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
