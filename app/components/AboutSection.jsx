"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Sequelize</li>
                <li>Javascript</li>
                <li>React</li>
            </ul>

        )

    }, 
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Midwood Highschool, Medical Institute Honors</li>
                <li>Brooklyn College at the City University of New York, Computer Science 2025 </li>
            </ul>

        )
    }, 
    {
        title: "Experiences",
        id: "experiences",
        content: (
            <ul className="list-disc pl-2">
               <li>CUNY Tech Prep, Web Development Fellow</li>
                <li>Girls Who Code, Computer Science Teaching Assistant</li>
                <li>AT&T, Technology Academy</li>
                <li>Goldman Sachs, Virtual Insight Series</li>
                <li>HealthyCUNY, Software Engineering Intern </li>
                <li>HealthyCUNY, Advocacy Intern</li>
            </ul>
    
        )
    }
   

]



const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);

        })
    }


    return <section id="about" className ="text-white">
    <div className="md: grid md: grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src="/images/about-image.png" width={500} height={500}  className="block mx-auto md:sticky top-0"
    /> 

    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-base lg:text-lg">
            I am an aspiring full stack developer with an interest in front-end development. I've worked
         in a variety of roles ranging from software developer, teaching assistant, to receptionist. But my passion lies in 
         coding and building unique user interfaces. I have experience working with HTML, CSS, Javascript, Node.JS, 
         Express, React, NextJS, Tailwind CSS and much more! I'm a team player and always excited to work with others to
         create cool applications.
          </p>
          <div className = "flex flex-row justify-start mt-8">
          <TabButton 
          selectTab={() => handleTabChange("skills")}
           active={tab === "skills"}
           >
            {" "}
            Skills{" "}
            </TabButton>
            <TabButton 
          selectTab={() => handleTabChange("education")}
           active={tab === "education"}
           >
            {" "}
            Education{" "}
            </TabButton>
            <TabButton 
          selectTab={() => handleTabChange("experiences")}
           active={tab === "experiences"}
           >
            {" "}
            Experiences{" "}
            </TabButton>

           


          </div>
    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
      
    </div>
    </div>
    </section>
};

export default AboutSection;