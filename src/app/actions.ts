
'use server';

import { suggestContent, type SuggestContentInput } from '@/ai/flows/suggest-content-flow';

export async function getAiSuggestion(input: SuggestContentInput) {
  try {
    const result = await suggestContent(input);
    return { success: true, suggestion: result.suggestedContent };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to get suggestion.' };
  }
}
