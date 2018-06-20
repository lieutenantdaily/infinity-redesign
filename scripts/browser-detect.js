//Detect Webkit**********************************************************
$(document).ready(function () {
    var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
    var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
    var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");
    var bgDIVS = $('.block-border-inside, #background-one, #background-section-one, #background-three, #background-four');

    if (isiPhone > -1) {
        document.getElementById("viewport").setAttribute("content", "maximum-scale=0.9");
        document.getElementById("viewport").setAttribute("content", "initial-scale=0.9");
        
        bgDIVS.css('position', 'fixed');
        bgDIVS.css('background-attachment', 'local');
        //$('#base-text').css('position', 'absolute');
        //$('#base-text').css('bottom', '30px');
        //$('#base-text').css('font-size', '22px');
        $('.light-text').css('font-size', '22px');
        $('.light-text').css('color', '#c1c1c1');
        $('#base-text').css('color', '#c1c1c1');
    }
    if (isiPad > -1) {
        bgDIVS.css('position', 'fixed');
        bgDIVS.css('background-attachment', 'local');
        //$('#base-text').css('position', 'absolute');
        //$('#base-text').css('bottom', '30px');
        //$('#base-text').css('font-size', '22px');
        $('.light-text').css('font-size', '22px');
        $('.light-text').css('color', '#c1c1c1');
        $('#base-text').css('color', '#c1c1c1');
    }
    if (isiPod > -1) {
        bgDIVS.css('position', 'fixed');
        bgDIVS.css('background-attachment', 'local');
        //$('#base-text').css('position', 'absolute');
        //$('#base-text').css('bottom', '30px');
        //$('#base-text').css('font-size', '22px');
        $('.light-text').css('font-size', '22px');
        $('#base-text').css('font-size', '22px');
        $('.light-text').css('color', '#c1c1c1');
        $('#base-text').css('color', '#c1c1c1');
    }


    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
    if (isAndroid > -1) {
//        bgDIVS.css('position', 'absolute');
//        bgDIVS.css('background-attachment', 'local');
        
        //bgDIVS.css('background-attachment', '');
       // bgDIVS.css('transform', 'translateZ(-1px) scale(1.1)');
        
//        $('.light-text').css('font-size', '22px');
//        $('#base-text').css('font-size', '22px');
//        $('.light-text').css('color', '#c1c1c1');
//        $('#base-text').css('color', '#c1c1c1');
        
//        $('.background-main').css('display', 'none');
//        $('.block-border-inside').css('display', 'none');
        
//        
//        $('.bg-fix').css('background', 'none');
//        $('.bg-fix').css('background-attachment', '');

        
//        bgDIVS.css('z-index', '-10');

//        $('#section-five').css('display', 'none');
    
    } else if (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())) {

        if (/edge/.test(navigator.userAgent.toLowerCase())) {
            
            $('.background-main').css('display', 'none');
            $('.bg-f').css('display', 'none');

        } else {

            //bgDIVS.css('position', 'fixed');
            //bgDIVS.css('background-attachment', 'local');

            if (window.matchMedia) {
                var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.5), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen  and (min-device-pixel-ratio: 1.5), only screen and (min-resolution: 1.5dppx)");
                if (mq && mq.matches || (window.devicePixelRatio > 1.4)) {
                    //return true;
                    //alert('Retina!');
                    //bgDIVS.css('position', 'fixed');
                    //bgDIVS.css('background-attachment', 'local');
                } else {
                    //return false;
                    //alert('Old!');
                }
            }
            //$('.block-border-inside').css('position', 'fixed');
            //$('.block-border-inside').css('background-attachment', 'local');
            //$('.block-border-inside').css('-webkit-transform', 'translateZ(0)');
        }

    }



});
//******************************************************************