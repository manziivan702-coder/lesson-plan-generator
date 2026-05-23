<!DOCTYPE html>
<html>
<head>
  <title>REB CBC Lesson Planner</title>

  <style>
    body {
      font-family: Arial;
      background: #f4f7fb;
      margin: 0;
      display: flex;
      height: 100vh;
    }

    .sidebar {
      width: 220px;
      background: #003366;
      color: white;
      padding: 15px;
    }

    .step-btn {
      padding: 10px;
      margin-bottom: 10px;
      background: rgba(255,255,255,0.1);
      cursor: pointer;
      border-radius: 5px;
    }

    .step-btn.active {
      background: #0055aa;
    }

    .content {
      flex: 1;
      padding: 20px;
      background: white;
    }

    .step {
      display: none;
    }

    .step.active {
      display: block;
    }

    input, select {
      width: 100%;
      padding: 10px;
      margin: 8px 0;
    }

    button {
      padding: 10px;
      background: #003366;
      color: white;
      border: none;
      margin-top: 10px;
      cursor: pointer;
    }

    pre {
      background: #eee;
      padding: 10px;
      white-space: pre-wrap;
    }
  </style>
</head>

<body>

<div class="sidebar">
  <h3>📘 REB CBC</h3>

  <div class="step-btn active" onclick="goStep(0)">Basic Info</div>
  <div class="step-btn" onclick="goStep(1)">Academic</div>
  <div class="step-btn" onclick="goStep(2)">Lesson</div>
  <div class="step-btn" onclick="goStep(3)">Output</div>
</div>

<div class="content">

  <!-- STEP 1 -->
  <div class="step active">
    <h2>Basic Info</h2>
    <input id="school" placeholder="School Name">
    <input id="teacher" placeholder="Teacher Name">
  </div>

  <!-- STEP 2 -->
  <div class="step">
    <h2>Academic</h2>

    <select id="level" onchange="loadSubjects(this.value)">
      <option>Lower Primary</option>
      <option>Upper Primary</option>
    </select>

    <select id="subject" onchange="loadUnits()"></select>

    <select id="unit" onchange="loadLessons()"></select>

    <select id="lesson"></select>
  </div>

  <!-- STEP 3 -->
  <div class="step">
    <h2>Lesson Info</h2>

    <input id="learners" placeholder="Number of learners">

    <select id="strategy">
      <option>Group Work</option>
      <option>Discussion</option>
      <option>Role Play</option>
    </select>

    <button onclick="generate()">Generate Lesson Plan</button>
  </div>

  <!-- STEP 4 -->
  <div class="step">
    <h2>Output</h2>

    <button onclick="downloadPDF()">Download PDF</button>

    <pre id="output"></pre>
  </div>

</div>

<script src="script.js"></script>

</body>
</html>let sen = `
SEN INFORMATION:

Visual impairment: ${document.getElementById("sen_visual").value}
Hearing impairment: ${document.getElementById("sen_hearing").value}
Physical disability: ${document.getElementById("sen_physical").value}
Learning difficulties: ${document.getElementById("sen_learning").value}
Speech/language: ${document.getElementById("sen_speech").value}
Gifted & talented: ${document.getElementById("sen_gifted").value}
`;let output = `
REB CBC LESSON PLAN

School: ${school}
Teacher: ${teacher}
Level: ${level}
Subject: ${subject}

Unit: ${unit}
Lesson: ${lesson}

Learners: ${learners}
Strategy: ${strategy}

${sen}
`;function generate() {
  let school = document.getElementById("school").value;
  let teacher = document.getElementById("teacher").value;
  let level = document.getElementById("level").value;
  let subject = document.getElementById("subject").value;
  let unit = document.getElementById("unit").value;
  let lesson = document.getElementById("lesson").value;
  let learners = document.getElementById("learners").value;
  let strategy = document.getElementById("strategy").value;

  // SEN
  let sen = `
SEN INFORMATION:
- Visual impairment: ${document.getElementById("sen_visual").value}
- Hearing impairment: ${document.getElementById("sen_hearing").value}
- Physical disability: ${document.getElementById("sen_physical").value}
- Learning difficulties: ${document.getElementById("sen_learning").value}
- Speech/language: ${document.getElementById("sen_speech").value}
- Gifted & talented: ${document.getElementById("sen_gifted").value}
`;

  // SMART CONTENT ENGINE (SIMULATION)
  let objectives = `
Lesson Objectives:
- By the end of the lesson, learners should be able to understand ${lesson}
- Demonstrate knowledge of ${unit}
- Apply concepts in real life situations
`;

  let activities = `
Teaching/Learning Activities:
Teacher:
- Introduces ${lesson}
- Guides learners through examples
- Facilitates ${strategy}

Learners:
- Participate actively
- Work in groups
- Answer questions
`;

  let assessment = `
Assessment:
- Oral questions
- Written exercises
- Group presentation
`;

  let competences = `
Competences:
- Critical thinking
- Communication
- Cooperation
- Problem solving
`;

  let output = `
========================
REB CBC LESSON PLAN
========================

School: ${school}
Teacher: ${teacher}
Level: ${level}
Subject: ${subject}

Unit: ${unit}
Lesson: ${lesson}

Learners: ${learners}
Strategy: ${strategy}

------------------------
${objectives}
------------------------
${activities}
------------------------
${assessment}
------------------------
${competences}
------------------------
${sen}
`;

  document.getElementById("output").innerText = output;
}