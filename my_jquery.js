$(document).ready(function () {

    // Scroll spy
    $('body').scrollspy({
        target: "#navbar"
    });

    // Navbar fade
    changeNavbar();

    $(window).scroll(function () {
        changeNavbar();
        teamTxtFlyIn();
        heroTxtFlyIn();
        scrollbar();
    });

    function changeNavbar() {
        var navbar = $(".navbar-detect");
        var viewHeight = window.innerHeight;
        if ($(this).scrollTop() >= viewHeight-100) {
            navbar.addClass("navbg-dark").removeClass("navbg-transparent");
        } else if ($(this).scrollTop() < viewHeight-100) {
            navbar.removeClass("navbg-dark").addClass("navbg-transparent");
        }
    }

    function teamTxtFlyIn() {
        var navbar = $(".team-item");
        var ctnNum = 5;
        var viewHeightTeam = window.innerHeight * ctnNum;
        if ($(this).scrollTop() >= viewHeightTeam*((ctnNum-0.5)/ctnNum)) {
            navbar.addClass("visible").removeClass("hidden");
        } else if ($(this).scrollTop() < viewHeightTeam*((ctnNum-1)/ctnNum)) {
            navbar.removeClass("visible").addClass("hidden");
        }
    }

    function heroTxtFlyIn() {
        var navbar = $(".hero-hook");
        var viewHeight = window.innerHeight;
        if ($(this).scrollTop() >= viewHeight) {
            navbar.addClass("hidden").removeClass("visible");
        } else if ($(this).scrollTop() < viewHeight-((viewHeight*2)/3)) {
            navbar.removeClass("hidden").addClass("visible");
        }
    }

    function scrollbar() {
        var viewHeight = window.innerHeight;
        var ctnNum = 5;
        var percentHeight = ($(this).scrollTop() / (viewHeight*ctnNum))*100;
        var percentHeight = percentHeight.toString()+"%";
        document.getElementById("scrollbar").style.width = percentHeight;
    }
});