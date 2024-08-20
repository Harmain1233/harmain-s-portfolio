import React from 'react';
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
      id: 1,
      title: "Reminder Requests Full Stack Project",
      description: "Hover to see more!",
      image: "/images/img2.png", 
      tag: ["All", "Web"],
      gitUrl: "https://github.com/bhaw16/Hack-Brooklyn-Hackathon-Project",
      previewUrl: "https://devpost.com/software/reminder-requests-app",
    },
    {
      id: 2,
      title: "Career Buddy Project",
      description: "Hover to see more",
      image: "/images/img1.png", 
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Harmain1233/CareerBuddy",
      previewUrl: "https://harmain1233.github.io/CareerBuddy/",
    },
    {
      id: 3,
      title: "Schedule Assistant",
      description: "Hover to see more",
      image: "/images/img3.png", 
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Harmain1233/Schedule-Assistant",
      previewUrl: "https://harmain1233.github.io/Schedule-Assistant/",
    },
    {
      id: 4,
      title: "To Do List Application",
      description: "Hover to see more",
      image: "/images/img4.png", 
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/Harmain1233/To-Do-List",
      previewUrl: "https://harmain1233.github.io/To-Do-List/",
    }
];

const ProjectsSection = () => {
    return (
        <section id="projects">
          
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">My Projects</h2>

            <div className="overflow-x-auto whitespace-nowrap mr-4">
            <div className="animate-scroll">
            <div className="flex space-x-4">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        tag={project.tag}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}


                    />
                ))}
  {/* Duplicate the cards for seamless scrolling */}
  {projectsData.map((project) => (
                        <ProjectCard
                            key={`${project.id}-duplicate`}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            tag={project.tag}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    ))}



            </div>
            </div>
            </div>
            </section>


    );
};

export default ProjectsSection;
