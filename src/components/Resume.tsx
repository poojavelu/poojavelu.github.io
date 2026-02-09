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
              Software Engineer Intern – Keysha Mind Inc.
              </h4>
              <p className="text-gray-400">May 2025 – Aug 2025 · Sunnyvale, CA</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>
                Architected and deployed a full-stack intelligent scheduling system using React.js, Next.js and Node.js. 
                </li>
                <li>
                Integrated OpenAI-compatible APIs to parse user intent and automate meeting agendas, reducing scheduling friction.
                </li>
                <li>
                Refactored legacy codebase to React/Server-Side Rendering, improving First Input Delay by 30% through modernization.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white">
              Software Engineer – Cognizant Technology Solutions
              </h4>
              <p className="text-gray-400">Clients: Johnson & Johnson, Sanofi  |  Jul 2021 – Apr 2023 · Chennai, India</p>
              <ul className="list-disc list-outside ml-5 text-gray-300 mt-2 space-y-2">
              <li>Architected and delivered B2B e-commerce platforms using Angular and SAP Storefront (Spartacus).
                </li><li>
Engineered the frontend for J&J Customer Connect, a high-traffic B2B e-commerce portal serving 20,000+ monthly users.
</li><li>
Configured CMS components and customized OOTB features to implement a responsive user experience across all devices.
</li><li>
Spearheaded the zero-to-one development of critical cart, checkout, and order modules for VaccineShoppe portal, guiding a squad of 4 developers to deliver robust, full-cycle solutions.
</li><li>
Architected complex global state management using NgRx and RxJS to handle B2B cart and checkout flows, ensuring data consistency across sessions and reducing redundant API calls by 40%.
</li><li>
Achieved a 25% reduction in page load time by implementing lazy loading, image optimization, and change detection strategies.
</li><li>
Integrated and maintained multiple payment gateways, ensuring compliance and reliable processing for high-value orders.
</li><li>
Pioneered the adoption of Headless Commerce and implemented a scalable internationalization architecture.
</li><li>
Mentored 3 new hires and conducted ~50 technical interviews, scaling the engineering team and establishing coding standards.
</li><li>
Planned Agile sprints and managed Jira backlogs, coordinating API contracts with SAP Hybris teams for seamless integration.
</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white">
              Software Developer – Accenture Services Pvt. Ltd.
              </h4>
              <p className="text-gray-400">Projects: RIAD, MyWizard Resource Management  |  Jul 2018 – Jun 2021 · Chennai, India</p>
              <ul className="list-disc list-outside ml-5 text-gray-300 mt-2 space-y-2">
                <li>
                Architected and developed interactive <strong>Angular</strong> SPAs for <strong>Risk, Issues, Actions, and Decisions</strong>, later unifying them into a single platform using a <strong>micro-frontend</strong> architecture.
                </li>
                <li>
                Developed and integrated backend business logic and <strong>REST APIs</strong> in <strong>C#/.NET Core</strong>, persisted data in <strong>MongoDB</strong> and <strong>SQL Server</strong>, and delivered releases via automated <strong>CI/CD</strong> pipelines.
                </li>
                <li>
                Built interactive dashboards and data visualizations using <strong>D3.js charts</strong> to highlight risk trends and status metrics.
                </li>
                <li>
                Created and maintained <strong>Jasmine/Karma unit tests</strong> for critical UI flows to prevent regressions and improve release confidence.
                </li>
                <li>
                Built onboarding/offboarding and resource allocation workflows using the <strong>MERN stack (MongoDB, Express.js, React, Node.js)</strong> with responsive, form-driven UI.
                </li>
                <li>
                Developed <strong>Node.js/Express REST APIs</strong> and designed <strong>MongoDB schemas with indexing</strong> for employee lifecycle workflows, validations, status tracking, and improved query performance.
                </li>
                <li>
                Built reusable React components and state management for multi-step onboarding forms, improving maintainability.
                </li>
                <li>
                Integrated frontend and backend with secure role-based <strong>authentication/authorization</strong> and consistent error handling.
                </li>
                <li>
                Led re-platforming of the Mobilization Management application from SharePoint to ASP.NET MVC.
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
                Master’s in Computer Science and Engineering
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
