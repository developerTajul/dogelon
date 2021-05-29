(function($){

	jQuery(document).ready(function(){


        // meanmenu
        jQuery('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991"
        });


    	/** main-slider **/	
    	$('.main-slider-active').slick({
            infinite: true,
            dots: true,
            arrows: false,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 10000,
            slidesToScroll: 1,
            nextArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            prevArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    	});

        /** gallery-slider **/ 
        $('.gallery-slider-active').slick({
            infinite: true,
            dots: false,
            arrows: false,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 10000,
            slidesToScroll: 1
        });

        // portfolio active
        $('.portfolio-area').imagesLoaded( function() {
            var grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.grid-item'
                }
            })

            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                grid.isotope({ filter: filterValue });
            });

            //for portfolio menu active class
            $('.portfolio-menu button').on('click', function (event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });

        });

        // magnificPopup
        $('.popup-img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        // blog - active
        $('.active-latest-blog').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // testimonial-active
        $('.testimonial-active').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // testimonial-active
        $('.testimonial-active-3').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
        });


        // brand-active
        $('.brand-active').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /** counter **/
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        // testimonial having two parts / sections
        $('.testimonia-item-active').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.testimonial-nav'
        });
        $('.testimonial-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.testimonia-item-active',
            dots: false,
            prevArrow:'<button type="button" class="prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow:'<button type="button" class="next"><i class="fas fa-chevron-right"></i></button>',
            centerMode: true,
            focusOnSelect: true,
            centerPadding:0,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                    }
                }
            ]
        });
		

	});

}(jQuery));