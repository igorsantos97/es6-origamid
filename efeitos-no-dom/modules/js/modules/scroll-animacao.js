export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowMetade = window.innerHeight * 0.65;

  if (sections.length) {
    function animaSectionScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionIsVisible = sectionTop - windowMetade < 0;

        if (sectionIsVisible) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', animaSectionScroll);

    animaSectionScroll(); // Iniciando de primeira ao iniciar a página
  }
}
