$(function($){
    "use strict"

   /* Offset start */
	var html_body = $('html, body'),
		nav = $('nav'),
		navOffset = nav.offset().top,
		$window = $(window);
	/* offset ends */

	$('nav a').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				html_body.animate({
					scrollTop: target.offset().top - 30
				}, 1500);
				return false;
			}
		}
	});
	//navbar fixed js here   
	$window.on('scroll', function () {

		var scrollPos = $window.scrollTop();

		if (scrollPos > navOffset) {
			$('nav').addClass('navbar-fixed');
		} else {
			$('nav').removeClass('navbar-fixed');
		}

	});
   //scrollspy menu
	$('body').scrollspy({
		target: '#navbarSupportedContent',
		offset: 80
	});
    
    
  //categoris slider 
  $('.cat_info_wrap').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            autoplay:true,
            arrows: true,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    
    //news slider 
    $('.news_info_wrap').slick({
            dots: false,
            infinite: true,
            speed: 300,
            autoplay:true,
            arrows:false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    
    //partners slider
    $('.partners_slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            autoplay:true,
            arrows: false,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    
    
    //testimonial_slider slider
    $('.testimonial_slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            autoplay:true,
            arrows: false,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
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
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    
    
});

