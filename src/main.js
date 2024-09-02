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

// Scroll to Sections
document.addEventListener('DOMContentLoaded', function() {

    // Scroll to Toolbox Section
    var toolboxLink = document.querySelector('.toolbox-link');
    toolboxLink.addEventListener('click', function(event) {
        event.preventDefault();
        var toolboxSection = document.getElementById('toolbox-section');
        var toolboxTop = toolboxSection.getBoundingClientRect().top;
        var displacement = window.innerWidth < 800 ? 200 : 350;
        window.scrollTo({
            top: window.scrollY + toolboxTop - displacement,
            behavior: 'smooth'
        });
    });
    // Scroll to Experience Section
    var experienceLink = document.querySelector('.experience-link');
    experienceLink.addEventListener('click', function (event) {
        event.preventDefault();
        var experienceSection = document.getElementById('experience-section');
        var experienceTop = experienceSection.getBoundingClientRect().top;
        var displacement = window.innerWidth < 800 ? 200 : 350;
        window.scrollTo({
            top: window.scrollY + experienceTop - displacement,
            behavior: 'smooth'
        });
    });
    // Scroll to Contact Section
    var contactLink = document.querySelector('.contact-link');
    contactLink.addEventListener('click', function (event) {
        event.preventDefault();
        var contactSection = document.getElementById('contact-section');
        console.log(contactSection);
        var contactTop = contactSection.getBoundingClientRect().top;
        var displacement = window.innerWidth < 800 ? 200 : 350;
        window.scrollTo({
            top: window.scrollY + contactTop - displacement,
            behavior: 'smooth'
        });
    });

});

// Toggling Mobile Menu
document.getElementById('mobile-menu').addEventListener('click', function() {
    var navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.classList.toggle('active');
    this.classList.toggle('is-active');
});

