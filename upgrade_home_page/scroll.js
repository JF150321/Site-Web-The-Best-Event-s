const btn = document.getElementById("btn");
const sideBar = document.getElementById("side-bar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    btn.style.opacity = 0;
    btn.style.transition = "0.5s";
  } else {
    btn.style.opacity = 1;
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    sideBar.style.opacity = 0;
    sideBar.style.transition = "0.5s";
  } else {
    sideBar.style.opacity = 1;
  }
});
