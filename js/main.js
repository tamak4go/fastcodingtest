/**
 * Reanty Real Estate Landing Page - Main JavaScript (Vanilla JS)
 * Fastcoding Standard - Micro-interactions & Mobile UX
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* =========================================================================
     1. MOBILE NAVIGATION HAMBURGER TOGGLE
     ========================================================================= */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.main-nav__link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navToggle.classList.toggle('is-active');
      navMenu.classList.toggle('is-open');
      document.body.classList.toggle('menu-open');
    });

    // Close mobile menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('is-active');
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.classList.remove('is-active');
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      }
    });
  }

  /* =========================================================================
     2. HERO THUMBNAIL SWITCHER
     ========================================================================= */
  const heroThumbs = document.querySelectorAll('.hero__thumb');
  const heroMainImg = document.querySelector('.hero__main-image');

  const heroImages = {
    '1': './images/hero-house.jpg',
    '2': './images/prop-2.jpg',
    '3': './images/prop-3.jpg'
  };

  if (heroThumbs.length && heroMainImg) {
    heroThumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        heroThumbs.forEach(t => t.classList.remove('is-active'));
        thumb.classList.add('is-active');

        const thumbId = thumb.getAttribute('data-thumb');
        if (heroImages[thumbId]) {
          heroMainImg.style.opacity = '0.4';
          setTimeout(() => {
            heroMainImg.src = heroImages[thumbId];
            heroMainImg.style.opacity = '1';
          }, 150);
        }
      });
    });
  }

  /* =========================================================================
     3. FEATURED PROPERTY CATEGORY TABS
     ========================================================================= */
  const tabBtns = document.querySelectorAll('.featured-prop__tabs .tab-btn');
  const propCards = document.querySelectorAll('.featured-prop__grid .prop-card');

  if (tabBtns.length && propCards.length) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });

        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');

        const category = btn.getAttribute('data-category');

        propCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.35s ease forwards';
          } else {
            // Highlight or filter based on category
            card.style.display = 'block';
            card.style.opacity = '0.9';
          }
        });
      });
    });
  }

  /* =========================================================================
     4. TESTIMONIALS SLIDER INTERACTION
     ========================================================================= */
  const testiPrev = document.getElementById('testi-prev');
  const testiNext = document.getElementById('testi-next');
  const testiQuote = document.querySelector('.testimonial-card__quote');
  const testiName = document.querySelector('.testimonial-card__name');
  const testiRole = document.querySelector('.testimonial-card__role');
  const testiImg = document.querySelector('.testimonial-card__img');

  const testimonials = [
    {
      quote: 'We make sure you have a fine distance with the sickness. We make you never lose hope. We make sure you have with the sickness.',
      name: 'Yunus Seyhan',
      role: 'Postgraduate Student',
      img: './images/testimonial-user.jpg'
    },
    {
      quote: 'Renting helped me find my dream apartment within 3 days. The process was completely seamless and transparent!',
      name: 'Sarah Jenkins',
      role: 'Marketing Director',
      img: './images/testimonial-user.jpg'
    }
  ];

  let currentTestiIndex = 0;

  function updateTestimonial(index) {
    if (!testiQuote || !testiName || !testiRole || !testiImg) return;
    const item = testimonials[index];
    testiQuote.style.opacity = '0';
    setTimeout(() => {
      testiQuote.textContent = item.quote;
      testiName.textContent = item.name;
      testiRole.textContent = item.role;
      testiImg.src = item.img;
      testiQuote.style.opacity = '1';
    }, 150);
  }

  if (testiPrev && testiNext) {
    testiPrev.addEventListener('click', () => {
      currentTestiIndex = (currentTestiIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(currentTestiIndex);
    });

    testiNext.addEventListener('click', () => {
      currentTestiIndex = (currentTestiIndex + 1) % testimonials.length;
      updateTestimonial(currentTestiIndex);
    });
  }

  /* =========================================================================
     5. FORM SUBMISSION FEEDBACK
     ========================================================================= */
  const contactForm = document.getElementById('main-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = 'Message Sent Successfully!';
        btn.style.backgroundColor = '#10B981';
        contactForm.reset();

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.backgroundColor = '';
          btn.disabled = false;
        }, 3000);
      }, 800);
    });
  }

  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = newsletterForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Subscribed!';
      btn.style.backgroundColor = '#10B981';
      newsletterForm.reset();

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = '';
      }, 2500);
    });
  }

  /* =========================================================================
     6. ACTIVE LINK ON SCROLL (SPY)
     ========================================================================= */
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.main-nav__link[href*="${sectionId}"]`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add('is-active');
        } else {
          targetNavLink.classList.remove('is-active');
        }
      }
    });
  });
});
