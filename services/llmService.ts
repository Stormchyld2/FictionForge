// src/services/llmService.ts

const BASE_URL = import.meta.env.VITE_LLM_BASE_URL
  ?? "http://127.0.0.1:11434";
const DEFAULT_MODEL = import.meta.env.VITE_DEFAULT_MODEL
  ?? "mistral:story";

interface LLMResponse {
  choices: { message: { content: string } }[];
}

export async function generateText(
  prompt: string,
  systemInstruction?: string
): Promise<string> {
  const body = {
    model: DEFAULT_MODEL,
    messages: [
      ...(systemInstruction ? [{ role: "system", content: systemInstruction }] : []),
      { role: "user", content: prompt },
    ],
  };

  const res = await fetch(`${BASE_URL}/v1/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`LLM error ${res.status}: ${text}`);
  }

  const json = (await res.json()) as LLMResponse;
  return json.choices[0].message.content;
}
