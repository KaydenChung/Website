// Toggling Reveal Animation
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

// Toggling Logo Overlay
document.addEventListener("DOMContentLoaded", function () {
    const logoOverlays = document.querySelectorAll(".logo-overlay");
    logoOverlays.forEach((overlay) => {
        overlay.addEventListener("click", function () {
            overlay.classList.toggle("active");
        });
    });
});

// Scroll to Toolbox Section
document.addEventListener('DOMContentLoaded', function() {
    var toolboxLink = document.querySelector('.toolbox-link');
    toolboxLink.addEventListener('click', function(event) {
        event.preventDefault();
        var toolboxSection = document.getElementById('toolbox-section');
        var toolboxTop = toolboxSection.getBoundingClientRect().top;
        window.scrollTo({
            top: window.scrollY + toolboxTop - 350,
            behavior: 'smooth'
        });
    });
});

// Toggling Mobile Menu
document.getElementById('mobile-menu').addEventListener('click', function() {
    var navbarMenu = document.querySelector('.navbar_menu');
    navbarMenu.classList.toggle('active');
    this.classList.toggle('is-active');
});
