import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const body = await req.json();

    const { level, subject, unit, lesson } = body;

    const prompt = `
You are a REB curriculum expert (Rwanda).

Create a full lesson plan in REB format 2025.

Level: ${level}
Subject: ${subject}
Unit: ${unit}
Lesson: ${lesson}

Include:
- Competences
- Objectives
- Teacher activities
- Learner activities
- Assessment
- Homework

Make it simple and ready for teachers.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You generate REB lesson plans." },
        { role: "user", content: prompt },
      ],
    });

    return Response.json({
      lessonPlan: response.choices[0].message.content,
    });

  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}