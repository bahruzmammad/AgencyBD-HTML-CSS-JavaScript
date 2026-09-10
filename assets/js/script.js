// Mobil menyu
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
  const open = menu.classList.contains("open");
  menuIcon.setAttribute("class", open ? "ri-close-line" : "ri-menu-line");
});

menu.addEventListener("click", () => {
  menu.classList.remove("open");
  menuIcon.setAttribute("class", "ri-menu-line");
});

// ScrollReveal parametrləri
const revealOpt = { distance: "50px", origin: "bottom", duration: 1000 };

ScrollReveal().reveal(".hero-text h1", { ...revealOpt });
ScrollReveal().reveal(".hero-text .desc", { ...revealOpt, delay: 500 });
ScrollReveal().reveal(".hero-btns", { ...revealOpt, delay: 1000 });

ScrollReveal().reveal(".service-card", { ...revealOpt, interval: 500 });
ScrollReveal().reveal(".services-cta", { ...revealOpt, delay: 2000 });

ScrollReveal().reveal(".about .title", { ...revealOpt });
ScrollReveal().reveal(".about-list li", {
  ...revealOpt,
  delay: 500,
  interval: 500,
});

ScrollReveal().reveal(".portfolio .title", { ...revealOpt });
ScrollReveal().reveal(".portfolio .desc", { ...revealOpt, delay: 500 });
ScrollReveal().reveal(".portfolio-img", {
  ...revealOpt,
  origin: "right",
  delay: 1000,
});
ScrollReveal().reveal(".portfolio-list li", {
  ...revealOpt,
  interval: 500,
  delay: 1500,
});

// Swiper
new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

ScrollReveal().reveal(".sub-box .title", { ...revealOpt });
ScrollReveal().reveal(".sub-box form", { ...revealOpt, delay: 500 });
