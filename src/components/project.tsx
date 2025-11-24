import React from "react";
import { ElectricTrail } from "./ElectricTrail";
import type { ProjectProps } from "../types/portfolio";

export const Project: React.FC<ProjectProps> = ({
  title = "PROJECT",
  introduction,
  projects,
}) => {
  return (
    <section
      id="expertise"
      className="relative min-h-screen px-8 py-20 bg-transparent"
    >
      {/* Electric Trail effect in top-left */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <ElectricTrail color="#00BFFF" enabled={true} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title - Centered */}
        <div className="mb-8 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold uppercase mb-2">
            {title}
          </h2>
          <div className="w-24 h-0.5 bg-cyan-300 mx-auto"></div>
        </div>

        {/* Introduction - Centered */}
        <p className="text-slate-300 text-sm md:text-base mb-12 max-w-3xl mx-auto text-center leading-relaxed">
          {introduction}
        </p>

        {/* Projects Grid - 2x3 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="space-y-3 p-6 rounded-lg hover:bg-slate-800/30 transition-colors duration-200"
            >
              <h3 className="text-white text-base font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
