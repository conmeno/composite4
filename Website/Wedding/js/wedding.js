$(document).ready(function () {
    // Sticky header
    var stickyHeaderTop = $('#bottom-header').offset().top;

    $(window).scroll(function () {
        if (parseInt($(window).scrollTop()) > parseInt(stickyHeaderTop)) {
            $('#bottom-header').css({ position: 'fixed', top: '0px' });
            $('#stickyalias').css('display', 'block');
        } else {
            $('#bottom-header').css({ position: 'static', top: '0px' });
            $('#stickyalias').css('display', 'none');
        }
    });

    // Page slide
    $('#bottom-header ul a').bind('click', function (event) {
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1300);
        event.preventDefault();
    });

    // Gallery slide
    $(".makeMeScrollable").smoothDivScroll({
        hotSpotScrolling: false,
        touchScrolling: true,
        manualContinuousScrolling: false,
        mousewheelScrolling: true
    });

    // Randomize an element
    var numberOfElements = $("#scrollableArea *").length;
    var randomNumber = Math.floor(Math.random() * numberOfElements + 1);
    $("#makeMeScrollable").smoothDivScroll("jumpToElement", "number", randomNumber);
});