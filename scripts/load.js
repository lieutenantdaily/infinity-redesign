//Rotation Animation Function****************************************
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
//********************************************************************




//Load Store Info**********************************************************
$(function () {
    $('#info').load('./ajax/info.htm', function() {

        //Trigger Resize *this is because the page loads after the responsive script runs*
        $(window).trigger('resize'); 
        
        
        var infoH = new Waypoint({
            element: document.getElementById('info-hours'),
            handler: function() {

            //alert('Basic waypoint triggered');

            $('#info-hours').animateRotate(-5, 1000);  

            $('#info-hours').animate({
                    opacity: 1,
                }, {
                    duration: 600,
                    queue: false,
                    complete: function() { 


                        $('#labelH').animate({
                            opacity: 1
                        }, {
                            duration: 600,
                            queue: false
                        });



                    }
                });

                this.destroy();

              },
                offset: '65%'
        });
        
        var infoH = new Waypoint({
            element: document.getElementById('info-map'),
            handler: function() {

            //alert('Basic waypoint triggered');

            $('#info-map').animateRotate(0, 1000);  

            $('#info-map').animate({
                    opacity: 1,
                }, {
                    duration: 600,
                    queue: false,
                    complete: function() { 


                        $('#labelM').animate({
                            opacity: 1
                        }, {
                            duration: 600,
                            queue: false
                        });



                    }
                });

                this.destroy();

              },
                offset: '65%'
        });
        
    }); 
});

//***********************************************************************


//Load Coupon**********************************************************
$(function () {
    $('#coupon').load('./ajax/coupon.htm', function() {

        //Trigger Resize *this is because the page loads after the responsive script runs*
        $(window).trigger('resize'); 

        var couponContent = new Waypoint({
            element: document.getElementById('coupon-content'),
            handler: function() {

            $('#coupon').animate({
                    opacity: 1,
                }, {
                    duration: 600,
                    queue: false
                });

                this.destroy();

              },
                offset: '65%'
        });
        

        
    }); 
});

//***********************************************************************


//Load Schools**********************************************************
$(function () {
    
    var pathname = window.location.pathname;
    
    $('#schools').load('./ajax/uah.htm', function() {

        //Trigger Resize *this is because the page loads after the responsive script runs*
        $(window).trigger('resize'); 

        var couponContent = new Waypoint({
            element: document.getElementById('school-links'),
            handler: function() {

                $('#school-fade, #school-links, #school-linksM').animate({
                    opacity: 1,
                }, {
                    duration: 600,
                    queue: false
                });

                this.destroy();

              },
                offset: '65%'
        });
        

        
    }); 
    
    
    //animate drop-down
    
    var dropHeight = $('.mobile-shrink').height();
    var menuDropped = 0;
    $('.mobile-shrink').css('height', '0');
    
    
    $('.m-link, .select-link').on("click",function () {
        
        if (menuDropped == 0) {

            $("#mobile-select-link").removeClass("").addClass("selected");
            menuDropped = 1;
            $('.mobile-shrink').animate({
                height: 600,
                }, {
                    duration: 600,
                    queue: false
            });



        } else  {

            $("#mobile-select-link").removeClass("selected").addClass("");
            menuDropped = 0;
            $('.mobile-shrink').animate({
                height: 0,
                }, {
                    duration: 600,
                    queue: false
            });


        }
        
    });
    
    $('.select-link').on("click",function () {
        
        $(".select-link").removeClass("selected").addClass("");
        $(".select-link").text('select school');
        $(".select-link").append("<div style='float: right;'><i class='fas fa-chevron-circle-down'></i></div>");
        
        
    });
    
    $('.school-link').on("click",function () {
        
        $(".m-link").fadeIn();
        
        
    });
    
    $('.uah-link').click(function () {
        
        var pathname2 = window.location.pathname;
        window.history.pushState("","",pathname);
                
        $("#schools").load("ajax/uah.htm", function(){
            
            $(window).trigger('resize'); 
            
        });
        
        $('.bg-5').css('background-image', 'url('+ pathname +'images/photos/schools/uah.jpg)');
        
        $(".select-link").text($(".uah-link").html());
        $(".school-link").removeClass("selected").addClass("");
        $(".uah-link").removeClass("").addClass("selected");
        $(".m-link-uah").fadeOut();
        $(".select-link").removeClass("").addClass("selected");
        $(".select-link").append("<div style='float: right;'><i class='fas fa-chevron-circle-down'></i></div>");
        
        window.history.pushState("","",pathname2);
        
    });
    

    $('.calhoun-link').click(function () {
        
        var pathname2 = window.location.pathname;
        window.history.pushState("","",pathname);
        
        $("#schools").load("ajax/calhoun.htm", function(){
            
            $(window).trigger('resize'); 
            
        }); 
        
        $('.bg-5').css('background-image', 'url('+ pathname +'images/photos/schools/calhoun.jpg)');
        
        
        
        $(".school-5").fadeOut();
        $(".select-link").text($(".calhoun-link").html());
        $(".school-link").removeClass("selected").addClass("");
        $(".calhoun-link").removeClass("").addClass("selected");
        $(".m-link-calhoun").fadeOut();
        $(".select-link").removeClass("").addClass("selected");
        $(".select-link").append("<div style='float: right;'><i class='fas fa-chevron-circle-down'></i></div>");
        
        window.history.pushState("","",pathname2);
        
    });
    
    $('.faulkner-link').click(function () {
        
        var pathname2 = window.location.pathname;
        window.history.pushState("","",pathname);
        
        $("#schools").load("ajax/faulkner.htm", function(){
            
            $(window).trigger('resize'); 
            
        }); 
        
        $('.bg-5').css('background-image', 'url('+ pathname +'/images/photos/schools/faulkner.jpg)');
        
        
        
        $(".school-5").fadeOut();
        $(".select-link").text($(".faulkner-link").html());
        $(".school-link").removeClass("selected").addClass("");
        $(".faulkner-link").removeClass("").addClass("selected");
        $(".m-link-calhoun").fadeOut();
        $(".select-link").removeClass("").addClass("selected");
        $(".select-link").append("<div style='float: right;'><i class='fas fa-chevron-circle-down'></i></div>");
        
        window.history.pushState("","",pathname2);
        
    });
    
    $('.virginia-link').click(function () {
        
        var pathname2 = window.location.pathname;
        window.history.pushState("","",pathname);
        
        $("#schools").load("ajax/virginia.htm", function(){
            
            $(window).trigger('resize'); 
            
        }); 
        
        $('.bg-5').css('background-image', 'url('+ pathname +'images/photos/schools/virginia.jpg)');
        
        
        
        $(".school-5").fadeOut();
        $(".select-link").text($(".virginia-link").html());
        $(".school-link").removeClass("selected").addClass("");
        $(".virginia-link").removeClass("").addClass("selected");
        $(".m-link-calhoun").fadeOut();
        $(".select-link").removeClass("").addClass("selected");
        $(".select-link").append("<div style='float: right;'><i class='fas fa-chevron-circle-down'></i></div>");
        
        window.history.pushState("","",pathname2);
        
    });
    
    $('.drake-link').click(function () {
        
        var pathname2 = window.location.pathname;
        window.history.pushState("","",pathname);
        
        $("#schools").load("ajax/drake.htm", function(){
            
            $(window).trigger('resize'); 
            
        }); 
        
        $('.bg-5').css('background-image', 'url('+ pathname +'images/photos/schools/drake.jpg)');
        
        
        
        $(".school-5").fadeOut();
        $(".select-link").text($(".drake-link").html());
        $(".school-link").removeClass("selected").addClass("");
        $(".drake-link").removeClass("").addClass("selected");
        $(".m-link-calhoun").fadeOut();
        $(".select-link").removeClass("").addClass("selected");
        $(".select-link").append("<div style='float: right;'><i class='fas fa-chevron-circle-down'></i></div>");
        
        window.history.pushState("","",pathname2);
        
    });
    
    $('.oakwood-link').click(function () {
        
        var pathname2 = window.location.pathname;
        window.history.pushState("","",pathname);
        
        $("#schools").load("ajax/oakwood.htm", function(){
            
            $(window).trigger('resize'); 
            
        }); 
        
        $('.bg-5').css('background-image', 'url('+ pathname +'images/photos/schools/oakwood.jpg)');
        
        
        
        $(".school-5").fadeOut();
        $(".select-link").text($(".oakwood-link").html());
        $(".school-link").removeClass("selected").addClass("");
        $(".oakwood-link").removeClass("").addClass("selected");
        $(".m-link-calhoun").fadeOut();
        $(".select-link").removeClass("").addClass("selected");
        $(".select-link").append("<div style='float: right;'><i class='fas fa-chevron-circle-down'></i></div>");
        
        window.history.pushState("","",pathname2);
        
    });
    
    $('.anm-link').click(function () {
        
        var pathname2 = window.location.pathname;
        window.history.pushState("","",pathname);
        
        $("#schools").load("ajax/anm.htm", function(){
            
            $(window).trigger('resize'); 
            
        }); 
        
        $('.bg-5').css('background-image', 'url('+ pathname +'images/photos/schools/anm.jpg)');
        
        
        
        $(".school-5").fadeOut();
        $(".select-link").text("Alabama A&M");
        $(".school-link").removeClass("selected").addClass("");
        $(".anm-link").removeClass("").addClass("selected");
        $(".m-link-calhoun").fadeOut();
        $(".select-link").removeClass("").addClass("selected");
        $(".select-link").append("<div style='float: right;'><i class='fas fa-chevron-circle-down'></i></div>");
        
        window.history.pushState("","",pathname2);
        
    });
    
    $('.other-link').click(function () {
        
        var pathname2 = window.location.pathname;
        window.history.pushState("","",pathname);
        
        $("#schools").load("ajax/other.htm", function(){
            
            $(window).trigger('resize'); 
            
        }); 
        
        $('.bg-5').css('background-image', 'url('+ pathname +'images/photos/schools/other.jpg)');
        
        
        
        $(".school-5").fadeOut();
        $(".select-link").text($(".other-link").html());
        $(".school-link").removeClass("selected").addClass("");
        $(".other-link").removeClass("").addClass("selected");
        $(".m-link-calhoun").fadeOut();
        $(".select-link").removeClass("").addClass("selected");
        $(".select-link").append("<div style='float: right;'><i class='fas fa-chevron-circle-down'></i></div>");
        
        window.history.pushState("","",pathname2);
        
    });
                    
    
});

//***********************************************************************


//Load FAQ**********************************************************
$(function () {
    
    var pathname = window.location.pathname;
    
    $('#faq').load('./ajax/faq.htm', function() {

        //Trigger Resize *this is because the page loads after the responsive script runs*
        $(window).trigger('resize'); 

        var couponContent = new Waypoint({
            element: document.getElementById('section-six'),
            handler: function() {

                $('#faq-fade, #faq-links, #faq-linksM').animate({
                    opacity: 1,
                }, {
                    duration: 600,
                    queue: false
                });

                this.destroy();

              },
                offset: '130%'
        });
        

        
    }); 
    
    
    //animate drop-down
    
    var dropHeight = $('.mobile-shrink').height();
    var menuDropped = 0;
    $('.mobile-shrink').css('height', '0');
    
    
    $('.m-linkF, .select-linkF').on("click",function () {
        
        if (menuDropped == 0) {

            $("#mobile-select-linkF").removeClass("").addClass("selected");
            menuDropped = 1;
            $('.mobile-shrinkF').animate({
                height: 265,
                }, {
                    duration: 600,
                    queue: false
            });



        } else  {

            $("#mobile-select-linkF").removeClass("selected").addClass("");
            menuDropped = 0;
            $('.mobile-shrinkF').animate({
                height: 0,
                }, {
                    duration: 600,
                    queue: false
            });


        }
        
    });
    
    $('.select-linkF').on("click",function () {
        
        $(".select-linkF").removeClass("selected").addClass("");
        $(".select-linkF").text('select');
        $(".select-linkF").append("<div style='float: right;'><i class='fas fa-chevron-circle-down'></i></div>");
        
        
    });
    
    $('.faq-link').on("click",function () {
        
        $(".m-linkF").fadeIn();
        
        
    });
    
    $('.general-link').click(function () {
        
        var pathname2 = window.location.pathname;
        window.history.pushState("","",pathname);
                
        $("#faq").load("ajax/faq.htm", function(){
            
            $(window).trigger('resize'); 
            
        });
        
        //$('.bg-6').css('background-image', 'url('+ pathname +'images/photos/schools/uah.jpg)');
        
        $(".select-linkF").text($(".general-link").html());
        $(".faq-link").removeClass("selected").addClass("");
        $(".general-link").removeClass("").addClass("selected");
        $(".m-link-general").fadeOut();
        $(".select-linkF").removeClass("").addClass("selected");
        $(".select-linkF").append("<div style='float: right;'><i class='fas fa-chevron-circle-down'></i></div>");
        
        window.history.pushState("","",pathname2);
        
    });
    

    $('.buybacks-link').click(function () {
        
        var pathname2 = window.location.pathname;
        window.history.pushState("","",pathname);
        
        $("#faq").load("ajax/faq_buyback.htm", function(){
            
            $(window).trigger('resize'); 
            
        }); 
        
        //$('.bg-6').css('background-image', 'url('+ pathname +'images/photos/schools/calhoun.jpg)');
        
        
        $(".select-linkF").text($(".buybacks-link").html());
        $(".faq-link").removeClass("selected").addClass("");
        $(".buybacks-link").removeClass("").addClass("selected");
        $(".m-link-buybacks").fadeOut();
        $(".select-linkF").removeClass("").addClass("selected");
        $(".select-linkF").append("<div style='float: right;'><i class='fas fa-chevron-circle-down'></i></div>");
        
        window.history.pushState("","",pathname2);
        
    });
    
    $('.rentals-link').click(function () {
        
        var pathname2 = window.location.pathname;
        window.history.pushState("","",pathname);
        
        $("#faq").load("ajax/faq_rentals.htm", function(){
            
            $(window).trigger('resize'); 
            
        }); 
        
        //$('.bg-6').css('background-image', 'url('+ pathname +'images/photos/schools/calhoun.jpg)');
        
        
        
        $(".select-linkF").text($(".rentals-link").html());
        $(".faq-link").removeClass("selected").addClass("");
        $(".rentals-link").removeClass("").addClass("selected");
        $(".m-link-rentals").fadeOut();
        $(".select-linkF").removeClass("").addClass("selected");
        $(".select-linkF").append("<div style='float: right;'><i class='fas fa-chevron-circle-down'></i></div>");
        
        window.history.pushState("","",pathname2);
        
    });
    
    $('.returns-link').click(function () {
        
        var pathname2 = window.location.pathname;
        window.history.pushState("","",pathname);
        
        $("#faq").load("ajax/faq_returns.htm", function(){

            
            $(window).trigger('resize'); 
            
        }); 
        
        //$('.bg-6').css('background-image', 'url('+ pathname +'images/photos/schools/calhoun.jpg)');
        
        
        
        $(".select-linkF").text($(".returns-link").html());
        $(".faq-link").removeClass("selected").addClass("");
        $(".returns-link").removeClass("").addClass("selected");
        $(".m-link-returns").fadeOut();
        $(".select-linkF").removeClass("").addClass("selected");
        $(".select-linkF").append("<div style='float: right;'><i class='fas fa-chevron-circle-down'></i></div>");
        
        window.history.pushState("","",pathname2);
        
    });
    
    
                    
    
});

//***********************************************************************



//Non-Ajax Waypoints**********************************************************
$(function () {



    var meet0 = new Waypoint({
      element: document.getElementById('meet0'),
      handler: function() {
          
    //alert('Basic waypoint triggered');
          
    //$('#meet0').animateRotate(-180, 1000);  

        $('#meet0').animate({
                opacity: 1
            }, {
                duration: 600,
                queue: false
            });


          },
            offset: '65%'
    });

    
   var meet1 = new Waypoint({
        element: document.getElementById('meet1'),
        handler: function() {
          
        //alert('Basic waypoint triggered');
          
        $('#meet1').animateRotate(-5, 1000);  

        $('#meet1').animate({
                opacity: 1,
            }, {
                duration: 600,
                queue: false,
                complete: function() { 
                
                
                    $('#label1').animate({
                        opacity: 1
                    }, {
                        duration: 600,
                        queue: false
                    });
                
                
                
                }
            });

            this.destroy();

          },
            offset: '65%'
    });
    
    
   var meetT = new Waypoint({
        element: document.getElementById('meetT'),
        handler: function() {
          
        //alert('Basic waypoint triggered');
          
        $('#meetT').animateRotate(5, 1000);  

        $('#meetT').animate({
                opacity: 1,
            }, {
                duration: 600,
                queue: false,
                complete: function() { 
                
                
                    $('#labelT').animate({
                        opacity: 1
                    }, {
                        duration: 600,
                        queue: false
                    });
                
                
                
                }
            });

            this.destroy();

          },
            offset: '65%'
    });
    
    
});

//****************************************************************************