//Intro Fade In**********************************************************
$(function () {

    $('#pi1').delay(1000).fadeIn(1600);
    $('#pi2').delay(2000).fadeIn(1600);

    $('#pi1').animate({
        marginLeft: 0,
    }, {
        duration: 2000,
        queue: false
    });
    
    $('#pi2').animate({
        marginLeft: 0,
    }, {
        duration: 3000,
        queue: false
    });



});

//****************************************************************************

//Facebook Button**********************************************************
$(function () {


    /*$('#main').animate({
        opacity: 1,
    }, {
        duration: 1800,
        queue: false
    });*/

    $('#facebook-icon, .facebook-link').click(function () {

        $('#facebook-background').fadeIn(600);

        $('#facebook-icon').animate({
            opacity: 0,
            width: 0,
            height: 0,
            fontSize: 20
        }, {
            duration: 600,
            queue: false
        });

        $('#facebook-plugin').fadeIn(600);

        $('#facebook-plugin').animate({
            opacity: 1,
            width: 300,
            height: 215,
        }, {
            duration: 600,
            queue: false
        });

    });




    $('#facebook-background').click(function (e) {

        var container = $('#facebook-icon');

        if (!container.is(e.target) && container.has(e.target).length === 0) {

            $('#facebook-background').fadeOut(600);

            $('#facebook-plugin').fadeOut(600);

            $('#facebook-plugin').animate({
                opacity: 0,
                width: 0,
                height: 0,
            }, {
                duration: 600,
                queue: false
            });

            $('#facebook-icon').animate({
                opacity: 1,
                width: 50,
                height: 50,
                fontSize: 10
            }, {
                duration: 600,
                queue: false
            });

        }

    });


});

//****************************************************************************




//scroll links**********************************************************

$(function () {
    var scroller = 700;
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {

                //if (!$('html,body').is(':animated')) {

                //alert('not animated');

                $('html,body').animate({
                    scrollTop: target.offset().top
                }, scroller);
                return false;
                //}          

            }
        }
    });


});
//********************************************************************











//Fade In/Out section-five**********************************************************
$(function () {
    var fout = -1250;
    var fin = 412;
    var divOUT1 = $('#section-five');
    var divIN1 = $('.block-box-section-five');

    var scrollTop = $(window).scrollTop();

    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop);
    var v = 0;

    if (distance1 <= fin && distance1 >= fout) {
        $(function () {
            divIN1.animate({
                opacity: 1
            }, {
                duration: 600,
                queue: false
            });
            /*divIN1.animate({
                marginLeft: 0
            }, {
                duration: 600,
                queue: false
            });*/
            v = 1;
        });
    }

    if (distance1 > fin) {
        $(function () {
            divIN1.animate({
                opacity: 0
            }, {
                duration: 600,
                queue: false
            });
            /*divIN1.animate({
                marginLeft: -500
            }, {
                duration: 600,
                queue: false
            });*/
        });
    }
    if (distance1 < fout) {
        $(function () {
            divIN1.animate({
                opacity: 0
            }, {
                duration: 600,
                queue: false
            });
            /*divIN1.animate({
                marginLeft: -500
            }, {
                duration: 600,
                queue: false
            });*/
        });
    }




    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();

        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop);

        if (v == 0) {
            if (distance1 <= fin && distance1 >= fout) {
                v = 1;
                $(function () {
                    divIN1.animate({
                        opacity: 1
                    }, {
                        duration: 600,
                        queue: false
                    });
                    /*divIN1.animate({
                        marginLeft: 0
                    }, {
                        duration: 600,
                        queue: false
                    });*/
                });
            }
        }

        if (v == 1) {
            if (distance1 > fin) {
                v = 0;
                $(function () {
                    divIN1.animate({
                        opacity: 0
                    }, {
                        duration: 600,
                        queue: false
                    });
                    /*divIN1.animate({
                        marginLeft: -500
                    }, {
                        duration: 600,
                        queue: false
                    });*/
                });
            }
            if (distance1 < fout) {
                v = 0;
                $(function () {
                    divIN1.animate({
                        opacity: 0
                    }, {
                        duration: 600,
                        queue: false
                    });
                    /*divIN1.animate({
                        marginLeft: -500
                    }, {
                        duration: 600,
                        queue: false
                    });*/
                });
            }
        }




    });

}); //]]>
//******************************************************************************



//Resize .blockfinal for iPhone**********************************************************
$(function () {
    var divs = $('.bigger, #contact');
    var h = $(window).height();
    var isios = 0;
    var issmallios = 0;

    if (h < 762) {
        h = 762;
    }

    divs.css('height', h);
    $('#contact').css('margin-top', -h);
    $('.block7-shell').css('margin-top', h - 650 - 112);

    $(window).on('resize', function () {
        var h = $(window).height();
        //alert($('.block7').css('height'));

        if (h < 762) {
            h = 762;
        }

        var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
        var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
        var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");


        if (isiPhone > -1) {

            isios = 1;
            issmallios = 1;

        }

        if (isiPod > -1) {

            isios = 1;
            issmallios = 1;

        }


        if (isiPad > -1) {

            isios = 1;

        }


        if (isios == 1) {

            divs.css('height', h + 60);
            $('#contact').css('margin-top', -(h + 60));
            $('.block7-shell').css('margin-top', h + 60 - 650 - 112);
            //$('#mini-menu, #logo-background, #logo-background-dark').css('border-radius', '2px');


            if (issmallios == 1) {

                divs.css('height', h + 200);
                $('#contact').css('margin-top', -(h + 200));
                $('.block7-shell').css('margin-top', h + 200 - 650 - 112);

            }

        } else {

            divs.css('height', h);
            $('#contact').css('margin-top', -h);
            $('.block7-shell').css('margin-top', h - 650 - 112);

        }


    });


}); //]]> 
//****************************************************************************




//Fade In - header bar**********************************************************
$(function () {
    var divOUT = $('.block3');

    //var st = $(this).scrollTop();
    //alert(st);
    var scrollTop = $(window).scrollTop();
    //alert(scrollTop);
    var elementOffset = divOUT.offset().top;
    //alert(elementOffset);
    var distance = (elementOffset - scrollTop);
    //alert(distance);

    //Slideshow***********************    
    if (distance < 145) {
        $("#slideshow").fadeOut(0);
    }


    if (distance >= 145) {
        $("#slideshow").fadeIn(0);
    }
    //Slideshow***********************


    $(window).on('scroll', function () {
        //var st = $(this).scrollTop();
        //alert(st);
        scrollTop = $(window).scrollTop();
        //alert(scrollTop);
        elementOffset = divOUT.offset().top;
        //alert(elementOffset);
        distance = (elementOffset - scrollTop);
        //alert(distance);

        //Slideshow***********************    
        if ($("#slideshow").is(':visible')) {
            if (distance < 145) {
                $("#slideshow").fadeOut(0);
            }
        }
        if ($("#slideshow").is(':hidden')) {
            if (distance >= 145) {
                $("#slideshow").fadeIn(0);
            }
        }
        //Slideshow***********************


    });

}); //]]>
//******************************************************************************













//Fade In/Out facebook icon**********************************************************
$(function () {
    var fout = -1250;
    var fin = 412;
    var divOUT1 = $('#contact');

    var scrollTop = $(window).scrollTop();

    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop);
    var v = 0;

    if (distance1 <= fin && distance1 >= fout) {
        $(function () {

            $('#facebook-icon').animate({
                opacity: 0,
                width: 0,
                height: 0,
                fontSize: 20
            }, {
                duration: 600,
                queue: false
            });

            $('#facebook-background').fadeOut(600);

            $('#facebook-plugin').fadeOut(600);

            $('#facebook-plugin').animate({
                opacity: 0,
                width: 0,
                height: 0,
            }, {
                duration: 600,
                queue: false
            });

            v = 1;
        });
    }

    if (distance1 > fin) {
        $(function () {

            $('#facebook-icon').animate({
                opacity: 1,
                width: 50,
                height: 50,
                fontSize: 10
            }, {
                duration: 600,
                queue: false
            });

        });
    }
    if (distance1 < fout) {
        $(function () {

            $('#facebook-icon').animate({
                opacity: 1,
                width: 50,
                height: 50,
                fontSize: 10
            }, {
                duration: 600,
                queue: false
            });

        });
    }




    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();

        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop);

        if (v == 0) {
            if (distance1 <= fin && distance1 >= fout) {
                v = 1;
                $(function () {

                    $('#facebook-icon').animate({
                        opacity: 0,
                        width: 0,
                        height: 0,
                        fontSize: 20
                    }, {
                        duration: 600,
                        queue: false
                    });

                    $('#facebook-background').fadeOut(600);

                    $('#facebook-plugin').fadeOut(600);

                    $('#facebook-plugin').animate({
                        opacity: 0,
                        width: 0,
                        height: 0,
                    }, {
                        duration: 600,
                        queue: false
                    });

                });
            }
        }

        if (v == 1) {
            if (distance1 > fin) {
                v = 0;
                $(function () {

                    $('#facebook-icon').animate({
                        opacity: 1,
                        width: 50,
                        height: 50,
                        fontSize: 10
                    }, {
                        duration: 600,
                        queue: false
                    });

                });
            }
            if (distance1 < fout) {
                v = 0;
                $(function () {

                    $('#facebook-icon').animate({
                        opacity: 1,
                        width: 50,
                        height: 50,
                        fontSize: 10
                    }, {
                        duration: 600,
                        queue: false
                    });

                });
            }
        }




    });

}); //]]>
//******************************************************************************



var open = 0;

//Hamburger Click**********************************************************0987
$(function () {

    $('#mini-menu-background, #mini-menu-item').click(function () {


        if (open == 0) {




        } else {

            $('#mini-menu-background').fadeOut(500);

            $('#mini-menu').fadeOut(500);


            $('#mini-menu').animate({
                right: -300
            }, {
                duration: 500,
                queue: false
            });

            $('#hamburger').animate({
                right: 30
            }, {
                duration: 500,
                queue: false
            });



            open = 0;




        }

    });

    $('#hamburger').click(function () {


        if (open == 0) {


            $('#mini-menu').fadeIn(500);

            $('#mini-menu').animate({
                right: 0
            }, {
                duration: 500,
                queue: false
            });

            $('#hamburger').animate({
                right: -4
            }, {
                duration: 500,
                queue: false
            });

            $('#mini-menu-background').fadeIn(500);

            open = 1;


        } else {

            $('#mini-menu').fadeOut(500);


            $('#mini-menu').animate({
                right: -300
            }, {
                duration: 500,
                queue: false
            });

            $('#hamburger').animate({
                right: 30
            }, {
                duration: 500,
                queue: false
            });

            $('#mini-menu-background').fadeOut(500);

            open = 0;




        }

    });





}); //]]> 
//*************************************************************************************************