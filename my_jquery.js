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
        parallax();
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

    function parallax() {
        var viewHeight = window.innerHeight;
        var descImgCtn = 2;
        if ($(this).scrollTop() <= viewHeight*2) {
            var heroScroll = $(this).scrollTop()*0.4 + "px"
            document.getElementById("hero-ctn-1").style.backgroundPositionY = heroScroll;
        }
        /*
        var descImgScroll = toString(((viewHeight*descImgCtn)-$(this).scrollTop())) + "px"
        document.getElementById("desc-img-1").style.transform = "translateY(%s)",descImgScroll;
        */
    }

    function scrollbar() {
        var viewHeight = window.innerHeight;
        var ctnNum = 5;
        var percentHeight = ($(this).scrollTop() / (viewHeight*ctnNum))*100;
        var percentHeight = percentHeight.toString()+"%";
        document.getElementById("scrollbar").style.width = percentHeight;
    }
});