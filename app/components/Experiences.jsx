import React from 'react';
import TimelineElements from './TimelineElements'; // Import your timeline elements

const ExperienceTimeline = () => {
  return (
    <div
      id="experiences"
      className="w-full mt-20 min-h-screen relative"
    >
      {/* Add "My Experiences" heading */}
      <h1 className="text-3xl font-bold mb-10 text-center">My Experiences</h1>

      {/* Container for the experiences in two columns */}
      <div className="relative w-full flex flex-wrap justify-between gap-6">
        {/* Iterate through each experience in TimelineElements */}
        {TimelineElements.map((experience, index) => (
          <div
            key={experience.id}
            className="w-full md:w-[48%] mb-10 flex items-stretch" // Ensures all cards are stretched to the same height
          >
            <div
              className="relative w-full bg-[#181818] p-6 shadow-lg rounded-xl border border-[#33353F] flex flex-col justify-between"
              style={{ minHeight: '300px' }} // Apply minimum height
            >
              <div className="flex items-center gap-2 mb-4">
                {/* Display the icon for each experience */}
                {experience.icon && (
                  <img
                    src={experience.icon}
                    alt={`${experience.title} logo`}
                    className="h-8 w-8"
                  />
                )}
                <h2 className="text-lg font-medium tracking-wide underline cursor-pointer decoration-transparent hover:decoration-current transition-[text-decoration] underline-offset-4">
                  {experience.title} {/* Display the experience title */}
                </h2>
              </div>

              <small className="text-xs">
                {experience.startYear} {'→'} {experience.endYear || 'Present'}
              </small>

              <p className="mt-2 mb-5 text-neutral-500">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
