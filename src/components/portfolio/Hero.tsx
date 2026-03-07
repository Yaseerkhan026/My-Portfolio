
"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface HeroProps {
  name: string;
  designation: string;
  tagline: string;
  introduction: string;
}

export function Hero({ name, designation, tagline, introduction }: HeroProps) {
  const profilePic = PlaceHolderImages.find(img => img.id === "profile-pic");

  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <Badge variant="secondary" className="px-3 py-1 font-headline tracking-wide uppercase text-xs">
              Welcome to my portfolio
            </Badge>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
              Hi, I&apos;m <span className="text-accent">{name}</span>
            </h1>
            <p className="font-headline text-xl md:text-2xl font-medium text-muted-foreground">
              {designation}
            </p>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
            {introduction}
          </p>
          <div className="flex gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-all shadow-lg shadow-accent/20"
            >
              Get In Touch
            </a>
            <a 
              href="#experience" 
              className="px-8 py-3 bg-white border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-all"
            >
              View My Work
            </a>
          </div>
        </div>
        <div className="relative w-64 h-64 md:w-96 md:h-96 shrink-0">
          <div className="absolute inset-0 bg-primary/20 rounded-3xl rotate-6 -z-10 animate-pulse" />
          <div className="absolute inset-0 bg-accent/10 rounded-3xl -rotate-3 -z-10" />
          <div className="w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl relative">
            {profilePic && (
              <Image 
                src={profilePic.imageUrl} 
                alt={name} 
                fill 
                className="object-cover"
                data-ai-hint={profilePic.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
