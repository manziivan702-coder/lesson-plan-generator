"use client";

import { useState } from "react";

export default function Page() {
  const [lessonPlan, setLessonPlan] = useState("");

  async function generate() {
    const res = await fetch("/api/generate-lesson", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        level: "P5",
        subject: "Math",
        unit: "Fractions",
        lesson: "Intro",
      }),
    });

    const data = await res.json();
    setLessonPlan(data.lessonPlan);
  }

  return (
    <div>
      <button onClick={generate}>
        Generate
      </button>

      <pre>{lessonPlan}</pre>
    </div>
  );
}