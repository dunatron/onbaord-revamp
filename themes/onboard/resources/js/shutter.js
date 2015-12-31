/**
 *  Information module in homepage "single page"
 *
 *  - On scroll resize the container to show the content
 */
Nzicrec.add({
    isClosed: false,
    resetSection: function () {
        if (this.isClosed) return;
        $('.nc-shutterheading .col').removeAttr('style');
        $('.nc-shutterheading .nc-content-inner').removeAttr('style');
        this.isClosed = true;
    },
    init: function () {
        var me = this;
        if (Nzicrec.isMobileView()) {
            return me.resetSection();
        }
        this.isClosed = false;
        var shutter1 = $('.nc-shutterheading').find('.shutter1');
        var shutter1Size = [
            shutter1.outerWidth(),
            shutter1.outerHeight()
        ];
        var shutter2 = $('.nc-shutterheading').find('.shutter2');
        var shutter2Size = [
            shutter2.outerWidth(),
            shutter2.outerHeight()
        ];

        // Get viewport height, gridTop and gridBottom
        var winHeight = Nzicrec.win.height(),
            gridTop = winHeight * .3,
            gridBottom = winHeight * .6;
console.log(winHeight)
        var c = false;
        //var containerHeight = shutter1Size[1]+(shutter1Size[1]);
        ////containerHeight = 680;
        //$('.nc-shutterheading').find('.col').height(containerHeight);
        //$('.nc-shutterheading').find('.col').css({
        //    'min-height': containerHeight
        //});
        var containerHeight = shutter1Size[1]+(shutter1Size[1]);
        //containerHeight = 680;
        $('.nc-shutterheading').find('.col').height(containerHeight);
        $('.nc-shutterheading').find('.col').css({
            'min-height': containerHeight
        });
        $('.nc-shutterheading').onScreen({
            tolerance: 0,
            toggleClass: 'onScreen',
            direction: 'vertical',
            doIn: function (object, isLoop) {
                if (Nzicrec.isMobileView()) {
                    return me.resetSection();
                }


                console.log(object);
                if (!isLoop) {
                    $('.nc-shutterheading').find('.shutter-wrap').removeClass('shutter-wrap').addClass('shutter-wrap2');

                    shutter2.css({
                        width: 56,
                        height: 56,
                        'z-index': -1
                        //'position': 'fixed'
                    });
                    shutter1.css({
                        //'position': 'fixed'
                    });
                    var containerHeight = shutter1Size[1]+(shutter1Size[1]);
                    $('.nc-shutterheading').find('.col').height(containerHeight);
                    $('.nc-shutterheading').find('.col').css({
                        'min-height': containerHeight
                    });
                }

                //
                var thisTop = $(this).offset().top - object.scrollTop;
                //console.log($(this).offset().top + ' ' + object.scrollTop + ' = ' + thisTop)
                // 1245 894 = 351
                // object.element.top - object.element.height
                //

                var c = object.container.height / 2;
                console.log(object.inCenter)
                // Check if this element is in the interested viewport
                //if (thisTop >= gridTop && (thisTop + object.element.height) <= gridBottom) {
                if (!object.inCenter) {
                    return;
                }


                var innerTop = object.element.scrollTopCenter;
                var g = $(this).find('.nc-content-inner'), h, w;
                var s = 56;
                var newHeight;
                var newWidth;
                if (innerTop < 85) {
                     newHeight = shutter1Size[1] - (5*innerTop);
                    newWidth = shutter1Size[0] / shutter1Size[1] * newHeight;
                } else {
                     newHeight = s + (5*(innerTop-85));
                    newWidth = shutter2Size[0] / shutter2Size[1] * newHeight;
                    console.log('new height ' + newHeight)
                }
                /*
                Width Formula:
                    original height / original width * new width = new height
                  = shutter1Size[1] / shutter1Size[0] *
                Height Formula:
                    orignal width / orignal height * new height = new width
                  = shutter1Size[0] / shutter1Size[1] *
                */

                if (newWidth < s) {
                    newWidth = s;
                }
                if (newHeight < s) {
                    newHeight = s;
                }
                if (innerTop >= 85) {
                    if (newWidth > shutter2Size[0]) {
                        newWidth = shutter2Size[0];
                    }
                    if (newHeight > shutter2Size[1]) {
                        newHeight = shutter2Size[1];
                    }
                } else {
                    if (newWidth > shutter1Size[0]) {
                        newWidth = shutter1Size[0];
                    }
                    if (newHeight > shutter1Size[1]) {
                        newHeight = shutter1Size[1];
                    }
                }

                var shutter = '.shutter1';
                var shutterHide = '.shutter2';
                if (innerTop >= 85) {
                     shutter = '.shutter2';
                    shutterHide = '.shutter1';

                    if (newHeight > 400) {
                        $(this).find(shutter).css({
                            position: 'absolute'
                        })
                    }
                }

                console.log(shutter+ ': ' + newHeight + 'x' + newWidth);
                $(this).find(shutter).css({
                    'z-index': 9999,
                    height: newHeight+'px',
                    width: newWidth+'px',
                    'visibility': 'visible'
                });

                if (newHeight == s && newWidth == s) {
                    $(this).find(shutter+' .bottom-right').css({
                        'background-color': '#000'
                    });
                } else {
                    $(this).find(shutter+' .bottom-right').removeAttr('style');
                }

                $(this).find(shutterHide).css({
                    'z-index': -1,
                    'visibility': 'hidden'
                });

                return;

                var height = object.element.height / 3;
                var hi = (object.element.scrollTop/height)*height;
                var width = object.element.width;
                var wi = (object.element.scrollTop/height)*width;
                if (object.isScrollDown) {
                    if (wi < s) {
                        wi = s;
                    }
                    if (hi < s) {
                        hi = s;
                    }
                } else {
                    if (wi > shutter1Size[0]) {
                        wi = shutter1Size[0];
                    }
                    if (hi > shutter1Size[1]) {
                        hi = shutter1Size[1];
                    }
                }
                $(this).find('.nc-content-inner').css({
                    height: hi+'px',
                    width: wi+'px'
                });
                console.log('')
                return;
                if (parseInt(g.width(), 10) == 56 && parseInt(g.height(), 10) == 56) {
                    c = true;
                }
                if (c || parseInt(g.width(), 10) == 56 || parseInt(g.height(), 10) == 56 || innerTop > (1800 / 2)) {
                    c = true;
                    var t = ((shutter1Size[0] / shutter1Size[1]) * innerTop);

                    h = shutter1Size[1] + innerTop;
                    if (h > shutter1Size[1]) {
                        h = shutter1Size[1];
                    }
                    w = shutter1Size[0] + t;
                    if (w > shutter1Size[0]) {
                        w = shutter1Size[0];
                    }

                    $(this).find('.nc-content-inner').css({
                        height: h,
                        width: w
                    });
                    return;
                }
                c = false;
                var t = ((shutter1Size[0] / shutter1Size[1]) * innerTop);
                console.log(t)
                h = shutter1Size[1] - innerTop;
                if (h < 56) {
                    h = 56;
                }
                w = shutter1Size[0] - t;
                if (w < 56) {
                    w = 56;
                }

                $(this).find('.nc-content-inner').css({
                    height: h,
                    width: w
                });

                console.log(object);
                return;
                var g = $(this).find('.nc-content-inner'), h, w;
                if (parseInt(g.width(), 10) == 56 && parseInt(g.height(), 10) == 56) {
                    c = true;
                }
                if (c || parseInt(g.width(), 10) == 56 || parseInt(g.height(), 10) == 56 || innerTop > (1800 / 2)) {
                    c = true;
                    var t = ((shutter1Size[0] / shutter1Size[1]) * innerTop);

                    h = shutter1Size[1] + innerTop;
                    if (h > shutter1Size[1]) {
                        h = shutter1Size[1];
                    }
                    w = shutter1Size[0] + t;
                    if (w > shutter1Size[0]) {
                        w = shutter1Size[0];
                    }

                    $(this).find('.nc-content-inner').css({
                        height: h,
                        width: w
                    });
                    return;
                }
                c = false;
                var t = ((shutter1Size[0] / shutter1Size[1]) * innerTop);
                console.log(t)
                h = shutter1Size[1] - innerTop;
                if (h < 56) {
                    h = 56;
                }
                w = shutter1Size[0] - t;
                if (w < 56) {
                    w = 56;
                }
                //1800px
                $(this).find('.nc-content-inner').css({
                    height: h,
                    width: w
                });

                console.log('shutterheading:' + innerTop)
                // Do something to the matched elements as they come in
            },
            doOut: function () {
                //$('.nc-shutterheading').find('.shutter-wrap2').removeClass('shutter-wrap2').addClass('shutter-wrap');

                //shutter2.css({
                //    width: 56,
                //    height: 56,
                //    'z-index': -1,
                //    'position': 'fixed'
                //});
                //shutter1.css({
                //    'position': 'fixed'
                //});
                //shutter2.removeAttr('style');
                //shutter1.removeAttr('style');
                //$('.nc-shutterheading').find('.col').removeAttr('style');

                //var containerHeight = shutter1Size[1]+(shutter1Size[1]);
                ////containerHeight = 680;
                //$('.nc-shutterheading').find('.col').height(containerHeight);
                //$('.nc-shutterheading').find('.col').css({
                //    'min-height': containerHeight
                //});
                console.log('Out')
                // Do something to the matched elements as they get off scren
                //$(this).find('.nc-content-inner').css('position', 'relative');
            }
        });

    }
});

//$('.nc-shuttercontent').onScreen({
//    //container: Nzicrec.win,
//    direction: 'vertical',
//    doIn: function(innerTop, elHeight, elWidth) {
//        var w = (innerTop * 100) * elWidth;
//        var h = (innerTop * 100) * elHeight;
//
//        $(this).find('.nc-content-inner').animate({
//            height: elHeight - h,
//            width: elWidth - w
//        }, 500);
//        console.log('content:'+innerTop)
//        // Do something to the matched elements as they come in
//    },
//    doOut: function() {
//        // Do something to the matched elements as they get off scren
//    },
//    tolerance: 0,
//    //throttle: 50,
//    toggleClass: 'onScreen',
//    lazyAttr: null,
//    //lazyPlaceholder: 'someImage.jpg',
//    debug: true
//});

/**
 * Shutter section
 */
//FullPageScroll.add({
//    shutter1Container: null,
//    shutter1: null,
//    shutter1Size: [],
//    shutter2Container: null,
//    shutter2: null,
//    shutter2Size: [],
//    closeSize: 56,
//    complete: false,
//    init: function (obj) {
//        return;
//        this.shutter1Container = $('.nc-shutterheading');
//        this.shutter1 = this.shutter1Container.find('.nc-content-inner');
//        this.shutter1Size = [
//            this.shutter1.outerWidth(),
//            this.shutter1.outerHeight()
//        ];
//        this.shutter2Container = $('.nc-shuttercontent');
//        this.shutter2 = this.shutter2Container.find('.nc-content-inner');
//        this.shutter2Size = [
//            this.shutter2.outerWidth(),
//            this.shutter2.outerHeight()
//        ];
//
//        this.shutter2.width(this.closeSize).height(this.closeSize);
//
//        $('.nc-shutterheading').onScreen({
//            container: Nzicrec.win,
//            direction: 'vertical',
//            doIn: function() {
//                // Do something to the matched elements as they come in
//            },
//            doOut: function() {
//                // Do something to the matched elements as they get off scren
//            },
//            tolerance: 0,
//            //throttle: 50,
//            toggleClass: 'onScreen',
//            lazyAttr: null,
//            //lazyPlaceholder: 'someImage.jpg',
//            debug: true
//        });
//
//        return;
//
//        //easeInOutCirc
//        this.startPoint = this.shutter1Container.offset().top + (this.shutter1Container.outerHeight(true) / 2);
//        this.startPoint = this.shutter1Container.offset().top + 200;
//        this.height = this.shutter1.outerHeight(true);
//        this.width = this.shutter1.outerWidth(true);
//    },
//    target: function () {
//        return false ;
//        return FullPageScroll.isInViewport(this.shutter1Container, this)
//            || FullPageScroll.isInViewport(this.shutter2Container, this);
//    },
//    offset: function () {
//        return 0;
//    },
//    offsetBottom: function() {
//        return 0;
//    },
//    end: function () {
//        return !FullPageScroll.isInViewport(this.shutter1Container, this)
//            && !FullPageScroll.isInViewport(this.shutter2Container, this);
//    },
//    scroll: function (e, obj, scrollAmount, counter) {
//        console.log(scrollAmount, + ' : ' + counter);
//        return;
//        var //opacity = scrollAmount / 200,
//            centerLetters = Math.floor(this.letters.length / 2),
//            opacityIncrement = 50;
//
//        this.letters.each(function (i, el) {
//            var letter = $(el), increment = 0, opacityValue;
//            if (i > 0) {
//                increment = 5;
//            } else if (i >= centerLetters) {
//                increment = 20;
//            }
//            opacityIncrement += increment;
//            opacityValue = scrollAmount / opacityIncrement;
//
//            letter.css('opacity', opacityValue);
//
//            if (opacityValue >= 1) {
//                letter.css('z-index', 999);
//            }
//            if (opacityValue < 1) {
//                letter.css('z-index', 0);
//            }
//        });
//    },
//    disableState: function() {
//        this.shutter1.removeAttr('style');
//        this.shutter2.removeAttr('style');
//    }
//});

/**
 * Module for shutter section
 */
//NZICWindow.add({
//    shutter1Container: null,
//    shutter1: null,
//    startPoint: 0,
//    height: 0,
//    width: 0,
//    init: function (obj) {
//        //nc-shutterheading
//        //top-left
//        //bottom-right
//        // nc-content-inner
//
//        this.shutter1Container = $('.nc-shutterheading');
//        this.shutter1 = this.shutter1Container.find('.nc-content-inner');
//        this.startPoint = this.shutter1Container.offset().top + (this.shutter1Container.outerHeight(true) / 2);
//        this.startPoint = this.shutter1Container.offset().top + 200;
//        this.height = this.shutter1.outerHeight(true);
//        this.width = this.shutter1.outerWidth(true);
//    },
//    scrollStart: function (e, obj, scrollAmount) {
//        //console.log(scrollAmount, this.startPoint);
//        if (scrollAmount <= this.startPoint) {
//            return false;
//        }
//        return true;
//    },
//    scroll: function (e, obj, scrollAmount, counter, moduleCounter) {
//        //var //opacity = scrollAmount / 200,
//        //    centerLetters = Math.floor(this.letters.length / 2),
//        //    opacityIncrement = 50;
//        //
//        //http://www.sitepoint.com/scroll-based-animations-jquery-css3/
//        this.shutter1.css({
//            width: this.width - moduleCounter * 10,
//            height: this.height - moduleCounter * 10
//        });
//        console.log(moduleCounter)
//    }
//});
