
"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";

interface SkillsProps {
  skills: string[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Technologies & Skills</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive list of the tools, languages, and frameworks I use to build robust digital solutions.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <div 
              key={skill}
              className="px-6 py-3 bg-white rounded-2xl border border-border shadow-sm hover:border-accent hover:text-accent transition-all cursor-default font-headline font-semibold flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-accent" />
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
