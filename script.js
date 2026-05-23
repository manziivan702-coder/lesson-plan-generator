let currentStep = 0;
const steps = document.querySelectorAll(".step");

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.remove("active");
    if (i === index) step.classList.add("active");
  });
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}const curriculum = {
  "Lower Primary": {
    "Mathematics": {
      "Unit 1: Numbers": ["Lesson 1: Counting", "Lesson 2: Writing Numbers"],
      "Unit 2: Addition": ["Lesson 1: Simple Addition", "Lesson 2: Word Problems"]
    },
    "English": {
      "Unit 1: Alphabet": ["Lesson 1: Letters A-Z", "Lesson 2: Sounds"],
      "Unit 2: Reading": ["Lesson 1: Simple Words", "Lesson 2: Sentences"]
    }
  },

  "Upper Primary": {
    "Mathematics": {
      "Unit 1: Fractions": ["Lesson 1: Introduction", "Lesson 2: Comparing Fractions"],
      "Unit 2: Geometry": ["Lesson 1: Shapes", "Lesson 2: Angles"]
    },
    "Science": {
      "Unit 1: Living Things": ["Lesson 1: Plants", "Lesson 2: Animals"]
    }
  },

  "Ordinary Level": {
    "Mathematics": {
      "Unit 1: Algebra": ["Lesson 1: Expressions", "Lesson 2: Equations"]
    }
  },

  "Advanced Level": {
    "Mathematics": {
      "Unit 1: Calculus": ["Lesson 1: Limits", "Lesson 2: Derivatives"]
    }
  }
};function loadSubjects() {
  let level = document.getElementById("level").value;
  let subjectSelect = document.getElementById("subject");

  subjectSelect.innerHTML = "";

  if (curriculum[level]) {
    Object.keys(curriculum[level]).forEach(subject => {
      let opt = document.createElement("option");
      opt.value = subject;
      opt.textContent = subject;
      subjectSelect.appendChild(opt);
    });
  }
}function loadUnits() {
  let level = document.getElementById("level").value;
  let subject = document.getElementById("subject").value;

  let unitSelect = document.getElementById("unitTitle");
  unitSelect.innerHTML = "";

  if (curriculum[level] && curriculum[level][subject]) {
    Object.keys(curriculum[level][subject]).forEach(unit => {
      let opt = document.createElement("option");
      opt.value = unit;
      opt.textContent = unit;
      unitSelect.appendChild(opt);
    });
  }
function loadLessons() {
  let level = document.getElementById("level").value;
  let subject = document.getElementById("subject").value;
  let unit = document.getElementById("unitTitle").value;

  let lessonSelect = document.getElementById("lessonTitle");
  lessonSelect.innerHTML = "";

  curriculum[level][subject][unit].forEach(lesson => {
    let opt = document.createElement("option");
    opt.value = lesson;
    opt.textContent = lesson;
    lessonSelect.appendChild(opt);
  });
}