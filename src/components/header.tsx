import React, { useState, useEffect } from "react";
import { Nav } from "./nav";
import type { NavItem } from "../types/portfolio";

const navItemsConfig: Omit<NavItem, "isActive">[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Contact me", href: "#contact", isButton: true },
];

export const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return window.location.hash || "#about";
    }
    return "#about";
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItemsConfig
        .filter((item) => !item.isButton)
        .map((item) => item.href.replace("#", ""));

      const scrollPosition = window.scrollY + 200; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(`#${sections[i]}`);
            break;
          }
        }
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash || "#about";
      setActiveSection(hash);
    };

    // Check initial position
    handleScroll();
    handleHashChange();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navItems: NavItem[] = navItemsConfig.map((item) => ({
    ...item,
    isActive: item.href === activeSection,
  }));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-b from-yellow-400 to-blue-500 rounded-sm"></div>
          <span className="text-white text-sm">
            Full Stack Developer · React / TS / Node.js / Express
          </span>
        </div>
        <Nav items={navItems} />
      </div>
    </header>
  );
};
