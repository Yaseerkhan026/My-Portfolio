
"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Virtual Mouse Using Hand Gesture",
      description: "An innovative interface using Python and Computer Vision (OpenCV) to control computer mouse movements through hand gestures captured via webcam.",
      image: PlaceHolderImages.find(img => img.id === 'project-virtual-mouse')?.imageUrl || "https://picsum.photos/seed/1/600/400",
      tags: ["Python", "OpenCV", "MediaPipe"],
      githubUrl: "#",
    },
    {
      title: "DevFolio Pro",
      description: "A high-performance personal portfolio built with Next.js 15, featuring kinetic typography, GenAI-powered bio refinement, and a fully responsive design.",
      image: PlaceHolderImages.find(img => img.id === 'project-portfolio')?.imageUrl || "https://picsum.photos/seed/2/600/400",
      tags: ["Next.js", "Tailwind", "Firebase", "Genkit"],
      liveUrl: "#",
      githubUrl: "#",
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of my recent work, ranging from computer vision applications to modern web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <Card key={idx} className="group overflow-hidden border-border/50 hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white/50 backdrop-blur-sm">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint="project screenshot"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                   <div className="flex gap-3">
                     {project.githubUrl && (
                       <Button size="sm" variant="secondary" className="rounded-full bg-white/90" asChild>
                         <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                           <Github className="w-4 h-4 mr-2" /> Code
                         </a>
                       </Button>
                     )}
                     {project.liveUrl && (
                       <Button size="sm" variant="default" className="rounded-full bg-accent" asChild>
                         <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                           <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                         </a>
                       </Button>
                     )}
                   </div>
                </div>
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider px-2 py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="font-headline text-xl group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
