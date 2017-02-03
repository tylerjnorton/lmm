$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

// PORTFOLIO IMAGES

 $('#workholder a').on('click', function(e){
    e.preventDefault();
    var id = (this.getAttribute('href'));
    var $active = $('img.active');
    $active.addClass('postactive');
    $(id).addClass('active');
    setTimeout(function () {
        $active.removeClass('postactive active')
    }, 500);
}); 

$(function() {
    $("#workholder a").on("click", function(e) {
        $(this).addClass("actproj").siblings().removeClass("actproj");
    });
})


// PAGE FLIP CORRECTLY

$(function() {

    // Set up vars
    var _window = $(window),
        panels = $('section'),
        panelsY = [];

    // Cache position of each panel
    $.each(panels, function(i, el) {
        panelsY.push(panels.eq(i).offset().top);
    });

    // Bind our function to window scroll
    _window.bind('scroll', function() {
        updateWindow();
    });

    // Update the window
    function updateWindow() {
        var y = _window.scrollTop();

        // Loop through our panel positions
        for (i = 0, l = panels.length; i < l; i++) {
            /* 
                Firstly, we break if we're checking our last panel,
                otherwise we compare if he y position is in between
                two panels
            */
            if ((i === l - 1) || (y >= panelsY[i] && y <= panelsY[i+1])) {
                break;
            }
        };

        // Update classes
        panels.not(':eq(' + i + ')').removeClass('panel-fixed');
        panels.eq(i).addClass('panel-fixed');
    };

});