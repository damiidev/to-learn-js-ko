const color = ["yellow", "violet", "blue"];

function colorChange() {
  if (window.innerWidth >= 1000) {
    document.body.style.background = color[0];
  } else if (window.innerWidth < 1000 && window.innerWidth >= 700) {
    document.body.style.background = color[1];
  } else {
    document.body.style.background = color[2];
  }
}

window.addEventListener("resize", colorChange);
