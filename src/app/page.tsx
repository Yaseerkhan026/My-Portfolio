
"use client";

import React from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { ExperienceCard, type ExperienceItem } from "@/components/portfolio/ExperienceCard";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { BioRefiner } from "@/components/portfolio/BioRefiner";
import { Toaster } from "@/components/ui/toaster";

export default function PortfolioPage() {
  const experiences: ExperienceItem[] = [
    {
      title: "GDE - Firebase",
      organization: "Google Developers",
      duration: "Ongoing",
      type: "achievement",
      description: [
        "Google Developer Expert for Firebase, contributing to the global developer community.",
        "Sharing knowledge through talks, blogs, and community support."
      ]
    },
    {
      title: "IANT Institute Of Technology",
      organization: "IANT",
      duration: "Past Experience",
      type: "experience",
      description: [
        "Worked on various technological implementations.",
        "Built a project: Virtual Mouse Using Hand Gesture using Python and computer vision."
      ]
    },
    {
      title: "Student, 3rd Year",
      organization: "Jhulelal Institute Of Technology (JIT)",
      duration: "2021 - Present",
      type: "education",
      description: [
        "Pursuing Bachelor of Engineering.",
        "Active member of tech societies and development clubs."
      ]
    },
    {
      title: "NPTEL Certified",
      organization: "NPTEL",
      duration: "Exam Cycle",
      type: "achievement",
      description: [
        "Achieved a score of 91% in the NPTEL exam.",
        "Demonstrated proficiency in core engineering and technology concepts."
      ]
    }
  ];

  const techSkills = [
    "HTML", "CSS", "Java", "JavaScript", "React", "Python", "Firebase"
  ];

  const contactInfo = {
    email: "xyz@gmail.com",
    phone: "1234567890",
    linkedin: "www.linkedin.com/in/yaseer-khan-7b7846287",
    location: "Nagpur, India"
  };

  return (
    <div className="min-h-screen font-body selection:bg-accent/20 selection:text-accent">
      <Navbar />
      
      <main>
        <Hero 
          name="Yaseer Khan"
          designation="Google Developer Expert - Firebase"
          tagline="Building robust, scalable applications with a focus on seamless user experiences."
          introduction="I am a passionate 3rd-year student at Jhulelal Institute of Technology (JIT) and a Google Developer Expert for Firebase. I specialize in bridging the gap between complex backend architectures and intuitive frontend interfaces."
        />

        <section id="experience" className="py-20 px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">Experience & Achievements</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A track record of academic excellence, industry involvement, and community leadership.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${idx * 100}ms` }}>
                  <ExperienceCard {...exp} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Skills skills={techSkills} />

        <BioRefiner />

        <Contact {...contactInfo} />
      </main>

      <footer className="py-12 border-t bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Yaseer Khan. Built with Next.js, Firebase & Passion.
          </p>
          <div className="flex gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-accent transition-colors">About</a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-accent transition-colors">Experience</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}
