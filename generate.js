import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  try {
    const { subject, grade, topic, duration } = req.body;

    const prompt = `
Create a professional Rwanda CBC lesson plan.

Subject: ${subject}
Grade: ${grade}
Topic: ${topic}
Duration: ${duration}

Format:
1. Competence
2. Learning Objectives
3. Materials Needed
4. Introduction
5. Main Activities
6. Assessment
7. Homework
8. Teacher Notes

Make it professional and classroom-ready.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    res.status(200).json({
      result: response.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to generate lesson plan",
    });
  }
}