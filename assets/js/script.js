// Smooth scroll for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');

    if (href.startsWith('#')) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});


// Navbar link highlight on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

const toggler = document.querySelector('.navbar-toggler');

toggler.addEventListener('mouseover', () => {
    toggler.style.filter = 'brightness(1.2)';
});

toggler.addEventListener('mouseout', () => {
    toggler.style.filter = 'brightness(1)';
});