jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //Owl Slider
    $("#HomeBanner").owlCarousel({
        loop: true,
        autoplay: true,
        autoPlaySpeed: 100,
        autoPlayTimeout: 100,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: true,
        items: 1,
        navSpeed: 7000,
        navigation: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        nav: true
    });

    $("#ServicesSlider").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        items: 4,
        navSpeed: 7000,
        navigation: true,
        responsive: {
            0: {
                items: 2
            },
            767: {
                items: 2
            },
            1000: {
                items: 4
            }
        },
        nav: true
    });

    //Owl Slider
    $("#feedbackSlider").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        items: 2,
        navSpeed: 7000,
        navigation: true,
        navigationText: ["<img src='img/arrow-left1.png'>", "<img src='img/arrow-right1.png'>"],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            1000: {
                items: 2
            }
        },
        nav: true
    });

    $("#roomsList").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        items: 3,
        navSpeed: 7000,
        navigation: true,
        navigationText: ["<img src='img/arrow-left1.png'>", "<img src='img/arrow-right1.png'>"],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            1000: {
                items: 3
            }
        },
        nav: true
    });

    //Owl Slider
    $("#serChoose").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        items: 3,
        navSpeed: 7000,
        navigation: true,
        navigationText: ["<img src='img/arrow-left1.png'>", "<img src='img/arrow-right1.png'>"],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            1000: {
                items: 3
            }
        },
        nav: true
    });

    $("#serviceList").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        items: 4,
        navSpeed: 7000,
        navigation: true,
        navigationText: ["<img src='img/arrow-left1.png'>", "<img src='img/arrow-right1.png'>"],
        responsive: {
            0: {
                items: 2
            },
            767: {
                items: 2
            },
            1000: {
                items: 4
            }
        },
        nav: true
    });
    $("#wellnessSlider").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        items: 3,
        navSpeed: 7000,
        navigation: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            1000: {
                items: 3
            }
        },
        nav: true
    });

});
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
new WOW().init();