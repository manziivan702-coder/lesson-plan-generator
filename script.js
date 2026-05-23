// fresh startlet steps = document.querySelectorAll(".step");
let buttons = document.querySelectorAll(".step-btn");

function goStep(index) {
  steps.forEach((s, i) => {
    s.classList.remove("active");
    if (i === index) s.classList.add("active");
  });

  buttons.forEach((b, i) => {
    b.classList.remove("active");
    if (i === index) b.classList.add("active");
  });
}