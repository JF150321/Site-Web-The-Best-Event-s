const backP = document.querySelector(".backPage");
const mouseMv = document.querySelector(".mouseMove");

backP.addEventListener("mousemove", (e) => {
  mouseMv.style.left = (e.x / window.innerWidth) * 100 + "%";
  mouseMv.style.top = (e.y / window.innerHeight) * 100 + "%";
});
