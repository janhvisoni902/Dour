const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '✕' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}

// for scroll view
const navbar = document.querySelector('.site-header');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 100) {
        navbar.classList.remove('nav-hidden');
    } 
    else if (currentScrollY > lastScrollY) {
        // Scrolling down
        navbar.classList.add('nav-hidden');
    } 
    else if (currentScrollY < lastScrollY) {
        // Scrolling up
        navbar.classList.remove('nav-hidden');
    }

    lastScrollY = currentScrollY;
}, { passive: true });