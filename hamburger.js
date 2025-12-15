document.addEventListener("DOMContentLoaded", () => {
  // Select the menu toggle button
  const toggle = document.querySelector(".mobile-menu-toggle");
  
  // Select the nav inside header (works on any page)
  const nav = document.querySelector("header nav");

  // Stop if elements are missing
  if (!toggle || !nav) return;

  // Toggle nav on click
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.classList.toggle("active"); // optional: animate icon
  });

  // Close nav when a link is clicked
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      toggle.classList.remove("active");
    });
  });

  // Optional: close menu if clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove("active");
      toggle.classList.remove("active");
    }
  });
});
