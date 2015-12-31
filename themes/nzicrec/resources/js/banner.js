/**
 *  Banner module in homepage "single page"
 *
 *  - Full screen banner with space at the bottom
 *  - On scroll show heading
 *  - On scroll show angle line from bottom to up
 */
Nzicrec.add({
    isClosed: false,
    resetSection: function () {
        if (this.isClosed) return;
        this.isClosed = true;
    },
    init: function () {
        var me = this;
        if (Nzicrec.isMobileView()) {
            return me.resetSection();
        }
        this.isClosed = false;
        // Event on window resize
        var bannerContainer = $('#hero'),
            setBannerHeight;

        setBannerHeight = function () {
            var bottomSpace = 30, height = Nzicrec.win.height(), minHeight = 768, newMinHeight;
            if (height < minHeight) {
                height = minHeight;
            }
            var heightSet = height - bottomSpace;
            bannerContainer.css({
                height: height - bottomSpace
            });

            var winHeight = parseInt(Nzicrec.win.height(), 10);
            if (winHeight < heightSet && winHeight > 540) {
                newMinHeight = winHeight - bottomSpace;
                bannerContainer.css({
                    height: newMinHeight,
                    'min-height': newMinHeight
                });
            }
        };

        Nzicrec.win.resize(setBannerHeight);
        setBannerHeight();

        var letters = $('.animate-letters');
        $('.nc-banner').onScreen({
            tolerance: 100,
            toggleClass: 'onScreen',
            direction: 'vertical',
            doIn: function (object, isLoop) {
                if (Nzicrec.isMobileView()) {
                    return me.resetSection();
                }
                if (object.element.scrollTop == 0) {
                    $(this).removeClass('line');
                }
                if (object.element.scrollTop >= 50) {
                    $(this).addClass('line');
                }

                var scrollAmount = object.element.scrollTop;
                var patch1Letters = Math.floor(letters.length / 5),
                    patch2Letters = Math.floor(letters.length / 4),
                    patch3Letters = Math.floor(letters.length / 6),
                    patch4Letters = Math.floor(letters.length / 7),
                    opacityIncrement = 50;

                letters.each(function (i, el) {
                    var letter = $(el), increment = 0, opacityValue;
                    if (i > 0 && i < patch1Letters) {
                        increment = 5;
                    } else if (i >= patch1Letters && i < patch2Letters) {
                        increment = 10;
                    } else if (i >= patch2Letters && i < patch3Letters) {
                        increment = 15;
                    } else if (i >= patch3Letters && i < patch4Letters) {
                        increment = 20;
                    } else if (i >= patch4Letters) {
                        increment = 25;
                    }
                    opacityIncrement += increment;
                    opacityValue = scrollAmount / opacityIncrement;

                    letter.css('opacity', opacityValue);

                    if (opacityValue >= 1) {
                        letter.css('z-index', 999);
                    }
                    if (opacityValue < 1) {
                        letter.css('z-index', 0);
                    }
                });
            },
            doOut: function () {
                $(this).removeClass('line');
            }
        });

    }
});
