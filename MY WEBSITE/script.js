// ========== LOADING SCREEN ANIMATION ==========
window.addEventListener('load', () => {
  const loadingScreen = document.querySelector('.loading-screen');
  const loadingPercentage = document.querySelector('.loading-percentage');
  let percentage = 0;

  // Simulate loading progress
  const loadingInterval = setInterval(() => {
    percentage += Math.random() * 15;
    if (percentage >= 100) {
      percentage = 100;
      clearInterval(loadingInterval);

      // Hide loading screen after completion
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
        // Enable scrolling
        document.body.style.overflow = 'auto';
      }, 500);
    }

    loadingPercentage.textContent = Math.floor(percentage) + '%';
  }, 150);

  // Prevent scrolling during loading
  document.body.style.overflow = 'hidden';
});

// ========== SMOOTH SCROLL FOR NAVBAR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// ========== REVEAL ON SCROLL ANIMATION ==========
const revealElements = document.querySelectorAll(
  '.education-card, .experience-card, .project-card, .skill-item, .certificate-card, .contact-card'
);

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  revealElements.forEach((el, index) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      // Staggered animation delay
      setTimeout(() => {
        el.classList.add('visible');
      }, index * 100);
    }
  });
}

// Run on scroll
window.addEventListener('scroll', revealOnScroll);

// Run once on load
window.addEventListener('load', () => {
  // Delay initial reveal to allow loading screen to finish
  setTimeout(revealOnScroll, 3500);
});

// ========== INTERSECTION OBSERVER FOR BETTER PERFORMANCE ==========
if ('IntersectionObserver' in window) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements that need animation after loading screen
  setTimeout(() => {
    document.querySelectorAll(
      '.education-card, .experience-card, .project-card, .skill-item, .certificate-card, .contact-card'
    ).forEach(el => {
      observer.observe(el);
    });
  }, 3500);
}

// ========== INTERACTIVE PARTICLE NETWORK CANVAS ==========
// Delayed start: Only begins AFTER the loading screen finishes to prevent lag
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    // Re-calculate adaptive count on resize
    adaptCount();
  });

  // Responsive particle count based on screen width
  const MAX_DIST = 140;
  const MOUSE_REPEL = 110;
  let PARTICLE_COUNT = 80;
  function adaptCount() {
    if (W < 480) PARTICLE_COUNT = 25;
    else if (W < 768) PARTICLE_COUNT = 45;
    else PARTICLE_COUNT = 80;
  }
  adaptCount();

  let mouse = { x: -999, y: -999 }; // Start far off screen

  document.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function rand(min, max) { return Math.random() * (max - min) + min; }

  class Particle {
    constructor() { this.init(); }
    init() {
      this.x  = rand(0, W);
      this.y  = rand(0, H);
      this.vx = rand(-0.3, 0.3);
      this.vy = rand(-0.3, 0.3);
      this.r  = rand(1.5, 2.5);
      // Glow color stored as RGB for performance
      const palettes = [[6,182,212], [59,130,246], [139,92,246]];
      this.rgb = palettes[Math.floor(Math.random() * palettes.length)];
    }
    update() {
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_REPEL && dist > 0) {
        const force = (MOUSE_REPEL - dist) / MOUSE_REPEL;
        this.vx += (dx / dist) * force * 0.6;
        this.vy += (dy / dist) * force * 0.6;
      }
      // Velocity dampening + cap
      this.vx *= 0.98;
      this.vy *= 0.98;
      const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (speed > 1.2) { const f = 1.2 / speed; this.vx *= f; this.vy *= f; }

      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0) this.x = W;
      if (this.x > W) this.x = 0;
      if (this.y < 0) this.y = H;
      if (this.y > H) this.y = 0;
    }
    draw() {
      const [r, g, b] = this.rgb;
      // Draw glow: large faint circle first, then sharp dot — avoids expensive shadowBlur
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r * 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},0.06)`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},0.9)`;
      ctx.fill();
    }
  }

  let particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.35;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(6,182,212,${alpha})`;
          ctx.lineWidth = (1 - dist / MAX_DIST) * 1.2;
          ctx.stroke();
        }
      }
    }
  }

  let lastTime = 0;
  function animate(ts) {
    // Cap to ~60fps to prevent overworking low-end devices
    if (ts - lastTime < 16) { requestAnimationFrame(animate); return; }
    lastTime = ts;
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

// *** Start ONLY after loading screen disappears ***
window.addEventListener('load', () => {
  setTimeout(initParticles, 3200);
});

// Cursor glow handled by particle repulsion - no trail needed.

// ========== SMOOTH HOVER EFFECT FOR PROJECT IMAGES ==========
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-10px)';
  });

  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0)';
  });
});

// ========== NAVBAR COLLAPSE ON MOBILE AFTER CLICK ==========
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  });
});

// ========== CONSOLE LOG EASTER EGG ==========
console.log('%c⚡ System Initialized', 'color: #06b6d4; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to Myla Gangadhar\'s Terminal', 'color: #3b82f6; font-size: 16px;');
console.log('%c> Inspecting the source code? Let\'s connect on GitHub.', 'color: #94a3b8; font-size: 14px; font-family: monospace;');

// ========== PERFORMANCE OPTIMIZATION ==========
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function () {
    const context = this, args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Use debounce for scroll events
window.addEventListener('scroll', debounce(() => {
  revealOnScroll();
}));

// ========== CURSOR GLOW (replaces old emoji / binary trail) ==========
// Mouse tracking is now handled inside the particle canvas above.
// No extra cursor effect needed - the particle repulsion is the effect.

// ========== SCROLL TO TOP BUTTON (LION EMBLEM) ==========
const backToTopBtn = document.getElementById('backToTopBtn');

if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ========== DYNAMIC LOADING TEXT MESSAGES ==========
const loadingMessages = [
  'Initializing System...',
  'Loading Cyber Defenses...',
  'Compiling Assets...',
  'Establishing Secure Connection...',
  'Welcome!'
];

let messageIndex = 0;
const loadingTextElement = document.querySelector('.loading-text');

if (loadingTextElement) {
  const messageInterval = setInterval(() => {
    messageIndex++;
    if (messageIndex < loadingMessages.length) {
      loadingTextElement.textContent = loadingMessages[messageIndex];
    } else {
      clearInterval(messageInterval);
    }
  }, 600);
}

// ========== PARALLAX EFFECT ON SCROLL (DISABLED - Using Canvas now) ==========
// Particle canvas handles all background animations.
// No parallax needed.

// ========== INTERACTIVE SKILL CARDS ==========
document.querySelectorAll('.skill-item').forEach(skill => {
  skill.addEventListener('click', function () {
    this.style.animation = 'none';
    setTimeout(() => { this.style.animation = ''; }, 10);
  });
});

// ========== SUCCESS MESSAGE ==========
setTimeout(() => {
  console.log('%c✨ System Booted Successfully!', 'color: #06b6d4; font-size: 14px; font-weight: bold;');
  console.log('%c🛡️ Security Protocols Active!', 'color: #3b82f6; font-size: 14px; font-weight: bold;');
}, 3500);

// ========== MOBILE TOUCH FIX FOR PARTICLE CANVAS ==========
// Particle canvas tracks mouse on desktop. On mobile, track touch.
document.addEventListener('touchmove', (e) => {
  const t = e.touches[0];
  // Fire a synthetic mousemove so the canvas particle system gets coordinates
  const syntheticEvent = new MouseEvent('mousemove', {
    clientX: t.clientX,
    clientY: t.clientY
  });
  document.dispatchEvent(syntheticEvent);
}, { passive: true });

document.addEventListener('touchstart', (e) => {
  const t = e.touches[0];
  const syntheticEvent = new MouseEvent('mousemove', {
    clientX: t.clientX,
    clientY: t.clientY
  });
  document.dispatchEvent(syntheticEvent);
}, { passive: true });

// ========== TYPEWRITER EFFECT ==========
(function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const phrases = [
    'Passionate Front-End Developer',
    'Cyber Security Enthusiast',
    'Problem Solver & Innovator',
    'Open Source Contributor',
    'Building Secure Web Experiences'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let pauseTimer = null;

  function type() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        // Pause at end of phrase
        deleting = true;
        pauseTimer = setTimeout(type, 2000);
        return;
      }
    } else {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    const speed = deleting ? 40 : 80;
    setTimeout(type, speed);
  }

  // Start typewriter after loading screen
  setTimeout(type, 3500);
})();

// ========== SCROLL PROGRESS BAR ==========
(function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
})();

// ========== ANIMATED SECTION HEADINGS ==========
(function initHeadingAnimations() {
  const headings = document.querySelectorAll('section h2');
  if (!headings.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible-heading');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  // Observe headings after loading screen
  setTimeout(() => headings.forEach(h => observer.observe(h)), 3500);
})();

// ========== FLOATING GEOMETRIC SHAPES ==========
(function initGeoShapes() {
  // Create container
  const container = document.createElement('div');
  container.className = 'geo-shapes';
  document.body.appendChild(container);

  const types = ['geo-triangle', 'geo-circle', 'geo-hex'];
  const COUNT = 12;

  function spawnShape() {
    const el = document.createElement('div');
    const type = types[Math.floor(Math.random() * types.length)];
    el.className = 'geo ' + type;

    const duration = 18 + Math.random() * 20; // 18–38s
    const delay    = Math.random() * 15;       // stagger launch
    const left     = Math.random() * 100;      // % from left
    const size     = 20 + Math.random() * 50;  // px

    el.style.cssText = `
      left: ${left}%;
      bottom: -100px;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      width: ${size}px;
      height: ${size}px;
    `;

    container.appendChild(el);

    // Remove and re-spawn when done
    setTimeout(() => {
      el.remove();
      spawnShape();
    }, (duration + delay) * 1000);
  }

  // Spawn shapes after loading screen
  setTimeout(() => {
    for (let i = 0; i < COUNT; i++) spawnShape();
  }, 3500);
})();