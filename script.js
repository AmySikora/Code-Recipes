// Navigation toggle for mobile menu
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");
  
    if (toggle && links) {
      toggle.addEventListener("click", () => {
        links.classList.toggle("show");
      });
    }
  });
  