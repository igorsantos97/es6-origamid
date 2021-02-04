export default function initTabnav() {
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li');
  const sectionTabcontent = document.querySelectorAll(
    '[data-tab="content"] section',
  );

  if (tabmenu.length && sectionTabcontent.length) {
    sectionTabcontent[0].classList.add('active');

    function handleTabmenu(item, index) {
      sectionTabcontent.forEach((section) => {
        section.classList.remove('active');
      });
      const direction = sectionTabcontent[index].dataset.anime;
      sectionTabcontent[index].classList.add('active', direction);
    }

    tabmenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        handleTabmenu(item, index);
      });
    });
  }
}

initTabnav();
