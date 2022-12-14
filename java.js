/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

let lastScrollPosition = 0;

window.addEventListener("scroll", function () {

  let scrollPosition = window.pageYOffset;

  if (scrollPosition > lastScrollPosition) {
    header.classList.remove("active");
  } else {
    header.classList.add("active");
  }

  lastScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition;

});
