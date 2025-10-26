// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 10,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#dc052d'
        },
        shape: {
            type: 'polygon',
            polygon: {
                nb_sides: 4
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: false
            }
        },
        size: {
            value: 10,
            random: true,
            anim: {
                enable: false
            }
        },
        line_linked: {
            enable: false
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'bottom',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: false
            },
            onclick: {
                enable: true,
                mode: 'repulse'
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    retina_detect: true
});

// Text Rotation Effect
class TextRotate {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }

    tick() {
        const i = this.loopNum % this.toRotate.length;
        const fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(() => {
            this.tick();
        }, delta);
    }
}

// Initialize text rotation on page load
window.addEventListener('load', () => {
    const elements = document.getElementsByClassName('txt-rotate');
    for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-rotate');
        const period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TextRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Smooth scrolling for anchor links
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

// Add scroll-based parallax effect to particles
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('#particles-js');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
            ticking = false;
        });
        ticking = true;
    }
});

// Add active state to sections on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});

// Preload animation fix
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Handle resize events
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Refresh AOS on resize
        AOS.refresh();
    }, 250);
});

// Add click effect to neumorphic buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.neumorphism-btn, .social-link');

    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.boxShadow = 'inset 6px 6px 10px var(--shadow-dark), inset -6px -6px 10px var(--shadow-light)';
        });

        button.addEventListener('mouseup', function() {
            this.style.boxShadow = '';
        });

        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
});

// Console message
console.log('%c✨ Neumorphism Portfolio', 'font-size: 20px; font-weight: bold; color: #dc052d;');
console.log('%cDesigned with Neumorphism UI principles', 'font-size: 12px; color: #718096;');
