$(document).ready(function(){
    $('[data-bs-toggle="popover"]').popover({
        placement: 'bottom',
        trigger: 'click focus', // Add 'focus' trigger
        html: true,
        content: '<div class="media"><img src="/assets/img/ahahah.gif"></div>'
    });
    
    // Close popover when clicking outside of the popover or button
    $('body').on('click', function (e) {
        $('[data-bs-toggle="popover"]').each(function () {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });
});

window.onscroll = function() {
    var header = document.querySelector('header');
    if (window.pageYOffset > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};