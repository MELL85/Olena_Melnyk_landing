// (() => {
// const burger = document.querySelector('#burgermenu-btn');
// const menu = document.querySelector('#burgermenu');

// burger.addEventListener('click', () => {
//     menu.classList.toggle('menu__down');
// })
// })();



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


    // const navLinks = document.querySelectorAll(".header__burgermenu-title");
    // navLinks.forEach((navLink) => {
    //   navLink.addEventListener("click", (_) => {
    //     if (iconBurger.classList.contains("active")) {
    //       document.body.classList.remove("lock");
    //       iconBurger.classList.remove("active");
    //       navigationsBody.classList.remove("active");
    //     }
    //   }
    //   );
    // });
})();