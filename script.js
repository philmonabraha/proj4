// Part 1: Smooth navigation and the current section highlight.
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('#navbar');
const sections = document.querySelectorAll('section[id]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.querySelectorAll('.nav-link, .hero-buttons a').forEach(link => {
    link.addEventListener('click', event => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;
        event.preventDefault();
        setMenuOpen(false);
        target.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
    });
});

function updateActiveNav() {
    let current = sections[0];
    sections.forEach(section => {
        if (section.getBoundingClientRect().top <= navbar.offsetHeight + 24) current = section;
    });
    navLinks.forEach(link => {
        const active = link.getAttribute('href') === `#${current.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
    });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// Part 2 and Tier 1: One filtering function also updates the live count.
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = Array.from(document.querySelectorAll('.project-card'));
const projectCount = document.querySelector('#project-count');
function filterProjects(category) {
    projectCards.forEach(card => {
        card.hidden = category !== 'all' && card.dataset.category !== category;
    });
    const visible = projectCards.filter(card => !card.hidden).length;
    projectCount.textContent = `Showing ${visible} of ${projectCards.length} projects`;
    filterButtons.forEach(button => {
        const active = button.dataset.filter === category;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
    });
}
filterButtons.forEach(button => {
    button.addEventListener('click', () => filterProjects(button.dataset.filter));
});
filterProjects('all');

// Part 3: Keep the menu's visual state and accessible button state together.
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
function setMenuOpen(open) {
    navMenu.classList.toggle('active', open);
    navToggle.classList.toggle('active', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
}
navToggle.addEventListener('click', () => setMenuOpen(!navMenu.classList.contains('active')));
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navMenu.classList.contains('active')) {
        setMenuOpen(false);
        navToggle.focus();
    }
});
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) setMenuOpen(false);
    updateActiveNav();
});

// Part 4: Fill each bar once, when its own card enters the viewport.
const skillBars = document.querySelectorAll('.skill-progress');
function animateSkills() {
    skillBars.forEach(bar => {
        const bounds = bar.getBoundingClientRect();
        if (bounds.top < window.innerHeight && bounds.bottom > 0) {
            bar.style.width = bar.style.getPropertyValue('--skill-level');
        }
    });
}
window.addEventListener('scroll', animateSkills, { passive: true });
window.addEventListener('resize', animateSkills);
animateSkills();

// Part 5: Shared rules validate both typing and submission.
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');
const messageInput = document.querySelector('#message');
const messageCount = document.querySelector('#message-count');
const fields = [
    { input: document.querySelector('#name'), error: 'Name must be at least 2 characters.', valid: value => value.trim().length >= 2 },
    { input: document.querySelector('#email'), error: 'Please enter a valid email address.', valid: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) },
    { input: messageInput, error: 'Message must be at least 10 characters and no more than 300.', valid: value => value.trim().length >= 10 && value.length <= 300 }
];
// Native validation remains available when JavaScript is disabled.
contactForm.noValidate = true;
function validateField(field) {
    const valid = field.valid(field.input.value);
    const error = document.querySelector(`#${field.input.id}-error`);
    error.textContent = valid ? '' : field.error;
    field.input.classList.toggle('error', !valid);
    field.input.classList.toggle('success', valid);
    field.input.setAttribute('aria-invalid', String(!valid));
    return valid;
}
function updateMessageCount() {
    messageCount.textContent = `${messageInput.value.length} / 300`;
    messageCount.classList.toggle('error', messageInput.value.length > 300);
}
fields.forEach(field => {
    field.input.addEventListener('input', () => {
        formStatus.textContent = '';
        formStatus.classList.remove('success-message');
        validateField(field);
        updateMessageCount();
    });
});
contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const results = fields.map(validateField);
    if (results.every(Boolean)) {
        contactForm.reset();
        fields.forEach(field => {
            field.input.classList.remove('success', 'error');
            field.input.removeAttribute('aria-invalid');
            document.querySelector(`#${field.input.id}-error`).textContent = '';
        });
        updateMessageCount();
        formStatus.classList.add('success-message');
        formStatus.textContent = 'Thank you! Your message passed validation. This demo does not send messages.';
    } else {
        formStatus.classList.remove('success-message');
        formStatus.textContent = 'Please correct the highlighted fields.';
        fields[results.indexOf(false)].input.focus();
    }
});
updateMessageCount();
