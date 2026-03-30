// day - 06 code o nav bar in mobile view

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", ()=>{
  mobileMenu.classList.toggle("open");
//   console.log("Toggle btn accessed");
});