(() => {

    window.onscroll = () => {
        const menu = document.querySelector('#navbar');
        const menu2 = document.querySelector('#navbar-desctop');
        const active = window.scrollY;

        if (active > 300) {
            menu.classList.add('navbar_scrolled');
            menu2.classList.add('navbar_scrolled');
        } else if (active < 100) {
            menu.classList.remove('navbar_scrolled');
            menu2.classList.remove('navbar_scrolled');
        }
    }

})();