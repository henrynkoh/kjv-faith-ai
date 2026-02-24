import OpenAI from "openai";

let openaiClient: OpenAI | null = null;

function getOpenAIClient(): OpenAI {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY is not set. Add it in Vercel Environment Variables."
    );
  }

  if (!openaiClient) {
    openaiClient = new OpenAI({ apiKey });
  }

  return openaiClient;
}

export interface VerseInsight {
  explanation: string;
  application: string;
  prayer: string;
}

export async function generateVerseInsight(
  prompt: string
): Promise<VerseInsight> {
  const openai = getOpenAIClient();
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `You are a KJV Bible teacher focused on "rightly dividing the word of truth" (2 Timothy 2:15).
Given a Bible reference or keyword, respond with a JSON object containing:
- explanation: A clear, modern explanation of the passage/concept (2-3 sentences, rooted in KJV text)
- application: A practical life application for today (2-3 sentences)
- prayer: A short prayer inspired by the passage (2-3 sentences)
Respond ONLY with valid JSON, no markdown.`,
      },
      {
        role: "user",
        content: `Explain in KJV context: ${prompt}`,
      },
    ],
    temperature: 0.7,
    max_tokens: 500,
  });

  const content = completion.choices[0].message.content;
  if (!content) {
    throw new Error("No response from OpenAI");
  }

  return JSON.parse(content) as VerseInsight;
}

export async function generateVerseImage(prompt: string): Promise<string> {
  const openai = getOpenAIClient();
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: `Serene, calming Bible scene representing "${prompt}" — soft watercolor style, open Bible on a wooden table, gentle golden light, peaceful atmosphere. No text in image.`,
    n: 1,
    size: "1024x1024",
  });

  const url = response.data?.[0]?.url;
  if (!url) {
    throw new Error("No image generated");
  }

  return url;
}
