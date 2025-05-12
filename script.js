// Navigation toggle and treat banner logic
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");
    const treatBanner = document.getElementById("treat-banner");
  
    // Mobile nav toggle
    if (toggle && links) {
      toggle.addEventListener("click", () => {
        links.classList.toggle("show");
      });
    }
  
    // Show treat banner if progress is 3 or more
    const recipesCompleted = parseInt(localStorage.getItem("recipesCompleted") || "0");
    if (treatBanner && recipesCompleted >= 3) {
      treatBanner.classList.remove("hidden");
    }
  });
  