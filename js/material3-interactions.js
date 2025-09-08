// Material Design 3 Interactions & Animations
class Material3Interactions {
  constructor() {
    this.init();
  }

  init() {
    this.setupRippleEffect();
    this.setupHoverEffects();
    this.setupScrollAnimations();
    this.setupCodeBlockEnhancements();
    this.setupProgressiveEnhancement();
  }

  // Material 3 Ripple Effect
  setupRippleEffect() {
    const buttons = document.querySelectorAll('.md3-button, .md3-fab, .md3-icon-button, .md3-chip');
    
    buttons.forEach(button => {
      button.addEventListener('click', this.createRipple.bind(this));
    });
  }

  createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');

    // Remove existing ripples
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);

    // Remove ripple after animation
    setTimeout(() => {
      circle.remove();
    }, 600);
  }

  // Enhanced hover effects
  setupHoverEffects() {
    const cards = document.querySelectorAll('.md3-card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', (e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
      });
      
      card.addEventListener('mouseleave', (e) => {
        e.currentTarget.style.transform = 'translateY(0)';
      });
    });
  }

  // Scroll-based animations
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.md3-card, .md3-section').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  // Code block enhancements - Keep Prism.js original
  setupCodeBlockEnhancements() {
    // Intentionally minimal - let Prism.js handle everything
    // Just ensure code blocks work with Material 3 theme
    console.log('Prism.js running with original styling');
  }

  // Progressive enhancement features
  setupProgressiveEnhancement() {
    // Add keyboard navigation support
    this.setupKeyboardNavigation();
    
    // Add focus indicators
    this.setupFocusIndicators();
    
    // Add reduced motion support
    this.setupReducedMotion();
    
    // Add high contrast support
    this.setupHighContrast();
  }

  setupKeyboardNavigation() {
    const focusableElements = document.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach(element => {
      element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (element.tagName !== 'A' && element.tagName !== 'BUTTON') {
            e.preventDefault();
            element.click();
          }
        }
      });
    });
  }

  setupFocusIndicators() {
    const style = document.createElement('style');
    style.textContent = `
      .md3-button:focus-visible,
      .md3-icon-button:focus-visible,
      .md3-fab:focus-visible,
      .md3-chip:focus-visible {
        outline: 2px solid var(--md-sys-color-primary);
        outline-offset: 2px;
      }
      
      .md3-navigation-rail-item:focus-visible {
        outline: 2px solid var(--md-sys-color-primary);
        outline-offset: 2px;
        border-radius: var(--md-sys-shape-corner-large);
      }
    `;
    document.head.appendChild(style);
  }

  setupReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    }
  }

  setupHighContrast() {
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
    
    if (prefersHighContrast.matches) {
      document.body.classList.add('high-contrast');
      
      const style = document.createElement('style');
      style.textContent = `
        .high-contrast .md3-card {
          border: 2px solid var(--md-sys-color-outline);
        }
        
        .high-contrast .md3-button {
          border: 2px solid currentColor;
        }
      `;
      document.head.appendChild(style);
    }
  }
}

// Ripple effect styles
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(rippleStyles);

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new Material3Interactions();
});

// Export for use in other scripts
window.Material3Interactions = Material3Interactions;
