// ressources/js/script.js (version simplifiée)

// Menu hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fermer le menu en cliquant sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animation au scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.skill-card, .project-card, .competence-level');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialiser les animations
function initAnimations() {
    const elements = document.querySelectorAll('.skill-card, .project-card, .competence-level');

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// Animation des barres de compétences
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.level-progress, .tech-progress');

    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';

        setTimeout(() => {
            bar.style.transition = 'width 1s ease-in-out';
            bar.style.width = width;
        }, 500);
    });
}

// Gestion du chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio de Célia Popelin chargé !');

    // Initialiser les animations
    initAnimations();

    // Animer les barres de compétences
    setTimeout(animateSkillBars, 1000);

    // Déclencher les animations au scroll
    setTimeout(() => {
        animateOnScroll();
    }, 100);

    // Écouter le scroll pour les animations
    window.addEventListener('scroll', animateOnScroll);
});

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks) {
        navLinks.classList.remove('active');
    }
});