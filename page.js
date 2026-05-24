import { useState } from "react";

export default function Home() {
  const [lessonPlan, setLessonPlan] = useState("");

  async function generate() {
    const res = await fetch("/api/generate-lesson", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        level: "P5",
        subject: "Mathematics",
        unit: "Fractions",
        lesson: "Introduction to fractions",
      }),
    });

    const data = await res.json();
    setLessonPlan(data.lessonPlan);
  }

  return (
    <div style={{ padding: 20 }}>
      <button onClick={generate}>
        Generate Lesson Plan AI
      </button>

      <pre>{lessonPlan}</pre>
    </div>
  );
}