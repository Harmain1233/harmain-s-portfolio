"use client";
import React from 'react';
import { motion } from "framer-motion";
import TimelineElements from './TimelineElements';

const technologies = [
  { name: "JavaScript", image: "images/javascript.png" },
  { name: "React", image: "images/react213.png" },
  { name: "Next.js", image: "images/nextjs.png" },
  { name: "Tailwind CSS", image: "images/tailwindcss.png" },
  { name: "Node.js", image: "images/nodejs.png" },
  { name: "HTML", image: "images/html.png" },
  { name: "Figma", image: "images/figma.png" },
  { name: "CSS", image: "images/css.png" },
  { name: "VSCode", image: "images/vscode.png" },
  // Add more technologies as needed
];

const Experiences = () => {
  return (
    <section id="experiences">
      <h1 className="text-4xl font-bold text-white text-center mt-20">What I've Done So Far</h1>
      <div className="experience-section md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        
        {/* Experiences Section */}
        <div className='mt-10 flex flex-col'>
          {TimelineElements.map(element => (
            <motion.div
              key={element.id}
              className="experience-element relative overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white p-5 rounded-lg mb-5 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              style={{
                backgroundColor: "#1d1836",
                color: "#fff",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "20px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
              }}
            >
              {/* Overlay with title and icon */}
              <div className="overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-between p-4 text-white transition-transform duration-300">
                <h3 className="text-[24px] font-bold">{element.title}</h3>
                <div 
                  className="icon-wrapper"
                  style={{
                    backgroundColor: element.iconBg,
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    marginLeft: "5px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img 
                    src={element.icon} 
                    alt={element.title} 
                    className="w-full h-full object-cover rounded-full" 
                  />
                </div>
              </div>

              {/* Content */}
              <div className="content pt-5 transition-opacity duration-300">
                <p className="mt-5 text-white-100 text-[14px] pl-1 tracking-wider">
                  {element.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-card relative rounded-lg overflow-hidden flex items-center justify-center text-white text-lg font-bold"
              whileHover={{ scale: 1.1, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)" }}
              transition={{ duration: 0.3 }}
              style={{
                height: "200px",
                backgroundColor: "black", // or any color of your choice
              }}
            >
              <img
                src={tech.image}
                alt={tech.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
