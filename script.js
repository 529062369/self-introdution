// JavaScript for Personal Resume Website
// Author: Zhang San - AI Agent Developer

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLoader();
    initNavigation();
    initAnimations();
    initSkillBars();
    initSmoothScrolling();
    initContactForm();
    
    console.log('Personal resume website loaded successfully! 🚀');
});

// Loading Animation
function initLoader() {
    const loader = document.querySelector('.loader-wrapper');
    
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000);
    });
}

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Navigation scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Active navigation link highlighting
    updateActiveNavLink();
    window.addEventListener('scroll', updateActiveNavLink);
    
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
            
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }
}

// Animation on scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Special animation for stats counter
                if (entry.target.classList.contains('hero-stats')) {
                    animateCounters();
                }
                
                // Special animation for skill bars
                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);
    
    // Add animation classes and observe elements
    const animateElements = document.querySelectorAll([
        '.hero-content',
        '.hero-visual',
        '.about-info',
        '.about-timeline',
        '.skill-category',
        '.project-card',
        '.experience-item',
        '.influence-item',
        '.contact-item'
    ].join(','));
    
    animateElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Counter animation for hero stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.innerText;
        const isPercentage = target.includes('%');
        const numericValue = parseInt(target.replace(/[^\d]/g, ''));
        
        animateValue(counter, 0, numericValue, 2000, isPercentage);
    });
}

function animateValue(element, start, end, duration, isPercentage) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);
        
        if (isPercentage) {
            element.innerHTML = currentValue + '%';
        } else if (end >= 100) {
            element.innerHTML = currentValue + '+';
        } else {
            element.innerHTML = currentValue;
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Skill bars animation
function initSkillBars() {
    // This will be triggered by the intersection observer
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        }, index * 200);
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact form functionality (placeholder)
function initContactForm() {
    // Add contact form handling if needed
    const contactLinks = document.querySelectorAll('[href^="mailto:"]');
    
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add analytics or other tracking here if needed
            console.log('Contact initiated via email');
        });
    });
    
    // Handle phone links
    const phoneLinks = document.querySelectorAll('[href^="tel:"]');
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add analytics or other tracking here if needed
            console.log('Contact initiated via phone');
        });
    });
}

// Add hover effects for project cards
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        });
    });
});

// Floating animation for hero icons
function initFloatingIcons() {
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    floatingIcons.forEach((icon, index) => {
        // Add random float animation
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;
        
        icon.style.animationDelay = `${randomDelay}s`;
        icon.style.animationDuration = `${randomDuration}s`;
    });
}

// Call floating icons animation
initFloatingIcons();

// Add typing effect for hero title (optional enhancement)
function initTypingEffect() {
    const titleName = document.querySelector('.title-name');
    if (titleName && titleName.textContent) {
        const text = titleName.textContent;
        titleName.textContent = '';
        
        let index = 0;
        const typeInterval = setInterval(() => {
            titleName.textContent += text[index];
            index++;
            
            if (index >= text.length) {
                clearInterval(typeInterval);
                titleName.style.borderRight = 'none'; // Remove cursor
            }
        }, 150);
        
        // Add blinking cursor effect
        titleName.style.borderRight = '3px solid #ffd700';
        titleName.style.animation = 'blink 1s infinite';
    }
}

// CSS for typing cursor blink
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0%, 50% { border-color: #ffd700; }
        51%, 100% { border-color: transparent; }
    }
`;
document.head.appendChild(style);

// Initialize typing effect after a delay
setTimeout(initTypingEffect, 1500);

// Parallax effect for hero section
function initParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (heroSection && scrolled < heroSection.offsetHeight) {
            // Create parallax effect
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroSection.style.opacity = 1 - scrolled / heroSection.offsetHeight;
        }
    });
}

initParallax();

// Add progress indicator
function initProgressIndicator() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
    
    // Add styles
    const progressStyle = document.createElement('style');
    progressStyle.textContent = `
        .scroll-progress {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            height: 3px;
            background: rgba(102, 126, 234, 0.1);
            z-index: 999;
        }
        
        .scroll-progress-bar {
            height: 100%;
            background: linear-gradient(45deg, #667eea, #764ba2);
            width: 0%;
            transition: width 0.1s ease;
        }
    `;
    document.head.appendChild(progressStyle);
    document.body.appendChild(progressBar);
    
    // Update progress on scroll
    const progressBarInner = progressBar.querySelector('.scroll-progress-bar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollTop / documentHeight) * 100;
        
        progressBarInner.style.width = scrollPercentage + '%';
    });
}

initProgressIndicator();

// Lazy loading for better performance
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

initLazyLoading();

// Add accessibility improvements
function initAccessibility() {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.textContent = '跳转到主要内容';
    skipLink.className = 'skip-link';
    
    const skipStyle = document.createElement('style');
    skipStyle.textContent = `
        .skip-link {
            position: absolute;
            top: -40px;
            left: 6px;
            background: #000;
            color: #fff;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 10000;
            transition: top 0.2s;
        }
        
        .skip-link:focus {
            top: 6px;
        }
    `;
    document.head.appendChild(skipStyle);
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add ARIA labels and roles where missing
    const navbar = document.querySelector('.navbar');
    if (navbar && !navbar.getAttribute('role')) {
        navbar.setAttribute('role', 'navigation');
        navbar.setAttribute('aria-label', '主导航菜单');
    }
    
    // Add focus management for mobile menu
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = this.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
            
            if (isExpanded) {
                // Focus first menu item when menu opens
                const firstMenuItem = navMenu.querySelector('.nav-link');
                if (firstMenuItem) {
                    setTimeout(() => firstMenuItem.focus(), 100);
                }
            }
        });
    }
}

initAccessibility();

// Error handling and fallbacks
window.addEventListener('error', function(e) {
    console.error('JavaScript error occurred:', e.error);
    // Add fallback functionality if needed
});

// Performance monitoring (optional)
if ('PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver(function(list) {
        const entries = list.getEntries();
        entries.forEach(entry => {
            if (entry.entryType === 'paint') {
                console.log(`${entry.name}: ${entry.startTime}ms`);
            }
        });
    });
    
    perfObserver.observe({ entryTypes: ['paint'] });
}

// Add service worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

console.log('🎉 Zhang San\'s Personal Resume Website - All systems operational!');
console.log('📧 Contact: zhangsan@email.com');
console.log('🚀 Ready to build amazing AI Agent applications!');

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initNavigation,
        initAnimations,
        animateCounters,
        animateSkillBars
    };
}