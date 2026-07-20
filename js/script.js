// =============================================
// Kiefer Clayworks
// script.js
// =============================================

// Smooth scrolling for navigation

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function (e) {

        const target = document.querySelector(this.getAttribute('href'));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// Fade images in when page loads

window.addEventListener("load", () => {

    document.querySelectorAll(".gallery img").forEach((img, index) => {

        img.style.opacity = 0;
        img.style.transform = "translateY(25px)";

        setTimeout(() => {

            img.style.transition = "all .6s ease";

            img.style.opacity = 1;
            img.style.transform = "translateY(0px)";

        }, index * 120);

    });

});


// Simple Lightbox

const images = document.querySelectorAll(".gallery img");

const overlay = document.createElement("div");

overlay.id = "lightbox";

overlay.innerHTML = "<img>";

document.body.appendChild(overlay);

const lightboxImage = overlay.querySelector("img");

images.forEach(image => {

    image.addEventListener("click", () => {

        lightboxImage.src = image.src;

        overlay.classList.add("active");

    });

});

overlay.addEventListener("click", () => {

    overlay.classList.remove("active");

});