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



//Waypoints**********************************************************
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