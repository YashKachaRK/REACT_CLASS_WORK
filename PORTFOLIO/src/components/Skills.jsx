import React from "react";

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  Backend: ["Java", "JDBC", "Servlets", "Spring Boot"],
  Database: ["MySQL"],
  Tools: ["Git", "GitHub", "VS Code"],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gray-900 text-gray-100 py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-blue-500">Skills</span>
        </h2>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                {category}
              </h3>

              <ul className="space-y-2">
                {items.map((skill, i) => (
                  <li
                    key={i}
                    className="bg-gray-700 px-3 py-2 rounded-lg text-sm hover:bg-gray-600 transition"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
