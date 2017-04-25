(function ($) {

  'use strict';

	
/*----- ProgressBars -----*/
	 
    ! function(t) {
        t.fn.visible = function(o, e, i) {
            var f = t(this).eq(0),
                h = f.get(0),
                l = t(window),
                n = l.scrollTop(),
                r = n + l.height(),
                s = l.scrollLeft(),
                c = s + l.width(),
                d = f.offset().top,
                g = d + f.height(),
                u = f.offset().left,
                v = u + f.width(),
                w = o === !0 ? g : d,
                a = o === !0 ? d : g,
                b = o === !0 ? v : u,
                p = o === !0 ? u : v,
                j = e === !0 ? h.offsetWidth * h.offsetHeight : !0,
                i = i ? i : "both";
            return "both" === i ? !!j && r >= a && w >= n && c >= p && b >= s : "vertical" === i ? !!j && r >= a && w >= n : "horizontal" === i ? !!j && c >= p && b >= s : void 0
        }
    }(jQuery);

    //	ProBars //
    function animateProgressBar() {
        $(".pro-bar").each(function(a, t) {
            var t = $(this),
                e = t.attr("data-pro-bar-percent"),
                r = t.attr("data-pro-bar-delay");
            t.hasClass("animated-pro") || t.css({
                width: "0%"
            }), t.visible(!0) && setTimeout(function() {
                t.animate({
                    width: e + "%"
                }, 2e3, "easeInOutExpo").addClass("animated-pro")
            }, r)
        })
    }

    //	Animate ProgressBar //
    $(window).resize(function() {
        animateProgressBar();
    });
    $(window).scroll(function() {
        animateProgressBar();
        if ($(window).scrollTop() + $(window).height() == $(document).height()) animateProgressBar();
    });
	 
	


})(jQuery);
