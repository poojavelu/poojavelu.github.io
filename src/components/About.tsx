"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center min-h-screen py-16 px-2 bg-transparent"
    >
      {/* 💬 Content */}
      <motion.div
        className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 p-12 bg-white/5 backdrop-blur-md shadow-lg rounded-3xl border border-white/20"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* 🖼️ Profile Image */}
        <motion.div
          className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl border-4 border-orange-400"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
        >
          <Image
            src="/profile.jpg"
            alt="Pooja"
            width={500}
            height={500}
            className="object-cover"
          />
        </motion.div>

        {/* 📜 Bio + Experience */}
        <div className="flex-1 text-center md:text-left">
          {/* 🔥 Section Heading */}
          <motion.h2
            className="text-5xl font-bold text-white mb-6"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            About <span className="text-orange-400">Me</span>
          </motion.h2>

          {/* 📝 Intro */}
          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            I’m a{" "}
            <span className="text-orange-400 font-semibold">
              Software Engineer
            </span>{" "}
            with 6+ years of experience in {" "}
            <strong>Full Stack Development</strong>, building
            {" "}
            <strong>Angular & React frontends, .NET Core & Node.js backends, </strong> 
             and working with 
            {" "}
            <strong> SQL/MongoDB databases and cloud deployments on AWS & Azure. </strong>
            I’m passionate about building responsive, user-centric web applications with clean, high-performance code.
          </motion.p>

          {/* 🎯 Specialties */}
          <motion.div
            className="mt-8"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <h3 className="text-2xl font-semibold text-orange-400 mb-3">
              Specialties
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                ⚡ Full Stack Web Development (Angular, React, Next.js, .NET Core, Node.js, Express.js, JavaScript, TypeScript)
              </li>
              <li>
              🎯 Frontend Development & Responsive UI/UX (HTML5, CSS3, Tailwind, Bootstrap, Figma)
              </li>
              <li>🔗 RESTful API & GraphQL Integration, Microservices Architecture, Kafka, NGINX</li>
              <li>🚀 Scalable and High-Performance Web Applications</li>
              <li>🤝 Agile Development & Team Collaboration & Mentoring</li>
              <li>🗄️ Database Management (MongoDB, SQL Server, Neo4j, MySQL, Cassandra)</li>
              <li>☁️ Cloud Deployments & DevOps (AWS, Azure, Docker, CI/CD)</li>
            </ul>
          </motion.div>

          {/* 🌍 Beyond Code (Personal Interests) */}
          <motion.div
            className="mt-8"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <h3 className="text-2xl font-semibold text-orange-400 mb-3">
              Beyond Code
            </h3>
            <ul className="list-none text-gray-300 space-y-2">
            <li>
                💃 Trained Classical Dancer
              </li>
              <li>
                ✈️ Love Traveling and Hiking
              </li>
              <li>
                🍴 Food Explorer
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
