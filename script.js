// Typing Animation

const typingElement = document.getElementById("typing");

const words = [
    "Student Developer",
    "Programmer",
    "Web Developer",
    "Network Enthusiast",
    "Cybersecurity Learner"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingElement.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {
            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


// Mobile Menu

const menuButton = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// Current Year

const footer = document.querySelector("footer");

footer.innerHTML = `
    <p>© ${new Date().getFullYear()} Stanley Bandao. Built with HTML, CSS & JavaScript.</p>
`;
