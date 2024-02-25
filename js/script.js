$(document).ready(function () {

    // Smooth scroll on anchor click
    $("a").on('click', function (event) {
        var hash = this.hash;
        if (hash !== "") {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // Scroll to top button
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scroll on menu items click
    $('.navbarr .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
        $('.menu').toggleClass("teste");
    });

    // Toggle menu/navbar
    $('.menu-btn').click(function () {
        $('.navbarr .menu').addClass("active").removeClass("teste");
        $('.menu-btn').addClass("none");
        $('.menu-btn i').toggleClass("active");
        $('.menu-btn1').removeClass("none");
    });

    $('.menu-btn1').click(function () {
        $('.navbarr .menu').removeClass("active teste");
        $('.menu-btn i').toggleClass("active");
        $('.menu-btn1').addClass("none");
        $('.menu-btn').removeClass("none");
    });

    // Typing text animation
    var typingOptions = {
        strings: ["Desenvolvedor de Sites", "Técnico da informação", "Programador"],
        typeSpeed: 250,
        backSpeed: 60,
        loop: true
    };

    new Typed(".typing", typingOptions);
    new Typed(".typing-2", typingOptions);

    // Owl carousel
    $('.carousel').owlCarousel({
        margin: 25,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });

});
