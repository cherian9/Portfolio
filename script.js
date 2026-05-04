// ===== Typewriter Effect for Hero Title =====
function typewriterEffect(element, speed = 100) {
    const text = element.textContent;
    element.textContent = '';
    element.style.minHeight = '60px';
    
    let i = 0;
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    // Start typewriter effect after a small delay
    setTimeout(type, 300);
}

// Initialize typewriter effect on page load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        typewriterEffect(heroTitle, 80);
    }
});

// ===== Mobile Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Navbar Background on Scroll =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ===== Smooth Scrolling =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation to cards and elements
document.querySelectorAll('.project-card, .skill-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
            item.style.color = 'var(--primary-color)';
        } else {
            item.style.color = 'var(--text-dark)';
        }
    });
});

// ===== Section Fade-In Animation on Scroll =====
const sectionObserverOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add fade-in animation to section
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
            
            // Trigger animation with slight delay
            setTimeout(() => {
                entry.target.classList.add('fade-in-up');
            }, 50);
            
            sectionObserver.unobserve(entry.target);
        }
    });
}, sectionObserverOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    sectionObserver.observe(section);
});

// ===== Staggered Card Animation =====
const cardObserverOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card, .skill-item');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50 + (index * 100));
            });
            cardObserver.unobserve(entry.target);
        }
    });
}, cardObserverOptions);

// Observe grid containers
document.querySelectorAll('.projects-grid, .skills-grid').forEach(grid => {
    cardObserver.observe(grid);
});

// ===== Text Content Animation =====
const textObserverOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const textObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Animate about text paragraphs
            const aboutTexts = entry.target.querySelectorAll('.about-text p');
            aboutTexts.forEach((text, index) => {
                setTimeout(() => {
                    text.classList.add('animate');
                }, index * 150);
            });
            
            // Animate contact subtitle
            const contactSubtitle = entry.target.querySelector('.contact-subtitle');
            if (contactSubtitle) {
                setTimeout(() => {
                    contactSubtitle.classList.add('animate');
                }, 100);
            }
            
            textObserver.unobserve(entry.target);
        }
    });
}, textObserverOptions);

// Observe about and contact sections
document.querySelectorAll('.about-content, .contact').forEach(el => {
    textObserver.observe(el);
});

// ===== Section Title Animation =====
const titleObserverOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const title = entry.target.querySelector('.section-title');
            if (title && !title.classList.contains('animate')) {
                setTimeout(() => {
                    title.classList.add('animate');
                }, 100);
            }
            titleObserver.unobserve(entry.target);
        }
    });
}, titleObserverOptions);

// Observe all sections for title animation
document.querySelectorAll('section').forEach(section => {
    if (section.id !== 'home') { // Skip hero section
        titleObserver.observe(section);
    }
});

// ===== Utility Function: Debounce =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== Window Resize Handler =====
window.addEventListener('resize', debounce(() => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}, 250));

// ===== Add Page Load Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease-out';

// ===== Keyboard Navigation =====
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===== Add CSS Animation Styles Dynamically =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideInLeft {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(30px);
        }
    }

    .nav-link.active {
        color: var(--primary-color);
    }

    body {
        opacity: 1;
    }
`;
document.head.appendChild(style);
