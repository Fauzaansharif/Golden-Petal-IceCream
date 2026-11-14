/* 3D stacked flavour galleries */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.flavour-gallery').forEach((gallery) => {
    const cards = [...gallery.querySelectorAll('.flavour-card')];
    let activeIndex = 0;

    const setActive = (nextIndex) => {
      activeIndex = (nextIndex + cards.length) % cards.length;

      cards.forEach((card, index) => {
        const distance = (index - activeIndex + cards.length) % cards.length;
        card.classList.remove('is-active', 'is-prev', 'is-next', 'is-far-left', 'is-far-right');
        card.setAttribute('aria-pressed', String(index === activeIndex));

        if (index === activeIndex) card.classList.add('is-active');
        else if (distance === 1) card.classList.add('is-next');
        else if (distance === cards.length - 1) card.classList.add('is-prev');
        else if (distance === 2) card.classList.add('is-far-right');
        else card.classList.add('is-far-left');
      });
    };

    cards.forEach((card, index) => card.addEventListener('click', () => setActive(index)));
    gallery.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') setActive(activeIndex + 1);
      if (event.key === 'ArrowLeft') setActive(activeIndex - 1);
    });

    document.querySelectorAll(`[data-gallery-next="${gallery.id}"]`).forEach((button) => {
      button.addEventListener('click', () => setActive(activeIndex + 1));
    });
    document.querySelectorAll(`[data-gallery-prev="${gallery.id}"]`).forEach((button) => {
      button.addEventListener('click', () => setActive(activeIndex - 1));
    });

    setActive(0);
  });
});
