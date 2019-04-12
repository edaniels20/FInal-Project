$(document).ready(function(){
    $(".slider-main").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        pauseOnHover: true
    })
    window.onscroll = function() {scrollingNavbar()};

    var navbar = document.getElementById("navbar");

    var sticky = navbar.offsetTop;

    function scrollingNavbar() {
        if (window.pageYOffset >= sticky + 150) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
});