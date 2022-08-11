const btn = document.getElementById("btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    btn.style.opacity = 0;
    btn.style.transition = "0.5s";
  } else {
    btn.style.opacity = 1;
  }
});
