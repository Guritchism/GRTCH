// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu when a link is clicked
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            hamburgerMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Scroll animation untuk elemen dengan kelas fade-in
function checkFadeElements() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 50) {
            element.classList.add('visible');
        }
    });
}

// Jalankan animasi saat halaman pertama kali dimuat
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(checkFadeElements, 300);
});

// Jalankan animasi saat scroll
window.addEventListener('scroll', checkFadeElements);

// Portfolio item hover effect
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('img').style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.querySelector('img').style.transform = 'scale(1)';
    });
});

// Hire me button effect
const hireMe = document.querySelector('.hire-me');

hireMe.addEventListener('click', () => {
    // Open email client with pre-filled subject
    window.location.href = 'mailto:adidan.noul@gmail.com?subject=Job Opportunity for Adidan';
});

// Add active class to current navigation link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Hamburger menu functionality
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinksContainer = document.querySelector('.nav-links');

// Create overlay element for mobile menu
const menuOverlay = document.createElement('div');
menuOverlay.classList.add('menu-overlay');
document.body.appendChild(menuOverlay);

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    
    // Prevent scrolling when mobile menu is open
    if (navLinksContainer.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close menu when clicking on overlay
menuOverlay.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    navLinksContainer.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
});

// Handle window resize (if user resizes from mobile to desktop)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburgerMenu.classList.remove('active');
        navLinksContainer.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Back to Top button functionality (add this if it's missing in the HTML)
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
