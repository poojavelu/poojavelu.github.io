"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  EffectCards,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

// Project Data
const projects = [
  {
    title: "Predictive Failure Detection in Microservices using Deep Learning",
    description:
      "Developed a deep learning-based anomaly detection system for microservices using metrics like CPU, memory usage, and response time. Utilized Prometheus and Grafana for real-time data collection and visualization.",
    images: ["/Architecture.jpg"],
    techStack: ["Python",
    "Deep Learning",
    "Prometheus",
    "Grafana",],
    liveDemo: "",
    github: "",
  },
  {
    title: "Weather Forecasting using Transformer Models",
    description:
      "Implemented the Stormer model, a transformer-based architecture designed for accurate weather forecasting using ERA5 data. Engineered key modules like weather-specific embeddings, AdaLN conditioning, and cross-attention for robust temporal predictions.",
    images: ["/stomer.png"],
    techStack: [
      "Python",
      "TensorFlow",
    "Transformers",
    "AdaLN",
    "Randomized Dynamics Forecasting",
    "Cross-Attention",
    "ERA5 Dataset",
    
    ],
    liveDemo: "https://drive.google.com/file/d/1_Yx3X-JW-BHB1nVnKveVTT1waMqO-41z/view?usp=sharing",
    github: "https://github.com/poojavelu/AI-tools-for-systems-engineering/tree/main/Weather_Forecasting_using_Transformer_Models",
  },
  {
    title: "Distributed Blog Design and Implementation",
    description:
      "Built a fault-tolerant, scalable blog platform using ZooKeeper for partition coordination and Kafka for real-time updates. Implemented APIs for user management and messaging, with dynamic reallocation for high availability.",
    images: ["/distributedBlog.png"],
    techStack: [
      "Java", "ZooKeeper", "Kafka", "REST APIs", "Replication"
    ],
    liveDemo: "",
    github: "https://github.com/poojavelu/A-Lightweight-Microblog-Platform",
  },
  {
    title: "AI-Powered Content Creator",
    description:
      "Developed a content platform integrating ChatGPT and DALL·E for automated text and image generation, designed for social media marketers to boost engagement and productivity.",
    images: ["/contentCreator.png"],
    techStack: [
      "React", "OpenAI (ChatGPT & DALL·E)",
    ],
    liveDemo: "",
    github: "",
  },
  {
    title: "Scalable MongoDB Sharded Cluster Deployment on AWS",
    description:
      "Configured a sharded MongoDB cluster with replica sets and a mongos router across AWS instances. Implemented range-based sharding with public datasets to optimize data distribution and query performance.",
    images: ["/mongo.png"],
    techStack: [
      "MongoDB", "AWS EC2", "Sharding", "Replica Set", "mongos"
    ],
    liveDemo: "",
    github: "",
  },
  {
    title: "Social Network Modeling with Neo4j",
    description:
      "Modeled a social network using Neo4j, designing a graph schema for users, posts, friendships, and likes. Wrote Cypher queries to analyze user interactions, mutual connections, and CRUD operations, demonstrating graph database concepts like Index-Free Adjacency.",
    images: ["/neo4j.png"],
    techStack: [
      "Neo4j", "Cypher", "Graph Databases", "Index-Free Adjacency"
    ],
    liveDemo: "",
    github: "",
  },
  {
    title: "Personalized Nutrition Assistance using AI Agents",
    description:
      "Built an AI-powered nutrition assistant using a Variational Autoencoder and ChatGPT to generate personalized meal plans based on user health data and dietary preferences.",
    images: ["/personalAssistance.png"],
    techStack: [
     "Python", "VAE", "ChatGPT", "Deep Learning", "Personalization"
    ],
    liveDemo: "",
    github: "",
  },
  {
    title: "DBMS Implementation Project",
    description:
      "Built a file-based DBMS supporting DDL and CRUD operations with custom memory and storage handling. Implemented a system catalog and fixed-size buffer pool for managing table metadata and data pages efficiently.",
    images: ["/dbms.png"],
    techStack: [
      "Neo4j", "Cypher", "Graph Databases", "Index-Free Adjacency"
    ],
    liveDemo: "",
    github: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-16 px-2">
      {/* 🔥 Section Heading */}
      <motion.h2
        className="text-5xl font-bold text-white text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My <span className="text-orange-400">Projects</span>
      </motion.h2>

      {/* 📌 Swiper Coverflow Effect */}
      <div className="flex justify-center">
        {/* <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={40}
          loop={true} // ✅ Loop through projects infinitely
          // loopedSlides={3}// ✅ Controls looping slides
          coverflowEffect={{
            rotate: 30, // ✅ Rotation effect
            depth: 400, // ✅ Depth effect (negative pulls backward)
            // modifier: 0.2, // ✅ Adjusts scaling effect
            scale: 0.7, // ✅ Enlarges the center project
          }}
          pagination={{ clickable: true }}
          navigation={true}
          speed={1000} // ✅ Smooth transition speed 300ms
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full max-w-5xl"
        > */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          navigation={true}
          speed={1000}
          loopAdditionalSlides={0}
          coverflowEffect={{
            rotate: 30,
            stretch: 1,
            depth: 600,
            modifier: 1,
            slideShadows: true,
            scale: 1,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // ✅ Custom external pagination
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          className="w-full relative"
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="relative bg-white/5 backdrop-blur-md shadow-lg rounded-lg border border-white/20 p-6 max-w-4xl mx-auto"
            >
              {/* 🖼️ Project Image */}
              <Swiper
                effect="cards"
                grabCursor={true}
                loop={true}
                modules={[EffectCards]}
                className="rounded-md overflow-hidden mb-4"
              >
                {project.images.map((img, i) => (
                  <SwiperSlide
                    key={i}
                    className="flex justify-center items-center"
                  >
                    <div className="relative w-[500px] h-[300px] flex items-center justify-center mx-auto">
                      <Image
                        src={img}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* 📝 Project Info */}
              <h3 className="text-3xl text-center font-semibold text-orange-400 mt-4">
                {project.title}
              </h3>
              <p className="text-gray-300 text-center mt-2">
                {project.description}
              </p>

              {/* 🔗 Links & Tech Stack */}
              <div className="mt-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-orange-500/20 border border-orange-400 text-orange-300 text-sm rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-2 justify-center">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      className="px-3 py-1 bg-orange-400 hover:bg-orange-600 text-gray-300 text-sm rounded-lg"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="px-3 py-1 bg-gray-700 border border-gray-500 text-gray-300 text-sm rounded-lg"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="custom-pagination flex justify-center mt-6"></div>
    </section>
  );
}
