
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
    <section className="pt-32 pb-20 px-6 overflow-hidden relative min-h-[70vh] flex items-center">
      <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex justify-center animate-in fade-in slide-in-from-bottom-2 duration-700">
              <Badge variant="secondary" className="px-4 py-1.5 font-headline tracking-wide uppercase text-xs">
                Welcome to my portfolio
              </Badge>
            </div>
            
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
              <span className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
                Hi, I&apos;m{" "}
              </span>
              <br />
              <div className="flex justify-center flex-wrap gap-x-[0.2em] select-none">
                {name.split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block text-accent animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both hover:scale-110 transition-transform duration-300"
                    style={{ 
                      animationDelay: `${400 + (i * 40)}ms`,
                      animationTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                      display: char === " " ? "inline" : "inline-block"
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
            </h1>

            <div className="flex justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
              <p className="font-headline text-xl md:text-2xl font-medium text-muted-foreground px-6 py-2 bg-accent/5 rounded-full border border-accent/10 transition-all hover:bg-accent/10 hover:border-accent/30 hover:scale-105 hover:shadow-lg hover:shadow-accent/5 cursor-default active:scale-95">
                {designation}
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-700 fill-mode-both">
            {introduction}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-1000 fill-mode-both">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-accent/20 text-center"
            >
              Get In Touch
            </a>
            <a 
              href="#experience" 
              className="px-8 py-3 bg-white border border-border text-foreground rounded-full font-semibold hover:bg-muted hover:scale-105 active:scale-95 transition-all shadow-sm text-center"
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
