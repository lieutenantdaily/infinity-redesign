//Responsive**********************************************************0987
$(document).ready(function () {

    
    var pathname = $(location).attr('href');
    var h = $(window).height();
    var w = $(window).width();
    var st = $(this).scrollTop();
    var mobilecheck = 0;
    var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
    var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
    var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");
    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
    var landscapetrigger = 0;

    
    
    //All*****************************************
    
    $('.logos').css('left', '0');
    //$('.envira-gallery-item').css('border-radius', '2px');
    //$('.envira-gallery-item').css('overflow', 'hidden');
    //$('.envira-gallery-item').css('box-shadow', '0px 0px 3px 0px rgba(0,0,0,0.5)');
    
    $(".first-pane").css({'height':($(".second-pane").height()-80)});
    $(".fourth-pane").css({'height':($(".third-pane").height()-80)});
    //$("#coupon").css('height', w / 2.20);
    
    
    //All*****************************************

    $('.close-button').click(function () {

        window.location.href = "";

    });

    if (isiPhone > -1) {
        mobilecheck = 1;
    }
    if (isiPad > -1) {
        mobilecheck = 1;
    }
    if (isiPod > -1) {
        mobilecheck = 1;
    }
    if (isAndroid > -1) {
        mobilecheck = 1;
    }

    



    //Responsive Actions*****************************************************************************

    
    
    
    
    
    
    //MOBILE******************************************************
    function mobile() {

        //Logo and Nav******************************************************
        $('.logos').css('margin-left', '-2px');
        $('#line2').fadeOut(0);
        $('.navigation-top').css('visibility', 'hidden');
        $('#hamburger').fadeIn(0);
        //Logo and Nav******************************************************

        
        
        //All Sections******************************************************
        $('h1,h2,h3,h4,h5,h6').css('text-align', 'center');
        $('.inner20').css('width', (w * .88) - 30);
        $('.inner21, .inner22').css('width', '57%');
        $('.inner21, .inner22').css('margin-left', '6%');
        $('.inner21, .inner22').css('margin-right', '6%');
        $('.inner21, .inner22').css('max-width', '1000px');
        //$('.allow-wider').css('padding-left', '0%');
        //$('#load-background').css('zoom', '60%');
        //$('#load-background').css('padding-top', '20%');
        //All Sections******************************************************

        
        
        //Meet Us******************************************************
        $('#background-one').css('background-position', '85% 50%');
        
        $('.block1').css('margin-right', '');
        $('.block1').css('margin-left', '6%');
        $('.block-box-section-one').css('margin-left', '0');
        
        $('#intro').css('left', '5%');
        $('#intro').css('top', '30%');
        $('#intro').css('font-size', '28px');
        //$('#intro').css('text-shadow', '2px 2px #000000');
        
        $('#pi1').css('font-size', '40.25px');
        $('#pi2').css('font-size', '63.75px');
        $('#pi2').css('margin-top', '-15px');
        //*************************************************************



        //Store Info******************************************************
        $('.info-hours, .info-map').css('width', '80%');
        $('.info-hours, .info-map').css('margin-left', '1%');
        $('.info-hours, .info-map').css('margin-right', '1%');
        $('.info-hours, .info-map').css('max-width', '550px');
        $("#info2").css({'height':($("#info2").width())});
        $('.labelM').css('margin-top', '175px');
        $('.labelM').css('margin-bottom', '0px');
        $('.280').css('margin-top', '280px');
        $('.iframe-bgM').fadeIn();
        $('.iframe-bg').fadeOut();
        //*****************************************************************
   
        

        //Coupon******************************************************
        $("#coupon").css('height', w / 2.20);
        //******************************************************

        //Schools******************************************************
        $('#background-four').css('background-position', 'center');
        $('.table-padding').css('font-size', '20px');
        $('.list-icon-left, .list-icon-right').css('font-size', '28px');
        $('.list-text-left, .list-text-right').css('font-size', '28px');
        $('#school-linkset-2').fadeIn();
        $('#school-linkset-1').fadeOut();

        if (w < 600) {
            $('.letter-head').css('font-size', '35px');
            $('.list-icon-left, .list-icon-right').css('font-size', '18px');
            $('.list-text-left, .list-text-right').css('font-size', '20px');

            if (w < 410) {
                $('.letter-head').css('font-size', '30px');
                $('.list-icon-left, .list-icon-right').css('font-size', '16px');
                $('.list-text-left, .list-text-right').css('font-size', '18px');
            }
        }
        //******************************************************
        
        //faq******************************************************
        $('#background-five').css('background-position', 'center');
        $('#faq-linkset-2').fadeIn();
        $('#faq-linkset-1').fadeOut();
        //******************************************************

        //Contact******************************************************
        $('#picturefinal').fadeOut(0);
        $('#picturefinal-mini').fadeIn(0);
        //$('#base-shell').fadeOut(0);
        //Contact******************************************************

        //Blog******************************************************
        /*
        $('.archive .main,.blog .main').css('width', '90%');
        $('.excerpt').css('margin', '30px');
        $('.excerpt').css('margin-top', '40px');
        $('.excerpt').css('margin-bottom', '40px');
        $('.excerpt:first-of-type').css('margin-top', '60px');

        if (w < 791) {
            $('.archive .main,.blog .main').css('width', '100%');
            $('.excerpt').css('margin', '20px');
            $('.excerpt:first-of-type').css('margin-top', '40px');
        }
        */
        //Blog******************************************************

    }
    //MOBILE******************************************************


    //DESKTOP******************************************************    
    function desktop() {
        //Logo and Nav******************************************************
        $('.logos').css('margin-left', ((w - 940) / 2) - 30);
        $('#line2').fadeIn(0);
        $('.navigation-top').css('visibility', 'visible');
        $('#hamburger').fadeOut(0);
        $('#mini-menu, #mini-menu-background').fadeOut(0);
        $('#mini-menu').css('right', '-300px');
        $('#hamburger').css('right', '25px');
        //Logo and Nav******************************************************

        //All Sections******************************************************
        $('h1,h2,h3,h4,h5,h6').css('text-align', 'left');
        //$('.inner20').css('width', '46%');
        $('.inner20').css('width', (w * .88) - 30);
        $('.inner21, .inner22').css('width', '46%');
        $('.inner21').css('margin-left', '1%');
        $('.inner21').css('margin-right', '3%');
        $('.inner22').css('margin-left', '3%');
        $('.inner22').css('margin-right', '1%');
        $('.inner21, .inner22').css('max-width', '428px');
        //$('.allow-wider').css('max-width', '600px');
        //$('.allow-wider').css('padding-left', '3%');
        //$('#load-background').css('zoom', '100%');
        //$('#load-background').css('padding-top', '0');
        //All Sections******************************************************

        
        
        //Meet Us******************************************************
        $('#background-one').css('background-position', 'center');
        
        $('.block1').css('margin-right', '6%');
        $('.block1').css('margin-left', '');
        $('.block-box-section-one').css('margin-left', '50%');
        
        $('#intro').css('left', '20%');
        $('#intro').css('top', '30%');
        $('#intro').css('font-size', '38px');
        $('#intro').css('text-shadow', '0px 0px transparent');
        
        $('#pi1').css('font-size', '55px');
        $('#pi2').css('font-size', '85px');
        $('#pi2').css('margin-top', '-22px');
        //**************************************************************
        

        
        
        //Store Info******************************************************
        $('.info-hours, .info-map').css('width', '46%');
        $('.info-hours').css('margin-left', '1%');
        $('.info-hours').css('margin-right', '3%');
        $('.info-map').css('margin-left', '3%');
        $('.info-map').css('margin-right', '1%');
        $('.info-hours, .info-map').css('max-width', '428px');
        $("#info2").css({'height':($("#info2").width())});
        $('.labelM').css('margin-top', '');
        $('.labelM').css('margin-bottom', '280px');
        $('.280').css('margin-top', '0px');
        $('.iframe-bg').fadeIn();
        $('.iframe-bgM').fadeOut();
        //*****************************************************************

        
        
        //Coupon******************************************************
        $("#coupon").css('height', w / 2.20);
        //******************************************************

        //Schools******************************************************
        $('#background-four').css('background-position', 'center');
        $('.letter-head').css('font-size', '42px');
        $('.table-padding').css('font-size', '20px');
        $('.list-icon-left, .list-icon-right').css('font-size', '18px');
        $('.list-text-left, .list-text-right').css('font-size', '20px');
        $('#school-linkset-1').fadeIn();
        $('#school-linkset-2').fadeOut();
        //******************************************************
        
        //faq******************************************************
        $('#background-five').css('background-position', 'center');
        $('#faq-linkset-1').fadeIn();
        $('#faq-linkset-2').fadeOut();
        //******************************************************

        //Contact******************************************************
        $('#picturefinal').fadeIn(0);
        $('#picturefinal-mini').fadeOut(0);
        //$('#base-shell').fadeIn(0);
        //Contact******************************************************

        //Blog******************************************************
        $('.archive .main,.blog .main').css('width', '90%');
        $('.excerpt').css('margin', '30px');
        $('.excerpt').css('margin-top', '40px');
        $('.excerpt').css('margin-bottom', '40px');
        $('.excerpt:first-of-type').css('margin-top', '60px');
        //Blog******************************************************

        open = 0;

    }
    //DESKTOP******************************************************

    //******************************************************************************








    if (mobilecheck == 1) {
        $('.expand').css('visibility', 'hidden');
        $('.close-button').fadeOut(0);
        $('.footerbar').fadeIn(0);
        $('.bottom-margin').fadeIn(0);
        $('.bottom-margin').css('height', '80px');


        var pathname = $(location).attr('href');

        function doOnOrientationChange() {
            switch (window.orientation) {
            case -90:
            case 90:
                //alert('landscape');

                /*w = $(window).width();
                    
                if (w < 940) {
                    $('.logo').css('visibility', 'hidden');
                    $('.logo-background').fadeOut(0);
                    $('.navigation-top').css('visibility', 'hidden');
                    //$('.bottom').css('zoom', '.5');
                    $('.footerbar').css('top', '0');
                    $('body, html').css('margin-top', '-2px');
                }*/

                if (isiPad > -1) {
                    //document.getElementById("viewport").setAttribute("content", "width=1068");
                } else {

                    if (w < 940) {
                        landscapetrigger = 1;
                        document.getElementById("viewport").setAttribute("content", "width=1068");

                        h = $(window).height();
                        w = $(window).width();

                        desktop();



                        $('.picture-top').css('height', h - 64);
                        $('.load-shell-center').css('margin-top', (h - 400) / 2);


                        $('.ie-slideshow').css('height', h);
                        $('.ie-slideshow').css('width', w);



                        if ((/#/.test(pathname))) {

                        } else {
                            window.location = pathname + '#';
                        }

                    } else {
                        document.getElementById("viewport").setAttribute("content", "maximum-scale=1.0, initial-scale=1.0");

                        if (w < 940) {
                            mobile();

                        } else {
                            desktop();

                        }

                        //$('.expand').css('margin-left', w - 52);
                    }

                }






                break;
            default:
                //alert('portrait');

                if (isiPad > -1) {
                    //document.getElementById("viewport").setAttribute("content", "width=1068");
                } else {

                    if (landscapetrigger == 1) {
                        landscapetrigger = 0;
                        document.getElementById("viewport").setAttribute("content", "maximum-scale=1.0, initial-scale=1.0");

                        w = $(window).width();

                        if (w < 940) {
                            mobile();

                        } else {
                            desktop();

                        }

                        //$('.expand').css('margin-left', w - 52);
                    }

                }
                break;
            }
        }

        window.addEventListener('orientationchange', doOnOrientationChange);

        // Initial execution if needed
        doOnOrientationChange();


    }
    //alert(pathname);
    //console.log('resizing');
    //console.log(w);
    if (w < 940) {
        //console.log(w);
        mobile();
        

    } else {
        desktop();

    }
    //$('.expand').css('margin-left', w - 52);



    $(window).on('resize', function () {

        w = $(window).width();
        if (w < 940) {
            mobile();

        } else {
            desktop();

        }

        //$('.expand').css('margin-left', w - 52);


    });











}); //]]> 
//************************************************************************************************


//Resize ALL**********************************************************0987
$(function () {
    //detect Firefox and set absolute for slideshow
    var FF = !(window.mozInnerScreenX == null);


    if (FF) {
        //alert("ff");

        var w = $(window).width();

        if (w < 940) {

            $('#load-shell, #big-logo').fadeOut(0);
            $('#load-background').fadeOut(0);

        }


        $.fn.animateRotate = function (angle, duration, easing, complete) {
            var args = $.speed(duration, easing, complete);
            var step = args.step;
            return this.each(function (i, e) {
                args.step = function (now) {
                    $.style(e, 'transform', 'rotate(' + now + 'deg)');
                    if (step) return step.apply(this, arguments);
                };

                $({
                    deg: 0
                }).animate({
                    deg: angle
                }, args);
            });
        };

        $.fn.animateRotateMinus = function (angle, duration, easing, complete) {
            var args = $.speed(duration, easing, complete);
            var step = args.step;
            return this.each(function (i, e) {
                args.step = function (now) {
                    $.style(e, 'transform', 'rotate(' + now + 'deg)');
                    if (step) return step.apply(this, arguments);
                };

                $({
                    deg: 180
                }).animate({
                    deg: angle
                }, args);
            });
        };



        $('.block-scroll-next, .scroll-indicator').animateRotate(180, 0);


        $('.block-scroll-next, .scroll-indicator').animateRotateMinus(0, 0);


    }


    var h = $(window).height();
    var w = $(window).width();


    $('.picture-top').css('height', h - 64);
    $('#background-picture').css('height', h);

    $('.load-shell-center').css('margin-top', (h - 400) / 2);

    //MAKE BACKGROUNDS MATCH CONTAINERS*****************************

    window.onload = function () {

        var bgHeight1 = $('#section-one').height();
        var bgHeight3 = $('#section-three').height();
        var bgHeight5 = $('#section-five').height();

        $('#background-main1').css('height', bgHeight1 + 20);
        $('#background-main3').css('height', bgHeight3 + 20);
        $('#background-main5').css('height', bgHeight5 + 20);

    };

    //MAKE BACKGROUNDS MATCH CONTAINERS*****************************



    $('.ie-slideshow').css('height', h);
    $('.ie-slideshow').css('width', w);

    var width = $(window).width(),
        height = $(window).height();

    $(window).on('resize', function () {


        h = $(window).height();
        w = $(window).width();

        //MAKE BACKGROUNDS MATCH CONTAINERS*****************************

        var bgHeight1 = $('#section-one').height();
        var bgHeight3 = $('#section-three').height();
        var bgHeight5 = $('#section-five').height();

        $('#background-main1').css('height', bgHeight1 + 20);
        $('#background-main3').css('height', bgHeight3 + 20);
        $('#background-main5').css('height', bgHeight5 + 20);

        //MAKE BACKGROUNDS MATCH CONTAINERS*****************************


        //st = $(this).scrollTop();

        var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
        if (isAndroid > -1) {

            if ($(window).width() != width && $(window).height() != height) {


                $('.picture-top').css('height', h - 64);
                $('#background-picture').css('height', h);
                $('.load-shell-center').css('margin-top', (h - 400) / 2);





                $('.ie-slideshow').css('height', h);
                $('.ie-slideshow').css('width', w);


            }

        } else {

            $('.picture-top').css('height', h - 64);
            $('#background-picture').css('height', h);
            $('.load-shell-center').css('margin-top', (h - 400) / 2);





            $('.ie-slideshow').css('height', h);
            $('.ie-slideshow').css('width', w);

        }





    });


}); //]]> 
//************************************************************************************************