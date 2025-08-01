const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Optional: Add a fade-in effect
yearSpan.style.opacity = 0;
yearSpan.style.transition = "opacity 1.5s ease-in-out";
setTimeout(() => {
    yearSpan.style.opacity = 1;
}, 300);
