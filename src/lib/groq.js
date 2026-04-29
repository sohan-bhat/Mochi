import Groq from 'groq-sdk';

const apiKey = import.meta.env.VITE_GROQ_API_KEY;

const groq = new Groq({ apiKey, dangerouslyAllowBrowser: true });

const SYSTEM_PROMPT = `You suggest recipe ideas the user can make with the ingredients they list. You do NOT explain how to cook them — only what to make.

Output format (markdown), strictly:
- 3 to 4 recipes total.
- Each recipe is a level-3 heading followed by a single short paragraph (1–2 sentences) describing the dish.
- Do NOT use bullet points, numbered lists, ingredient lists, or step-by-step instructions.
- Do NOT include a "note", disclaimer, or closing summary.

Example shape:

### Lemon Garlic Shrimp Pasta
A bright, weeknight-friendly pasta tossed with seared shrimp, lemon, and garlic.

### Caprese Salad
A simple no-cook salad of tomatoes, mozzarella, and basil.

You do not have to use every ingredient the user lists — pick the recipes that are easiest and tastiest with what they have.

If the user mentions ANY dietary restriction (vegan, vegetarian, keto, gluten-free, halal, kosher, allergies, etc.), every single recipe MUST comply with it. Double-check each recipe against the restriction before including it.`;

export async function generateRecipes({ ingredients, mealType, notes }) {
  const parts = [];
  if (ingredients?.length) parts.push(`Ingredients: ${ingredients.join(', ')}`);
  if (mealType) parts.push(`Meal type: ${mealType}`);
  if (notes?.trim()) parts.push(`Notes / dietary preferences: ${notes.trim()}`);

  const userMessage = parts.join('\n') || 'No ingredients selected.';

  const completion = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: userMessage },
    ],
  });

  return completion.choices[0]?.message?.content ?? '';
}
