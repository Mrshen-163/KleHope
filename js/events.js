$(function () {
    var tag = true;
    var newItems = ` <div class="col-lg-4 col-md-6">
                <div class="item">
                    <div class="event-img">
                        <img src="img/campaign-img1.jpg" alt="">
                        <div class="date">
                            <span>31</span>Dec, 2020
                        </div>
                    </div>
                    <h3>Human Rights Conference</h3>
                    <span><i class="icofont-google-map"></i>Tokyo, Japan</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquancididunt ut labore et dolor.</p>
                </div>

            </div>`;
    var $loadHeight = $('.footer').offset().top;
    var scrollHeight = $(window).scrollTop();
    var windowHeight = $(this).height();
    var windowWith = $(this).width();

    function addNewItems(n) {
        setTimeout(function () {
            for (var i = 1; i <= n; i++) {
                $("#events .row").append(newItems);
            }
            tag = true;
        }, 3000)
        tag = false;
    }

    $(window).on('scroll', function () {
        if (tag) {
            if (windowHeight + scrollHeight > $loadHeight) {
                $('.loading').css('display', 'block');
                if (windowWith >= 992) {
                    addNewItems(3)
                } else if (768 < windowWith < 992) {
                    addNewItems(2)
                } else {
                    addNewItems(1)
                }
            }
        }
    })
})