// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());// Place any jQuery/helper plugins in here.


jQuery(document).ready(function ($) {

    var $modaltpl = '';
    $.get("modaltpl.html", function( my_var ) {
        $modaltpl = my_var;
    }, 'html');  // or 'text', 'xml', 'more'


    var lz_path = window.location.protocol + '//' + window.location.host;
    var pathArray = window.location.pathname.split( '/' );
    for (i = 1; i < (pathArray.length - 1); i++) {
        lz_path += '/';
        lz_path += pathArray[i];
    }

    /*******************************************
     ***  use for parallax
     *******************************************/
    $(window).load(function() {
        $(window).stellar({
            horizontalScrolling: false,
            responsive: true
        });

    });

    //Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();



// When the DOM is ready, run this function
//Set the carousel options

    $('#quote-carousel').carousel({
        pause: true,
        interval: 4000
    });

    $('#lz-post-carousel').carousel({
        pause: true,
        interval: 4000
    });

    $('#lz-product-carousel').carousel({
        pause: true,
        interval: 4000
    });

    $('#quote-carouselnew').carousel({
        pause: true,
        interval: 4000
    });

    $('#cbx-stepreviews').carousel({
        pause: true,
        interval: 4000
    });


// Countdown
    // default
    if ( $('#countdowns-dashboard').length ) {
        $('#countdowns-dashboard').countDown({
            targetDate: {
                'day':    16,
                'month':  12,
                'year':   2015,
                'hour':   0,
                'min':    0,
                'sec':    0
            },
            omitWeeks: true
        });
    }


    // circular
    if ( $('.lz-circular-countdown-container').length ) {
        $('.lz-circular-countdown-container').final_countdown({
            now: Date.now()/1000,
            end: new Date(2015, 12, 16).getTime()/1000,
            selectors: {
                value_seconds: '.lz-circular-clock-seconds .lz-circular-val',
                canvas_seconds: 'lz-circular-canvas_seconds',
                value_minutes: '.lz-circular-clock-minutes .lz-circular-val',
                canvas_minutes: 'lz-circular-canvas_minutes',
                value_hours: '.lz-circular-clock-hours .lz-circular-val',
                canvas_hours: 'lz-circular-canvas_hours',
                value_days: '.lz-circular-clock-days .lz-circular-val',
                canvas_days: 'lz-circular-canvas_days'
            }
        });
    }


    // kk countdown

    //$('.lz-kkcountdown').attr('data-time', new Date(2015, 2, 26).getTime()/1000);

    if ( $('.lz-kkcountdown').length ) {
        $('.lz-kkcountdown').attr('data-time', new Date(2015, 12, 16).getTime()/1000);
        $('.lz-kkcountdown').kkcountdown({
            dayText		: ' day ',
            daysText 	: ' days ',
            hoursText	: ' h ',
            minutesText	: ' m ',
            secondsText	: ' s',
            displayZeroDays : true,
            rusNumbers  :   false
        });
    }


// For Wow Effect
    new WOW().init();


    
// for hover effect
    //$('.cb-grid > li').each(function() { $(this).hoverdir(); });

    /********************************************
     *** Simple Codeboxr Google Maps Plugin
     *********************************************/

//Defining CbMaps Maps Plugins
    $.fn.CbMaps = function (options) {
        // body...
        //console.log(this);
        var $lz_map_selector = this;
        var settings = $.extend(true, {}, $.fn.CbMaps.defaults, options);
//console.log(settings);
//console.log($.fn.CbMaps.defaults);

//Create Maps Using Google Map Event Listner
        google.maps.event.addDomListener(window, 'load', function() {

            $lz_map_selector.each(function(index) {
                //Create Jquery Object of Current Item
                var elem = $($lz_map_selector);
                //console.log(elem);
                var gmOptions = {};//GoogleMapOptions

                if ($.isArray(settings.mapOptions.center)) {
                    var center = (settings.mapOptions.center.hasOwnProperty(index)) ? settings.mapOptions.center[index] : false;
                } else {
                    var center = (settings.mapOptions.center === true) ? true : false;
                }

                if (center) {
                    var cbNewLat = ($.isArray(settings.mapOptions.latitude) && settings.mapOptions.latitude.hasOwnProperty(index)) ? settings.mapOptions.latitude[index] : settings.mapOptions.latitude;


                    var cbNewLong = ($.isArray(settings.mapOptions.longitude) && settings.mapOptions.longitude.hasOwnProperty(index)) ? settings.mapOptions.longitude[index] : settings.longitude;
                    gmOptions.center = new google.maps.LatLng(cbNewLat, cbNewLong);
                }

//console.log(cbNewLat);
//console.log(cbNewLong);

                if ($.isArray(settings.mapOptions.zoom)) {
                    gmOptions.zoom = (settings.mapOptions.zoom.hasOwnProperty(index)) ? settings.mapOptions.zoom[index] : 8;
                } else {
                    gmOptions.zoom = settings.mapOptions.zoom;;
                }

                if ($.isArray(settings.mapOptions.mapType)) {
                    gmOptions.mapTypeId = (settings.mapOptions.mapType.hasOwnProperty(index)) ? settings.mapOptions.mapType[index] : google.maps.MapTypeId.ROADMAP;
                } else {
                    gmOptions.mapTypeId = google.maps.MapTypeId.ROADMAP;
                }

                if ($.isArray(settings.mapOptions.icon)) {
                    gmOptions.markerIcon = (settings.mapOptions.icon.hasOwnProperty(index)) ? settings.mapOptions.icon[index] : null;
                } else {
                    gmOptions.markerIcon = (typeof settings.mapOptions.icon == 'undefined') ? null : settings.mapOptions.icon;
                }

                if ($.isArray(settings.mapOptions.scrollwheel)) {
                    gmOptions.scrollwheel = (settings.mapOptions.scrollwheel.hasOwnProperty(index)) ? settings.mapOptions.scrollwheel[index] : false;
                } else {
                    gmOptions.scrollwheel = (typeof settings.mapOptions.scrollwheel == 'undefined') ? false : settings.mapOptions.scrollwheel;
                }

                if ($.isArray(settings.mapOptions.infoWindow) && settings.mapOptions.infoWindow.length > 0) {
                    gmOptions.title = (settings.mapOptions.infoWindow.hasOwnProperty(index)) ? settings.mapOptions.infoWindow[index].title : null;
                    gmOptions.content = (settings.mapOptions.infoWindow.hasOwnProperty(index)) ? settings.mapOptions.infoWindow[index].content : null;
                } else {
                    gmOptions.title = settings.mapOptions.infoWindowTitle;
                    gmOptions.content = settings.mapOptions.infoWindowContent;
                }

                var contentString = '<div id="content"><h1 id="firstHeading" class="firstHeading">' + gmOptions.title + '</h1><div id="bodyContent"><p>' + gmOptions.content + '</p></div></div>';
                var CbMap = new google.maps.Map(elem[0], gmOptions);

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                var CbMarker = new google.maps.Marker({
                    position: gmOptions.center,
                    map: CbMap,
                    title:gmOptions.title,
                    icon: gmOptions.markerIcon
                });

                google.maps.event.addListener(CbMarker, 'click', function() {
                    infowindow.open(CbMap,CbMarker);
                });

//CbMarker.setMap(CbMap);
//google.maps.event.addListener(CbMarker, 'click', toggleBounce);
            });
        });

        function toggleBounce() {

            if (CbMarker.getAnimation() != null) {
                CbMarker.setAnimation(null);
            } else {
                CbMarker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
//return this;
    };

//Initialize The Defaults Setings For LaunchZ Map Plugin

    $.fn.CbMaps.defaults = {
        latitude: '44.5403', //44.5403, -78.5463
        longitude: '-78.5463',
        icon: null,
        infoWindowTitle: null,
        infoWindowContent: null,
        mapOptions: {
            latitude: ['23.810332'],
            longitude: ['89.841991'],
            center: true,
            scrollwheel: true,
            zoom: 8,
            mapType: 'roadmap',//google.maps.MapTypeId.ROADMAP
            icon: null,
            infoWindow: []
        }
    };


// Show google Maps
    $('.map_canvas').CbMaps({
        mapOptions: {
            latitude: ['23.810637'],
            longitude: ['90.400615'],
            center: true,
            scrollwheel: false,
            zoom: 8,
            mapType: 'satellite', //google.maps.MapTypeId.ROADMAP
            icon: lz_path + '/img/map-icon.png',
            infoWindow: [{
                title: 'Codeboxr',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis delectus dolorum enim ex harum, natus quaerat voluptas? Est et labore molestiae molestias odio possimus quae quaerat quam reiciendis, sunt.'
            }]
        }
    });


    /********************************************
        *** Start Contact Form Validation And Ajax Submission
        *********************************************/
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });


    /********************************************
     *** Start Contact Form Validation And Ajax Submission
     *********************************************/

    var $contactForm = $( 'form.cbx-contactform' );

    $contactForm.validate({
        submitHandler: function(form) {
            console.log(form);
            //form.submit();
            $form = $(form);
            $.ajax({
                url: lz_path + '/php/contact.php',
                type: 'post',
                data: $form.serialize()+'&action=cbx_contact_us',
                beforeSubmit: function (argument) {
                    // body...
                },
                success: function (ajaxResponse) {
                    try {
                        var ajaxResponse = $.parseJSON(ajaxResponse);
                       // console.log(ajaxResponse);
                        if (ajaxResponse.error) {
                            //for field error
                            $.each(ajaxResponse.error_field, function(i) {
                                $('label#'+ajaxResponse.error_field[i]+'-error').text(ajaxResponse.message[ajaxResponse.error_field[i]]);
                            });
                        } else if(ajaxResponse.successmessage) {

                            alert(ajaxResponse.successmessage);
                            $form[0].reset();
                        }
                    } catch (e) {
                        //consoe.log(e.message );
                        //alert(ajaxResponse.message);
                    }

                    $form.reset;
                },
                error: function (argument) {
                    // body...
                    //console.log('error');
                    alert('Sorry, Mail could not be sent. Please contact server admin.');
                    $form.reset;
                }
            });

            return false;

        },

        rules: {
            'cbxname': {
                required: true
            },
            'cbxemail': {
                required: true,
                email: true
            },
            'cbxphone': {
                digits: true
            },

            'cbxmessage': {
                required: true
            }
        }
    });


    /********************************************
     *** End Contact Form Validation And Ajax Submission
     *********************************************/

    /********************************************
     *** Show social link
     */

    /*******************************************
     ** Multi  Step Slider
     *******************************************/

    $('.carousel[data-type="multi"] .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        // console.log($(this).parent('div.carousel-inner-multi'));

        var percol = $(this).parent('div.carousel-inner-multi').data('percol');
        //console.log(percol);
        percol = percol -2;

        for (var i=0;i < percol; i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });

    /*******************************************
     ** Step Slider End
     *******************************************/


 // -------------------------------------------------------------
// Simple Codeboxr PORTFOLIO FILTER
// -------------------------------------------------------------
        // For Portfolio grid
    Grid.init();

    //custom filter from codeboxr
    $('#filter li a').on('click',function(e){
        e.preventDefault();
        var $grp        = $(this).data('group');
        var $target     = $(this).data('sortid');

        //$(''+$target).addClass('cbmasonry');

        $(''+$target).find('.cbxgrid-item').addClass('cbxgrid-item-none');

        if($grp == 'all'){
            $(''+$target).find('.cbxgrid-item').removeClass('cbxgrid-item-none');
            //$(''+$target).find('.cbxgrid-item').addClass('cbxgrid-item-show');
        }
        else{
            //
            $(''+$target).find('.cbxgrid-item').each(function(i, obj) {
                var $obgrp= $(obj).data('groups');
                if($.inArray($grp,$obgrp) != -1){
                    // $(obj).hide();
                }
                else{
                    //$(obj).removeClass('cbmasonry');
                    $(obj).removeClass('cbxgrid-item-none');

                    // $(obj).addClass('cbmasonry');
                }
            });
        }

    });

    /********************************************
     *** Simple Codeboxr PORTFOLIO FILTER END
     *********************************************/
        // filter
        // -------------------------------------------------------------
        // Shuffle
        // -------------------------------------------------------------
    imagesLoaded( document.querySelector('#grid'), function( instance ) {

    (function () {

        /* initialize shuffle plugin */
        var $grid = $('#grid');

        $grid.shuffle({
            itemSelector: '.portfolio-item' // the selector for the items in the grid
        });

        /* reshuffle when user clicks a filter item */
        $('#filter a').click(function (e) {
            e.preventDefault();

            // set active class
            $('#filter a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid.shuffle('shuffle', groupName );
        });

    }());
    });




    //DATA FOR MODAL
    /*  <a  data-title="Portfolio Title"
     data-content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, omnis illo iste ratione. Numquam eveniet quo, ullam itaque expedita impedit. Eveniet, asperiores."
     data-clink="#"
     data-cname="Codeboxr"
     data-service="Web Development"
     data-image="img/portfolio/portfolio-3.jpg"
     href="#">
     <i class="fa fa-link fa-spin"></i>
     </a>*/

    $('.figure-link a').on('click',function(e){
        e.preventDefault();
        var $title = $(this).data('title');
        var $content = $(this).data('content');
        var $image = $(this).data('image');
        var $clink = $(this).data('clink');
        var $cname = $(this).data('cname');
        var $service = $(this).data('service');
        //console.log($content);

        console.log($modaltpl);

        $modaltpl_t = $modaltpl;
        $modaltpl_t = $modaltpl_t.replace(/##TITLE##/gi, $title);
        $modaltpl_t = $modaltpl_t.replace(/##CONTENT##/gi, $content);
        $modaltpl_t = $modaltpl_t.replace(/##IMG##/gi, $image);
        $modaltpl_t = $modaltpl_t.replace(/##CLLINK##/gi, $clink);
        $modaltpl_t = $modaltpl_t.replace(/##CLNAME##/gi, $cname);
        $modaltpl_t = $modaltpl_t.replace(/##SERVICE##/gi, $service);



        //console.log($modaltpl);


        $('#portfolioModal1').find('.modal-body').html($modaltpl_t);
        $('#portfolioModal1').modal();

        /*var str = 'sabuj kundu';
         console.log(str);
         str.replace('sabuj', 'vaskar');
         console.log(str);

         var str = "Mr Blue has a blue house and a blue car";
         var res = str.replace(/blue/gi, "red");
         console.log(res);*/

    });



});
