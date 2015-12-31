/**
 * Main object containing all modules to loads
 *
 * @type {{plugins: Array, win: (*|jQuery|HTMLElement), document: (*|jQuery|HTMLElement), init: Nzicrec.init, add: Nzicrec.add}}
 */
var Nzicrec = {
    plugins: [],
    win: $(window),
    document: $(document),
    init: function () {
        var me = this;
        $.each(this.plugins, function () {
            if ($.isFunction(this.init)) {
                return this.init(me);
            }
        });

        return this;
    },
    add: function (plugin) {
        this.plugins.push(plugin);
        return this;
    },
    isMobileView: function() {
        return parseInt(this.win.width(), 10) < 768;
    }
};

/**
 * Menu module to expand and collapes
 */
Nzicrec.add({
    init: function () {
        var body = $('body');
        //Navigation Menu Slider
        $('#nav-expander').on('click', function (e) {
            e.preventDefault();
            body.toggleClass('nav-expanded');
        });
        $('#nav-close').on('click', function (e) {
            e.preventDefault();
            body.removeClass('nav-expanded');
        });
    }
});

/**
 * On load initiate all modules
 */
$(function () {
    Nzicrec.init();
});
