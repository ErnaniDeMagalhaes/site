// ==============================
// NAVBAR - detectar sección actual
// ==============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ==============================
// PEQUEÑO EFECTO DEL HERO
// ==============================

const heroTitle = document.querySelector(".hero h1");

window.addEventListener("mousemove", (event) => {

    if (window.innerWidth < 800) return;

    const x = (event.clientX / window.innerWidth - 0.5) * 4;
    const y = (event.clientY / window.innerHeight - 0.5) * 4;

    heroTitle.style.transform =
        `translate(${x}px, ${y}px)`;

});