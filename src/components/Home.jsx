import React from "react";
import { Linkedin, Github } from "lucide-react";
const Home = () => {
  const skills = [
    { title: "Languages", skills: "JavaScript, Python, C++" },
    {
      title: "Frontend",
      skills: "HTML, CSS, Bootstrap, React, Tailwind CSS, GSAP",
    },
    { title: "Backend", skills: "Django, REST API, Serializer" },
    { title: "Databases", skills: "SQL, MySQL" },
    { title: "Tools", skills: "Git, GitHub" },
    {
      title: "Core Competencies",
      skills:
        "Agile Methodologies, SDLC, API Development, Debugging, Web Services, Performance Optimization, Scalability",
    },
  ];

  return (
    
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-10 px-4 ">
      <div className="max-w-4xl mx-auto space-y-6  mt-10">
        {/* Header Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-sky-500 focus:bg-red-500">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Jaishankar Prasad Jaiswal
          </h1>
          <h2 className="text-2xl text-sky-600 mb-4">
            Full Stack Web Developer
          </h2>

          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-100 px-3 py-1 rounded text-gray-600">
              📍 Bhopal, MP, India
            </span>
            <a
              href="mailto:jaishankar7655@gmail.com"
              target="new"
              className="bg-sky-50 px-3 py-1 rounded text-sky-600 hover:bg-sky-100"
            >
              ✉️ jaishankar7655@gmail.com
            </a>
            <a
              href="tel:+919131705898"
              className="bg-sky-50 px-3 py-1 rounded text-sky-600 hover:bg-sky-100"
            >
              📞 +91 9131705898
            </a>
            <a
              href="https://linkedin.com/in/jaishankar-jaiswal-14253926b"
              target="new"
              className="bg-sky-50 px-3 py-1 rounded text-sky-600 hover:bg-sky-100"
            >
             <div className="flex space-x-2" >
                <div className="text-blue-800">
                  {" "}
                  < Linkedin />
                </div>
                <div>Linkdin</div>
              </div>
            </a>
            <a
              href="https://github.com/Jaishankar7655"
              target="new"
              className="bg-sky-50 px-3 py-1 rounded text-sky-600 hover:bg-sky-100"
            >
              <div className="flex space-x-" >
                <div className="text-black ">
                  {" "}
                  <Github />
                </div>
                <div>GitHub</div>
              </div>
            </a>
            <a
              href="https://jaishankar-port.netlify.app"
              target="new"
              className="bg-sky-50 px-3 py-1 rounded text-sky-600 hover:bg-sky-100"
            >
              Portfolio
            </a>
          </div>
        </div>

        {/* Career Objective */}
        
        <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Career Objective
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Full Stack Web Developer seeking to leverage expertise in frontend,
            Backend and Databases technologies to create innovative,
            user-centric web solutions. Passionate about developing scalable,
            high-performance applications with dynamic animations while
            continuously expanding technical knowledge.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-indigo-500">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="font-semibold text-indigo-600 mb-1">
                  {skill.title}
                </h4>
                <p className="text-gray-600">{skill.skills}</p>
              </div>
            ))}
          </div>
        </div>

      
        <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default Home;
