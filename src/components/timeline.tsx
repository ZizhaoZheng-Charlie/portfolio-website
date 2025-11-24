import React, { useRef, useState, useEffect } from "react";
import { ElectricTrail } from "./ElectricTrail";
import type { TimelineProps } from "../types/portfolio";

export const Timeline: React.FC<TimelineProps> = ({
  title = "EXPERIENCE",
  experiences,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        scrollContainerRef.current;
      setCanScrollUp(scrollTop > 0);
      setCanScrollDown(scrollTop < scrollHeight - clientHeight - 1);
    }
  };

  useEffect(() => {
    checkScrollability();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      }
    };
  }, [experiences]);

  const scroll = (direction: "up" | "down") => {
    if (!scrollContainerRef.current) return;
    setIsScrolling(true);
    const container = scrollContainerRef.current;
    const cardHeight =
      container.querySelector(".timeline-card")?.clientHeight || 400;
    const scrollAmount = cardHeight + 48; // card height + gap
    const currentScroll = container.scrollTop;
    const targetScroll =
      direction === "up"
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

    container.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });

    setTimeout(() => setIsScrolling(false), 500);
  };

  return (
    <section
      id="work"
      className="relative min-h-screen px-4 md:px-8 py-20 bg-transparent overflow-hidden"
    >
      {/* Electric Trail effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <ElectricTrail color="#00BFFF" enabled={true} />
      </div>

      {/* Stars background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title - Centered */}
        <div className="mb-12 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold uppercase mb-2">
            {title}
          </h2>
          <div className="w-24 h-0.5 bg-cyan-300 mx-auto"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-cyan-400/50 hidden md:block"></div>

          {/* Navigation Buttons */}
          {canScrollUp && (
            <button
              onClick={() => scroll("up")}
              disabled={isScrolling}
              className="absolute left-1/2 transform -translate-x-1/2 top-0 z-30 w-12 h-12 bg-slate-800/80 border border-cyan-400/50 rounded-full flex items-center justify-center text-cyan-400 hover:bg-slate-700/80 hover:border-cyan-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              aria-label="Scroll up"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          )}

          {canScrollDown && (
            <button
              onClick={() => scroll("down")}
              disabled={isScrolling}
              className="absolute left-1/2 transform -translate-x-1/2 bottom-0 z-30 w-12 h-12 bg-slate-800/80 border border-cyan-400/50 rounded-full flex items-center justify-center text-cyan-400 hover:bg-slate-700/80 hover:border-cyan-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              aria-label="Scroll down"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          )}

          {/* Scrollable Timeline */}
          <div
            ref={scrollContainerRef}
            className="relative overflow-y-auto overflow-x-visible scrollbar-hide max-h-[80vh]"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div className="relative space-y-12 md:space-y-16 py-8">
              {experiences.map((experience, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className="relative flex flex-col md:flex-row items-start justify-center timeline-card"
                  >
                    {/* Timeline Node with Icon - positioned on the line, above card with gap */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-10 h-10 bg-cyan-400 rounded-full border-4 border-slate-900/80 z-20 flex items-center justify-center shadow-lg shadow-cyan-400/50 hidden md:flex">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>

                    {/* Mobile Timeline Node */}
                    <div className="absolute left-0 top-0 w-8 h-8 bg-cyan-400 rounded-full border-4 border-slate-900/80 z-20 flex items-center justify-center shadow-lg shadow-cyan-400/50 md:hidden">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>

                    {/* Spacer for left side when card is on right */}
                    {!isEven && (
                      <div className="hidden md:block w-[45%] flex-shrink-0"></div>
                    )}

                    {/* Experience Card - positioned with gap from icon */}
                    <div
                      className={`w-full md:w-[45%] flex-shrink-0 ${
                        isEven ? "md:pr-8" : "md:pl-8"
                      } pl-12 md:pl-0 pt-16 md:pt-16`}
                    >
                      <div className="bg-slate-800/50 border border-cyan-400/50 rounded-xl p-6 md:p-8 hover:bg-slate-800/70 transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20">
                        {/* Job Title */}
                        <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                          {experience.jobTitle}
                        </h3>

                        {/* Company Name */}
                        <p className="text-slate-300 text-sm md:text-base mb-3">
                          {experience.company}
                        </p>

                        {/* Duration Tag */}
                        <div className="flex items-center gap-3 mb-4 flex-wrap">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                            {experience.duration}
                          </span>
                        </div>

                        {/* Summary */}
                        <p className="text-slate-300 text-sm md:text-base mb-4 leading-relaxed">
                          {experience.summary}
                        </p>

                        {/* Achievements */}
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-slate-300 text-sm md:text-base"
                            >
                              <svg
                                className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Spacer for right side when card is on left */}
                    {isEven && (
                      <div className="hidden md:block w-[45%] flex-shrink-0"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
