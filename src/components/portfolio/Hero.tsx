
"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  name: string;
  designation: string;
  tagline: string;
  introduction: string;
}

export function Hero({ name, designation, tagline, introduction }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden relative min-h-[80vh] flex items-center">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex justify-center animate-in fade-in slide-in-from-bottom-2 duration-700">
              <Badge variant="secondary" className="px-4 py-1.5 font-headline tracking-wide uppercase text-xs">
                Welcome to my portfolio
              </Badge>
            </div>
            
            <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tight text-foreground leading-tight">
              <span className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
                Hi, I&apos;m{" "}
              </span>
              <br />
              <span className="inline-block text-accent animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 ease-out fill-mode-both hover:scale-105 transition-transform duration-300 cursor-default">
                {name}
              </span>
            </h1>

            <div className="flex justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
              <p className="font-headline text-2xl md:text-3xl font-medium text-muted-foreground px-8 py-3 bg-accent/5 rounded-full border border-accent/10 transition-all hover:bg-accent/10 hover:border-accent/20 cursor-default">
                {designation}
              </p>
            </div>
          </div>

          <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-700 fill-mode-both">
            {introduction}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-1000 fill-mode-both">
            <a 
              href="#contact" 
              className="px-10 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-accent/20"
            >
              Get In Touch
            </a>
            <a 
              href="#experience" 
              className="px-10 py-4 bg-white border border-border text-foreground rounded-full font-semibold hover:bg-muted hover:scale-105 active:scale-95 transition-all shadow-sm"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-20 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-20 animate-pulse delay-1000" />
    </section>
  );
}
