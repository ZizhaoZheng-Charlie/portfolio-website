import React from "react";
import type { NavItem } from "../types/portfolio";

interface NavProps {
  items: NavItem[];
}

export const Nav: React.FC<NavProps> = ({ items }) => {
  return (
    <nav className="flex items-center gap-8">
      {items.map((item, index) => {
        const baseClasses =
          "text-sm font-medium transition-colors duration-200";
        const activeClasses = item.isActive
          ? "text-cyan-300"
          : "text-slate-400 hover:text-cyan-300";
        const buttonClasses = item.isButton
          ? "px-4 py-2 border border-cyan-300 text-cyan-300 rounded hover:bg-cyan-300/10"
          : "";

        // Add underline animation for non-button items
        // Active items: underline stays visible (after:w-full)
        // Non-active items: underline appears on hover (hover:after:w-full)
        const underlineClasses = !item.isButton
          ? `relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-cyan-300 after:transition-all after:duration-300 ${
              item.isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
            }`
          : "";

        return (
          <a
            key={index}
            href={item.href}
            className={`${baseClasses} ${activeClasses} ${buttonClasses} ${underlineClasses}`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
};
