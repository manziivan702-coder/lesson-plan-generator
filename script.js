async function generateLesson() {

  const grade = document.getElementById("grade").value;
  const subject = document.getElementById("subject").value;
  const topic = document.getElementById("topic").value;
  const verb = document.getElementById("verb").value;

  const output = document.getElementById("output");

  output.innerHTML = "Generating lesson plan...";

  try {

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        grade,
        subject,
        topic,
        verb
      })
    });

    const data = await response.json();

    output.innerHTML = `
      <h2>Generated Lesson Plan</h2>
      <div class="lesson-result">
        ${data.result.replace(/\n/g, "<br>")}
      </div>
    `;

  } catch (error) {

    output.innerHTML = `
      <p style="color:red;">
        Failed to generate lesson plan.
      </p>
    `;

    console.error(error);
  }
}
