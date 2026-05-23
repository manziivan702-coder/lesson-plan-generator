// NAVIGATION
let currentStep = 0;
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
}

// CURRICULUM DATABASE
const curriculum = {
  "Lower Primary": {
    "Mathematics": {
      "Numbers": ["Counting", "Writing Numbers"],
      "Addition": ["Simple Addition", "Word Problems"]
    },
    "English": {
      "Alphabet": ["A-Z Letters", "Sounds"],
      "Reading": ["Words", "Sentences"]
    }
  },

  "Upper Primary": {
    "Mathematics": {
      "Fractions": ["Introduction", "Comparison"]
    }
  }
};

// LOAD SUBJECTS
function loadSubjects(level) {
  let subject = document.getElementById("subject");
  subject.innerHTML = "";

  if (curriculum[level]) {
    Object.keys(curriculum[level]).forEach(s => {
      let opt = document.createElement("option");
      opt.textContent = s;
      subject.appendChild(opt);
    });
  }

  loadUnits();
}

// LOAD UNITS
function loadUnits() {
  let level = document.getElementById("level").value;
  let subject = document.getElementById("subject").value;

  let unit = document.getElementById("unit");
  unit.innerHTML = "";

  if (curriculum[level]?.[subject]) {
    Object.keys(curriculum[level][subject]).forEach(u => {
      let opt = document.createElement("option");
      opt.textContent = u;
      unit.appendChild(opt);
    });
  }

  loadLessons();
}

// LOAD LESSONS
function loadLessons() {
  let level = document.getElementById("level").value;
  let subject = document.getElementById("subject").value;
  let unit = document.getElementById("unit").value;

  let lesson = document.getElementById("lesson");
  lesson.innerHTML = "";

  let data = curriculum[level]?.[subject]?.[unit];

  if (data) {
    data.forEach(l => {
      let opt = document.createElement("option");
      opt.textContent = l;
      lesson.appendChild(opt);
    });
  }
}

// GENERATE LESSON PLAN
function generate() {
  let school = document.getElementById("school").value;
  let teacher = document.getElementById("teacher").value;
  let level = document.getElementById("level").value;
  let subject = document.getElementById("subject").value;
  let unit = document.getElementById("unit").value;
  let lesson = document.getElementById("lesson").value;
  let learners = document.getElementById("learners").value;
  let strategy = document.getElementById("strategy").value;

  let output = `
REB CBC LESSON PLAN

School: ${school}
Teacher: ${teacher}
Level: ${level}

Subject: ${subject}
Unit: ${unit}
Lesson: ${lesson}

Learners: ${learners}
Strategy: ${strategy}
`;

  document.getElementById("output").innerText = output;
}

// SIMPLE PDF
function downloadPDF() {
  const { jsPDF } = window.jspdf;
  let doc = new jsPDF();

  let text = document.getElementById("output").innerText;
  doc.text(text, 10, 10);

  doc.save("lesson-plan.pdf");
}