const tabmenu = document.querySelectorAll('.js-tabmenu li');
const sectionTabcontent = document.querySelectorAll('.js-tabcontent section');

if(tabmenu.length && sectionTabcontent.length) {
    sectionTabcontent[0].classList.add('active');

    function handleTabmenu(item, index) {
        sectionTabcontent.forEach((section) => {
            section.classList.remove('active');
        });

        sectionTabcontent[index].classList.add('active');
    }

    tabmenu.forEach((item, index) => {
        item.addEventListener('click', () => {
            handleTabmenu(item, index);
        });
    });
}















