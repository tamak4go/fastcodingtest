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
        const category = btn.getAttribute('data-category');

        tabBtns.forEach(b => {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });

        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');

        propCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.style.animation = 'none';
            void card.offsetWidth; // Trigger reflow for clean re-animation
            card.style.animation = 'fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards';
          } else {
            card.style.display = 'none';
            card.style.animation = 'none';
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
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Scroll spy for navigation links
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

    // Floating Back to Top visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }
  }, { passive: true });

  /* =========================================================================
     7. FLOATING BACK TO TOP BUTTON CLICK
     ========================================================================= */
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* =========================================================================
     8. TODAY SELLS PROPERTIES STEPPER
     ========================================================================= */
  const stepLabels = document.querySelectorAll('.today-sells__steps .step-label');
  const numSteps = document.querySelectorAll('.today-sells__line-num .num-step');
  const stepperBar = document.querySelector('.today-sells__line-bar');
  const imgLarge = document.getElementById('sells-img-large');
  const imgSmall1 = document.getElementById('sells-img-small-1');
  const imgSmall2 = document.getElementById('sells-img-small-2');

  const houseData = {
    '1': {
      large: { src: './images/sells-large.jpg', alt: 'Spacious modern architectural estate' },
      small1: { src: './images/sells-small-1.jpg', alt: 'Living room interior' },
      small2: { src: './images/sells-small-2.jpg', alt: 'Kitchen and dining area' }
    },
    '2': {
      large: { src: './images/hero-house.jpg', alt: 'Luxury contemporary villa with swimming pool' },
      small1: { src: './images/prop-2.jpg', alt: 'Bright modern architecture exterior' },
      small2: { src: './images/prop-3.jpg', alt: 'Villa poolside lounge at twilight' }
    },
    '3': {
      large: { src: './images/contact-house.jpg', alt: 'Modern luxury architectural residence' },
      small1: { src: './images/dream-space.jpg', alt: 'Architectural patio and landscape design' },
      small2: { src: './images/prop-1.jpg', alt: 'Elegant residential estate front view' }
    }
  };

  const progressMap = { '1': '35%', '2': '68%', '3': '100%' };

  function switchHouse(step) {
    if (!houseData[step]) return;

    stepLabels.forEach(b => {
      b.classList.toggle('is-active', b.getAttribute('data-step') === step);
    });

    numSteps.forEach(n => {
      n.classList.toggle('is-active', n.getAttribute('data-step') === step);
    });

    if (stepperBar && progressMap[step]) {
      stepperBar.style.setProperty('--stepper-progress', progressMap[step]);
    }

    const imgs = [imgLarge, imgSmall1, imgSmall2].filter(Boolean);
    imgs.forEach(img => {
      img.style.opacity = '0.3';
      img.style.transform = 'scale(0.97)';
    });

    setTimeout(() => {
      const data = houseData[step];
      if (imgLarge) {
        imgLarge.src = data.large.src;
        imgLarge.alt = data.large.alt;
      }
      if (imgSmall1) {
        imgSmall1.src = data.small1.src;
        imgSmall1.alt = data.small1.alt;
      }
      if (imgSmall2) {
        imgSmall2.src = data.small2.src;
        imgSmall2.alt = data.small2.alt;
      }
      imgs.forEach(img => {
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
      });
    }, 150);
  }

  if (stepLabels.length) {
    stepLabels.forEach(stepBtn => {
      stepBtn.addEventListener('click', () => {
        const step = stepBtn.getAttribute('data-step') || '1';
        switchHouse(step);
      });
    });
  }

  if (numSteps.length) {
    numSteps.forEach(numBtn => {
      numBtn.addEventListener('click', () => {
        const step = numBtn.getAttribute('data-step') || '1';
        switchHouse(step);
      });
    });
  }
});

