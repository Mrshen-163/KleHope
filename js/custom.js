$(function () {

    $("a.mean-expand").click(function () {
        $(this).siblings('.hover-menu').toggle(200);
        $(this).toggleClass('open');
    })


    function animateCSS(element, animationName) {
        const node = document.querySelector(element)
        node.classList.add('animated', animationName)
    }

//判断区域是否可视

    $(window).on('scroll', function () {

        if ($(this).scrollTop() >= 700) {
            $('#goTop').fadeIn(300);
        } else {
            $('#goTop').fadeOut(200);
        }

        var headerHeight=$('section#menu').outerHeight();
        if($(this).scrollTop()>=headerHeight+100){
            $("section#menu").addClass('sticky');
        }else{
            $("section#menu").removeClass('sticky');
        }

    })
    //滚动到顶部

    $('#goTop').click(function () {

        $('body,html').animate({
            scrollTop : 0
        }, 1000);

    })

})