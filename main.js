/* =========================================================
   KOPP Feinmechanik – main.js
   ========================================================= */
(function () {
  'use strict';

  /* ---- aktuelles Jahr ---- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---- Mobile-Navigation ---- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Header-Schatten + Sticky-CTA bei Scroll ---- */
  var header = document.getElementById('header');
  var cta = document.querySelector('.sticky-cta');
  function onScroll() {
    var sc = window.pageYOffset || document.documentElement.scrollTop;
    if (header) header.classList.toggle('is-stuck', sc > 8);
    if (cta) cta.classList.toggle('show', sc > 700);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Reveal-on-scroll ---- */
  var reveal = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && reveal.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveal.forEach(function (el) { io.observe(el); });
  } else {
    reveal.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Zähler-Animation (z.B. 80+) ---- */
  var counters = document.querySelectorAll('.count');
  if ('IntersectionObserver' in window && counters.length) {
    var cObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var target = parseInt(el.getAttribute('data-target'), 10) || 0;
        var suffix = el.getAttribute('data-suffix') || '';
        var start = null, dur = 1100;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          el.textContent = Math.floor(p * target) + (p === 1 ? suffix : '');
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        cObs.unobserve(el);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cObs.observe(el); });
  }

  /* ---- FAQ: immer nur eine Frage offen ---- */
  var accs = document.querySelectorAll('.acc');
  accs.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) {
        accs.forEach(function (o) { if (o !== d) o.open = false; });
      }
    });
  });

  /* ---- Kontaktformular (Web3Forms) ----
     Einrichtung:
       1. Auf https://web3forms.com mit kontakt@kopp-feinmechanik.de einen
          kostenlosen Access-Key per E-Mail anfordern.
       2. Den Key unten in WEB3FORMS_ACCESS_KEY einsetzen – fertig.
     Solange der Platzhalter steht, öffnet das Formular ersatzweise das
     E-Mail-Programm (mailto), es geht also keine Anfrage verloren. */
  var WEB3FORMS_ACCESS_KEY = 'HIER-WEB3FORMS-ACCESS-KEY-EINSETZEN';
  var FALLBACK_MAIL = 'kontakt@kopp-feinmechanik.de';

  var form = document.getElementById('contactForm');
  if (!form) return;

  function escapeHtml(s) {
    return String(s || '').replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    var btn = form.querySelector('button[type="submit"]');
    var originalLabel = btn ? btn.innerHTML : '';
    var fd = new FormData(form);
    var data = Object.fromEntries(fd.entries());

    /* Fallback ohne gültigen Key: E-Mail-Programm öffnen */
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.indexOf('HIER-') === 0) {
      var body = 'Name: ' + (data.name || '') + '\nUnternehmen: ' + (data.firma || '') +
        '\nTelefon: ' + (data.telefon || '') + '\nE-Mail: ' + (data.email || '') +
        '\n\nAnfrage:\n' + (data.nachricht || '');
      window.location.href = 'mailto:' + FALLBACK_MAIL +
        '?subject=' + encodeURIComponent('Anfrage über kopp-feinmechanik.de') +
        '&body=' + encodeURIComponent(body);
      return;
    }

    if (btn) { btn.disabled = true; btn.innerHTML = 'Wird gesendet …'; }
    fd.append('access_key', WEB3FORMS_ACCESS_KEY);

    try {
      var res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd
      });
      var json = await res.json().catch(function () { return {}; });
      if (!res.ok || json.success === false) throw new Error(json.message || 'Submit failed');

      form.innerHTML =
        '<div class="contact__form-success">' +
        '<div class="contact__form-success-icon">✓</div>' +
        '<h3>Vielen Dank, ' + escapeHtml(data.name) + '!</h3>' +
        '<p>Ihre Anfrage ist bei uns eingegangen. Wir melden uns kurzfristig unter <b>' +
        escapeHtml(data.email) + '</b> bei Ihnen.</p></div>';
    } catch (err) {
      if (btn) { btn.disabled = false; btn.innerHTML = originalLabel; }
      alert('Beim Senden ist etwas schiefgegangen. Bitte schreiben Sie uns direkt an ' +
        FALLBACK_MAIL + ' oder rufen Sie +49 7422 9926-0 an.');
    }
  });
})();
