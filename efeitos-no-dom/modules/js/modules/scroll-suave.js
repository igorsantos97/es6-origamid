export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]',
  );

  if (linksInternos.length) {
    function activeScrolSuave(e) {
      e.preventDefault();
      const href = e.target.getAttribute('href');
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    linksInternos.forEach((link) =>
      link.addEventListener('click', activeScrolSuave),
    );
  }
}
