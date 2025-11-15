// DROP-DOWN MENU
function openHamburger(){
  const hamburger = document.querySelector('.hamburger');
  hamburger.style.display = 'flex';
}

function closeHamburger(){
  const closehamburger = document.querySelector('.hamburger');
  closehamburger.style.display = 'none';
}

// IMG FULLSCREEN VIEW IN GALLERY
const popup = document.getElementById("img-popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.getElementById("close-popup");

document.querySelectorAll(".zoom-img").forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Infinite carousel for SERVICES section
const servicesContainer = document.querySelector('.card-container');
const serviceCards = Array.from(document.querySelectorAll('.card'));

// 1. Clone every card once and append for infinite looping
serviceCards.forEach(card => {
  const clone = card.cloneNode(true);
  servicesContainer.appendChild(clone);
});

// 2. Enable the animation
servicesContainer.style.animation = "spin 120s linear infinite";

// 3. Pause animation when user interacts (scroll or hover)
const servicesCarousel = document.querySelector('.carousel');

let serviceScrollTimeout;

// Pause on scroll
servicesCarousel.addEventListener('scroll', () => {
  servicesContainer.style.animationPlayState = "paused";

  clearTimeout(serviceScrollTimeout);
  serviceScrollTimeout = setTimeout(() => {
    servicesContainer.style.animationPlayState = "running";
  }, 20000); // resumes after 20s no interaction
});

// Pause on hover
servicesCarousel.addEventListener("mouseenter", () => {
  servicesContainer.style.animationPlayState = "paused";
});

servicesCarousel.addEventListener("mouseleave", () => {
  servicesContainer.style.animationPlayState = "running";
});


// Infinite carousel for gallery
const galleryContainer = document.querySelector('.gallery-container');
const cards = Array.from(document.querySelectorAll('.gallery-card'));

// 1. Clone all cards and append once
cards.forEach(card => {
  const clone = card.cloneNode(true);
  galleryContainer.appendChild(clone);
});

// 2. Start animation
galleryContainer.style.animation = "gallery-spin 120s linear infinite";

// 3. Pause animation when user scrolls or hovers
const galleryCarousel = document.querySelector('.gallery-carousel');

// Pause when user scrolls manually
let scrollTimeout;
galleryCarousel.addEventListener('scroll', () => {
  galleryContainer.style.animationPlayState = "paused";

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    galleryContainer.style.animationPlayState = "running";
  }, 20000); // ⬅ animation resumes after 20s of no interaction
});

// Pause on hover
galleryCarousel.addEventListener("mouseenter", () => {
  galleryContainer.style.animationPlayState = "paused";
});

galleryCarousel.addEventListener("mouseleave", () => {
  galleryContainer.style.animationPlayState = "running";
});
