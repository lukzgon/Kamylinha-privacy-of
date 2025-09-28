'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting content and interactions to users based on their subscription status and engagement history.
 *
 * - suggestContent - A function that suggests content based on user subscription and engagement.
 * - SuggestContentInput - The input type for the suggestContent function.
 * - SuggestContentOutput - The return type for the suggestContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestContentInputSchema = z.object({
  subscriptionStatus: z
    .boolean()
    .describe('Whether the user has an active subscription.'),
  userInteractionHistory: z
    .string()
    .describe('A summary of the user interaction history.'),
});
export type SuggestContentInput = z.infer<typeof SuggestContentInputSchema>;

const SuggestContentOutputSchema = z.object({
  suggestedContent: z
    .string()
    .describe(
      'A suggestion of content and interactions tailored to the user.'
    ),
});
export type SuggestContentOutput = z.infer<typeof SuggestContentOutputSchema>;

export async function suggestContent(input: SuggestContentInput): Promise<SuggestContentOutput> {
  return suggestContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestContentPrompt',
  input: {schema: SuggestContentInputSchema},
  output: {schema: SuggestContentOutputSchema},
  prompt: `You are an expert in understanding user preferences and suggesting engaging content.

Based on the user's subscription status and interaction history, suggest content and interactions that align with their interests and have high engagement potential.

Subscription Status: {{subscriptionStatus}}
User Interaction History: {{userInteractionHistory}}

Suggest content that is most likely to appeal to the user:
`,
});

const suggestContentFlow = ai.defineFlow(
  {
    name: 'suggestContentFlow',
    inputSchema: SuggestContentInputSchema,
    outputSchema: SuggestContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
