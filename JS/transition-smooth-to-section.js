(() => {
    $(document).ready(function () {
        $('#navbar').on('click', '.header__burgermenu-title', function (event) {
            event.preventDefault();

            const id = $(this).attr('href'),
                top = $(id).offset().top;

            $('body,html').animate({ scrollTop: top - 74 }, 500);
        });
    });

    $(document).ready(function () {
        $('#navbar-desctop').on('click', '.header__burgermenu-title', function (event) {
            event.preventDefault();

            const id = $(this).attr('href'),
                top = $(id).offset().top;

            $('body,html').animate({ scrollTop: top - 99 }, 500);
        });
    });
})();