// TechBadge.js
import React from 'react';

const TechBadge = ({ tech }) => {
  return (
    <div className="tech-badge">
      <span className="text-sm text-[#ADB7BE] bg-[#2B2B2B] rounded-full px-2 py-1">
        {tech}
      </span>
      <style jsx>{`
        .tech-badge {
          margin-right: 0.5rem; // Adjust spacing between badges
          display: inline-block; // Keep badges in a row
        }
      `}</style>
    </div>
  );
};

export default TechBadge;
