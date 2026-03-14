/* ============================================
   QUANGZOO'S GUIDE TO LIFE
   Main JavaScript — v2 (clean, no flicker)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Reading Progress Bar ---
  const progressBar = document.querySelector('.reading-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    }, { passive: true });
  }

  // --- Navigation Scroll Effect ---
  const nav = document.querySelector('.site-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // --- Mobile Nav Toggle ---
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.textContent = navLinks.classList.contains('open') ? '\u2715' : '\u2630';
    });
  }

  // --- Gentle Parallax on Chapter Images (only) ---
  const parallaxImages = document.querySelectorAll('.chapter-image img');
  if (parallaxImages.length > 0 && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      parallaxImages.forEach(img => {
        const container = img.parentElement;
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrollPercent = (windowHeight - rect.top) / (windowHeight + rect.height);
          const translateY = (scrollPercent - 0.5) * 40;
          img.style.transform = `translateY(${translateY}px)`;
        }
      });
    }, { passive: true });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Hero Background Parallax (subtle) ---
  const heroBgs = document.querySelectorAll('.hero-bg');
  if (heroBgs.length > 0 && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      heroBgs.forEach(bg => {
        bg.style.transform = `scale(1.05) translateY(${scrollY * 0.2}px)`;
      });
    }, { passive: true });
  }

});
