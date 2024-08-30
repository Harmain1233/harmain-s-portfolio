"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
      id: 1,
      title: "Reminder Requests App",
      description: "Full Stack Hackathon Project",
      image: "/images/img2.png", 
      gitUrl: "https://github.com/bhaw16/Hack-Brooklyn-Hackathon-Project",
      previewUrl: "https://devpost.com/software/reminder-requests-app",
    },
    {
      id: 2,
      title: "CUNYGPT Project",
      description: "Full Stack CTP Hackathon Project",
      image: "/images/imageCUNYGPT.png", 
      gitUrl: "https://github.com/Harmain1233/CareerBuddy",
      previewUrl: "https://harmain1233.github.io/CareerBuddy/",
    },
    {
      id: 3,
      title: "Career Buddy",
      description: "Human Computer Interaction Project",
      image: "/images/img1.png", 
      gitUrl: "https://github.com/Harmain1233/CareerBuddy",
      previewUrl: "https://harmain1233.github.io/CareerBuddy/",
    },
    {
      id: 4,
      title: "Schedule Assistant",
      description: "Personal Project",
      image: "/images/img3.png", 
      gitUrl: "https://github.com/Harmain1233/Schedule-Assistant",
      previewUrl: "https://harmain1233.github.io/Schedule-Assistant/",
    },
    {
      id: 5,
      title: "To Do List Application",
      description: "Human Computer Interaction Project",
      image: "/images/img4.png", 
      gitUrl: "https://github.com/Harmain1233/To-Do-List",
      previewUrl: "https://harmain1233.github.io/To-Do-List/",
    }
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
         
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
