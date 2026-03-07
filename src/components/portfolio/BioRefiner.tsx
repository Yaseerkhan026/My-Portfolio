
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, Sparkles, Wand2 } from "lucide-react";
import { refineContent } from "@/ai/flows/ai-content-refiner";
import { toast } from "@/hooks/use-toast";

export function BioRefiner() {
  const [content, setContent] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRefine = async () => {
    if (!content.trim()) {
      toast({
        title: "Input required",
        description: "Please enter some text to refine.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const output = await refineContent({
        content,
        contentType: 'about-me',
        desiredTone: 'professional and impactful'
      });
      setResult(output.refinedContent);
    } catch (error) {
      toast({
        title: "Refinement failed",
        description: "Something went wrong while refining your bio.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-white/50">
      <div className="max-w-3xl mx-auto">
        <Card className="border-accent/20 overflow-hidden">
          <CardHeader className="bg-accent/5 border-b border-accent/10">
            <div className="flex items-center gap-2 text-accent">
              <Sparkles className="w-5 h-5" />
              <CardTitle className="font-headline text-xl">AI Bio Refiner</CardTitle>
            </div>
            <CardDescription>
              Struggling with your bio? Enter a rough draft and let AI polish it for you.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <Textarea 
                placeholder="Write a rough version of your bio or project summary here..."
                className="min-h-[150px] border-border focus:ring-accent"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <Button 
                onClick={handleRefine} 
                disabled={loading}
                className="w-full bg-accent hover:bg-accent/90"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Refining...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Refine Bio
                  </>
                )}
              </Button>
            </div>

            {result && (
              <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Refined Content</h4>
                <div className="p-4 bg-secondary/50 rounded-lg border border-border text-foreground leading-relaxed font-body italic">
                  &ldquo;{result}&rdquo;
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
