export async function generateContent(countryName) {
  const prompt = `Tu es un générateur de contenu humoristique. Pour le pays "${countryName}", génère en JSON :
1. "fun_fact" : un fait surprenant, insolite et vérifié sur ce pays (2-3 phrases max, ton léger et fun, en français)
2. "slack_message" : un message Slack drôle et absurde (4-5 phrases, en français) pour demander des vacances à son manager. Le message commence par "Salut [Manager]," et doit inclure une justification complètement loufoque en rapport avec le pays. Le ton est décalé et absurde mais ça reste une demande de congés. Utilise des emojis.
Réponds UNIQUEMENT en JSON valide, sans markdown, sans backticks, sans texte avant ou après.`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!res.ok) throw new Error(`Anthropic API error: ${res.status}`);

    const data = await res.json();
    const text = data.content?.[0]?.text ?? '';

    try {
      return JSON.parse(text);
    } catch {
      // Strip possible markdown fences and retry
      const cleaned = text.replace(/```json|```/g, '').trim();
      return JSON.parse(cleaned);
    }
  } catch (err) {
    console.error('generateContent error:', err);
    return {
      fun_fact: `${countryName} est un pays fascinant avec une histoire riche et des traditions uniques qui méritent d'être découvertes en personne !`,
      slack_message: `Salut [Manager], j'ai absolument besoin de prendre des congés pour partir en ${countryName} 🌍✈️ C'est une question de survie professionnelle — mon horoscope l'a dit cette semaine. Je reviendrai avec des souvenirs et une motivation décuplée, promis ! 🙏`,
    };
  }
}
