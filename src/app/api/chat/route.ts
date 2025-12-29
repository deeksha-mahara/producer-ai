import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    // 🚨 PASTE YOUR AIza KEY HERE
    const apiKey = "AIzaSyAb0Wtek3e9borAIOckpsAb6FVjEKleBqo"; 

    // ✅ FIXED: Using a model from YOUR specific list
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: lastMessage }] }]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("GOOGLE ERROR:", data);
      throw new Error(data.error?.message || "Google connection failed");
    }

    // Extract the answer
    const aiResponse = data.candidates[0].content.parts[0].text;
    
    return NextResponse.json({ role: 'assistant', content: aiResponse });

  } catch (error: any) {
    console.error("SERVER CRASH:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}