function generateLessonPlan() {
  let teacher = document.getElementById('teacher').value;
  let school = document.getElementById('school').value;
  let subject = document.getElementById('subject').value;
  let studentClass = document.getElementById('class').value;
  let term = document.getElementById('term').value;
  let topic = document.getElementById('topic').value;
  let objectives = document.getElementById('objectives').value;
  let activities = document.getElementById('activities').value;
  let assessment = document.getElementById('assessment').value;

  let output = `
    <h2>REB LESSON PLAN</h2>
    <p><b>Teacher:</b> ${teacher}</p>
    <p><b>School:</b> ${school}</p>
    <p><b>Subject:</b> ${subject}</p>
    <p><b>Class:</b> ${studentClass}</p>
    <p><b>Term:</b> ${term}</p>
    <p><b>Topic:</b> ${topic}</p>
    <hr>
    <p><b>Objectives</b><br>${objectives}</p>
    <p><b>Activities</b><br>${activities}</p>
    <p><b>Assessment</b><br>${assessment}</p>
  `;
  document.getElementById('output').innerHTML = output;
}
async function generateLesson() {
  const grade = document.getElementById("grade").value;
  const subject = document.getElementById("subject").value;
  const topic = document.getElementById("topic").value;
  const verb = document.getElementById("verb").value;

  const res = await fetch("/api/generate", {
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

  const data = await res.json();

  document.getElementById("output").innerText =
    data.result || "No result";
}async function generateLesson() {

  const grade = document.getElementById("grade").value;
  const subject = document.getElementById("subject").value;
  const topic = document.getElementById("topic").value;
  const verb = document.getElementById("verb").value;

  document.getElementById("output").innerHTML = "Generating...";

  try {
    const res = await fetch("/api/generate", {
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

    const data = await res.json();

    document.getElementById("output").innerHTML =
      "<pre>" + data.result + "</pre>";

  } catch (error) {
    document.getElementById("output").innerHTML =
      "<p style='color:red;'>Error generating lesson plan</p>";
  }
}