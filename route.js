export async function POST(request) {
  console.log("API WORKING");

  const body = await request.json();

  const { level, subject, unit, lesson } = body;

  return Response.json({
    success: true,
    lessonPlan: `
REB LESSON PLAN (TEST MODE)

Level: ${level}
Subject: ${subject}
Unit: ${unit}
Lesson: ${lesson}

1. Competences
- Students understand the topic

2. Objectives
- Learn and apply concepts

3. Activities
Teacher: Explain topic
Learners: Practice exercises

4. Assessment
- Questions and exercises

5. Homework
- Revision exercises
    `,
  });
}npm run dev