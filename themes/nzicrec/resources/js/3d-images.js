/**
 *  3D images module
 *
 */

Nzicrec.add({
    init: function () {
        ////set an height for the .cd-background-wrapper
        //$('.cd-background-wrapper').css({
        //    'height': wrapperHeight,
        //    width: Nzicrec.win.width()
        //}).parents('.col').css({
        //    'height': wrapperHeight
        //});
        ////set dimentions and position of the .cd-background-wrapper
        //$('.cd-floating-background').addClass('is-absolute').css({
        //    'left': newLeft,
        //    'top': newTop,
        //    'width': newImageWidth
        //});
        //
        //jobSectors.css({
        //    'height': wrapperHeight,
        //    left: newImageWidth,
        //    'z-index': 100
        //});
        //$('.cd-background-wrapper .btn').on('click', function (e) {
        //    e.preventDefault();
        //    jobSectors.show();
        //    jobSectors.css({
        //        left: 0
        //    })
        //});
        //jobSectors.find('.close-job-sectors').on('click', function(e) {
        //    e.preventDefault();
        //    jobSectors.css({
        //        left: newImageWidth
        //    })
        //});


        $(".cd-floating-background").logosDistort({
            container: 'self',
            perspectiveMulti: 2.2,
            mouseMode: 'container',
            outerBuffer: 1.1,
            effectWeight: 2,
            elementDepth: 160
        });
        return;

        var background = $('.layer.background').css({
            opacity: 1,
            transform: 'translate3d(0px, 0px, -800px) scale(1.8, 1.8)'
        });
        var middle = $('.layer.middle').css({
            opacity: 1,
            transform: 'translate3d(0px, 0px, -400px) scale(1.3, 1.3)'
        });
        var foreground = $('.layer.foreground').css({
            opacity: 1,
            transform: 'translate3d(0px, 0px, 5px)'
        });

        var wrap = $('.images-3d-wrapper');

       var h = wrap.outerHeight(),
            w = wrap.outerWidth();
        var sh = 25 / h,
            sw = 25 / w;
        console.log(1)
        var settings = {
            scale: 1
        };
        wrap.mousemove(function(e){
            // This condition prevents transition from causing the movement of the background to lag
            //if (!el.hasClass("ibg-entering") && !el.hasClass("exiting")) {
                var pageX = e.pageX || e.clientX,
                    pageY = e.pageY || e.clientY,
                    pageX = (pageX - wrap.offset().left) - (w / 2),
                    pageY = (pageY - wrap.offset().top) - (h / 2),
                    newX = ((sw * pageX)) * - 1,
                    newY = ((sh * pageY)) * - 1;

                var x, y;
                x = ( e.pageX - $(this).offset().left - ($(this).outerWidth(true) / 2) ) * -1 / 9;
                y = ( e.pageY - $(this).offset().top - ($(this).outerHeight(true) / 2) ) * -1 / 9;

                y /= 15;
                x /= 15;

                var tM = $M([
                    [1, 0, 0, -x*1E-4],
                    [0, 1, 0, -y*1E-4],
                    [0, 0, 1, 1],
                    [0, 0, 0, 1]
                ]);

                var s = "matrix3d(";
                s += tM.e(1,1).toFixed(10) + "," + tM.e(1,2).toFixed(10) + "," + tM.e(1,3).toFixed(10) + "," + tM.e(1,4).toFixed(10) + ",";
                s += tM.e(2,1).toFixed(10) + "," + tM.e(2,2).toFixed(10) + "," + tM.e(2,3).toFixed(10) + "," + tM.e(2,4).toFixed(10) + ",";
                s += tM.e(3,1).toFixed(10) + "," + tM.e(3,2).toFixed(10) + "," + tM.e(3,3).toFixed(10) + "," + tM.e(3,4).toFixed(10) + ",";
                s += tM.e(4,1).toFixed(10) + "," + tM.e(4,2).toFixed(10) + "," + tM.e(4,3).toFixed(10) + "," + tM.e(4,4).toFixed(10);
                s += ")";

                $(this).css({
                    transform: s
                });

            return;
            var angleX = e.pageY * velocity * Math.PI / 180;
            var angleY = e.pageX * velocity * Math.PI / 180;
            document.getElementById('transformer').style.webkitTransform = 'matrix3d(' + Math.cos(-angleY) + ',0,' + Math.sin(-angleY) + ',0,' + (Math.sin(angleX)*Math.sin(-angleY)) + ',' + Math.cos(angleX) + ',' + (-Math.sin(angleX)*Math.cos(-angleY)) + ',0,' + (-Math.cos(angleX)*Math.sin(-angleY)) + ',' + Math.sin(angleX) + ',' + (Math.cos(angleX)*Math.cos(-angleY)) + ',0,0,0,0,1)';


                // Use matrix to move the background from its origin
                // Also, disable transition to prevent lag
            foreground.css({
                    "-webkit-transform": "matrix(" + settings.scale + ",0,0," + settings.scale + "," + newX + "," + newY + ")",
                    "-moz-transform": "matrix(" + settings.scale + ",0,0," + settings.scale + "," + newX + "," + newY + ")",
                    "-o-transform": "matrix(" + settings.scale + ",0,0," + settings.scale + "," + newX + "," + newY + ")",
                    "transform": "matrix(" + settings.scale + ",0,0," + settings.scale + "," + newX + "," + newY + ")",
                    "-webkit-transition": "none",
                    "-moz-transition": "none",
                    "-o-transition": "none",
                    "transition": "none"
                });
            //}
        });
        //max-height: 2362px; transform: matrix3d(0.999683, 0, 0.0251672, 0, 0.000830246, 0.999456, -0.0329788, 0, -0.0251535, 0.0329892, 0.999139, 0, 0, 0, 0, 1);
    }
});
