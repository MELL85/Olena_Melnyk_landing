(() => {
    $(document).ready(function () {
        $('#navbar').on('click', '.my__fixed-transition-point', function (event) {
            event.preventDefault();

            const id = $(this).attr('href'),
                top = $(id).offset().top;

            $('body,html').animate({ scrollTop: top - 74 }, 500);
        });
    });

    $(document).ready(function () {
        $('#navbar-desctop').on('click', '.my__fixed-transition-point', function (event) {
            event.preventDefault();

            const id = $(this).attr('href'),
                top = $(id).offset().top;

            $('body,html').animate({ scrollTop: top - 99 }, 500);
        });
    });

    $(document).ready(function () {
        $('#linkBtn').on('click', '.my__fixed-transition-point', function (event) {
            event.preventDefault();

            const id = $(this).attr('href'),
                top = $(id).offset().top;

            // $('body,html').animate({ scrollTop: top - 99 }, 500);

            if (document.documentElement.clientWidth < 992) {
                $('body,html').animate({ scrollTop: top - 74 }, 500);
            } else {
                $('body,html').animate({ scrollTop: top - 99 }, 500);
            }
        });
    });
})();