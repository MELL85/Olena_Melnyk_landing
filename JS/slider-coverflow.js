(() => {

    $(document).ready(function () {
        $('.slider').slick({
            arrows: true,
            dots: true,
            adaptiveHeight: true,
            slidesToShow: 1,
            speed: 500,
            easing: 'ease-in-out',
            // waitForAnimate: false,
     
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        centerMode: true,
                    }
                }, 
                {
                    breakpoint: 992,
                    settings: {
                        centerMode: true,
                        slidesToShow: 3,
                    }
                }
            ],
            mobileFirst: true,

        });
    });

})();