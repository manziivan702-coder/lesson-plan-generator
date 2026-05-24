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

REB CBC LESSON PLAN

School: ${school}
Teacher: ${teacher}
Level: ${level}
Subject: ${subject}

Unit: ${unit}
Lesson: ${lesson}

Learners: ${learners}
Strategy: ${strategy}


  

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
}let currentStep = 0;
const steps = document.querySelectorAll(".step");
const buttons = document.querySelectorAll(".step-btn");

function goStep(index) {
  steps.forEach((s, i) => {
    s.classList.remove("active");
    if (i === index) s.classList.add("active");
  });

  buttons.forEach((b, i) => {
    b.classList.remove("active");
    if (i === index) b.classList.add("active");
  });

  currentStep = index;
}const curriculum = {
  "Lower Primary": {
    "Mathematics": {
      "Numbers": ["Counting", "Writing Numbers"],
      "Addition": ["Simple Addition"]
    },
    "English": {
      "Alphabet": ["A-Z Letters"],
      "Reading": ["Simple Words"]
    }
  },

  "Upper Primary": {
    "Mathematics": {
      "Fractions": ["Introduction"]
    },
    "Science": {
      "Living Things": ["Plants", "Animals"]
    }
  }
};function loadSubjects(level) {
  let subject = document.getElementById("subject");
  subject.innerHTML = "";

  if (!curriculum[level]) return;

  Object.keys(curriculum[level]).forEach(s => {
    let opt = document.createElement("option");
    opt.textContent = s;
    subject.appendChild(opt);
  });

  loadUnits();
}function loadUnits() {
  let level = document.getElementById("level").value;
  let subject = document.getElementById("subject").value;

  let unit = document.getElementById("unit");
  unit.innerHTML = "";

  if (!curriculum[level]?.[subject]) return;

  Object.keys(curriculum[level][subject]).forEach(u => {
    let opt = document.createElement("option");
    opt.textContent = u;
    unit.appendChild(opt);
  });

  loadLessons();
}function loadLessons() {
  let level = document.getElementById("level").value;
  let subject = document.getElementById("subject").value;
  let unit = document.getElementById("unit").value;

  let lesson = document.getElementById("lesson");
  lesson.innerHTML = "";

  let data = curriculum?.[level]?.[subject]?.[unit];

  if (!data) return;

  data.forEach(l => {
    let opt = document.createElement("option");
    opt.textContent = l;
    lesson.appendChild(opt);
  });
}let output = `
====================================
📘 REB CBC LESSON PLAN
====================================

🏫 School: ${school}
👨‍🏫 Teacher: ${teacher}
📚 Level: ${level}
📖 Subject: ${subject}

📦 Unit: ${unit}
📘 Lesson: ${lesson}

👩‍🎓 Number of Learners: ${learners}
🧠 Teaching Strategy: ${strategy}

------------------------------------
🎯 1. LESSON OBJECTIVES
------------------------------------
- By the end of the lesson, learners should be able to understand ${lesson}
- Demonstrate knowledge of ${unit}
- Apply learned concepts in daily life situations

------------------------------------
🧑‍🏫 2. TEACHING & LEARNING ACTIVITIES
------------------------------------
Teacher:
- Introduces the lesson clearly
- Explains key concepts of ${subject}
- Guides learners using ${strategy}
- Gives examples and clarification

Learners:
- Participate actively in class activities
- Work in groups and pairs
- Answer teacher questions
- Practice exercises given

------------------------------------
🧪 3. ASSESSMENT
------------------------------------
- Oral questioning
- Written exercises
- Group presentations
- Short quizzes

------------------------------------
📌 4. COMPETENCES DEVELOPED
------------------------------------
- Critical thinking
- Communication
- Collaboration
- Problem solving
- Creativity & innovation

------------------------------------
📍 5. LESSON SUMMARY
------------------------------------
This lesson on ${lesson} helps learners build strong understanding of ${unit} in ${subject}.
`;let lessonStages = `
------------------------------------
📚 6. LESSON STAGES
------------------------------------

1. INTRODUCTION:
- Teacher introduces ${lesson}
- Brainstorming and asking prior knowledge questions

2. DEVELOPMENT:
- Explanation of key concepts in ${unit}
- Group work and demonstrations using ${strategy}

3. CONCLUSION:
- Summary of key points
- Questions and feedback
- Short evaluation
`;let crossCutting = `
------------------------------------
🌍 7. CROSS-CUTTING ISSUES
------------------------------------
- Gender equality awareness
- Inclusive education (SEN support applied)
- Environmental awareness
- Peace and values education
- Financial literacy basics (where applicable)
`;let differentiation = `
------------------------------------
🧠 8. DIFFERENTIATED LEARNING
------------------------------------

Slow learners:
- Extra support and guided examples

Fast learners:
- Additional challenging tasks

SEN learners:
- Adapted instructions and support provided based on category
`;ssssfunction openWhatsApp(){

    let phone = "250794666702"; // 👈 SHYIRAMO NUMBER YAWE HANO

    let message = "Hello, I need help with REB Lesson Plan Generator";

    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}