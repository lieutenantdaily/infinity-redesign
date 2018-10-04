var Ssection0 = "infinity-redesign";
var Ssection1 = "meet";
var Ssection2 = "info";
var Ssection3 = "schools";
var Ssection4 = "faq";
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
    //*******************************************************************************


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


