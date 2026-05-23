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
}