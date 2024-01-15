$(document).ready(function(){
    $('[data-bs-toggle="popover"]').popover({
        placement: 'bottom',
        trigger: 'click focus', // Add 'focus' trigger
        html: true,
        content: '<div class="media"><img src="ahahah.gif"></div>'
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

window.onload = function() {
    var footerContainer = document.querySelector('.footer-container');
    footerContainer.style.backgroundColor = 'var(--main-text-color)'; // Set the background color of the container to black
    for (var i = 1; i <= 25; i++) {
        var div = document.createElement('div');
        div.style.height = (25 - i) + 'px'; // Adjust the height here
        div.style.backgroundColor = 'var(--main-background-color)';
        div.style.marginTop = i + 'px';
        div.style.position = 'relative';
        div.style.boxSizing = 'border-box';
        div.style.borderTop = '1px solid var(--main-text-color)'; // Set the top border
        div.style.borderBottom = '1px solid var(--main-text-color)'; // Set the bottom border
        div.style.zIndex = '1';
        div.className = 'div' + i;
        footerContainer.appendChild(div);
    }
}