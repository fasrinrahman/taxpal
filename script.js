// day - 06 code o nav bar in mobile view

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
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

// Feature Tabs for TaxPal Prject

// select tabs , images
const feature_tabs = document.querySelectorAll(".feature-tab");

const feature_images = document.querySelector("#feature-img");

const images = [
  // img1, img2 .. with tab order in notion
  "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.948a58d4.png&w=3840&q=75",
  "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpenses.6dca4b99.png&w=3840&q=75",
  "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvat-returns.90e74b9d.png&w=3840&q=75",
  "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freporting.81550c92.png&w=3840&q=75",
];

// queryselectorAll return nodellist - we can use for loop [tabs]
feature_tabs.forEach((feature_tab, index) => {
  feature_tab.addEventListener("click", () => {
    // remove the active styles from all other tabs
    feature_tabs.forEach((tab_ele) => {
      tab_ele.classList.remove(
        "active",
        "bg-white/10",
        "ring-1",
        "ring-white/10",
        "ring-inset",
      );
      // assign the active classes to the clicked tab
      feature_tab.classList.add(
        "active",
        "bg-white/10",
        "ring-1",
        "ring-white/10",
        "ring-inset",
      );
    });

    // change screan shot by clicking to reaalted image  with its index
    feature_images.src = images[index];
  });
});
