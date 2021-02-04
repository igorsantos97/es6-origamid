import * as teste from './test.js';

export default function initAccordionList() {
  const active = 'active';
  const dtAccordion = document.querySelectorAll('[data-anime="accordion"] dt');

  if (dtAccordion.length) {
    dtAccordion[0].classList.add(active);
    dtAccordion[0].nextElementSibling.classList.add(active);

    function toggleItemAccordion() {
      const elementTarget = this; // como não tem vários itens (apenas um) uso apenas 'this'
      const dlItem = elementTarget.nextElementSibling; // não necessita de colocar em uma 'const', pode fazer direto

      elementTarget.classList.toggle(active);
      dlItem.classList.toggle(active);
    }

    dtAccordion.forEach((item) => {
      item.addEventListener('click', toggleItemAccordion);
    });
  }
}
