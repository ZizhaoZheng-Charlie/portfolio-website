import React from "react";
import type { HeroProps } from "../types/portfolio";
import cvPdf from "../assets/ZizhaoZheng Resume.pdf";

export const Hero: React.FC<HeroProps> = ({
  greeting,
  name,
  description,
  cvButtonLabel,
}) => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen px-8 py-20"
    >
      <div className="text-center space-y-6 max-w-4xl">
        <p className="text-cyan-300 text-sm tracking-wider uppercase">
          {greeting}
        </p>
        <div className="w-24 border-t border-cyan-300/30 mx-auto"></div>
        <h1 className="text-white text-6xl md:text-7xl font-bold">{name}</h1>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
        <div className="pt-4">
          <a
            href={cvPdf}
            download="ZizhaoZheng_Resume.pdf"
            className="inline-block px-6 py-3 border border-cyan-300 text-cyan-300 rounded hover:bg-cyan-300/10 transition-colors duration-200 text-sm font-medium"
          >
            {cvButtonLabel}
          </a>
        </div>
      </div>
    </section>
  );
};
