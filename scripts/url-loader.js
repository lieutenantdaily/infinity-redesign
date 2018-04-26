//Load Sections**********************************************************
$(function () {
    $('#info').load('./ajax/info.htm');
});
//***********************************************************************







var Ssection0 = "infinity-redesign";
var Ssection1 = "meet";
var Ssection2 = "info";
var Ssection3 = "schools";
var Ssection4 = "questions";
var Ssection5 = "contact";


//Fade/Out In - Title Borders**********************************************************
$(document).ready(function () {

    //Call Functions*****************************************************************************
    $(function () {
        $.fn.menuBorderTopFunction($('.nav-word1'), $('.block1'), $('.block2'), "Title 0", "One", "0", Ssection0);
        $.fn.menuBorderTopFunction($('.nav-word2'), $('.block2'), $('.block3'), "Title 1", "Two", "1", Ssection1);
        $.fn.menuBorderTopFunction($('.nav-word3'), $('.block3'), $('.block5'), "Title 2", "Three", "2", Ssection2);
        $.fn.menuBorderTopFunction($('.nav-word4'), $('.block5'), $('.block6'), "Title 4", "Four", "4", Ssection3);
        $.fn.menuBorderTopFunction($('.nav-word5'), $('.block6'), $('.block7'), "Title 5", "Five", "5", Ssection4);
        $.fn.menuBorderTopFunction($('.nav-word6'), $('.block7'), $('#base'), "Title 5", "Contact", "5", Ssection5);
    });
    //******************************************************************************


    //CODE*****************************************************************************
    $.fn.menuBorderTopFunction = function (title, divOUT1, divOUT2, historyOUT, historyIN, linkTitleOUT, linkTitleIN) {

        var scrollTop1 = $(window).scrollTop();
        var elementOffset1 = divOUT1.offset().top;
        var distance1 = (elementOffset1 - scrollTop1);

        var scrollTop2 = $(window).scrollTop();
        var elementOffset2 = divOUT2.offset().top;
        var distance2 = (elementOffset2 - scrollTop2);

        var shown = 0

        if (distance1 < 550 && distance2 > 551) {
            title.css('border-top', 'solid 10px #aaa');
            if (shown == 0) {
                var stateObj = {
                    foo: linkTitleIN
                };
                history.replaceState(stateObj, historyIN, "/" + linkTitleIN);
                shown = 1;
            }
        } else {
            title.css('border-top', 'solid 0px #aaa');
            shown = 0;
        }

        $(window).on('scroll', function () {
            scrollTop1 = $(window).scrollTop();
            elementOffset1 = divOUT1.offset().top;
            distance1 = (elementOffset1 - scrollTop1);

            scrollTop2 = $(window).scrollTop();
            elementOffset2 = divOUT2.offset().top;
            distance2 = (elementOffset2 - scrollTop2);


            if (distance1 < 550 && distance2 > 551) {
                title.css('border-top', 'solid 10px #aaa');
                if (shown == 0) {
                    var stateObj = {
                        foo: linkTitleIN
                    };
                    history.replaceState(stateObj, historyIN, "/" + linkTitleIN);
                    shown = 1;
                }
            } else {
                title.css('border-top', 'solid 0px #aaa');
                shown = 0;
            }

        });
    }
    //******************************************************************************

});

//******************************************************************************


//Fade Dark - logo-background**********************************************************
$(function () {
    var divOUT = $('#block1');
    var scrollTop = $(window).scrollTop();
    var elementOffset = divOUT.offset().top;
    var distance = (elementOffset - scrollTop);


    if (distance < -5) {
        //$('.navigation-bg').stop().animate({ backgroundColor: "#3a393c" },0);
        //$('#logo-background').animate({backgroundColor: 'none repeat scroll 0% 0% rgba(255, 255, 255, 0.92);'});
        //alert('dark');
        $('#logo-background').fadeOut(0);
        $('#logo-background-dark').fadeIn(0);
        $('#user-nav').css({
            backgroundColor: '#3a393c'
        })
        $('.hamburger').css({
            color: '#3a393c'
        })

        $('#logo').fadeOut(0);
        $('#logo-dark').fadeIn(0);

    } else {
        //$('.navigation-bg').stop().animate({ backgroundColor: "#000000" },0);
        //$('#logo-background').animate({backgroundColor: 'none repeat scroll 0% 0% rgba(32, 32, 32, 0.92);'});
        //alert('light');
        $('#logo-background-dark').fadeOut(0);
        $('#logo-background').fadeIn(0);
        $('#user-nav').css({
            backgroundColor: 'transparent'
        })
        $('.hamburger').css({
            color: 'white'
        })

        $('#logo-dark').fadeOut(0);
        $('#logo').fadeIn(0);

    }


    var pathname = $(location).attr('href');

    if ((/infinity-redesign/.test(pathname))) {
        //alert('contact');

        $('#logo-background').fadeIn(0);
        $('#logo-background-dark').fadeOut(0);
        $('#user-nav').css({
            backgroundColor: '#transparent'
        })
        $('.hamburger').css({
            color: 'white'
        })

        $('#logo').fadeIn(0);
        $('#logo-dark').fadeOut(0);
        //alert('1');

    }

    if ((/meet/.test(pathname))) {
        //alert('contact');

        $('#logo-background').fadeOut(0);
        $('#logo-background-dark').fadeIn(0);
        $('#user-nav').css({
            backgroundColor: '#3a393c'
        })
        $('.hamburger').css({
            color: '#3a393c'
        })

        $('#logo').fadeOut(0);
        $('#logo-dark').fadeIn(0);


    }

    if ((/four/.test(pathname))) {
        //alert('contact');

        $('#logo-background').fadeOut(0);
        $('#logo-background-dark').fadeIn(0);
        $('#user-nav').css({
            backgroundColor: '#3a393c'
        })
        $('.hamburger').css({
            color: '#3a393c'
        })

        $('#logo').fadeOut(0);
        $('#logo-dark').fadeIn(0);


    }

    if ((/five/.test(pathname))) {
        //alert('contact');

        $('#logo-background').fadeOut(0);
        $('#logo-background-dark').fadeIn(0);
        $('#user-nav').css({
            backgroundColor: '#3a393c'
        })
        $('.hamburger').css({
            color: '#3a393c'
        })

        $('#logo').fadeOut(0);
        $('#logo-dark').fadeIn(0);


    }


    if ((/contact/.test(pathname))) {
        //alert('contact');

        $('#logo-background').fadeOut(0);
        $('#logo-background-dark').fadeIn(0);
        $('#user-nav').css({
            backgroundColor: '#3a393c'
        })
        $('.hamburger').css({
            color: '#3a393c'
        })

        $('#logo').fadeOut(0);
        $('#logo-dark').fadeIn(0);


    }


    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();
        elementOffset = divOUT.offset().top;
        distance = (elementOffset - scrollTop);

        if (distance < -5) {
            //$('#main').css('opacity', '.5');
            //$('#logo-background').stop().animate({ backgroundColor: "rgba(32, 32, 32, 0.92);" },700);
            //$('#logo-background').css('transition', 'rgba(255, 255, 255, 0.92)');
            //$('#logo-background').css("background", "rgba(32, 32, 32, 0.92)");
            $('#logo-background').fadeOut(600);
            $('#logo-background-dark').fadeIn(600);

            $('#user-nav').css({
                backgroundColor: '#3a393c'
            })
            $('.hamburger').css({
                color: '#3a393c'
            })

            $('#logo').fadeOut(600);
            $('#logo-dark').fadeIn(600);
            //alert('dark');

        } else {
            //$('#main').css('opacity', '1');
            //$('#logo-background').stop().animate({ backgroundColor: "rgba(255, 255, 255, 0.92);" },700);
            //$('#logo-background').css('transition', 'rgba(32, 32, 32, 0.92)');
            //$('#logo-background').css("background", "rgba(255, 255, 255, 0.92)");
            $('#logo-background-dark').fadeOut(600);
            $('#logo-background').fadeIn(600);

            $('#user-nav').css({
                backgroundColor: 'transparent'
            })
            $('.hamburger').css({
                color: 'white'
            })


            $('#logo-dark').fadeOut(600);
            $('#logo').fadeIn(600);
            //alert('light');

        }

    });



}); //]]>
//******************************************************************************