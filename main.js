import { animate, stagger } from "https://cdn.skypack.dev/motion";
animate(".intro-image", { y: [50, 0], opacity: [0, 1] }, { delay: 0, duration: 1 });

animate(".intro-text", { opacity: [0, 1] }, { delay: 0, duration: 2 });

document.getElementById("scroll-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const colorsButton = document.getElementById("colors-card-button");
colorsButton.addEventListener("click", function () {
  window.location.href = "exercises.html#colors";
  document.querySelector("html").style.scrollBehavior = "smooth";
});
