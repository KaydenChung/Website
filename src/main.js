// Toggling reveal animation when page is scrolled
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Toggling logo overlay when clicked
document.addEventListener("DOMContentLoaded", function () {
    const logoOverlays = document.querySelectorAll(".logo-overlay");
    logoOverlays.forEach((overlay) => {
        overlay.addEventListener("click", function () {
            overlay.classList.toggle("active");
        });
    });
});