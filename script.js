// Smooth scroll behavior
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

// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const isFuturistic = body.classList.contains('theme-futuristic');
    
    if (isFuturistic) {
        body.classList.remove('theme-futuristic');
        localStorage.setItem('theme', 'light');
        updateInfinityGradient('light');
    } else {
        body.classList.add('theme-futuristic');
        localStorage.setItem('theme', 'futuristic');
        updateInfinityGradient('futuristic');
    }
}

// Update infinity symbol gradient based on theme
function updateInfinityGradient(theme) {
    const infinityPath = document.querySelector('.infinity-path');
    const infinityDot = document.querySelector('.infinity-dot');
    if (infinityPath) {
        if (theme === 'light') {
            infinityPath.setAttribute('stroke', 'url(#infinityGradientLight)');
            if (infinityDot) infinityDot.setAttribute('fill', '#a855f7');
        } else {
            infinityPath.setAttribute('stroke', 'url(#infinityGradient)');
            if (infinityDot) infinityDot.setAttribute('fill', '#00d9ff');
        }
    }
}

// Load saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.remove('theme-futuristic');
        updateInfinityGradient('light');
    } else if (savedTheme === 'futuristic') {
        document.body.classList.add('theme-futuristic');
        updateInfinityGradient('futuristic');
    }
});

// Navigation scroll effect
const mainNav = document.querySelector('.main-nav');
if (mainNav) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
    });
}

// Problem Intake Form Toggle
function toggleIntakeForm() {
    const intakeSection = document.getElementById('intake-section');
    if (intakeSection) {
        const isVisible = intakeSection.style.display !== 'none';
        intakeSection.style.display = isVisible ? 'none' : 'block';
        if (!isVisible) {
            intakeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

// Problem Intake Form Functionality
document.addEventListener('DOMContentLoaded', () => {
    const problemTextarea = document.getElementById('problem');
    const problemCount = document.getElementById('problem-count');
    const submitBtn = document.getElementById('submit-btn');
    const intakeForm = document.getElementById('problem-intake-form');
    const formWrapper = document.getElementById('intake-form-wrapper');
    const successMessage = document.getElementById('intake-success');

    // Character count and submit button state
    if (problemTextarea && problemCount && submitBtn) {
        problemTextarea.addEventListener('input', () => {
            const length = problemTextarea.value.length;
            problemCount.textContent = length;
            submitBtn.disabled = problemTextarea.value.trim().length === 0;
        });
    }

    // Form submission
    if (intakeForm) {
        intakeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect form data
            const formData = {
                problem: document.getElementById('problem')?.value || '',
                audience: document.getElementById('audience')?.value || '',
                frequency: document.getElementById('frequency')?.value || '',
                impact: document.getElementById('impact')?.value || '',
                name: document.getElementById('submitter-name')?.value || ''
            };
            
            console.log('Problem submitted:', formData);
            // MVP: Log to console. Later: POST to API/Notion
            
            // Show success state
            if (formWrapper && successMessage) {
                formWrapper.style.display = 'none';
                successMessage.style.display = 'block';
            }
        });
    }
});

// Button interactions (placeholder - wire up to actual functionality)
document.querySelectorAll('.btn-secondary, .btn-secondary-light').forEach(button => {
    button.addEventListener('click', function(e) {
        const buttonText = this.textContent.trim();
        
        if (buttonText === "See What We've Built") {
            console.log('Navigating to apps page...');
            // Wire to apps page
        } else if (buttonText === 'Follow the Journey') {
            console.log('Opening newsletter signup...');
            // Wire to newsletter/follow action
        }
    });
});

// App link interaction
document.querySelectorAll('.app-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Opening app details page...');
        // Wire to individual app page
    });
});

// Add subtle parallax effect to hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
    
    // ET-Sphere Intelligence scroll behavior
    const etSphere = document.querySelector('.et-sphere-container');
    if (etSphere) {
        if (scrolled > 200) {
            etSphere.classList.add('scrolled');
        } else {
            etSphere.classList.remove('scrolled');
        }
    }
});

// ET-Sphere Intelligence Interactions
const sphereIntelligence = document.querySelector('.sphere-intelligence');
if (sphereIntelligence) {
    // Click interaction - future "Ask the Lab" functionality
    sphereIntelligence.addEventListener('click', function() {
        console.log('%c🌐 ET-Sphere Intelligence Activated', 'color: #00d9ff; font-size: 16px; font-weight: bold;');
        console.log('%cFuture feature: "Ask the Lab" interface will appear here', 'color: #9d4edd; font-style: italic;');
        
        // Visual feedback
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
    
    // Generate dynamic particles
    const particleField = document.querySelector('.particle-field');
    if (particleField) {
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'dynamic-particle';
            particle.style.cssText = `
                position: absolute;
                width: 3px;
                height: 3px;
                border-radius: 50%;
                background: ${i % 2 === 0 ? '#00d9ff' : '#9d4edd'};
                box-shadow: 0 0 8px currentColor;
                animation: particleOrbit ${6 + i * 2}s linear infinite;
                animation-delay: ${i * 0.5}s;
                opacity: 0.7;
            `;
            particleField.appendChild(particle);
        }
    }
}

// Console message for curious visitors
console.log('%cContinuum Labs', 'font-size: 24px; font-weight: bold; color: #2d3561;');
console.log('%cBuilt across time. Shipped monthly.', 'font-size: 14px; color: #6b7280;');
console.log('%c\nCurious about how this was built?\nWe believe in building in public.\n\nFind us on GitHub or suggest what we should build next.', 'font-size: 12px; color: #9ca3af; line-height: 1.6;');

// Theme Toggle Functionality
function toggleTheme() {
    const body = document.body;
    const isFuturistic = body.classList.contains('theme-futuristic');
    
    if (isFuturistic) {
        body.classList.remove('theme-futuristic');
        body.classList.add('theme-default');
        console.log('%cTheme: Default (Calm & Professional)', 'color: #2d3561; font-weight: bold;');
    } else {
        body.classList.remove('theme-default');
        body.classList.add('theme-futuristic');
        console.log('%cTheme: Futuristic (Barnet-inspired)', 'color: #00d9ff; font-weight: bold;');
    }
    
    // Save preference
    localStorage.setItem('continuum-theme', isFuturistic ? 'default' : 'futuristic');
}

// Load saved theme preference
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('continuum-theme');
    if (savedTheme && savedTheme === 'default') {
        document.body.classList.remove('theme-futuristic');
        document.body.classList.add('theme-default');
    }
});

// Add keyboard shortcut to toggle theme (Ctrl/Cmd + Shift + T)
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        toggleTheme();
    }
});

// Expose toggle function to window for easy access
window.toggleTheme = toggleTheme;

console.log('%c\n💡 Press Ctrl+Shift+T to toggle between themes\n   Or type: toggleTheme() in console', 'color: #9ca3af; font-style: italic;');
