// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll("nav ul li a");

  // Add active class to the current section
  function setActiveSection() {
    const scrollPosition = window.scrollY;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop - sectionHeight / 2) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  }

  // Smooth scroll to sections
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Call setActiveSection on scroll and initial load
  window.addEventListener("scroll", setActiveSection);
  setActiveSection();
});
