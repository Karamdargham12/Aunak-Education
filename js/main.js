(function($) {
    'use strict';

    /*=======================================
         PRELOADER                     
    ======================================= */
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
        $(".slides__preload_wrapper").fadeOut(1500);
    });


    /* =======================================
        For slider
    =======================================*/

 

    /*=======================================
        Category Section  
    =======================================*/
    $("#best_book").owlCarousel({
        autoplayTimeout: 5000, //Set AutoPlay to 5 seconds
        autoplay: true,
        smartSpeed: 2000, // Default is 250
        items: 1,   
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        dots: true,
        nav: true,
        navText: ["<i class='arrow_left'></i>", "<i class='arrow_right '></i>"]
    }); 

    /*=======================================
        Feedback Section  
    =======================================*/
    $("#lfeedback_cur").owlCarousel({
        autoplayTimeout: 15000, //Set AutoPlay to 5 seconds
        autoplay: true,
        smartSpeed: 2000, // Default is 250
        items: 1,   
        loop: false,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        dots: true,
        nav: false,
        navText: ["<i class='logo-nav-icon'></i>", "<i class='logo-nav-icon'></i>"]
    });    
    
 
 
    /*=======================================
        Product  slider  
    =======================================*/
    function closeSlider(x) {
        var element = document.querySelector('.add-close-slider');
        
        // Ensure the element exists before trying to set the id
        if (element) {
            if (x.matches) { // If media query matches (max-width: 850px)
                element.id = ""; // Remove the id
            } else {
                element.id = "popula_cat"; // Add the id for larger screens
            }
        } else {
            console.warn('Element with class "add-close-slider" not found.');
        }
    }
    
    var x = window.matchMedia("(max-width: 850px)");
    closeSlider(x); // Initial call to set the state based on current screen size
    x.addEventListener("change", function() {
        closeSlider(x); // Re-run function when screen size changes
    });
    
    $('#popula_cat').each( function () {
        $('#popula_cat').slick({
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<i class="arrow_left"></i>',
            nextArrow: '<i class="arrow_right"></i>',
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint:  1300,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint:  1190,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint:  991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint:767 ,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580 ,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        $(".btn-left").on("click", function() {
          $(this).parents('.project_list_one').find('.project_slider_one').slick('slickPrev');
        });

        $(".btn-right").on("click", function() {   
          $(this).parents('.project_list_one').find('.project_slider_one').slick('slickNext');
        });

    });
 
    /* =======================================
        For Menu
    =======================================*/
    $("#navigation").menumaker({
        title: "",
        format: "multitoggle"
    });

    /* =======================================
    		WOW ANIMATION
    ======================================= */
    var wow = new WOW({
        mobile: false
    });
    wow.init();
 

})(jQuery);