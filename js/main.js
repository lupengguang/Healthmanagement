/* ═══════════════════════════════════════════════════════════
   C-ON FITNESS — interactions
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const hasGSAP = typeof window.gsap !== 'undefined';
  if (hasGSAP && typeof window.ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ─────────────────────────────────────────────
     1. PRELOADER
  ───────────────────────────────────────────── */
  const preloader = document.getElementById('preloader');
  const preBar = document.querySelector('.preloader-bar i');
  const preCount = document.querySelector('.preloader-count');
  const preLetters = document.querySelectorAll('.preloader-logo span');
  let preloaderDone = false;

  function finishPreloader() {
    if (preloaderDone) return;
    preloaderDone = true;
    preloader.style.transition = 'transform .85s cubic-bezier(.76,0,.24,1)';
    preloader.style.transform = 'translateY(-101%)';
    setTimeout(() => { preloader.style.display = 'none'; }, 900);
    heroIntro();
  }

  function runPreloader() {
    if (hasGSAP) {
      gsap.to(preLetters, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.09 });
    } else {
      preLetters.forEach(s => { s.style.transform = 'translateY(0)'; s.style.opacity = '1'; });
    }
    const t0 = performance.now(), DUR = 1500;
    (function tick(now) {
      const p = Math.min((now - t0) / DUR, 1);
      const e = 1 - Math.pow(1 - p, 3);
      const pct = Math.round(e * 100);
      preCount.textContent = pct + '%';
      preBar.style.width = pct + '%';
      if (p < 1) requestAnimationFrame(tick);
      else setTimeout(finishPreloader, 250);
    })(t0);
  }

  /* hero intro (plays after preloader) */
  const heroWords = document.querySelectorAll('.hero-title .word');
  const heroFades = ['.hero-kicker', '.hero-text', '.hero-actions', '.hero-socials', '#heroBadge', '.hero-media'];

  if (hasGSAP && !reduceMotion) {
    gsap.set(heroWords, { yPercent: 112 });
    gsap.set(heroFades, { opacity: 0, y: 34 });
    gsap.set('.hero-media', { opacity: 0, y: 0, scale: 1.06 });
  }

  function heroIntro() {
    if (!hasGSAP || reduceMotion) return;
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.to(heroWords, { yPercent: 0, duration: 1.15, stagger: 0.13 })
      .to('.hero-media', { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out' }, 0.1)
      .to('.hero-kicker', { opacity: 1, y: 0, duration: 0.8 }, 0.35)
      .to('.hero-text', { opacity: 1, y: 0, duration: 0.8 }, 0.5)
      .to('.hero-actions', { opacity: 1, y: 0, duration: 0.8 }, 0.62)
      .to('.hero-socials', { opacity: 1, y: 0, duration: 0.8 }, 0.72)
      .to('#heroBadge', { opacity: 1, y: 0, duration: 0.8 }, 0.8);
  }

  /* safety: never trap the user behind the preloader */
  const heroImg = document.getElementById('heroImg');
  const imgReady = heroImg && heroImg.complete
    ? Promise.resolve()
    : new Promise(res => { if (heroImg) { heroImg.onload = res; heroImg.onerror = res; } else res(); });
  Promise.race([imgReady, new Promise(r => setTimeout(r, 2600))]).then(() => runPreloader());
  setTimeout(finishPreloader, 5000); // absolute fallback

  /* ─────────────────────────────────────────────
     2. CUSTOM CURSOR
  ───────────────────────────────────────────── */
  const fine = window.matchMedia('(pointer:fine)').matches;
  if (fine) document.documentElement.classList.add('fine');
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (fine) {
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; });
    (function loop() {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
      dot.style.transform = `translate(${mx}px,${my}px)`;
      ring.style.transform = `translate(${rx}px,${ry}px)`;
      requestAnimationFrame(loop);
    })();
    document.addEventListener('mouseover', e => {
      if (e.target.closest('[data-cursor],a,button')) ring.classList.add('is-hover');
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest('[data-cursor],a,button')) ring.classList.remove('is-hover');
    });
    addEventListener('pointerdown', () => ring.classList.add('is-down'));
    addEventListener('pointerup', () => ring.classList.remove('is-down'));
  }

  /* ─────────────────────────────────────────────
     3. NAVBAR / MENU / SCROLLSPY / PROGRESS
  ───────────────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  const progress = document.getElementById('scrollProgress');
  if (progress && !progress.firstElementChild) progress.appendChild(document.createElement('i'));
  const progressFill = progress ? progress.firstElementChild : null;
  const backtop = document.getElementById('backtop');

  function onScroll() {
    const y = scrollY;
    navbar.classList.toggle('is-scrolled', y > 40);
    backtop.classList.toggle('is-show', y > 600);
    if (progressFill) {
      const max = document.documentElement.scrollHeight - innerHeight;
      progressFill.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    }
  }
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backtop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  const burger = document.getElementById('burger');
  const mMenu = document.getElementById('mMenu');
  function toggleMenu(open) {
    burger.classList.toggle('is-open', open);
    mMenu.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', () => toggleMenu(!mMenu.classList.contains('is-open')));
  mMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

  /* scrollspy */
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        navLinks.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + en.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  ['home', 'about', 'services', 'programs', 'contact'].forEach(id => {
    const el = document.getElementById(id);
    if (el) spy.observe(el);
  });

  /* ─────────────────────────────────────────────
     4. ACCORDION
  ───────────────────────────────────────────── */
  document.querySelectorAll('#accordion .acc-item').forEach(item => {
    item.querySelector('.acc-head').addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('#accordion .acc-item').forEach(i => i.classList.remove('is-open'));
      if (!isOpen) item.classList.add('is-open');
    });
  });

  /* ─────────────────────────────────────────────
     5. COUNTERS (independent of GSAP)
  ───────────────────────────────────────────── */
  const counterIO = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      counterIO.unobserve(en.target);
      const el = en.target, target = +el.dataset.count, t0 = performance.now(), DUR = 1800;
      (function tick(now) {
        const p = Math.min((now - t0) / DUR, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.count').forEach(el => counterIO.observe(el));

  /* ─────────────────────────────────────────────
     6. TILT CARDS
  ───────────────────────────────────────────── */
  if (fine && !reduceMotion) {
    document.querySelectorAll('[data-tilt]').forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        if (hasGSAP) gsap.to(card, { rotateY: px * 7, rotateX: -py * 7, transformPerspective: 950, duration: 0.5, ease: 'power2.out' });
        else card.style.transform = `perspective(950px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg)`;
      });
      card.addEventListener('pointerleave', () => {
        if (hasGSAP) gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.9, ease: 'elastic.out(1,.45)' });
        else card.style.transform = '';
      });
    });

    /* magnetic buttons */
    document.querySelectorAll('[data-magnetic]').forEach(btn => {
      btn.addEventListener('pointermove', e => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.28;
        const y = (e.clientY - r.top - r.height / 2) * 0.38;
        if (hasGSAP) gsap.to(btn, { x, y, duration: 0.4, ease: 'power2.out' });
        else btn.style.transform = `translate(${x}px,${y}px)`;
      });
      btn.addEventListener('pointerleave', () => {
        if (hasGSAP) gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1,.45)' });
        else btn.style.transform = '';
      });
    });
  }

  /* ─────────────────────────────────────────────
     7. GSAP SCROLL REVEALS & PARALLAX
  ───────────────────────────────────────────── */
  if (hasGSAP && window.ScrollTrigger && !reduceMotion) {
    gsap.set('[data-reveal]', { opacity: 0, y: 52 });
    ScrollTrigger.batch('[data-reveal]', {
      start: 'top 88%',
      once: true,
      onEnter: els => gsap.to(els, { opacity: 1, y: 0, duration: 1.05, ease: 'power3.out', stagger: 0.12 })
    });

    document.querySelectorAll('[data-reveal-group]').forEach(group => {
      const kids = [...group.children];
      gsap.set(kids, { opacity: 0, y: 64 });
      ScrollTrigger.batch(kids, {
        start: 'top 86%',
        once: true,
        onEnter: els => gsap.to(els, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', stagger: 0.16 })
      });
    });

    /* image parallax */
    document.querySelectorAll('[data-parallax]').forEach(img => {
      gsap.fromTo(img, { yPercent: -7, scale: 1.16 }, {
        yPercent: 7, scale: 1.16, ease: 'none',
        scrollTrigger: { trigger: img.closest('section') || img, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });

    /* orbs drift */
    document.querySelectorAll('.orb').forEach((orb, i) => {
      gsap.to(orb, {
        yPercent: i % 2 ? -26 : 22, xPercent: i % 2 ? 10 : -12, ease: 'none',
        scrollTrigger: { trigger: orb.closest('section') || document.body, start: 'top bottom', end: 'bottom top', scrub: 1.4 }
      });
    });

    /* why-center pop-in */
    gsap.from('#whyCenter', {
      scale: 0.55, opacity: 0, duration: 1.3, ease: 'power3.out',
      scrollTrigger: { trigger: '#whyStage', start: 'top 72%', once: true }
    });

    /* stats slide-up */
    gsap.from('#stats', {
      y: 70, opacity: 0, duration: 1.1, ease: 'power3.out',
      scrollTrigger: { trigger: '#stats', start: 'top 92%', once: true }
    });
  }

  /* hero mouse parallax */
  if (fine && hasGSAP && !reduceMotion) {
    const media = document.getElementById('heroMedia');
    const orb1 = document.getElementById('heroOrb1');
    const xM = gsap.quickTo(media, 'x', { duration: 0.9, ease: 'power3.out' });
    const yM = gsap.quickTo(media, 'y', { duration: 0.9, ease: 'power3.out' });
    const xO = gsap.quickTo(orb1, 'x', { duration: 1.4, ease: 'power3.out' });
    const yO = gsap.quickTo(orb1, 'y', { duration: 1.4, ease: 'power3.out' });
    addEventListener('pointermove', e => {
      const nx = e.clientX / innerWidth - 0.5;
      const ny = e.clientY / innerHeight - 0.5;
      xM(nx * -26); yM(ny * -16);
      xO(nx * 44); yO(ny * 34);
    });
  }

  /* ─────────────────────────────────────────────
     8. INTERACTIVE CANVAS WORLD MAP
  ───────────────────────────────────────────── */
  (function initMap() {
    const canvas = document.getElementById('worldMap');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const tip = document.getElementById('mapTip');
    const wrap = canvas.parentElement;

    /* simplified equirectangular land grid — row: [colStart, colEnd] inclusive (72 x 30 world cells) */
    const LAND = {
      1: [[15, 21], [26, 30]],
      2: [[12, 22], [25, 31], [39, 39], [59, 60], [65, 65]],
      3: [[3, 22], [25, 32], [38, 71]],
      4: [[3, 24], [26, 28], [31, 31], [37, 71]],
      5: [[5, 24], [34, 35], [37, 68]],
      6: [[10, 24], [34, 64]],
      7: [[11, 23], [35, 62], [64, 64]],
      8: [[11, 22], [34, 45], [47, 64]],
      9: [[11, 21], [34, 48], [49, 60], [62, 62]],
      10: [[12, 20], [34, 53], [60, 60]],
      11: [[13, 18], [32, 53], [54, 57]],
      12: [[16, 19], [32, 45], [50, 52], [54, 57], [60, 60]],
      13: [[17, 20], [33, 45], [52, 52], [56, 58], [60, 61]],
      14: [[20, 26], [34, 45], [55, 61], [62, 64]],
      15: [[20, 27], [38, 44], [57, 59], [62, 65]],
      16: [[20, 29], [38, 44], [60, 65]],
      17: [[21, 28], [38, 44], [45, 45], [62, 64]],
      18: [[22, 28], [38, 43], [45, 45], [58, 66]],
      19: [[23, 27], [39, 42], [58, 66]],
      20: [[24, 26], [39, 42], [59, 65]],
      21: [[24, 26], [64, 66], [70, 71]],
      22: [[24, 25], [70, 70]],
      23: [[24, 24]]
    };

    const CITIES = [
      { n: 'New York', lat: 40.7, lon: -74.0 }, { n: 'Los Angeles', lat: 34.0, lon: -118.2 },
      { n: 'Vancouver', lat: 49.3, lon: -123.1 }, { n: 'Toronto', lat: 43.7, lon: -79.4 },
      { n: 'Mexico City', lat: 19.4, lon: -99.1 }, { n: 'São Paulo', lat: -23.5, lon: -46.6 },
      { n: 'Buenos Aires', lat: -34.6, lon: -58.4 }, { n: 'Santiago', lat: -33.4, lon: -70.7 },
      { n: 'Lima', lat: -12.0, lon: -77.0 }, { n: 'London', lat: 51.5, lon: -0.1 },
      { n: 'Paris', lat: 48.9, lon: 2.35 }, { n: 'Madrid', lat: 40.4, lon: -3.7 },
      { n: 'Berlin', lat: 52.5, lon: 13.4 }, { n: 'Milan', lat: 45.5, lon: 9.2 },
      { n: 'Moscow', lat: 55.8, lon: 37.6 }, { n: 'Istanbul', lat: 41.0, lon: 29.0 },
      { n: 'Cairo', lat: 30.0, lon: 31.2 }, { n: 'Dubai', lat: 25.2, lon: 55.3 },
      { n: 'Riyadh', lat: 24.7, lon: 46.7 }, { n: 'Lagos', lat: 6.5, lon: 3.4 },
      { n: 'Nairobi', lat: -1.3, lon: 36.8 }, { n: 'Johannesburg', lat: -26.2, lon: 28.0 },
      { n: 'Mumbai', lat: 19.1, lon: 72.9 }, { n: 'Delhi', lat: 28.6, lon: 77.2 },
      { n: 'Bangkok', lat: 13.8, lon: 100.5 }, { n: 'Singapore', lat: 1.35, lon: 103.8 },
      { n: 'Jakarta', lat: -6.2, lon: 106.8 }, { n: 'Hong Kong', lat: 22.3, lon: 114.2 },
      { n: 'Shanghai', lat: 31.2, lon: 121.5 }, { n: 'Beijing', lat: 39.9, lon: 116.4 },
      { n: 'Seoul', lat: 37.6, lon: 127.0 }, { n: 'Tokyo', lat: 35.7, lon: 139.7 },
      { n: 'Sydney', lat: -33.9, lon: 151.2 }, { n: 'Melbourne', lat: -37.8, lon: 145.0 },
      { n: 'Auckland', lat: -36.8, lon: 174.8 }
    ];

    const TOP_LAT = 90, BOTTOM_LAT = -57;
    let W = 0, H = 0, dpr = 1, dots = [], cityPts = [];
    let mouse = { x: -9999, y: -9999 }, running = false, rafId = null;

    function project(lat, lon) {
      return { x: (lon + 180) / 360 * W, y: (TOP_LAT - lat) / (TOP_LAT - BOTTOM_LAT) * H };
    }

    function build() {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = rect.width; H = rect.height;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      Object.keys(LAND).forEach(r => {
        LAND[r].forEach(([c1, c2]) => {
          for (let c = c1; c <= c2; c++) {
            const lat = 90 - (+r + 0.5) * 6;
            const lon = -180 + (c + 0.5) * 5;
            dots.push(project(lat, lon));
          }
        });
      });
      cityPts = CITIES.map(c => ({ ...project(c.lat, c.lon), n: c.n }));
    }

    function draw(t) {
      ctx.clearRect(0, 0, W, H);
      const u = W / 1000; // scale unit
      /* land dots */
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const dx = d.x - mouse.x, dy = d.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let a = 0.2, rr = 2 * u, hot = 0;
        if (dist < 120 * u + 30) {
          hot = Math.max(0, 1 - dist / (120 * u + 30));
          a = 0.2 + hot * 0.6; rr = 2 * u + hot * 1.3 * u;
        }
        ctx.beginPath();
        ctx.fillStyle = hot > 0.02
          ? `rgba(${200 + 55 * hot | 0},${160 + 20 * hot | 0},${120 - 40 * hot | 0},${a})`
          : `rgba(196,200,210,${a})`;
        ctx.arc(d.x, d.y, rr, 0, 6.2832);
        ctx.fill();
      }
      /* city pulses */
      const time = t * 0.001;
      for (let i = 0; i < cityPts.length; i++) {
        const c = cityPts[i];
        const p = (time * 0.55 + i * 0.37) % 1;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255,107,43,${(1 - p) * 0.55})`;
        ctx.lineWidth = 1.4 * u;
        ctx.arc(c.x, c.y, (3 + p * 15) * u, 0, 6.2832);
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = '#ff8a4d';
        ctx.arc(c.x, c.y, 2.8 * u, 0, 6.2832);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,255,255,.9)';
        ctx.arc(c.x, c.y, 1.1 * u, 0, 6.2832);
        ctx.fill();
      }
      /* hovered city highlight */
      const hov = pickCity();
      if (hov) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255,255,255,.85)';
        ctx.lineWidth = 1.2 * u;
        ctx.arc(hov.x, hov.y, 7 * u, 0, 6.2832);
        ctx.stroke();
      }
      return hov;
    }

    function pickCity() {
      let best = null, bd = 26 * 26;
      for (const c of cityPts) {
        const dx = c.x - mouse.x, dy = c.y - mouse.y, d2 = dx * dx + dy * dy;
        if (d2 < bd) { bd = d2; best = c; }
      }
      return best;
    }

    function loop(t) {
      if (!running) return;
      draw(t);
      rafId = requestAnimationFrame(loop);
    }

    function start() { if (!running) { running = true; rafId = requestAnimationFrame(loop); } }
    function stop() { running = false; if (rafId) cancelAnimationFrame(rafId); }

    function setMouse(e) {
      const r = canvas.getBoundingClientRect();
      if (!r.width || !r.height) return;
      mouse.x = (e.clientX - r.left) * (W / r.width);
      mouse.y = (e.clientY - r.top) * (H / r.height);
      updateTip();
    }
    function updateTip() {
      const hov = pickCity();
      if (hov) {
        const crect = canvas.getBoundingClientRect();
        const wrect = wrap.getBoundingClientRect();
        tip.style.left = (crect.left - wrect.left + hov.x) + 'px';
        tip.style.top = (crect.top - wrect.top + hov.y) + 'px';
        tip.classList.toggle('flip-below', hov.y < 80);
        tip.innerHTML = '<b>C-ON</b> ' + hov.n;
        tip.classList.add('is-show');
      } else {
        tip.classList.remove('is-show');
      }
      return hov;
    }
    canvas.addEventListener('pointermove', setMouse);
    canvas.addEventListener('mousemove', setMouse);
    canvas.addEventListener('pointerleave', () => { mouse.x = -9999; mouse.y = -9999; tip.classList.remove('is-show'); });
    canvas.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; tip.classList.remove('is-show'); });

    let rsTimer;
    addEventListener('resize', () => { clearTimeout(rsTimer); rsTimer = setTimeout(build, 180); });

    build();
    start();
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(es => es.forEach(en => en.isIntersecting ? start() : stop()), { threshold: 0.05 }).observe(canvas);
    }
    if (reduceMotion) { draw(0); stop(); }
  })();

})();
