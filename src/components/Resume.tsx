"use client";

import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="min-h-screen py-16 px-6">
      {/* 🔥 Section Heading */}
      <motion.h2
        className="text-5xl font-bold text-white text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My <span className="text-orange-400">Resume</span>
      </motion.h2>

      <div className="max-w-5xl mx-auto">
        {/* 🏢 Work Experience */}
        <motion.div
          className="bg-white/5 backdrop-blur-md shadow-lg rounded-lg border border-white/20 p-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold text-orange-400 mb-4">
            Work Experience
          </h3>
          <div className="space-y-6">
          <div>
              <h4 className="text-xl font-semibold text-white">
              Software Engineer – Keysha Mind Inc.
              </h4>
              <p className="text-gray-400">May 2025 – Present · San Jose, CA</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>
                Assisting in full stack development tasks using React, Node.js, and TypeScript.
                </li>
                <li>
                Contributing to bug fixes, UI enhancements, and feature rollouts across multiple sprints.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white">
              Software Engineer – Cognizant Technology Solutions
              </h4>
              <p className="text-gray-400">Clients: Johnson & Johnson, Sanofi  |  Jul 2021 – Apr 2023 · Chennai, India</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>
                Developed responsive web apps using Angular, JavaScript, and Spartacus framework.
                </li>
                <li>
                Led frontend development for modules like cart, checkout, and place order.
                </li>
                <li>
                Performed high-level design, performance optimization, and business requirement analysis.
                </li>
                <li>
                Mentored 3 junior developers; managed sprint planning and API integration using Agile practices.
                </li>
                <li>
                Created dashboards and conducted RCA and UAT reporting for project stakeholders.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white">
              Software Developer – Accenture Services Pvt. Ltd.
              </h4>
              <p className="text-gray-400">Projects: RIAD, MyWizard Resource Management  |  Jul 2021 – Apr 2023 · Chennai, India</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>
                Built SPAs using Angular, .NET Core, C#, MongoDB, and SQL Server.
                </li>
                <li>
                Designed and implemented responsive UIs using HTML5, CSS, and Bootstrap.
                </li>
                <li>
                Provided backend support and migrated legacy systems from SharePoint to ASP.NET MVC.
                </li>
                <li>
                Participated in cross-team sprint ceremonies and contributed to CI/CD via Azure DevOps.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white">
              .NET Developer Intern – Finserv Technologies Pvt. Ltd.
              </h4>
              <p className="text-gray-400">Jun 2017 – Oct 2017 · Chennai, India</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>
                Built SPAs using Angular, .NET Core, C#, MongoDB, and SQL Server.
                </li>
                <li>
                Designed and implemented responsive UIs using HTML5, CSS, and Bootstrap.
                </li>
                <li>
                Provided backend support and migrated legacy systems from SharePoint to ASP.NET MVC.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 💡 Skills Section */}
        <motion.div
          className="bg-white/5 backdrop-blur-md shadow-lg rounded-lg border border-white/20 p-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold text-orange-400 mb-4">
            Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-300">
            {/* Frontend */}
            <div>
              <h4 className="text-xl text-white font-semibold mb-2">
                Frontend
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Angular, React.js, Spartacus Framework</li>
                <li>Tailwind CSS, Bootstrap</li>
                <li>HTML5, CSS3, JavaScript, TypeScript</li>
              </ul>
            </div>

            {/* Backend */}
            <div>
              <h4 className="text-xl text-white font-semibold mb-2">Backend</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Node.js, NestJS, .NetCore</li>
                <li>GraphQL, REST APIs, Microservices</li>
                <li>MySQL, MongoDB, Neo4j, Cassandra</li>
              </ul>
            </div>

            {/* Cloud & DevOps */}
            <div>
              <h4 className="text-xl text-white font-semibold mb-2">
                Cloud & DevOps
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>AWS, Azure DevOps, Git, GitHub</li>
                <li>Docker, CI/CD</li>
                <li>Agile (Scrum), Jira</li>
              </ul>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h4 className="text-xl text-white font-semibold mb-2">
                Tools & Technologies
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Postman, IntelliJ IDEA, VSCode, Cursor</li>
                <li>Bitbucket, SourceTree</li>
                <li>Figma</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl text-white font-semibold mb-2">
              Project-Based Exposure
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Java, Spring Boot, Python</li>
                <li>OpenAI APIs (ChatGPT, DALL·E)</li>
                <li>Academic ML Models & AI Integrations</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 🎓 Education Section */}
        <motion.div
          className="bg-white/5 backdrop-blur-md shadow-lg rounded-lg border border-white/20 p-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold text-orange-400 mb-4">
            Education
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold text-white">
                Master’s in Engineering (Specialization: Computer Science and Computer Engineering)
              </h4>
              <p className="text-gray-400">
                San Jose State University | GPA: 3.8/4.0
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white">
                Bachelor’s in Electronics and Communication Engineering
              </h4>
              <p className="text-gray-400">
                Anna University | GPA: 8.19/10
              </p>
            </div>
          </div>
        </motion.div>

        {/* 📄 Resume Download Button (Smaller & Centered) */}
        <div className="flex justify-center">
          <motion.a
            href="/resume.pdf"
            download
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
}
