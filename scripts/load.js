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
        
        $("#schools").load("./ajax/uah.htm");        
        $(".select-link").text($(".uah-link").html());
        $(".school-link").removeClass("selected").addClass("");
        $(".uah-link").removeClass("").addClass("selected");
        $(".m-link-uah").fadeOut();
        $(".select-link").removeClass("").addClass("selected");
        $(".select-link").append("<div style='float: right;'><i class='fas fa-chevron-circle-down'></i></div>");
        
        
    });

    $('.calhoun-link').click(function () {
        
        $("#schools").load('./ajax/calhoun.htm');
        $(".select-link").text($(".calhoun-link").html());
        $(".school-link").removeClass("selected").addClass("");
        $(".calhoun-link").removeClass("").addClass("selected");
        $(".m-link-calhoun").fadeOut();
        $(".select-link").removeClass("").addClass("selected");
        $(".select-link").append("<div style='float: right;'><i class='fas fa-chevron-circle-down'></i></div>");
        
        
        
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