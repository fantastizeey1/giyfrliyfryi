(function ($) {
    "use strict"


    $(document).ready(function () {
        /*-------------------------------------------------------------------------------
          Navbar 
        -------------------------------------------------------------------------------*/

        //* Navbar Fixed  
        function navbarFixed() {
            var nav_offset_top = $('.header_top_bar').height() + 10;
            if ($('.fixed').length) {
                $(window).scroll(function () {
                    var scroll = $(window).scrollTop();
                    if (scroll >= nav_offset_top) {
                        $(".fixed").addClass("navbar_fixed");
                        $('.header_top_bar').css({
                            "margin-top": "-47px"
                        });
                    } else {
                        $(".fixed").removeClass("navbar_fixed");
                        $('.header_top_bar').css({
                            "margin-top": "0px"
                        });
                    }
                });
            };
        };
        navbarFixed();

        function testSlider() {
            var tSlider = $(".sm_testimonial_info");
            if (tSlider.length) {
                tSlider.owlCarousel({
                    loop: true,
                    margin: 30,
                    items: 1,
                    autoplay: true,
                    smartSpeed: 1000,
                    dots: false,
                    nav: true,
                    navText: ['<i class="arrow_left"></i>', '<i class="arrow_right"></i>'],
                    navContainer: '.sm_testimonial_info',
                    responsiveClass: true,
                    responsive: {
                        //                    0: {
                        //                        items: 1
                        //                    }
                    },
                });
            }
        }
        testSlider();

        function CaseSlider() {
            var caseSlider = $("#case_slider");
            if (caseSlider.length) {
                caseSlider.owlCarousel({
                    loop: true,
                    margin: 30,
                    items: 3,
                    autoplay: true,
                    smartSpeed: 1000,
                    stagePadding: 220,
                    dots: true,
                    nav: false,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            stagePadding: 15
                        },
                        768: {
                            items: 2,
                            stagePadding: 120
                        },
                        1199: {
                            items: 3,
                            stagePadding: 120
                        },
                        1300: {
                            items: 3,
                            stagePadding: 180
                        },
                        1500: {
                            items: 3,
                            stagePadding: 220
                        }
                    },
                });
            }
        }
        CaseSlider();

        function CaseSlider2() {
            var CaseSlider2 = $("#case_slider_two");
            if (CaseSlider2.length) {
                CaseSlider2.owlCarousel({
                    loop: true,
                    margin: 30,
                    items: 3,
                    autoplay: true,
                    smartSpeed: 1000,
                    stagePadding: 220,
                    dots: true,
                    nav: false,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            stagePadding: 15
                        },
                        768: {
                            items: 2,
                            stagePadding: 120
                        },
                        1199: {
                            items: 3,
                            stagePadding: 120
                        },
                        1300: {
                            items: 3,
                            stagePadding: 180
                        },
                        1500: {
                            items: 3,
                            stagePadding: 220
                        }
                    },
                });
            }
        }
        CaseSlider2();


        function studySlider() {
            var case_study = $(".study-slider,.team_slider");
            if (case_study.length) {
                case_study.owlCarousel({
                    loop: true,
                    margin: 30,
                    items: 3,
                    autoplay: true,
                    smartSpeed: 1000,
                    nav: false,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        550: {
                            items: 2
                        },
                        768: {
                            items: 3
                        }
                    },
                });
            }
        }
        studySlider();


        function Parallax() {
            /*=============================================== 
               Parallax Init
          ================================================*/
            if ($('.new_table_image,.p_img').length > 0) {
                $('.new_table_image,.p_img').parallax();
            }
        }
        Parallax();



        //  open and close popup
        $(document).on('click', '.open-popup', function () {
            $('.popup-content').removeClass('active');
            $('.popup-wrapper, .popup-content[data-rel="' + $(this).data('rel') + '"]').addClass('active');
            $('body').css({
                'overflow': 'hidden'
            });
            $('.simple-input').focus();
            return false;
        });

        $(document).on('click', '.popup-wrapper .button-close, .popup-wrapper .layer-close', function () {
            $('.popup-wrapper, .popup-content').removeClass('active');
            $('body').removeAttr('style');
            setTimeout(function () {
                $('.ajax-popup').remove();
            }, 300);
            return false;
        });


        function searchField() {
            $('.search-field').on('focus', function () {
                $('.search-form').addClass('active');
            });

            $('.search-field').on('blur', function () {
                $('.search-form').removeClass('active');
            });
        }
        searchField();

        function testimonialSlider() {
            var testimonial = $(".testimonial-slider");
            if (testimonial.length) {
                testimonial.owlCarousel({
                    loop: true,
                    margin: 30,
                    items: 3,
                    autoplay: true,
                    center: true,
                    smartSpeed: 1000,
                    nav: false,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        400: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        }
                    },
                });
            }
        }
        testimonialSlider();

        function easySlider() {
            var easy = $(".easy_slider");
            if (easy.length) {
                easy.owlCarousel({
                    loop: true,
                    margin: 0,
                    items: 3,
                    autoplay: true,
                    smartSpeed: 1000,
                    nav: false,
                    dots: false,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        500: {
                            items: 2
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        }
                    },
                });
            }
        }
        easySlider();
        /*OW Home New Slider*/

        function smSliderOne() {
            var smSlider = $("#sm_slider");
            if (smSlider.length) {
                smSlider.owlCarousel({
                    loop: true,
                    margin: 30,
                    items: 1,
                    dots: true,
                    animateOut: 'fadeOut',
                    autoplay: false,
                    smartSpeed: 1000,
                    nav: false,
                    responsiveClass: true
                });
            }
        }
        smSliderOne();

        function testimonialSliderTwo() {
            var testimonial = $(".clients_slider");
            if (testimonial.length) {
                testimonial.owlCarousel({
                    loop: true,
                    margin: 30,
                    items: 1,
                    autoplay: true,
                    stagePadding: 545,
                    center: true,
                    smartSpeed: 1000,
                    nav: false,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            stagePadding: 0,
                            center: false,
                        },
                        768: {
                            items: 2,
                            stagePadding: 50
                        },
                        1199: {
                            items: 1,
                            stagePadding: 300
                        },
                        1500: {
                            items: 1,
                            stagePadding: 545,
                        }
                    },
                });
            }
        }
        testimonialSliderTwo();

        function smSliderTwo() {
            var smSliderT = $("#sm_testimonial_s");
            if (smSliderT.length) {
                smSliderT.owlCarousel({
                    loop: true,
                    margin: 0,
                    items: 2,
                    dots: true,
                    autoplay: false,
                    smartSpeed: 1000,
                    nav: false,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        768: {
                            items: 2,
                        },
                    },
                });
            }
        }
        smSliderTwo();


        /*===== progress-bar =====*/
        function circle_progress() {
            if ($('.circle').length) {
                $(".circle").each(function () {
                    $(this).waypoint(function () {
                        $('.circle').circleProgress({
                            startAngle: -14.1,
                            size: 150,
                            duration: 500000,
                            easing: "circleProgressEase",
                            emptyFill: '#636a70',
                            lineCap: 'round',
                            thickness: 3,
                        })
                    }, {
                        triggerOnce: true,
                        offset: 'bottom-in-view'
                    })
                })
            }
        }
        circle_progress();

        function counterActivator() {
            if ($('.counter').length) {
                $('.counter').counterUp({
                    delay: 70,
                    time: 1000
                })
            }
        }
        counterActivator();


        function ripples() {
            if ($(".ripples").length) {
                try {
                    $('.ripples').ripples({
                        resolution: 500,
                        perturbance: 0.0
                    });
                } catch (e) {
                    $('.error').show().text(e);
                }
            }
        }
        ripples();

        function ClientsSlider() {
            var testimonial = $(".clients_logo_s");
            if (testimonial.length) {
                testimonial.owlCarousel({
                    loop: true,
                    margin: 30,
                    items: 6,
                    autoplay: true,
                    smartSpeed: 1000,
                    dots: false,
                    nav: false,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        400: {
                            items: 2
                        },
                        576: {
                            items: 3
                        },
                        768: {
                            items: 4
                        },
                        992: {
                            items: 6
                        }
                    },
                });
            }
        }
        ClientsSlider();

        function MainSlider() {
            var testimonial = $(".main_slider");
            if (testimonial.length) {
                testimonial.owlCarousel({
                    loop: true,
                    margin: 30,
                    items: 1,
                    autoplay: true,
                    smartSpeed: 1000,
                    dots: true,
                    nav: false,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1
                        }
                    },
                });
            }
        }
        MainSlider();

        /*----------------------------------------------------*/
        /*  portfolio_isotope
         /*----------------------------------------------------*/
        function our_project() {
            if ($('.portfolio-gallery,.pr-gallery-three').length) {
                // Activate isotope in container
                $(".portfolio-gallery,.pr-gallery-three").imagesLoaded(function () {
                    $(".portfolio-gallery,.pr-gallery-three").isotope({
                        layoutMode: 'masonry',
                        masonry: {
                            columnWidth: 0
                        }
                    });
                });
                // Add isotope click function
                $(".portfolio_filter li").on('click', function () {
                    $(".portfolio_filter li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    $(".portfolio-gallery,.pr-gallery-three").isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 450,
                            easing: "linear",
                            queue: false,
                        }
                    });
                    return false;
                });
            }
        }
        our_project();

        function goTop() {
            //js for scroll to section content
            $('a.top_scroll_btn').on('click', function (event) {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 90
                    }, 2000);
                }
            });
        }
        goTop();

        /*---------------scroll-top-js--------*/

        function scroll_t() {
            $(".scroll_t").on('click', function (event) {
                $("body,html").animate({
                    "scrollTop": "0"
                }, 1200);
                event.preventDefault();
            });
        }
        scroll_t();


        /*=========animation js =========*/
        function bodyScrollAnimation() {
            if ($(window).width() > 768) {
                new WOW({
                    animateClass: 'animated', // animation css class (default is animated)
                    offset: 100, // distance to the element when triggering the animation (default is 0)
                    mobile: false,
                    duration: 1000,
                }).init()
            }
        }
        bodyScrollAnimation();

        function searc_btn() {
            $('.searc_btn').on('click', function () {
                $('body').addClass('open');
                setTimeout(function () {
                    $('.search-input').focus();
                }, 500);
                return false;
            });
            $('.close_icon').on('click', function () {
                $('body').removeClass('open');
                return false;
            });
        }
        searc_btn();

        function popupGallery() {
            if ($('.popup-youtube').length) {
                $('.popup-youtube').magnificPopup({
                    disableOn: 700,
                    type: 'iframe',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false,
                    mainClass: 'mfp-with-zoom mfp-img-mobile',
                });
            }
        }
        popupGallery();

        function particles() {
            if ($('#particles-js').length) {
                var ptjs = "particles-js";
                particlesJS(ptjs, {
                    "particles": {
                        "number": {
                            "value": 15,
                            "density": {
                                "enable": false,
                                "value_area": 500
                            }
                        },
                        "color": {
                            "value": "#000"
                        },
                        "shape": {
                            "type": ["image2", "image4", "image5", "image1", "image3"],
                            "stroke": {
                                "width": 0,
                                "color": "#000"
                            },
                            "polygon": {
                                "nb_sides": 6
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "size": {
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 2,
                                "size_min": 0,
                                "sync": false
                            }
                        },

                        "line_linked": {
                            "enable": false,
                            "distance": 150,
                            "color": "#000",
                            "opacity": 0,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 1,
                            "direction": "",
                            "random": true,
                            "attract": {
                                "enable": true,
                                "rotateX": 600,
                                "rotateY": 350
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "push"
                            },
                            "resize": false
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 0
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 80,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 0
                            }
                        }
                    },
                    "retina_detect": true,
                });
            }
        }
        particles();

    });

})(jQuery);
