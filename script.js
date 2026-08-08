// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const menuIconUse = document.getElementById('menuIcon');

function closeMenu(){
  mobileNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuIconUse.setAttribute('href', '#icoMenu');
}

if (menuToggle) {
  menuToggle.addEventListener('click', function () {
    const isOpen = mobileNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuIconUse.setAttribute('href', isOpen ? '#icoClose' : '#icoMenu');
  });

  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
}

// Formulario de contacto (Netlify Forms)
const form = document.getElementById('contactForm');
const notice = document.getElementById('formNotice');

function encodeForm(formEl) {
  return new URLSearchParams(new FormData(formEl)).toString();
}

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeForm(form)
    })
      .then(function (response) {
        if (response.ok) {
          notice.hidden = false;
          notice.className = 'noticeOk';
          notice.textContent = 'Mensaje enviado. Gracias por escribir — le responderemos lo antes posible.';
          form.reset();
        } else {
          throw new Error('No se pudo enviar');
        }
      })
      .catch(function () {
        notice.hidden = false;
        notice.className = 'noticeWarn';
        notice.textContent = 'No fue posible enviar el mensaje. Intente de nuevo o escriba directamente por WhatsApp.';
      })
      .finally(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
  });
}

// Cargar Noticias y Eventos desde content/*.json (editable vía panel /admin)
// Si el archivo no existe o falla la carga, se conserva el contenido de
// respaldo que ya viene escrito directamente en el HTML.
function renderNoticias(items) {
  const grid = document.getElementById('newsGrid');
  if (!grid || !Array.isArray(items) || !items.length) return;
  grid.innerHTML = items.map(function (n) {
    return (
      '<article class="newsCard">' +
        '<div class="newsMedia"><span>' + (n.categoria || '') + '</span></div>' +
        '<div class="newsBody">' +
          '<div class="newsMeta"><span>' + (n.fecha || '') + '</span><span>·</span><span>' + (n.tiempo || '') + '</span></div>' +
          '<h3>' + (n.titulo || '') + '</h3>' +
          '<p>' + (n.resumen || '') + '</p>' +
          '<a href="' + (n.enlace || '#contacto') + '">Leer más <svg width="11" height="11"><use href="#icoArrow"/></svg></a>' +
        '</div>' +
      '</article>'
    );
  }).join('');
}

function renderEventos(items) {
  const list = document.getElementById('eventList');
  if (!list || !Array.isArray(items) || !items.length) return;
  list.innerHTML = items.map(function (e) {
    const tags = Array.isArray(e.etiquetas) ? e.etiquetas.map(function (t) { return '<span>' + t + '</span>'; }).join('') : '';
    return (
      '<div class="eventRow">' +
        '<div class="eventDate"><b>' + (e.dia || '') + '</b><small>' + (e.mes || '') + '</small></div>' +
        '<div class="eventInfo">' +
          '<h3>' + (e.titulo || '') + '</h3>' +
          '<p>' + (e.descripcion || '') + '</p>' +
          '<div class="eventTags">' + tags + '</div>' +
        '</div>' +
        '<a class="eventCta" href="' + (e.enlace || '#contacto') + '" target="_blank" rel="noopener">Reservar cupo</a>' +
      '</div>'
    );
  }).join('');
}

fetch('content/noticias.json').then(function (r) { return r.ok ? r.json() : null; })
  .then(function (data) { if (data) renderNoticias(data.items); })
  .catch(function () {});

fetch('content/eventos.json').then(function (r) { return r.ok ? r.json() : null; })
  .then(function (data) { if (data) renderEventos(data.items); })
  .catch(function () {});


const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('inView');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(function (el) { io.observe(el); });
} else {
  revealEls.forEach(function (el) { el.classList.add('inView'); });
}
