$( document ).ready(function() {
    var audioElement = document.createElement('audio');

    $(".person").on("click", function (e) {
        var currentTrack = e.target.parentNode.getAttribute('data-audio');
        if (audioElement.getAttribute('src') && audioElement.getAttribute('src').replace('audio/', '') === currentTrack) {
            if (audioElement.paused) {
                audioElement.play();
            } else {
                audioElement.pause();
            }
        } else {
            audioElement.setAttribute('src', 'audio/' + currentTrack);
            audioElement.load();
            audioElement.play();
        }
    });

    $(".wrapper").on("mousedown touchstart", function(e) {
        $(this).addClass('grabbing')
    });

    $(".wrapper").on("mouseup touchend", function(e) {
        $(this).removeClass('grabbing')
    });

    $(".animation").on("mouseout mouseover touchend", function(e) {
        $( this ).children(".start").toggle();
        $( this ).children(".stop").toggle();
    });

    $(".giulio-and-carlos").on("mouseout mouseover touchend", function(e) {
        $(".song").children(".start").toggle();
        $(".song").children(".stop").toggle();
    });

    /*Modal window!!! */
    //----- OPEN
    $('.help-open').on('click', function(e)  {
        var targeted_popup_class = 'help';
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
        e.preventDefault();
    });
    //----- CLOSE
    $('[data-popup-close], .popup').on('click', function(e)  {
        var targeted_popup_class = 'help';
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
        e.preventDefault();
    });
    /* Scaling!!! */
    var collageMaxSize = 5000;
    var collageMinSize = $(".col-img").width();
    var scaleCoef = 1.5;
    function increaseImageSize(e) {
        var wrapper = $(".wrapper");
        var newSize = wrapper.width()*scaleCoef;
        if (newSize <= collageMaxSize) {
            wrapper.width(newSize);
        } else {
            console.log("Max scale is reached.");
        }
    }

    function decreaseImageSize(e) {
        var wrapper = $(".wrapper");
        var newSize = wrapper.width()/1.5;
        if (newSize >= collageMinSize && newSize <= collageMaxSize) {
            wrapper.width(newSize);
        }
    }

    window.addEventListener('wheel', function (e) {
        e.preventDefault();
        if (e.deltaY < 0) {
            increaseImageSize(e);
        } else if (e.deltaY > 0) {
            decreaseImageSize(e);
        }
    });

});