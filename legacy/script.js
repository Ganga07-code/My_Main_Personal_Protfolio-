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
    const id = this.getAttribute("href");
    const target = document.querySelector(id);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});

// ========== GLOBAL ELEMENT SELECTORS ==========
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

let sectionOffsets = [];
function updateSectionOffsets() {
  sectionOffsets = Array.from(document.querySelectorAll('section[id]')).map(section => ({
    id: section.getAttribute('id'),
    top: section.offsetTop
  }));
}

// Initial cache
setTimeout(updateSectionOffsets, 2000); 
window.addEventListener('resize', updateSectionOffsets);

let isScrolling = false;
window.addEventListener('scroll', () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      const currentScroll = window.pageYOffset;

      // Navbar background effect
      if (navbar) {
        if (currentScroll > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
      }

      // Active link highlight - Use cached offsets
      let current = '';
      for (const section of sectionOffsets) {
        if (currentScroll >= (section.top - 150)) {
          current = section.id;
        }
      }

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current) && current !== '') {
          link.classList.add('active');
        }
      });
      isScrolling = false;
    });
    isScrolling = true;
  }
});


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

// ========== SCROLL REVEAL ANIMATION (INTERSECTION OBSERVER) ==========
const revealOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // Reveal only once
    }
  });
}, revealOptions);

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.education-card, .experience-card, .project-card, .skill-item, .certificate-card, .contact-card, section h2');
  revealElements.forEach(el => revealObserver.observe(el));
}

// Initial reveal check
document.addEventListener('DOMContentLoaded', initScrollReveal);

// ========== NAVBAR COLLAPSE ON MOBILE AFTER CLICK ==========
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
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
  // revealOnScroll() call removed - now handled in React
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

// Typewriter effect moved to app.js React component

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

// Heading animations now handled by individual React components or the common reveal logic in app.js

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