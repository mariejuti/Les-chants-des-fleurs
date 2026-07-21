// Navigation : fond opaque au scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Burger menu mobile
const burger = document.querySelector('.nav__burger');
const navLinks = document.querySelector('.nav__links');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    nav.classList.toggle('menu-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
      nav.classList.remove('menu-open');
      document.body.style.overflow = '';
    });
  });
}

// Formulaire de contact : soumission Netlify + message inline
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString()
    })
    .then(() => {
      form.style.display = 'none';
      const success = document.getElementById('contact-success');
      if (success) success.style.display = 'block';
    })
    .catch(() => {
      const success = document.getElementById('contact-success');
      if (success) {
        success.textContent = 'Une erreur est survenue. Contactez-nous directement par email.';
        success.style.display = 'block';
      }
    });
  });
}
