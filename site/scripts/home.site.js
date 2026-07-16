(function () {
  'use strict';

  var analytics = window.jjAnalytics || { trackClick: function () {}, trackSectionView: function () {} };

  // === Offset smooth-scroll (nav links, hero CTAs, "top" mark) ===
  function scrollToId(id) {
    if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    var el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!link) return;
    var id = link.getAttribute('href').slice(1);
    if (!id) return;
    e.preventDefault();
    scrollToId(id);
  });

  // === Analytics click tracking (data-track-* attributes) ===
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-track-category]') : null;
    if (!el) return;
    analytics.trackClick(el.dataset.trackCategory, el.dataset.trackLabel, el.dataset.trackUrl);
  });

  // === Nav scroll-shadow ===
  var nav = document.getElementById('site-nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // === Active-section highlighting ===
  var SECTIONS = ['about', 'work', 'projects', 'writing', 'drawings', 'contact'];
  var viewedSections = new Set();
  var navLinkEls = document.querySelectorAll('.nav-links a[data-section]');

  function setActiveSection(id) {
    navLinkEls.forEach(function (a) {
      a.classList.toggle('active', a.dataset.section === id);
    });
    if (!viewedSections.has(id)) {
      viewedSections.add(id);
      analytics.trackSectionView(id);
    }
  }

  var sectionIo = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) setActiveSection(entry.target.id);
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  SECTIONS.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) sectionIo.observe(el);
  });

  // === Reveal-on-scroll ===
  document.querySelectorAll('.reveal.intro').forEach(function (el) {
    var delay = parseInt(el.dataset.revealDelay || '0', 10);
    var fired = false;
    var fire = function () {
      if (fired) return;
      fired = true;
      setTimeout(function () { el.classList.add('in'); }, delay);
    };
    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) { fire(); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { fire(); io.unobserve(entry.target); }
      });
    }, { threshold: 0.08 });
    io.observe(el);
  });

  // === Magnetic cursor ===
  var cursor = document.getElementById('cursor');
  if (cursor) {
    var x = window.innerWidth / 2, y = window.innerHeight / 2;
    var tx = x, ty = y;
    var raf;

    var move = function (e) { tx = e.clientX; ty = e.clientY; };
    var tick = function () {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      cursor.style.transform = 'translate(' + x + 'px, ' + y + 'px) translate(-50%, -50%)';
      raf = requestAnimationFrame(tick);
    };
    var over = function (e) { if (e.target.closest && e.target.closest('[data-hot]')) cursor.classList.add('hot'); };
    var out = function (e) { if (e.target.closest && e.target.closest('[data-hot]')) cursor.classList.remove('hot'); };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    tick();
  }

  // === Hero role-rotator ===
  var roleEl = document.getElementById('hero-role');
  if (roleEl) {
    var roles = (roleEl.dataset.roles || '').split(',').filter(Boolean);
    var roleIdx = 0;
    if (roles.length > 1) {
      setInterval(function () {
        roleIdx = (roleIdx + 1) % roles.length;
        roleEl.textContent = roles[roleIdx];
      }, 2400);
    }
  }

  // === IST clock ===
  var clockEl = document.getElementById('hero-clock');
  if (clockEl) {
    var fmtClock = function () {
      try {
        return new Date().toLocaleTimeString('en-IN', {
          hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata',
        }) + ' IST';
      } catch (err) {
        return new Date().toLocaleTimeString();
      }
    };
    clockEl.textContent = fmtClock();
    setInterval(function () { clockEl.textContent = fmtClock(); }, 30000);
  }

  // === Project card spotlight ===
  document.querySelectorAll('.project').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  // === Command palette ===
  var paletteBack = document.getElementById('palette-back');
  var paletteInner = document.getElementById('palette-inner');
  var paletteInput = document.getElementById('palette-input');
  var paletteList = document.getElementById('palette-list');
  var paletteOpenBtn = document.getElementById('palette-open');

  if (paletteBack && paletteInput && paletteList) {
    var ALL_ITEMS = [
      { id: 'top', label: 'Jump to top', kind: 'Nav', action: function () { scrollToId('top'); } },
      { id: 'about', label: 'About', kind: 'Nav', action: function () { scrollToId('about'); } },
      { id: 'work', label: 'Experience', kind: 'Nav', action: function () { scrollToId('work'); } },
      { id: 'projects', label: 'Projects', kind: 'Nav', action: function () { scrollToId('projects'); } },
      { id: 'writing', label: 'Writing', kind: 'Nav', action: function () { scrollToId('writing'); } },
      { id: 'drawings', label: 'Drawings', kind: 'Nav', action: function () { scrollToId('drawings'); } },
      { id: 'contact', label: 'Contact', kind: 'Nav', action: function () { scrollToId('contact'); } },
      { id: 'resume', label: 'View resume', kind: 'Link', action: function () { window.open('/resume/', '_blank'); } },
      { id: 'gh', label: 'Open GitHub', kind: 'Link', action: function () { window.open('https://github.com/jenish-jain', '_blank'); } },
      { id: 'blog', label: 'Open blog', kind: 'Link', action: function () { window.open('https://blog.jenishjain.in', '_blank'); } },
      { id: 'art', label: 'Open drawings', kind: 'Link', action: function () { window.open('https://drawings.jenishjain.in', '_blank'); } },
      { id: 'mail', label: 'Email Jenish', kind: 'Link', action: function () { window.location.href = 'mailto:jenishjain6@gmail.com'; } },
      { id: 'theme', label: 'Toggle theme (paper ↔ ink)', kind: 'Action', action: function () {
        var r = document.documentElement;
        r.dataset.theme = r.dataset.theme === 'ink' ? 'paper' : 'ink';
      } },
    ];

    var items = ALL_ITEMS;
    var sel = 0;

    function renderList() {
      paletteList.innerHTML = '';
      if (items.length === 0) {
        var li = document.createElement('li');
        li.style.opacity = '0.5';
        li.innerHTML = '<span>No results</span><span class="right">—</span>';
        paletteList.appendChild(li);
        return;
      }
      items.forEach(function (it, i) {
        var li = document.createElement('li');
        li.className = i === sel ? 'sel' : '';
        li.innerHTML = '<span>' + it.label + '</span><span class="right">' + it.kind + '</span>';
        li.addEventListener('mouseenter', function () { sel = i; renderList(); });
        li.addEventListener('click', function () { it.action(); closePalette(); });
        paletteList.appendChild(li);
      });
    }

    function openPalette() {
      paletteBack.hidden = false;
      paletteInput.value = '';
      items = ALL_ITEMS;
      sel = 0;
      renderList();
      setTimeout(function () { paletteInput.focus(); }, 20);
    }

    function closePalette() {
      paletteBack.hidden = true;
    }

    paletteInput.addEventListener('input', function () {
      var v = paletteInput.value.trim().toLowerCase();
      items = v ? ALL_ITEMS.filter(function (i) { return i.label.toLowerCase().indexOf(v) !== -1; }) : ALL_ITEMS;
      sel = 0;
      renderList();
    });

    document.addEventListener('keydown', function (e) {
      if (!paletteBack.hidden) {
        if (e.key === 'Escape') { closePalette(); }
        else if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(items.length - 1, sel + 1); renderList(); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, sel - 1); renderList(); }
        else if (e.key === 'Enter') { var it = items[sel]; if (it) { it.action(); closePalette(); } }
        return;
      }
      var tag = document.activeElement && document.activeElement.tagName;
      if (e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA') {
        e.preventDefault();
        openPalette();
      }
    });

    paletteBack.addEventListener('click', closePalette);
    paletteInner.addEventListener('click', function (e) { e.stopPropagation(); });
    if (paletteOpenBtn) paletteOpenBtn.addEventListener('click', openPalette);
  }

  // === Theme (matches original: always resets to 'paper' on load) ===
  document.documentElement.dataset.theme = 'paper';
})();
