
"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="font-headline font-bold text-xl text-accent tracking-tight">
          DevFolio Pro
        </span>
        <div className="flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
          <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
