//= require_tree .

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('nav a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// http://reactiveraven.github.io/jqBootstrapValidation/
$(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );
