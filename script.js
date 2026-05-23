const unitsData = {
  math: ["Numbers", "Fractions", "Geometry"],
  english: ["Grammar", "Reading", "Writing"],
  science: ["Living things", "Matter", "Energy"],
  sst: ["History", "Geography", "Citizenship"],
  kinyarwanda: ["Ikibonezamvugo", "Soma", "Andika"]
};

function loadUnits() {
  let subject = document.getElementById("subject").value;
  let unitSelect = document.getElementById("unit");

  unitSelect.innerHTML = "";

  if (unitsData[subject]) {
    unitsData[subject].forEach(u => {
      let opt = document.createElement("option");
      opt.value = u;
      opt.textContent = u;
      unitSelect.appendChild(opt);
    });
  }
}

function generate() {
  let subject = document.getElementById("subject").value;
  let level = document.getElementById("level").value;
  let unit = document.getElementById("unit").value;
  let learners = document.getElementById("learners").value;

  if (!subject || !unit) {
    alert("Please select subject and unit");
    return;
  }

  let plan = `
📘 CBC LESSON PLAN

Subject: ${subject}
Level: ${level}
Unit: ${unit}
Learners: ${learners}

Objectives:
- Understand ${unit}
- Apply knowledge in real life situations

Teaching Activities:
- Teacher explains the topic
- Learners work in groups

Evaluation:
- Oral questions + exercises

Conclusion:
- Summary of lesson
`;

  document.getElementById("output").innerText = plan;
}const curriculum = {
  math: {
    "Number Operations": ["Addition", "Subtraction"],
    "Fractions": ["Basics", "Comparison"],
    "Geometry": ["Shapes", "Angles"]
  },
  english: {
    "Grammar": ["Tenses", "Nouns"],
    "Reading": ["Comprehension"],
    "Writing": ["Paragraphs"]
  },
  science: {
    "Living Things": ["Plants", "Animals"],
    "Matter": ["States of Matter"],
    "Energy": ["Heat", "Light"]
  },
  sst: {
    "History": ["Colonial times"],
    "Geography": ["Maps"],
    "Citizenship": ["Rights"]
  }
};

function loadUnits() {
  let subject = document.getElementById("subject").value;
  let unitSelect = document.getElementById("unit");

  unitSelect.innerHTML = "";

  if (curriculum[subject]) {
    Object.keys(curriculum[subject]).forEach(unit => {
      let option = document.createElement("option");
      option.value = unit;
      option.textContent = unit;
      unitSelect.appendChild(option);
    });
  }
}

function generate() {
  let subject = document.getElementById("subject").value;
  let unit = document.getElementById("unit").value;
  let lesson = curriculum[subject][unit][0];
  let learners = document.getElementById("learners").value;

  let output = `
📘 CBC LESSON PLAN

Subject: ${subject}
Unit: ${unit}
Lesson: ${lesson}

Objectives:
- Understand ${lesson}
- Apply knowledge in real life

Activities:
- Teacher explains
- Learners participate

Evaluation:
- Questions and exercises

Learners: ${learners}
`;

  document.getElementById("output").innerText = output;
}function downloadPDF() {
  const { jsPDF } = window.jspdf;

  let doc = new jsPDF();

  let content = document.getElementById("output").innerText;

  doc.text(content, 10, 10);

  doc.save("lesson-plan.pdf");
}