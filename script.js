'use strict';
/* ===== CONFIG: edit contact details, map and brochure here ===== */
const CONFIG = {
  whatsapp: '918281840022',            // WhatsApp number, country code, no + or spaces
  address: 'NIMS Academy, NIMS Hospital, Wandoor 679339, Malappuram, Kerala, India',
  brochure: 'assets/documents/course-brochure.pdf',
  // Optional backend: POST enquiry to an approved service here; none exists yet.
  backendEndpoint: ''
};
/* ===== CONTENT (edit image paths / text here) ===== */
const COURSES = ['GNM','ANM','DHA','DPA'].map(c => ({
  code: c, img: c === 'GNM' ? 'assets/images/gnm.jpg' : c === 'ANM' ? 'assets/images/anm.jfif' : c === 'DHA' ? 'assets/images/dha.jpg' : `assets/images/course-${c.toLowerCase()}.jpg`,
  desc: 'Contact our admissions team for course information.'
}));
const WHY = [
  ['<path d="m2.5 8.5 9.5-4.5 9.5 4.5-9.5 4.5-9.5-4.5Z"/><path d="M6.5 10.5v5c3.3 2.3 7.7 2.3 11 0v-5M21.5 9v5"/>','Quality academic training'],
  ['<path d="M6 3v5a4 4 0 0 0 8 0V3M6 3v2m8-2v2m0 3h2a4 4 0 0 1 4 4v1"/><circle cx="20" cy="16" r="2"/><path d="M10 12v3a4 4 0 0 0 8 0v-1"/>','Practical learning opportunities'],
  ['<path d="M9 3h6m-5 0v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M7.5 15h9"/>','Modern laboratories'],
  ['<path d="M3 5.5c3.2-1.2 6.1-.5 9 1.5v13c-2.9-2-5.8-2.7-9-1.5v-13Zm18 0c-3.2-1.2-6.1-.5-9 1.5v13c2.9-2 5.8-2.7 9-1.5v-13Z"/><path d="M5.5 9H8m-2.5 3H8m8-3h2.5m-2.5 3h2.5"/>','Library and learning resources'],
  ['<path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16M2 21h20M9 21v-5h6v5"/><path d="M10 7h4m-2-2v4"/>','Hospital-based clinical training'],
  ['<path d="M20.8 8.8c0 5.1-8.8 10.2-8.8 10.2S3.2 13.9 3.2 8.8a4.3 4.3 0 0 1 8.8-1.2 4.3 4.3 0 0 1 8.8 1.2Z"/>','Compassionate and ethical healthcare professionals']
];
const FAC = [
  ['Modern Classrooms','classroom.jpg','Comfortable learning spaces for academic study.'],
  ['Expert Faculty','faculty.jpg','Guidance from the institute\'s teaching team.'],
  ['Modern Laboratories','laboratory.jpg','Hands-on practical learning environments.'],
  ['Library and Learning Resources','library.jpg','Resources to support study and research.'],
  ['Hospital Clinical Training','clinical-learning.jpg','Clinical learning at NIMS Hospital.']];
const FAQ = [
 ['Which courses are offered at NIMS Academy?','GNM, ANM, DHA and DPA.'],
 ['How can I apply for admission?','Use the enquiry form on this page, or call/WhatsApp +91 8281840022. The admissions office will guide you.'],
 ['What documents are required for admission?','SSLC certificate, Plus Two certificate, Transfer Certificate (TC), Aadhaar copy and passport-size photographs. Please confirm course-specific requirements with the admissions office.'],
 ['What is the age limit for applicants?','The supplied age limit is 17–35 years. Please confirm with the admissions office.'],
 ['What academic marks are required?','A minimum of 40%–45% in Class 10 and Class 12, as applicable. Requirements may differ by course; please confirm.'],
 ['How can I contact the admissions office?','Call +91 8281840022, WhatsApp the same number, or email nimsacademy@gmail.com.'],
 ['How can I obtain the course brochure?','Use the Download Course Brochure button in the Admissions section once the brochure has been uploaded; otherwise contact the admissions office.'],
 ['What are the course durations and fees?','Please contact the admissions office for the latest course-specific duration and fee details.']];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const el = (h) => { const t = document.createElement('template'); t.innerHTML = h.trim(); return t.content.firstChild; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const waUrl = text => `https://wa.me/${CONFIG.whatsapp}` + (text ? `?text=${encodeURIComponent(text)}` : '');
const imgHtml = (src, alt, lazy = true) => `<figure class="ph"><img ${lazy ? 'loading="lazy"' : ''} src="${src}" width="640" height="400" alt="${esc(alt)}"></figure>`;

/* Render sections */
function render() {
  $('#courseGrid').append(...COURSES.map(c => el(`<article class="card course-card reveal">
    <div class="body"><h3>${c.code}</h3><p>${c.desc}</p><div class="row">
    <button class="btn ghost sm" data-course="${c.code}">View Course Details</button>
    <button class="btn sm" data-enq="${c.code}">Enquire Now</button></div></div></article>`)));
  $('#whyGrid').append(...WHY.map(w => el(`<div class="card why reveal"><span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false">${w[0]}</svg></span><h3>${w[1]}</h3></div>`)));
  $('#facGrid').append(...FAC.map(f => el(`<article class="card reveal">${imgHtml('assets/images/' + f[1], f[0] + ' (placeholder)')}<div class="body"><h3>${f[0]}</h3><p>${f[2]}</p></div></article>`)));
  $('#faqList').append(...FAQ.map((f, i) => el(`<div class="faq-item"><h3 style="margin:0"><button class="fq" aria-expanded="false" aria-controls="fa${i}" id="fq${i}">${f[0]}</button></h3><div class="fa" id="fa${i}" role="region" aria-labelledby="fq${i}" hidden>${f[1]}</div></div>`)));
  $$('#faqList .faq-item').forEach(i => i.style.cssText = 'border:1px solid var(--bd);border-radius:12px;margin-bottom:10px;background:#fff');
}

/* Image fallbacks (error events don't bubble, so capture) */
function imageFallbacks() {
  const mark = img => img.closest('.ph')?.classList.add('missing'), 
        label = img => img.closest('.ph')?.setAttribute('data-label', img.alt.replace(/\s*\(.*\)/, ''));
  $$('img').forEach(i => { label(i); if (i.complete && i.naturalWidth === 0) mark(i); });
  document.addEventListener('error', e => { if (e.target.tagName === 'IMG') { label(e.target); mark(e.target); } }, true);
}

/* Navigation */
function nav() {
  const b = $('#burger'), n = $('#nav');
  const set = open => { n.classList.toggle('open', open); b.setAttribute('aria-expanded', open); b.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); };
  b.addEventListener('click', () => set(!n.classList.contains('open')));
  n.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && n.classList.contains('open')) { set(false); b.focus(); } });
  const links = $$('nav a[href^="#"]:not(.btn)');
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) links.forEach(l => l.classList.toggle('on', l.hash === '#' + en.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  links.forEach(l => { const s = $(l.hash); if (s) io.observe(s); });
}

/* Reveal, back-to-top, year */
function misc() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  $$('.reveal').forEach(r => io.observe(r));
  $('#year').textContent = new Date().getFullYear();
  const t = $('#top');
  addEventListener('scroll', () => { t.hidden = scrollY < 600; }, { passive: true });
  t.addEventListener('click', () => scrollTo({ top: 0 }));
}

/* WhatsApp links, map, brochure */
function contact() {
  $$('[data-wa]').forEach(a => { a.href = waUrl(a.dataset.wa); a.target = '_blank'; a.rel = 'noopener'; });
  const mapSearchUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(CONFIG.address);
  $('#mapLink').href = mapSearchUrl;
  const mapUrl = new URL('https://maps.google.com/maps');
  mapUrl.searchParams.set('q', CONFIG.address);
  mapUrl.searchParams.set('output', 'embed');
  const mapFrame = document.createElement('iframe');
  mapFrame.src = mapUrl.toString();
  mapFrame.title = 'Map showing NIMS Academy, NIMS Hospital, Wandoor';
  mapFrame.loading = 'lazy';
  mapFrame.allowFullscreen = true;
  $('#map').replaceChildren(mapFrame);
  $('#brochure').addEventListener('click', async e => {
    e.preventDefault();
    const m = $('#brochureMsg'); m.className = 'status'; m.textContent = 'Checking…';
    try { const r = await fetch(CONFIG.brochure, { method: 'HEAD' }); if (!r.ok) throw 0; m.textContent = ''; location.href = CONFIG.brochure; }
    catch { m.className = 'status bad'; m.textContent = 'The course brochure has not been uploaded yet. Please contact the admissions office.'; }
  });
}

/* Dialogs: course details, lightbox, video */
function dialogs() {
  const d = $('#dlg'), body = $('#dlgBody'); let opener = null;
  const open = (html, from) => { body.innerHTML = html; opener = from; d.showModal(); };
  $('#dlgClose').addEventListener('click', () => d.close());
  d.addEventListener('click', e => { if (e.target === d) d.close(); });
  d.addEventListener('close', () => { body.innerHTML = ''; opener?.focus(); });
  document.addEventListener('click', e => {
    const c = e.target.closest('[data-course]'), q = e.target.closest('[data-enq]');
    if (c) open(`<h3 id="ct">${c.dataset.course}</h3><dl><dt>Official course name</dt><dd>[ADD CONFIRMED FULL COURSE NAME]</dd><dt>Duration</dt><dd>[ADD CONFIRMED DURATION]</dd><dt>Eligibility</dt><dd>[ADD COURSE-SPECIFIC ELIGIBILITY]</dd><dt>Course overview</dt><dd>[ADD APPROVED DESCRIPTION]</dd><dt>Fee information</dt><dd>[ADD ONLY IF PROVIDED BY THE INSTITUTE]</dd></dl>`, c);
    else if (q) { e.preventDefault(); d.open && d.close(); $('#fCourse').value = q.dataset.enq;
      open(`<h3>Enquire about ${q.dataset.enq}</h3><p>Send a quick WhatsApp message or complete the full enquiry form.</p><div class="actions"><a class="btn" target="_blank" rel="noopener" href="${waUrl(`Hello, I would like to enquire about the ${q.dataset.enq} course at NIMS Academy.`)}">Enquire on WhatsApp</a><a class="btn ghost" href="#enquiry" id="toForm">Use the form</a></div>`, q);
      $('#toForm').addEventListener('click', () => d.close()); }
  });
}

/* FAQ accordion */
function faq() {
  $('#faqList').addEventListener('click', e => {
    const b = e.target.closest('.fq'); if (!b) return;
    const open = b.getAttribute('aria-expanded') === 'true';
    b.setAttribute('aria-expanded', !open); $('#' + b.getAttribute('aria-controls')).hidden = open;
  });
}

/* Enquiry form -> WhatsApp */
function form() {
  const f = $('#form'), msg = $('#formMsg'); let busy = false;
  const rules = {
    name: v => v.trim().length < 2 ? 'Please enter your full name.' : '',
    phone: v => /^(?:\+?91[\s-]?|0)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g, '').replace(/^(\+?91|0)(?=\d{10}$)/, '$1')) ? '' : 'Enter a valid 10-digit Indian mobile number.',
    email: v => !v.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Enter a valid email address.',
    course: v => v ? '' : 'Please select a course.',
    consent: (v, i) => i.checked ? '' : 'Please agree to be contacted.'
  };
  const ids = { name: 'fName', phone: 'fPhone', email: 'fEmail', course: 'fCourse', consent: 'fConsent' }, errs = { name: 'eName', phone: 'ePhone', email: 'eEmail', course: 'eCourse', consent: 'eConsent' };
  const check = k => { const i = $('#' + ids[k]), m = rules[k](i.value, i); $('#' + errs[k]).textContent = m; i.setAttribute('aria-invalid', !!m); i.setAttribute('aria-describedby', errs[k]); return !m; };
  Object.keys(ids).forEach(k => $('#' + ids[k]).addEventListener('blur', () => check(k)));
  f.addEventListener('submit', e => {
    e.preventDefault(); if (busy) return;
    const results = Object.keys(ids).map(check);
    if (results.includes(false)) { msg.className = 'status bad'; msg.textContent = 'Please correct the highlighted fields.'; $('[aria-invalid=true]')?.focus(); return; }
    busy = true; $('#submit').disabled = true;
    const lines = ['Hello, I would like to enquire about admission at NIMS Academy.', `Name: ${$('#fName').value.trim()}`, `Phone: ${$('#fPhone').value.trim()}`];
    if ($('#fEmail').value.trim()) lines.push(`Email: ${$('#fEmail').value.trim()}`);
    lines.push(`Course: ${$('#fCourse').value}`);
    if ($('#fMsg').value.trim()) lines.push(`Message: ${$('#fMsg').value.trim()}`);
    const w = window.open(waUrl(lines.join('\n')), '_blank', 'noopener');
    if (w) { msg.className = 'status ok'; msg.textContent = 'WhatsApp has opened with your message. Please press send in WhatsApp to deliver your enquiry.'; }
    else { msg.className = 'status bad'; msg.innerHTML = 'Your browser blocked WhatsApp. <a target="_blank" rel="noopener" href="' + waUrl(lines.join('\n')) + '">Open WhatsApp manually</a>.'; }
    setTimeout(() => { busy = false; $('#submit').disabled = false; }, 2000);
  });
}

[render, imageFallbacks, nav, misc, contact, dialogs, faq, form].forEach(fn => { try { fn(); } catch (err) { console.error(fn.name, err); } });
