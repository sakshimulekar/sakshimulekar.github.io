// *=============================== toggle icon navbar ==================================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#nav-menu');

if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };
}

// *=============================== github calendar ==================================

if (typeof GitHubCalendar !== 'undefined') {
  try {
    GitHubCalendar(".calendar", "sakshimulekar", { responsive: true });
  } catch (e) {
    console.log("GitHubCalendar init", e);
  }
}

// *=============================== resume open in new tab ==================================

const resume1 = document.getElementById("resume-button-1");
const resume2 = document.getElementById("resume-button-2");

if (resume1) resume1.addEventListener("click", NewTab);
if (resume2) resume2.addEventListener("click", NewTab);

function NewTab(e) {
  // Allow default if it has download or target="_blank"
}

// *=============================== scroll sections active link ==================================
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        const activeLink = document.querySelector('header nav a[href*=' + id + ']');
        if (activeLink) {
          activeLink.classList.add('active');
        }
      });
    }
  });

  // *=============================== sticky navbar ==================================
  let header = document.querySelector('header');
  if (header) {
    header.classList.toggle('sticky', window.scrollY > 100);
  }

  // *=============================== remove toggle icon and navbar when click navbar link(scroll) ==================================
  if (menuIcon && navbar) {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
};

// *=============================== scroll reveal ==================================

if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .skills-container, .project-card, .contact form, .about-content-wrapper, .skill-category-card', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content, .home-content h3', { origin: 'left' });
}

// *===============================  typed js==================================

if (typeof Typed !== 'undefined') {
  const typed = new Typed('.multiple-text', {
    strings: [
      'AI-Driven Frontend Engineer',
      'Problem Solver',
      'React & TypeScript Engineer',
      'Product-Minded Developer',
      'Builder of Intelligent Interfaces',
      'Ex-CoinSwitch Engineer'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backdelay: 1000,
    loop: true
  });
}