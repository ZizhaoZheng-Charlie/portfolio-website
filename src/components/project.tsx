import React, { useState, useRef, useEffect } from "react";
import { ElectricTrail } from "./ElectricTrail";
import type { ProjectProps } from "../types/portfolio";

export const Project: React.FC<ProjectProps> = ({
  title = "PROJECT",
  introduction,
  projects,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6; // 3 columns x 2 rows
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const carouselRef = useRef<HTMLDivElement>(null);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getVisibleProjects = () => {
    const start = currentIndex * itemsPerPage;
    const end = start + itemsPerPage;
    return projects.slice(start, end);
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, [currentIndex]);

  const visibleProjects = getVisibleProjects();

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

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {totalPages > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-cyan-400/50 hover:border-cyan-300 transition-all duration-200 flex items-center justify-center group"
                aria-label="Previous projects"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-cyan-300 group-hover:text-cyan-200 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-cyan-400/50 hover:border-cyan-300 transition-all duration-200 flex items-center justify-center group"
                aria-label="Next projects"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-cyan-300 group-hover:text-cyan-200 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Projects Grid - 3x2 layout */}
          <div
            ref={carouselRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visibleProjects.map((project, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="space-y-3 p-6 rounded-lg hover:bg-slate-800/30 transition-colors duration-200 flex flex-col"
              >
                <h3 className="text-white text-base font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.websiteUrl && (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-medium text-cyan-300 bg-slate-800/50 hover:bg-slate-700/50 border border-cyan-400/50 hover:border-cyan-300 rounded-md transition-all duration-200 group"
                    >
                      <svg
                        className="w-4 h-4 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                      Visit Website
                      <svg
                        className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-medium text-cyan-300 bg-slate-800/50 hover:bg-slate-700/50 border border-cyan-400/50 hover:border-cyan-300 rounded-md transition-all duration-200 group"
                    >
                      <svg
                        className="w-4 h-4 group-hover:scale-110 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View GitHub
                      <svg
                        className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-cyan-300 w-8"
                      : "bg-slate-600 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
