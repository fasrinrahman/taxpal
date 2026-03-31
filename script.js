// day - 06 code o nav bar in mobile view

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", ()=>{
  mobileMenu.classList.toggle("open");
//   console.log("Toggle btn accessed");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // remove "open" from mobileMenu
    mobileMenu.classList.remove("open");
    console.log("ESc btn clicked to go back");
    
  }
});


