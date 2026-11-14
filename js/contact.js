/* =========================================================
   CONTACT PAGE — form feedback + FAQ accordion
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- contact form (front-end only demo) ---------- */
  const form = document.querySelector('.contact-form');
  const status = document.querySelector('.form-status');

  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const name = form.querySelector('#name').value.trim();
      status.textContent = `Thanks, ${name.split(' ')[0]}! We've got your message and will reply within one business day.`;
      status.classList.add('show', 'ok');
      form.reset();
    });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

});
