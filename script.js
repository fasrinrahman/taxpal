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

  // Simplify Tabs for TaxPal Prject
  // select tabs , images
  const simplify_cards = document.querySelectorAll(".simplify_card");

  const simplify_images = document.querySelector("#simplify_img");

  const simplify_images_arr = [
    // img1, img2 .. with tab order in notion
    "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.32a24c33.png&w=1080&q=75",
    "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.6022a851.png&w=1080&q=75",
    "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.1c490a2c.png&w=1080&q=75",
  ];

  // queryselectorAll return nodellist - we can use for loop [tabs]
  simplify_cards.forEach((simplify_card, index) => {
    simplify_card_head = document.querySelectorAll(".simplify_card_head");
    simplify_card_subhead = document.querySelectorAll(".simplify_card_subhead");
    simplify_card_text = document.querySelectorAll(".simplify_card_text");
    simplify_card_icon = document.querySelectorAll(".simplify_card_icon");

    simplify_card.addEventListener("click", () => {
      // remove the active styles from all other tabs
      simplify_cards.forEach((card_ele) => {
        card_ele.classList.remove(
          "active",
          "bg-blue-600",
          "text-blue-600",
          "text-zinc-400",
        );
        // assign the active classes to the clicked tab
        simplify_card.classList.add("active");
        simplify_card_head[index].classList.add("text-blue-600");
        simplify_card_subhead[index].classList.add("text-blue-600");
        simplify_card_text[index].classList.add("text-zinc-400");
        simplify_card_icon[index].classList.add("bg-blue-600");
      });

      // change image by clicking to reaalted image  with its index
      simplify_images.src = simplify_images_arr[index];
    });
  });
});
