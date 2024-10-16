import React, { forwardRef } from "react";
import ReactPlayer from "react-player";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Tilt from 'react-parallax-tilt';
import TechBadge from "./TechBadge";

const ProjectCard = forwardRef(({ videoUrl, title, description, gitUrl, previewUrl, technologies }, ref) => {
  const handleScroll = () => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Tilt>
      <div ref={ref} className="transition-transform transform hover:scale-105 duration-300">
        <div className="h-52 md:h-72 rounded-t-xl relative group cursor-pointer shadow-lg overflow-hidden mx-auto border border-[#33353F] top-0 left-0 right-0 z-10">
          <ReactPlayer
            className="w-full h-full rounded-t-xl"
            url={videoUrl}
            playing
            loop
            muted
            width="100%"
            height="100%"
            onClick={handleScroll}
          />
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <Link
              href={gitUrl}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white transition-colors duration-300"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white transition-colors duration-300"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          </div>
        </div>
        <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 shadow-md mx-auto border border-[#33353F] top-0 left-0 right-0 z-10">
          <h5 className="text-xl font-semibold mb-2 tracking-wide">{title}</h5>
          <p className="text-[#ADB7BE] text-sm">{description}</p>
          <div className="flex flex-wrap mt-2"> {/* Add this wrapper for badges */}
            {technologies.map((tech, index) => (
              <TechBadge key={index} tech={tech} /> // Pass the technology to the TechBadge
            ))}
          </div>
        </div>
      </div>
    </Tilt>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
