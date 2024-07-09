const timer = document.querySelector(".timer");
const red = document.querySelector(".red");
const orange = document.querySelector(".orange");
const green = document.querySelector(".green");

let a = 10;

const b = setInterval(() => {
  timer.textContent = a;

  if (
    a == 0 &&
    red.classList.contains("toggle") &&
    orange.classList.contains("toggle")
  ) {
    timer.style.color = "red";
    green.classList.remove("animation");
    red.classList.toggle("toggle");
    green.classList.toggle("toggle");
    a = 11;
  } else if (
    a == 0 &&
    green.classList.contains("toggle") &&
    orange.classList.contains("toggle")
  ) {
    red.classList.remove("animation");
    orange.classList.toggle("toggle");
    red.classList.toggle("toggle");
    a = 3;
  } else if (
    a == 0 &&
    green.classList.contains("toggle") &&
    red.classList.contains("toggle")
  ) {
    timer.style.color = "green";
    orange.classList.toggle("toggle");
    green.classList.toggle("toggle");
    a = 11;
  }

  if (a <= 3 && !red.classList.contains("toggle")) {
    red.classList.add("animation");
  } else if (a <= 3 && !green.classList.contains("toggle")) {
    green.classList.add("animation");
  } else if (0 < a <= 3 && !orange.classList.contains("toggle")) {
    timer.textContent = "0";
  }

  a--;
}, 1000);
