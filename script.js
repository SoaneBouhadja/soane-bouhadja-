/* =========================
   ANIMATION AU SCROLL
   ========================= */

const elements = document.querySelectorAll(
  ".skill, .project, .about-content"
);


function showOnScroll() {

  elements.forEach((element) => {

    const position =
      element.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

      element.classList.add("visible");

    }

  });

}


showOnScroll();


window.addEventListener(
  "scroll",
  showOnScroll
);