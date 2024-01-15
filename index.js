$(document).ready(function () {
    var currentIndex = 0;
    var totalSlides = $('.slide').length;
    // Add slide buttons
    for (var i = 0; i < totalSlides; i++) {
        $('#slide-buttons').append('<button class="slide-btn" data-index="' + i + '"></button>');
    }
    updateSlideButtons();
    $('.slide-btn').on('click', function () {
        currentIndex = $(this).data('index');
        updateSlider();
        updateSlideButtons();
    });
    $('#next-btn').on('click', function () {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
        updateSlideButtons();
    });
    $('#prev-btn').on('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1;
        }
        updateSlider();
        updateSlideButtons();
    });
    function updateSlider() {
        var translateValue = -currentIndex * 100 + '%';
        $('#slider').css('transform', 'translateX(' + translateValue + ')');
    }
    function updateSlideButtons() {
        $('.slide-btn').removeClass('active');
        $('.slide-btn[data-index="' + currentIndex + '"]').addClass('active');
    }
});