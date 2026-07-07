// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Contact form: no backend yet, so we just confirm to the user.
  // Replace this with a real submission handler (e.g. Formspree, Netlify Forms)
  // when you're ready — see the README for instructions.
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = document.querySelector('#form-note');
      if (note) {
        note.textContent = 'Thanks! This form is not yet connected to an inbox — see the README to hook it up.';
        note.style.display = 'block';
      }
      form.reset();
    });
  }
});
