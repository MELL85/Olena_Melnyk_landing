(() => {
    const iconBurger = document.querySelector("#burgermenu-btn");
    const navigationsBody = document.querySelector("#burgermenu");
    iconBurger.addEventListener("click", function (e) {
        document.body.classList.toggle("lock");
        iconBurger.classList.toggle("active");
        navigationsBody.classList.toggle("active");
    });

    const burger = document.querySelector('#burgermenu-btn');
    const menu = document.querySelector('#burgermenu');

    burger.addEventListener('click', () => {
        menu.classList.toggle('menu__down');
    })

})();