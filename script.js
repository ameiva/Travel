const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const dest = document.getElementById("destinationInput").value.trim();
  const loc = document.getElementById("locationInput").value.trim();
  const type = document.getElementById("tourTypeInput").value.trim();

  if (!dest || !loc || !type) {
    alert("Please fill all fields!");
    return;
  }

  alert(`Searching for:\nDestination: ${dest}\nLocation: ${loc}\nTour Type: ${type}`);
});

document.getElementById("subscribeForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("emailInput").value.trim();

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address");
    return;
  }

  alert("Thank you for subscribing!");
});

const bookingModal = document.getElementById("bookingModal");
const bookBtns = document.querySelectorAll(".bookBtn");
const closeBooking = document.querySelector(".closeBtn");

bookBtns.forEach(btn => {
  btn.addEventListener("click", () => bookingModal.style.display = "flex");
});

closeBooking.addEventListener("click", () => bookingModal.style.display = "none");

const joinModal = document.getElementById("joinModal");
const joinBtn = document.getElementById("joinBtn");
const closeJoin = document.querySelector(".closeJoin");

joinBtn.addEventListener("click", () => joinModal.style.display = "flex");
closeJoin.addEventListener("click", () => joinModal.style.display = "none");

const swiper = new Swiper(".swiper", {
  slidesPerView: 1, 
  spaceBetween: 15,
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }
});

document.getElementById("joinForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("You have successfully joined us! Welcome aboard!");
  joinModal.style.display = "none";
  this.reset();
});

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your booking has been submitted! We'll contact you soon.");
  bookingModal.style.display = "none";
  this.reset();
});

ScrollReveal().reveal(".header__container h1", { distance: "50px", origin: "bottom", duration: 1000 });
ScrollReveal().reveal(".header__container p", { distance: "50px", origin: "bottom", duration: 1000, delay: 300 });
ScrollReveal().reveal(".header__container form", { distance: "50px", origin: "bottom", duration: 1000, delay: 600 });


// =====================
// ADDITIONAL ANIMATIONS
// =====================

// 1. Scroll Reveal for more sections
ScrollReveal().reveal('.feature__card', { distance: '40px', origin: 'bottom', duration: 800, interval: 150 });
ScrollReveal().reveal('.destination__card', { distance: '40px', origin: 'bottom', duration: 900, interval: 200 });
ScrollReveal().reveal('.package__card', { distance: '40px', origin: 'bottom', duration: 900, interval: 200 });
ScrollReveal().reveal('.client__card', { distance: '40px', origin: 'bottom', duration: 900, interval: 200 });
ScrollReveal().reveal('.footer__container', { distance: '60px', origin: 'bottom', duration: 1000 });

// 2. Hover Animations
const hoverCards = document.querySelectorAll('.feature__card, .destination__card, .package__card, .client__card');
hoverCards.forEach(card => {
  card.style.transition = '0.3s ease';
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)';
    card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '5px 5px 10px rgba(0,0,0,0.05)';
  });
});

// 4. Smooth fade-on-load
window.addEventListener('load', () => {
  document.body.style.opacity = 0;
  document.body.style.transition = 'opacity 1.2s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = 1;
  });
});

// 6. Modal animations
function animateOpen(modal) {
  modal.style.display = 'flex';
  const content = modal.querySelector('.modal-content');
  content.style.transform = 'translateY(-20px)';
  content.style.opacity = '0';
  setTimeout(() => {
    content.style.transition = '0.35s ease';
    content.style.transform = 'translateY(0)';
    content.style.opacity = '1';
  }, 10);
}

function animateClose(modal) {
  const content = modal.querySelector('.modal-content');
  content.style.transition = '0.3s ease';
  content.style.transform = 'translateY(-20px)';
  content.style.opacity = '0';
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}

bookBtns.forEach(btn => {
  btn.addEventListener('click', () => animateOpen(bookingModal));
});

joinBtn.addEventListener('click', () => animateOpen(joinModal));

closeBooking.addEventListener('click', () => animateClose(bookingModal));

closeJoin.addEventListener('click', () => animateClose(joinModal));
