$(function () {

    var owl = $('#home-slider .row');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX'
    });
    $('.owl-next').click(function () {
        owl.trigger('next.owl.carousel', [300]);
    })
    $('.owl-next').mouseenter(function () {
        owl.trigger('stop.owl.autoplay');
    }).mouseleave(function () {
        owl.trigger('play.owl.autoplay');
    })
    $('.owl-prev').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    })
    $('.owl-prev').mouseenter(function () {
        owl.trigger('stop.owl.autoplay');
    }).mouseleave(function () {
        owl.trigger('play.owl.autoplay');
    })

    function animateCSS(element, animationName) {
        const node = document.querySelector(element)
        node.classList.add('animated', animationName)
    }

//判断区域是否可视
    function isToSee(item) {
        var $item = item;
        var $itemOffsetTop = $item.offset().top;
        var $itemHeight = $item.outerHeight();
        var $winScrollHeight = $(window).scrollTop();
        var $winHeight = $(window).height();
        if (!($winScrollHeight > $itemOffsetTop + $itemHeight) && !($winScrollHeight < $itemOffsetTop - $winHeight)) {
            return true;
        }
    }

    $(window).on('scroll', function () {
        if (isToSee($('section.support'))) {
            animateCSS('.slideImg', 'fadeInUp');
        }

    })
    $('body').running();


    $("a.filter").each(function () {
        var $isotope = $("#filter-items");
        var $filterChoice = $(this);
        var filter = function () {
            var type = $filterChoice.data("type") || "*";
            if (type !== "*") {
                type = '[data-type="' + type + '"]';
            }
            $isotope.isotope({filter: type});
        };

        $isotope.isotope({
            itemSelector: ".filter-item",
            layoutMode: "masonry"
        });

        $(this).on("click", filter);

    });

    var owl2 = $('.slider.owl-carousel');
    owl2.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateOut: 'moveDown',
        animateIn: 'moveRight'
    });
    $('.owl-next-arrow').click(function () {
        owl2.trigger('next.owl.carousel', [300]);
    })
    $('.owl-next-arrow').mouseenter(function () {
        owl2.trigger('stop.owl.autoplay');
    }).mouseleave(function () {
        owl2.trigger('play.owl.autoplay');
    })
    $('.owl-prev-arrow').click(function () {
        owl2.trigger('prev.owl.carousel', [300]);
    })
    $('.owl-prev-arrow').mouseenter(function () {
        owl2.trigger('stop.owl.autoplay');
    }).mouseleave(function () {
        owl2.trigger('play.owl.autoplay');
    })


    var owl3 = $('.slide11.owl-carousel');
    owl3.owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        animateIn: 'flipInX',
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    $('.arrow.next').click(function () {
        owl3.trigger('next.owl.carousel', [300]);

    })
    $('.arrow.next').mouseenter(function () {
        owl3.trigger('stop.owl.autoplay');
    }).mouseleave(function () {
        owl3.trigger('play.owl.autoplay');
    })
    $('.arrow.pre').click(function () {
        owl3.trigger('prev.owl.carousel', [300]);
    })
    $('.arrow.pre').mouseenter(function () {
        owl3.trigger('stop.owl.autoplay');
    }).mouseleave(function () {
        owl3.trigger('play.owl.autoplay');
    })

    var feedbackOwl = $('.feedback.owl-carousel');
    feedbackOwl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateOut: 'fadeOutRight',
        animateIn: 'fadeInLeft'
    });
})