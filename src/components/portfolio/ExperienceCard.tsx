
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building2 } from "lucide-react";

export interface ExperienceItem {
  title: string;
  organization: string;
  duration?: string;
  description: string[];
  type: 'experience' | 'achievement' | 'education';
}

export function ExperienceCard({ title, organization, duration, description, type }: ExperienceItem) {
  return (
    <Card className="hover:shadow-md transition-shadow duration-300 bg-white/50 backdrop-blur-sm border-border/50">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <CardTitle className="font-headline text-lg font-semibold">{title}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="w-4 h-4" />
              <span>{organization}</span>
            </div>
          </div>
          <Badge variant={type === 'achievement' ? 'default' : 'secondary'} className="capitalize">
            {type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {duration && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
            <Calendar className="w-3 h-3" />
            <span>{duration}</span>
          </div>
        )}
        <ul className="space-y-2">
          {description.map((point, idx) => (
            <li key={idx} className="text-sm leading-relaxed text-muted-foreground flex gap-2">
              <span className="text-accent">•</span>
              {point}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
