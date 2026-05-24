"use client";

import { useState } from "react";

export default function Page() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Lesson Generator Page</h1>

      <button
        onClick={() => setText("🔥 AI PAGE WORKING")}
      >
        Generate
      </button>

      <p>{text}</p>
    </div>
  );
}