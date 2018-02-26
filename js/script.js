$( document ).ready(function() {
    var audioElement = document.createElement('audio');

    $(".person").on("click", function (e) {
        e.preventDefault();
        var currentTrack = e.target.getAttribute('href');
        if (audioElement.getAttribute('src') && audioElement.getAttribute('src').replace('audio/', '') == currentTrack) {
            console.log('here', currentTrack);
            if (audioElement.paused) {
                audioElement.play();
            } else {
                audioElement.pause();
            }

        } else {
            console.log('there', currentTrack);
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

    function increaseImageSize(e) {
        kof = 1.5;
        el = $(".wrapper");
        var newSize = el.width()*kof;
        if (newSize <= collageMaxSize) {
            var offset = getScrollByOffset(e);
            el.width(newSize);
            console.log("offset:", offset);
            window.scrollBy(offset.left*kof, offset.top*kof);
        } else {
            console.log("Max scale is reached.");
        }
    }

    function getScrollByOffset(e) {
        topCenter = ($(window).scrollTop() + $(window).height()) / 2;
        leftCenter = ($(window).scrollLeft() + $(window).width()) / 2;
        console.log("left ", leftCenter);
        console.log("top ", topCenter);
        return {
            "top": (e.pageY - topCenter),
            "left": (e.pageX - leftCenter)
        };
    }

    function decreaseImageSize(e) {
        kof = 1.5;
        el = $(".wrapper");
        var newSize = el.width()/1.5;
        if (newSize >= collageMinSize && newSize <= collageMaxSize) {
            var offset = getScrollByOffset(e);
            el.width(newSize);
            console.log("offset:", offset);
            window.scrollBy(-offset.left/kof, -offset.top/kof);
        }
    }

    $(".wrapper").mousemove(function(e){
        // console.log("mouse location(X,Y):", e.pageX, e.pageY);
        //console.log("screen pos: ", e.screenX, e.screenY);
        // centrByMouse2(e);
    });

    window.addEventListener('wheel', function (e) {
        e.preventDefault();
        if (e.deltaY < 0) {
            increaseImageSize(e);
        } else if (e.deltaY > 0) {
            decreaseImageSize(e);
        }
    });

});