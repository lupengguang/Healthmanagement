/* ═══════════════════════════════════════════════════════════
   动衡智助 — interactions
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
    if (preloaderDone || !preloader) return;
    preloaderDone = true;
    preloader.style.transition = 'transform .85s cubic-bezier(.76,0,.24,1)';
    preloader.style.transform = 'translateY(-101%)';
    setTimeout(() => { preloader.style.display = 'none'; }, 900);
    heroIntro();
  }

  function runPreloader() {
    if (!preloader) return;
    if (hasGSAP && preLetters.length) {
      gsap.to(preLetters, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.09 });
    } else {
      preLetters.forEach(s => { s.style.transform = 'translateY(0)'; s.style.opacity = '1'; });
    }
    const t0 = performance.now(), DUR = 1500;
    (function tick(now) {
      const p = Math.min((now - t0) / DUR, 1);
      const e = 1 - Math.pow(1 - p, 3);
      const pct = Math.round(e * 100);
      if (preCount) preCount.textContent = pct + '%';
      if (preBar) preBar.style.width = pct + '%';
      if (p < 1) requestAnimationFrame(tick);
      else setTimeout(finishPreloader, 250);
    })(t0);
  }

  /* hero intro (plays after preloader) */
  const heroWords = document.querySelectorAll('.hero-title .word');
  /* filter to elements that actually exist on this page (shared script) */
  const heroFades = ['.hero-kicker', '.hero-text', '.hero-actions', '.hero-socials', '#heroBadge', '.hero-media']
    .filter(s => document.querySelector(s));
  const hasHeroMedia = !!document.querySelector('.hero-media');

  if (hasGSAP && !reduceMotion) {
    if (heroWords.length) gsap.set(heroWords, { yPercent: 112 });
    if (heroFades.length) gsap.set(heroFades, { opacity: 0, y: 34 });
    if (hasHeroMedia) gsap.set('.hero-media', { opacity: 0, y: 0, scale: 1.06 });
  }

  function heroIntro() {
    if (!hasGSAP || reduceMotion || !heroWords.length) return;
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.to(heroWords, { yPercent: 0, duration: 1.15, stagger: 0.13 });
    if (hasHeroMedia) tl.to('.hero-media', { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out' }, 0.1);
    ['.hero-kicker', '.hero-text', '.hero-actions', '.hero-socials', '#heroBadge'].forEach((s, i) => {
      if (document.querySelector(s)) tl.to(s, { opacity: 1, y: 0, duration: 0.8 }, 0.35 + i * 0.11);
    });
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
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString('en-US');
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }, { threshold: 0.3 });
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
    if (document.querySelector('[data-reveal]')) {
      gsap.set('[data-reveal]', { opacity: 0, y: 52 });
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 88%',
        once: true,
        onEnter: els => gsap.to(els, { opacity: 1, y: 0, duration: 1.05, ease: 'power3.out', stagger: 0.12 })
      });
    }

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
    if (document.getElementById('whyCenter')) {
      gsap.from('#whyCenter', {
        scale: 0.55, opacity: 0, duration: 1.3, ease: 'power3.out',
        scrollTrigger: { trigger: '#whyStage', start: 'top 72%', once: true }
      });
    }

    /* health-scan radar pop-in */
    if (document.getElementById('hsRadar')) {
      gsap.from('#hsRadar', {
        scale: 0.8, opacity: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: '#health-check', start: 'top 82%', once: true }
      });
    }

    /* stats slide-up */
    if (document.getElementById('stats')) {
      gsap.from('#stats', {
        y: 70, opacity: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: '#stats', start: 'top 92%', once: true }
      });
    }
  }

  /* hero mouse parallax */
  if (fine && hasGSAP && !reduceMotion) {
    const media = document.getElementById('heroMedia');
    const orb1 = document.getElementById('heroOrb1');
    if (media && orb1) {
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
      /* 北美 */
      { n: '纽约', lat: 40.7, lon: -74.0 }, { n: '洛杉矶', lat: 34.0, lon: -118.2 },
      { n: '芝加哥', lat: 41.9, lon: -87.6 }, { n: '休斯顿', lat: 29.8, lon: -95.4 },
      { n: '迈阿密', lat: 25.8, lon: -80.2 }, { n: '温哥华', lat: 49.3, lon: -123.1 },
      { n: '多伦多', lat: 43.7, lon: -79.4 }, { n: '蒙特利尔', lat: 45.5, lon: -73.6 },
      { n: '墨西哥城', lat: 19.4, lon: -99.1 },
      /* 南美 */
      { n: '圣保罗', lat: -23.5, lon: -46.6 }, { n: '里约热内卢', lat: -22.9, lon: -43.2 },
      { n: '布宜诺斯艾利斯', lat: -34.6, lon: -58.4 }, { n: '圣地亚哥', lat: -33.4, lon: -70.7 },
      { n: '利马', lat: -12.0, lon: -77.0 }, { n: '波哥大', lat: 4.7, lon: -74.1 },
      /* 欧洲 */
      { n: '伦敦', lat: 51.5, lon: -0.1 }, { n: '巴黎', lat: 48.9, lon: 2.35 },
      { n: '马德里', lat: 40.4, lon: -3.7 }, { n: '巴塞罗那', lat: 41.4, lon: 2.2 },
      { n: '柏林', lat: 52.5, lon: 13.4 }, { n: '慕尼黑', lat: 48.1, lon: 11.6 },
      { n: '米兰', lat: 45.5, lon: 9.2 }, { n: '罗马', lat: 41.9, lon: 12.5 },
      { n: '阿姆斯特丹', lat: 52.4, lon: 4.9 }, { n: '斯德哥尔摩', lat: 59.3, lon: 18.1 },
      { n: '奥斯陆', lat: 59.9, lon: 10.8 }, { n: '哥本哈根', lat: 55.7, lon: 12.6 },
      { n: '华沙', lat: 52.2, lon: 21.0 }, { n: '布拉格', lat: 50.1, lon: 14.4 },
      { n: '维也纳', lat: 48.2, lon: 16.4 }, { n: '雅典', lat: 38.0, lon: 23.7 },
      { n: '莫斯科', lat: 55.8, lon: 37.6 }, { n: '圣彼得堡', lat: 59.9, lon: 30.3 },
      { n: '伊斯坦布尔', lat: 41.0, lon: 29.0 }, { n: '都柏林', lat: 53.3, lon: -6.3 },
      { n: '里斯本', lat: 38.7, lon: -9.1 }, { n: '赫尔辛基', lat: 60.2, lon: 24.9 },
      /* 中东与非洲 */
      { n: '迪拜', lat: 25.2, lon: 55.3 }, { n: '利雅得', lat: 24.7, lon: 46.7 },
      { n: '多哈', lat: 25.3, lon: 51.5 }, { n: '特拉维夫', lat: 32.1, lon: 34.8 },
      { n: '开罗', lat: 30.0, lon: 31.2 }, { n: '约翰内斯堡', lat: -26.2, lon: 28.0 },
      { n: '开普敦', lat: -33.9, lon: 18.4 }, { n: '内罗毕', lat: -1.3, lon: 36.8 },
      { n: '拉各斯', lat: 6.5, lon: 3.4 }, { n: '亚的斯亚贝巴', lat: 9.0, lon: 38.7 },
      /* 南亚 */
      { n: '孟买', lat: 19.1, lon: 72.9 }, { n: '德里', lat: 28.6, lon: 77.2 },
      { n: '班加罗尔', lat: 13.0, lon: 77.6 }, { n: '卡拉奇', lat: 24.9, lon: 67.0 },
      { n: '伊斯兰堡', lat: 33.7, lon: 73.1 }, { n: '达卡', lat: 23.8, lon: 90.4 },
      /* 东南亚 */
      { n: '曼谷', lat: 13.8, lon: 100.5 }, { n: '新加坡', lat: 1.35, lon: 103.8 },
      { n: '吉隆坡', lat: 3.1, lon: 101.7 }, { n: '雅加达', lat: -6.2, lon: 106.8 },
      { n: '马尼拉', lat: 14.6, lon: 121.0 }, { n: '河内', lat: 21.0, lon: 105.8 },
      { n: '胡志明市', lat: 10.8, lon: 106.7 },
      /* 东亚 — 中国重点覆盖 */
      { n: '北京', lat: 39.9, lon: 116.4 }, { n: '上海', lat: 31.2, lon: 121.5 },
      { n: '广州', lat: 23.1, lon: 113.3 }, { n: '深圳', lat: 22.5, lon: 114.1 },
      { n: '成都', lat: 30.7, lon: 104.1 }, { n: '重庆', lat: 29.6, lon: 106.5 },
      { n: '杭州', lat: 30.3, lon: 120.2 }, { n: '武汉', lat: 30.6, lon: 114.3 },
      { n: '西安', lat: 34.3, lon: 108.9 }, { n: '南京', lat: 32.1, lon: 118.8 },
      { n: '天津', lat: 39.1, lon: 117.2 }, { n: '苏州', lat: 31.3, lon: 120.6 },
      { n: '青岛', lat: 36.1, lon: 120.4 }, { n: '长沙', lat: 28.2, lon: 112.9 },
      { n: '郑州', lat: 34.7, lon: 113.6 }, { n: '沈阳', lat: 41.8, lon: 123.4 },
      { n: '大连', lat: 38.9, lon: 121.6 }, { n: '厦门', lat: 24.5, lon: 118.1 },
      { n: '昆明', lat: 25.0, lon: 102.7 }, { n: '哈尔滨', lat: 45.8, lon: 126.5 },
      { n: '济南', lat: 36.7, lon: 117.0 }, { n: '合肥', lat: 31.8, lon: 117.3 },
      { n: '福州', lat: 26.1, lon: 119.3 }, { n: '长春', lat: 43.9, lon: 125.3 },
      { n: '南昌', lat: 28.7, lon: 115.9 }, { n: '太原', lat: 37.9, lon: 112.5 },
      { n: '南宁', lat: 22.8, lon: 108.4 }, { n: '海口', lat: 20.0, lon: 110.3 },
      { n: '贵阳', lat: 26.6, lon: 106.7 }, { n: '兰州', lat: 36.1, lon: 103.8 },
      { n: '呼和浩特', lat: 40.8, lon: 111.7 }, { n: '乌鲁木齐', lat: 43.8, lon: 87.6 },
      { n: '拉萨', lat: 29.6, lon: 91.1 }, { n: '银川', lat: 38.5, lon: 106.2 },
      { n: '西宁', lat: 36.6, lon: 101.8 }, { n: '石家庄', lat: 38.0, lon: 114.5 },
      /* 香港、澳门、台湾 */
      { n: '香港', lat: 22.3, lon: 114.2 }, { n: '台北', lat: 25.0, lon: 121.5 },
      { n: '高雄', lat: 22.6, lon: 120.3 },
      /* 东北亚 */
      { n: '首尔', lat: 37.6, lon: 127.0 }, { n: '釜山', lat: 35.1, lon: 129.0 },
      { n: '东京', lat: 35.7, lon: 139.7 }, { n: '大阪', lat: 34.7, lon: 135.5 },
      { n: '名古屋', lat: 35.2, lon: 136.9 }, { n: '福冈', lat: 33.6, lon: 130.6 },
      /* 大洋洲 */
      { n: '悉尼', lat: -33.9, lon: 151.2 }, { n: '墨尔本', lat: -37.8, lon: 145.0 },
      { n: '布里斯班', lat: -27.5, lon: 153.0 }, { n: '珀斯', lat: -31.9, lon: 115.9 },
      { n: '奥克兰', lat: -36.8, lon: 174.8 }, { n: '惠灵顿', lat: -41.3, lon: 174.8 }
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
      let best = null, bd = 22 * 22;
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
        tip.innerHTML = '<b>动衡智助</b> ' + hov.n;
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
