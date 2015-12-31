/**
 *  Information module in homepage "single page"
 *
 *  - On scroll show angle line from bottom to up
 */
Nzicrec.add({
    isClosed: false,
    resetSection: function () {
        if (this.isClosed) return;
        $('.line').removeClass('line');
        this.isClosed = true;
    },
    init: function () {
        var me = this;
        if (Nzicrec.isMobileView()) {
            return me.resetSection();
        }
        this.isClosed = false;
        $('.nc-information').onScreen({
            tolerance: 0,
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
            },
            doOut: function () {
                $(this).removeClass('line');
            }
        });
    }
});
