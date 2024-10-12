"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "BookHaven",
    description: "BookHaven is a full-stack web application built using the MERN stack, featuring MongoDB, Express.js, React, and Node.js. This application provides users with a seamless experience to browse, search, and purchase books online. ",
    image: "/images/img2.png", 
    gitUrl: "https://github.com/Harmain1233/BookHaven",
    previewUrl: "https://www.youtube.com/watch?v=o9VzrJ9Va8s",
    videoUrl: "https://www.youtube.com/watch?v=o9VzrJ9Va8s",
    technologies: ['React', 'Express.js', 'Tailwind CSS', 'MongoDB', 'Node.js', 'Render']


  },
    {
      id: 1,
      title: "CUNYGPT",
      description: "CUNYGPT is a full-stack web application designed for CUNY students, powered by OpenAI and Langchain. It utilizes web scraping to gather data from CUNY webpages. Built with React, the app features Vercel's AI SDK and Chakra UI.",
      image: "/images/img2.png", 
      gitUrl: "https://github.com/bhaw16/Hack-Brooklyn-Hackathon-Project",
      previewUrl: "https://devpost.com/software/reminder-requests-app",
      videoUrl: "https://youtu.be/cwWuKhdn5VY",
      technologies: ['Next.js', 'Vercels AI SDK', 'ChakraUI', 'Python' , 'MongoDb', 'Langchain']



    },
    {
      id: 2,
      title: "Reminder Requests App",
      description: "Brooklyn Hacks Hackathon Project, an email scheduler that users can use to send themselves reminders directly to their inbox",
      image: "/images/imageCUNYGPT.png", 
      gitUrl: "https://github.com/Harmain1233/CareerBuddy",
      previewUrl: "https://harmain1233.github.io/CareerBuddy/",
      videoUrl: "/videos_portfolio/hackproject_video.mp4",
      technologies: ['HTML', 'CSS', 'Javascript', 'Google Sheets API']



    },
    {
      id: 3,
      title: "Career Buddy",
      description: "Human Computer Interaction class group project built to address needs in student community",
      image: "/images/img1.png", 
      gitUrl: "https://github.com/Harmain1233/CareerBuddy",
      previewUrl: "https://harmain1233.github.io/CareerBuddy/",
      videoUrl: "/videos_portfolio/CareerBuddyVideo.mp4",
      technologies: ['HTML', 'CSS', 'Javascript']

    },
    {
      id: 4,
      title: "Schedule Assistant",
      description: "An application built for Brooklyn College CS students to help students navigate their class schedule",
      image: "/images/img3.png", 
      gitUrl: "https://github.com/Harmain1233/Schedule-Assistant",
      previewUrl: "https://harmain1233.github.io/Schedule-Assistant/",
      videoUrl: "/videos_portfolio/ScheduleAssistant.mp4",
      technologies: ['HTML', 'CSS', 'Javascript']

    },
    {
      id: 5,
      title: "To Do List Application",
      description: "To Do List application built for a human computer interaction class to vanilla Javascript",
      image: "/images/img4.png", 
      gitUrl: "https://github.com/Harmain1233/To-Do-List",
      previewUrl: "https://harmain1233.github.io/To-Do-List/",
      videoUrl: "/videos_portfolio/to_do_list.mp4",
      technologies: ['React', 'Next.js', 'Tailwind CSS']

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
        Featured Projects
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
              videoUrl={project.videoUrl}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              technologies={project.technologies}
            />
            
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
