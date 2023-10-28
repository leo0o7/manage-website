const openIcon = document.getElementById("open");
const closeIcon = document.getElementById("close");
const primaryNav = document.querySelector(".primary-h > nav.primary-nav");
const carouselButtons = document.querySelectorAll(".carousel-button");
const carouselCards = document.querySelectorAll(".carousel-card");
const carousel = document.querySelector(".carousel");
const cardWrapper = document.querySelector(".card-wrapper");
let mousePos = { x: undefined, y: undefined };
let movePos = { x: undefined, y: undefined };
let mouseDown = false;

function showNav() {
  let display = getComputedStyle(primaryNav).display;
  const screenWidth = window.outerWidth;
  if (screenWidth <= 1024) {
    primaryNav.style.display = "none";
  } else {
    primaryNav.style.display = "block";
  }
}
function clickHandler() {
  let display = getComputedStyle(primaryNav).display;
  if (closeIcon.getAttribute("aria-hidden") === "true") {
    primaryNav.style.display = "block";
    console.log(display);
    closeIcon.setAttribute("aria-hidden", "false");
    openIcon.setAttribute("aria-hidden", "true");
  } else {
    primaryNav.style.display = "none";
    console.log(display);
    closeIcon.setAttribute("aria-hidden", "true");
    openIcon.setAttribute("aria-hidden", "false");
  }
}
function handleCarousel(n) {
  carouselButtons.forEach((button) => {
    button.setAttribute("data-active", "false");
    if (button.getAttribute("data-index") == n) {
      button.setAttribute("data-active", "true");
    }
  });
  carouselCards.forEach((card) => {
    card.setAttribute("data-active", "false");
    if (card.getAttribute("data-index") == n) {
      card.setAttribute("data-active", "true");
    }
  });
}
carousel.addEventListener(
  "mousedown",
  (click) => {
    mouseDown = true;
    click.preventDefault();
  },
  true
);
document.addEventListener(
  "mouseup",
  (click) => {
    mouseDown = false;
  },
  true
);
carousel.addEventListener(
  "mousemove",
  (event) => {
    let rect = carousel.getBoundingClientRect();
    if (mouseDown) {
      mousePos = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    }
    console.log(mousePos.x);
    cardWrapper.style.setProperty("--posX", -mousePos.x + "px");
  },
  true
);
