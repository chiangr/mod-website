$(document).ready(function () {

    // Scroll spy
    $('body').scrollspy({
        target: "#navbar"
    });

    // Navbar fade
    changeNavbar();

    $(window).scroll(function () {
        changeNavbar();
    });

    function changeNavbar() {
        var navbar = $("#navbar");
        var viewHeight = window.innerHeight;
        if ($(this).scrollTop() >= viewHeight) {
            navbar.addClass("navbg-dark").removeClass("navbg-transparent");
        } else if ($(this).scrollTop() < viewHeight) {
            navbar.removeClass("navbg-dark").addClass("navbg-transparent");
        }
    }
});