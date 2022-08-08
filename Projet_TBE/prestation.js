let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");
const title1 = document.querySelector(".title1");
const title2 = document.querySelector(".title2");
const title3 = document.querySelector(".title3");
const title4 = document.querySelector(".title4");
const title5 = document.querySelector(".title5");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const text4 = document.querySelector(".text4");
const text5 = document.querySelector(".text5");

toggle.addEventListener("click", () => body.classList.toggle("open"));
title1.addEventListener("click", () => {
  text1.classList.toggle("ouvrir1");
});
title2.addEventListener("click", () => {
  text2.classList.toggle("ouvrir2");
});
title3.addEventListener("click", () => {
  text3.classList.toggle("ouvrir3");
});
title4.addEventListener("click", () => {
  text4.classList.toggle("ouvrir4");
});
title5.addEventListener("click", () => {
  text5.classList.toggle("ouvrir5");
});
