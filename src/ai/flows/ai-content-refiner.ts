'use server';
/**
 * @fileOverview An AI-powered tool to help refine or generate content drafts for 'About Me' sections or project summaries.
 *
 * - refineContent - A function that handles the content refinement process.
 * - AiContentRefinerInput - The input type for the refineContent function.
 * - AiContentRefinerOutput - The return type for the refineContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiContentRefinerInputSchema = z.object({
  content: z.string().describe('The content draft to be refined or a brief idea for new content.'),
  contentType: z
    .enum(['about-me', 'project-summary', 'general'])
    .default('general')
    .describe(
      "The type of content to refine. Use 'about-me' for personal bios, 'project-summary' for project descriptions, or 'general' for other text."
    ),
  desiredTone: z
    .string()
    .optional()
    .describe(
      'An optional description of the desired tone for the refined content (e.g., professional, enthusiastic, concise).'
    ),
});
export type AiContentRefinerInput = z.infer<typeof AiContentRefinerInputSchema>;

const AiContentRefinerOutputSchema = z.object({
  refinedContent: z.string().describe('The AI-generated or refined content, made concise, impactful, and professional.'),
});
export type AiContentRefinerOutput = z.infer<typeof AiContentRefinerOutputSchema>;

export async function refineContent(
  input: AiContentRefinerInput
): Promise<AiContentRefinerOutput> {
  return aiContentRefinerFlow(input);
}

const aiContentRefinerPrompt = ai.definePrompt({
  name: 'aiContentRefinerPrompt',
  input: {schema: AiContentRefinerInputSchema},
  output: {schema: AiContentRefinerOutputSchema},
  prompt: `You are an expert content refiner and generator. Your goal is to take user-provided content and transform it into a concise, impactful, and professional piece of text.

Here is the content type: {{{contentType}}}
Here is the user's content draft or idea: """{{{content}}}"""

{{#if desiredTone}}
Focus on achieving a {{{desiredTone}}} tone.
{{/if}}

Refine or generate the content, ensuring it is highly readable and professional, suitable for a portfolio website or professional profile.
`,
});

const aiContentRefinerFlow = ai.defineFlow(
  {
    name: 'aiContentRefinerFlow',
    inputSchema: AiContentRefinerInputSchema,
    outputSchema: AiContentRefinerOutputSchema,
  },
  async input => {
    const {output} = await aiContentRefinerPrompt(input);
    return output!;
  }
);
