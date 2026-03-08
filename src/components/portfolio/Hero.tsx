
"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface HeroProps {
  name: string;
  designation: string;
  tagline: string;
  introduction: string;
}

export function Hero({ name, designation, tagline, introduction }: HeroProps) {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-tech-setup');

  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden relative min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="flex justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-2 duration-700">
                <Badge variant="secondary" className="px-4 py-1.5 font-headline tracking-wide uppercase text-xs">
                  Welcome to my portfolio
                </Badge>
              </div>
              
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
                <span className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
                  Hi, I&apos;m{" "}
                </span>
                <br />
                <span className="inline-block text-accent animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300 ease-out fill-mode-both hover:scale-105 transition-transform duration-300 cursor-default">
                  {name}
                </span>
              </h1>

              <div className="flex justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
                <p className="font-headline text-xl md:text-2xl font-medium text-muted-foreground px-6 py-2 bg-accent/5 rounded-full border border-accent/10 transition-all hover:bg-accent/10 hover:border-accent/20 cursor-default">
                  {designation}
                </p>
              </div>
            </div>

            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-700 fill-mode-both">
              {introduction}
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-1000 fill-mode-both">
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

          {/* Visual Content */}
          <div className="relative group animate-in fade-in zoom-in duration-1000 delay-500">
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative element behind image */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-accent/20 rounded-3xl -z-10 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-primary/20 rounded-3xl -z-10 group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-20 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-20 animate-pulse delay-1000" />
    </section>
  );
}
