
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
  const heroImage = PlaceHolderImages.find((img) => img.id === "tech-visual");

  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden relative min-h-[80vh] flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
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
              <p className="font-headline text-2xl md:text-3xl font-medium text-muted-foreground px-6 py-2 bg-accent/5 rounded-full border border-accent/10">
                {designation}
              </p>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-700 fill-mode-both">
            {introduction}
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-1000 fill-mode-both">
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

        <div className="relative hidden lg:block animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
          </div>
          {/* Decorative element behind image */}
          <div className="absolute -top-6 -right-6 w-full h-full bg-accent/10 rounded-3xl -z-10 blur-2xl" />
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-20 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-20 animate-pulse delay-1000" />
    </section>
  );
}
