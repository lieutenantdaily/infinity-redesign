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