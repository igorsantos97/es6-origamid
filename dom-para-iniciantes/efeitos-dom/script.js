function initTabnav() {
    const tabmenu = document.querySelectorAll('.js-tabmenu li');
    const sectionTabcontent = document.querySelectorAll('.js-tabcontent section');

    if (tabmenu.length && sectionTabcontent.length) {
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
}


function initAccordionList() {
    const active = 'active';
    const dtAccordion = document.querySelectorAll('.js-accordion dt');

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

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    if (linksInternos.length) {
        function activeScrolSuave(e) {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            const section = document.querySelector(href);

            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        linksInternos.forEach((link) => link.addEventListener('click', activeScrolSuave));
    }
}

function animacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
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



initTabnav();
initAccordionList();
initScrollSuave();
animacaoScroll();












