const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  menuBtn.textContent = navLinks.classList.contains("open")
    ? "✕"
    : "☰";
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

// Automatically update the copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Reveal cards when scrolling
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(15px)";
  card.style.transition = "opacity 0.6s, transform 0.6s";
  observer.observe(card);
});