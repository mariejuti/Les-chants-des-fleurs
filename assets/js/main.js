// Navigation : fond opaque au scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Formulaire de contact : feedback simple
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message envoyé. Nous vous répondrons dans les plus brefs délais.');
    form.reset();
  });
}
