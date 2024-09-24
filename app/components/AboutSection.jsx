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
         <li>React</li>
        <li>Node.js</li>
         <li>MonogDB</li>
         <li>Monogoose</li>
         <li>SQL</li>
         <li>mySQL</li>
          <li>Java</li>
         <li>C++</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Midwood High School, Medical Institute Honors</li>
        <li>Brooklyn College at the City University of New York, Computer Science 2025</li>
      </ul>
    ),
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
        <li>HealthyCUNY, Software Engineering Intern</li>
        <li>HealthyCUNY, Advocacy Intern</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          className="block mx-auto md:sticky top-0"
          alt="Description of the about image"
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          <p className="text-base lg:text-lg">
  Im an aspiring fullstack developer studying Computer Science at City University of New York Brooklyn College
  I aspire to be a developer who not only develops amazing software but one who can drive for real good in the world
  the tech industry is changing our lives every day and I believe that by improving our technologies were making a huge leap towards a better future
  I have delved in both frontend and backend development and I am currently building 2 full stack projects as part of my
  fellowship at CUNY Tech Prep I aspire to be a developer who not only develops amazing software
  but one who can drive for real good in the world the tech industry is changing our lives every day
  and I believe that by improving our technologies were making a huge leap towards a better future
</p>
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              Experiences
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
